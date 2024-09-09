import { writeFileSync, readdirSync, mkdirSync, existsSync } from "fs";
import { resolve } from "path";
import { communityTokens } from "./communityTokens"; // Directly import community tokens

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

ensureDirectoryExists(outputDir);

// Process community tokens (convert to JSON)
writeJsonFile("community", communityTokens);

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
