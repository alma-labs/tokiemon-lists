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
];

export default defaultPaymentTokens;
