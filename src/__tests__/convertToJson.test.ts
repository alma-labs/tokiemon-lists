import { existsSync, readFileSync, rmSync } from "fs";
import { resolve } from "path";
import { execSync } from "child_process";

describe("convertToJson.ts", () => {
  const outputDir = resolve(__dirname, "../../tokens");

  beforeAll(() => {
    // Clean up previous output if it exists
    if (existsSync(outputDir)) {
      rmSync(outputDir, { recursive: true, force: true });
    }
  });

  it("should generate JSON files successfully", () => {
    // Run the script and catch any errors
    try {
      execSync("npx ts-node src/convertToJson.ts");
    } catch (error) {
      throw new Error(`❌ JSON conversion script failed: ${error}`);
    }

    // Check if community tokens file was created
    const communityTokensPath = resolve(outputDir, "community.json");
    expect(existsSync(communityTokensPath)).toBe(true);

    // Dynamically check if all payment token files for each chain exist
    const chains = ["56", "8453"]; // Add your chain IDs here
    chains.forEach((chainId) => {
      const paymentTokensPath = resolve(outputDir, `payment/${chainId}.json`);
      expect(existsSync(paymentTokensPath)).toBe(true);

      // Read and parse the JSON file
      const paymentTokens = JSON.parse(
        readFileSync(paymentTokensPath, "utf-8")
      );

      // Check if the first token's symbol is USDC
      expect(paymentTokens[0].symbol).toBe("USDC");
    });
  });
});
