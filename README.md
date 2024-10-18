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

## Adding A New Asset

1. Find circular image logo with transparent background, under 50kb (preferably < 20).
2. Upload the image to the `assets/tokens` folder.
3. Add details to `index.ts` file, use only capital letters for community ID and symbol.
4. Add starter image 1:1 transparent background tokiemon.
5. Run `npm run convert`.
6. Push to github and submit a PR.

Want your token listed? Sumbit a PR! or [message me](https://t.me/larrettgee)
