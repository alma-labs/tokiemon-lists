import { PaymentToken } from "../../types";

// These tokens will be used on every community choice
const defaultPaymentTokens: PaymentToken[] = [
  {
    name: "USDC",
    symbol: "USDC",
    address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    chainId: 8453,
    decimals: 6,
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/USDC.png",
  },
  {
    name: "GOLD",
    symbol: "Tokiemon Gold",
    address: "0xF3105616aE4B17d4Cd053Da449F38d23c647D15F",
    chainId: 8453,
    decimals: 18,
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/GOLD.png",
  },
  {
    name: "DAI",
    symbol: "DAI",
    address: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
    chainId: 8453,
    decimals: 18,
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/DAI.png",
  },
  {
    name: "Coinbase BTC",
    symbol: "CBBTC",
    address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
    chainId: 8453,
    decimals: 8,
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/CBBTC.png",
  },
];

export default defaultPaymentTokens;
