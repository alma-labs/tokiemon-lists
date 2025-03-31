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
  prompts?: {
    kawaii?: string[];
    dragon?: string[];
    degen?: string[];
  };
}

export interface PaymentToken {
  name: string;
  symbol: string;
  address: string;
  chainId: number;
  decimals: number;
  logoURI: string;
}

export interface CraftingCategory {
  name: string;
  order: number;
  image: string;
  total: number;
}

export interface Paintbrush {
  itemId: string;
  name: string;
  selectionType: 'always' | 'random';
  keywords: string[];
}
