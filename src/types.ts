export interface CommunityToken {
  communityId: string; // Used in the smart contract to represent a community token, usually the symbol
  name: string;
  symbol: string;
  logoURI: string;
  tags: Array<
    | "BLUECHIP"
    | "DEFI"
    | "SOLANA"
    | "BASE"
    | "PARTNER"
    | "MEME"
    | "AI"
    | "LIMITED"
  >;
  extraPaymentTokens?: PaymentToken[];
  inactive?: boolean;
}

export interface PaymentToken {
  name: string;
  symbol: string;
  address: string;
  chainId: number;
  decimals: number;
  logoURI: string;
}
