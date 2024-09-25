import { PaymentToken } from "../../types";

const paymentTokens: PaymentToken[] = [
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
    name: "Based",
    symbol: "BASED",
    address: "0x32E0f9d26D1e33625742A52620cC76C1130efde6",
    chainId: 8453,
    decimals: 18,
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/BASED.png",
  },
];

export default paymentTokens;
