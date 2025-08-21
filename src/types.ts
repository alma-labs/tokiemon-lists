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
    | "HUNTER"
  >;
  extraPaymentTokens?: PaymentToken[];
  hunting?: {
    capture?: boolean; // If the token can be captured via hunting encounters
    scene?: HuntingScene; // The scene where the token can be captured
    only?: boolean; // If the token is only available via hunting encounters (not mintable)
    premium?: boolean; // If the token is a premium breed (requires a v-card to encounter)
  };
  inactive?: boolean;
  prompts?: {
    kawaii?: string[];
    dragon?: string[];
    degen?: string[];
  };
  artOverrides?: {
    kawaii?: string[];
    dragon?: string[];
    degen?: string[];
  };
}

export type HuntingScene = "TOWN" | "WOODS" | "FARM" | "BEACH" | "GOOCH";

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
  selectionType: "always" | "random";
  keywords: string[];
}

export type QuestType = "Task" | "Story" | "Skilling";

export interface QuestReward {
  itemId: string;
  amount: number;
}

export interface Quest {
  questId: number;
  id: string;
  name: string;
  image: string;
  type: QuestType;
  questPoints: number;
  description: string;
  requirements: string[];
  rewards: QuestReward[];
  check: string;
  verified: boolean;
  isActive: boolean;
  hint: string;
}

export const KAWAII_PREFIX =
  "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokiemon-kawaii";
export const DRAGON_PREFIX =
  "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokiemon-dragon";
export const DEGEN_PREFIX =
  "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokiemon-degen";

export interface Changelog {
  title: string;
  date: string;
  changes: string[];
}
