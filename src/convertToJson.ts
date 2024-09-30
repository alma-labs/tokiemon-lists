import { writeFileSync, readdirSync, mkdirSync, existsSync } from "fs";
import { resolve } from "path";
import { communityTokens } from "./communityTokens";
import { CommunityToken } from "./types";

const outputDir = resolve(__dirname, "../tokens");

function ensureDirectoryExists(dir: string) {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
}

function writeJsonFile(filename: string, jsonData: any) {
  if (!jsonData) {
    console.error(`❌ No data found for ${filename}`);
    return;
  }

  const outputPath = resolve(outputDir, `${filename}.json`);
  ensureDirectoryExists(
    resolve(outputDir, filename.substring(0, filename.lastIndexOf("/")))
  );
  writeFileSync(outputPath, JSON.stringify(jsonData, null, 2), "utf-8");
  console.log(`✅ JSON file created: ${outputPath}`);
}

function checkForDuplicateCommunityIds(tokens: CommunityToken[]) {
  const communityIds = new Set<string>();
  const duplicates: string[] = [];

  tokens.forEach((token) => {
    if (communityIds.has(token.communityId)) {
      duplicates.push(token.communityId);
    } else {
      communityIds.add(token.communityId);
    }
  });

  if (duplicates.length > 0) {
    throw new Error(`Duplicate communityIds found: ${duplicates.join(", ")}`);
  }
}

ensureDirectoryExists(outputDir);

// Process community tokens (convert to JSON)
try {
  checkForDuplicateCommunityIds(communityTokens);

  // Write all community tokens to allCommunity.json
  writeJsonFile("allCommunity", communityTokens);

  // Filter out inactive tokens and write to community.json
  const activeTokens = communityTokens.filter((token) => !token.inactive);
  writeJsonFile("community", activeTokens);
} catch (error: any) {
  console.error(`❌ Error processing community tokens: ${error.message}`);
  process.exit(1);
}

// Process payment tokens (convert to JSON)
function processPaymentTokens(chainId: string, tokens: any) {
  writeJsonFile(`payment/${chainId}`, tokens);
}

const paymentTokensDir = resolve(__dirname, "./paymentTokens");
const chainDirs = readdirSync(paymentTokensDir).filter(
  (file) => !isNaN(Number(file)) // Filter to only include directories named with chain IDs
);

chainDirs.forEach((chainId) => {
  try {
    // Dynamically import each chain's tokens and check for both default and named export
    const tokens = require(resolve(paymentTokensDir, chainId));

    if (tokens && (tokens.default || tokens)) {
      // Check for `default` or fall back to the tokens object itself
      processPaymentTokens(chainId, tokens.default || tokens);
    } else {
      console.error(
        `❌ No export found for payment tokens in chain ID: ${chainId}`
      );
    }
  } catch (error) {
    console.error(`❌ Error loading tokens for chain ID ${chainId}: ${error}`);
  }
});
