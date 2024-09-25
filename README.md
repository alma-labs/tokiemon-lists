# Tokiemon Token Lists

This repo is designed to store data for all payment and community assets that will be utilized on Tokiemon.

Payment Tokens

- Tokens that can be used as a form of currency, sepcific to each chain.
- There are two types `default` and `community-specific`.
- `Default` are the assets that can be used to mint any community token (such as ETH, USDC).
- `community-specific` are payment tokens that only can be used to mint certain tokens for certain communities (such as minting an AAVE NFT with AAVE tokens).

Community Tokens

- Tokens that can be represented by communities and minters.
- Should be able to have a pull request submitted by any project to be included.
- Each should have a unique ID.

## Addting A New Asset

1. Find circular image logo with transparent background
2. Upload both images to `normal` and `pixel-logos` folders respectively
3. Add details to `index.ts` file
4. Run `npm run convert`
5. Push to github and submit a PR

Want your token listed? Sumbit a PR!
