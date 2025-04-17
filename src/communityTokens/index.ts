import { CommunityToken } from "../types";
import {
  TOKIEMON_PROMPTS,
  HOLIDAY_PROMPTS,
  DICKBUTT_PROMPTS,
  BODA_PROMPTS,
  AVI_PROMPTS,
  EASTER_PROMPTS,
  CATTOWN_PROMPTS,
  AIP_PROMPTS,
} from "../prompts";

export const communityTokens: CommunityToken[] = [
  {
    communityId: "TOKIEMON",
    name: "Random Tokiemon",
    symbol: "TOKIEMON",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/TOKIEMON.png",
    extraPaymentTokens: [],
    tags: [],
    prompts: TOKIEMON_PROMPTS,
  },
  {
    communityId: "EASTER",
    name: "Easter",
    symbol: "EASTER",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/EASTER.png",
    extraPaymentTokens: [],
    tags: [],
    prompts: EASTER_PROMPTS,
  },
  {
    communityId: "ETHDEN",
    name: "Eth Denver",
    symbol: "ETHDEN",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/ETHDEN.png",
    extraPaymentTokens: [],
    tags: ["LIMITED"],
    inactive: true,
  },
  {
    communityId: "VTINE",
    name: "Valentine's",
    symbol: "VTINE",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/VTINE.png",
    extraPaymentTokens: [],
    tags: ["LIMITED"],
    inactive: true,
  },
  {
    communityId: "XMAS",
    name: "Holiday Editiion",
    symbol: "XMAS",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/XMAS.png",
    extraPaymentTokens: [],
    tags: ["LIMITED"],
    inactive: true,
    prompts: HOLIDAY_PROMPTS,
  },

  // Prominent Base Memecoins & Partners
  {
    communityId: "CATTOWN",
    name: "Cat Town",
    symbol: "CATTOWN",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/CATTOWN.png",
    extraPaymentTokens: [],
    tags: ["BASE", "PARTNER"],
    prompts: CATTOWN_PROMPTS,
  },
  {
    communityId: "AIP",
    name: "PettAI",
    symbol: "AIP",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/AIP.png",
    extraPaymentTokens: [],
    tags: ["BASE", "PARTNER"],
    prompts: AIP_PROMPTS,
  },
  {
    communityId: "BRETT",
    name: "Brett",
    symbol: "BRETT",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/BRETT.png",
    extraPaymentTokens: [],
    tags: ["BASE", "MEME"],
  },
  {
    communityId: "AERO",
    name: "Aerodrome",
    symbol: "AERO",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/AERO.png",
    extraPaymentTokens: [],
    tags: ["BASE"],
  },
  {
    communityId: "DEGEN",
    name: "Degen",
    symbol: "DEGEN",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/DEGEN.png",
    extraPaymentTokens: [
      {
        name: "Degen",
        symbol: "DEGEN",
        address: "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
        chainId: 8453,
        decimals: 18,
        logoURI:
          "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/DEGEN.png",
      },
    ],
    tags: ["BASE"],
  },
  {
    communityId: "TOSHI",
    name: "Toshi",
    symbol: "TOSHI",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/TOSHI.png",
    extraPaymentTokens: [],
    tags: ["BASE", "MEME"],
  },
  {
    communityId: "AVI",
    name: "Aviator",
    symbol: "AVI",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/AVI.png",
    extraPaymentTokens: [],
    tags: ["BASE", "MEME"],
    prompts: AVI_PROMPTS,
  },
  {
    communityId: "SECRET",
    name: "Satoshi's Secret",
    symbol: "SECRET",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/SECRET.png",
    extraPaymentTokens: [],
    tags: ["BASE", "MEME"],
  },
  {
    communityId: "COOKIE",
    name: "Cookie.fun",
    symbol: "COOKIE",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/COOKIE.png",
    extraPaymentTokens: [],
    tags: ["BASE", "AI"],
  },
  {
    communityId: "KEYCAT",
    name: "Keyboard Cat",
    symbol: "KEYCAT",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/KEYCAT.png",
    extraPaymentTokens: [],
    tags: ["BASE", "MEME"],
  },
  {
    communityId: "BASEDPEPE",
    name: "Based Pepe",
    symbol: "BASEDPEPE",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/BASEDPEPE.png",
    extraPaymentTokens: [],
    tags: ["BASE", "MEME"],
  },
  {
    communityId: "BODA",
    name: "Based Yoda",
    symbol: "BODA",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/BODA.png",
    extraPaymentTokens: [],
    tags: ["BASE", "MEME"],
    prompts: BODA_PROMPTS,
  },
  {
    communityId: "SKI",
    name: "Ski Mask Dog",
    symbol: "SKI",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/SKI.png",
    extraPaymentTokens: [],
    tags: ["BASE", "MEME"],
  },
  {
    communityId: "MOG",
    name: "Mog Coin",
    symbol: "MOG",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/MOG.png",
    extraPaymentTokens: [],
    tags: ["BASE", "SOLANA", "MEME"],
  },
  {
    communityId: "DICKBUTT",
    name: "Dickbutt",
    symbol: "DICKBUTT",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/DICKBUTT.png",
    extraPaymentTokens: [],
    tags: ["BASE", "MEME"],
    prompts: DICKBUTT_PROMPTS,
  },
  {
    communityId: "ALB",
    name: "Alien Base",
    symbol: "ALB",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/ALB.png",
    extraPaymentTokens: [],
    tags: ["BASE", "MEME"],
  },
  {
    communityId: "SPX",
    name: "SPX6900",
    symbol: "SPX",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/SPX.png",
    extraPaymentTokens: [],
    tags: ["BASE", "MEME"],
  },
  {
    communityId: "AEROBUD",
    name: "AeroBud",
    symbol: "AEROBUD",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/AEROBUD.png",
    extraPaymentTokens: [],
    tags: ["BASE", "MEME"],
  },
  {
    communityId: "MARSO",
    name: "Marso.tech",
    symbol: "MARSO",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/MARSO.png",
    extraPaymentTokens: [],
    tags: ["BASE", "AI"],
  },
  {
    communityId: "OX",
    name: "OX.FUN",
    symbol: "OX",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/OX.png",
    extraPaymentTokens: [],
    tags: ["BASE", "DEFI"],
  },
  {
    communityId: "DOGINME",
    name: "doginme",
    symbol: "DOGINME",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/DOGINME.png",
    extraPaymentTokens: [
      {
        name: "doginme",
        symbol: "DOGINME",
        address: "0x6921b130d297cc43754afba22e5eac0fbf8db75b",
        chainId: 8453,
        decimals: 18,
        logoURI:
          "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/DOGINME.png",
      },
    ],
    tags: ["PARTNER", "MEME", "BASE"],
  },
  {
    communityId: "MIGGLES",
    name: "Mister Miggles",
    symbol: "MIGGLES",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/MIGGLES.png",
    extraPaymentTokens: [
      {
        name: "Mister Miggles",
        symbol: "MIGGLES",
        address: "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
        chainId: 8453,
        decimals: 18,
        logoURI:
          "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/MIGGLES.png",
      },
    ],
    tags: ["PARTNER", "MEME", "BASE"],
  },
  {
    communityId: "TIMI",
    name: "This Is My Iguana",
    symbol: "TIMI",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/TIMI.png",
    extraPaymentTokens: [],
    tags: ["PARTNER", "MEME", "BASE"],
  },
  {
    communityId: "UNLUCKY",
    name: "Unlucky",
    symbol: "UNLUCKY",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/UNLUCKY.png",
    extraPaymentTokens: [],
    tags: ["PARTNER", "MEME", "BASE"],
  },
  {
    communityId: "HIGHER",
    name: "Higher",
    symbol: "HIGHER",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/HIGHER.png",
    extraPaymentTokens: [],
    tags: ["BASE", "MEME"],
  },
  {
    communityId: "VIRTUAL",
    name: "Virtuals Protocol",
    symbol: "VIRTUAL",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/VIRTUAL.png",
    extraPaymentTokens: [
      {
        name: "Virtuals Protocol",
        symbol: "VIRTUAL",
        address: "0x0b3e328455c4059eeb9e3f84b5543f74e24e7e1b",
        chainId: 8453,
        decimals: 18,
        logoURI:
          "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/VIRTUAL.png",
      },
    ],
    tags: ["BASE", "AI"],
  },
  {
    communityId: "MFER",
    name: "mfercoin",
    symbol: "MFER",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/MFER.png",
    extraPaymentTokens: [],
    tags: ["BASE", "MEME"],
  },
  {
    communityId: "TOBY",
    name: "Toby ToadGod",
    symbol: "TOBY",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/TOBY.png",
    extraPaymentTokens: [],
    tags: ["BASE", "MEME"],
  },
  {
    communityId: "RGOAT",
    name: "RealGoat",
    symbol: "RGOAT",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/RGOAT.png",
    extraPaymentTokens: [
      {
        name: "RealGoat",
        symbol: "RGOAT",
        address: "0xf0268c5f9aa95baf5c25d646aabb900ac12f0800",
        chainId: 8453,
        decimals: 8,
        logoURI:
          "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/RGOAT.png",
      },
    ],
    tags: ["PARTNER", "MEME", "BASE"],
  },
  {
    communityId: "MCADE",
    name: "Metacade",
    symbol: "MCADE",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/MCADE.png",
    extraPaymentTokens: [
      {
        name: "Metacade",
        symbol: "MCADE",
        address: "0xc48823ec67720a04a9dfd8c7d109b2c3d6622094",
        chainId: 8453,
        decimals: 18,
        logoURI:
          "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/MCADE.png",
      },
    ],
    tags: ["PARTNER", "BASE"],
  },
  {
    communityId: "MOCHI",
    name: "Mochi",
    symbol: "MOCHI",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/MOCHI.png",
    extraPaymentTokens: [],
    tags: ["BASE", "MEME"],
  },
  {
    communityId: "GMR",
    name: "Gamer",
    symbol: "GMR",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/GMR.png",
    extraPaymentTokens: [],
    tags: ["BASE"],
  },
  {
    communityId: "FAI",
    name: "Freysa AI",
    symbol: "FAI",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/FAI.png",
    extraPaymentTokens: [],
    tags: ["BASE", "AI"],
  },

  // Additional Partners
  {
    communityId: "BASED",
    name: "Based",
    symbol: "BASED",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/BASED.png",
    extraPaymentTokens: [
      {
        name: "Based",
        symbol: "BASED",
        address: "0x32E0f9d26D1e33625742A52620cC76C1130efde6",
        chainId: 8453,
        decimals: 18,
        logoURI:
          "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/BASED.png",
      },
    ],
    tags: ["PARTNER", "BASE"],
  },
  {
    communityId: "GHOST",
    name: "GHOST",
    symbol: "GHOST",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/GHOST.png",
    extraPaymentTokens: [],
    tags: ["PARTNER"],
  },
  {
    communityId: "MONEY",
    name: "DeFi.Money",
    symbol: "MONEY",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/MONEY.png",
    extraPaymentTokens: [],
    tags: ["PARTNER", "BASE"],
  },
  {
    communityId: "ABOND",
    name: "ApeBond",
    symbol: "ABOND",
    logoURI:
      "https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/ABOND.png",
    extraPaymentTokens: [],
    tags: ["PARTNER"],
  },
  {
    communityId: "DMAIL",
    name: "Dmail",
    symbol: "DMAIL",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/DMAIL.png",
    extraPaymentTokens: [],
    tags: ["PARTNER"],
  },
  {
    communityId: "RSR",
    name: "Reserve Rights",
    symbol: "RSR",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/RSR.png",
    extraPaymentTokens: [],
    tags: ["PARTNER"],
  },

  // Other Popular Base Tokens
  {
    communityId: "WUF",
    name: "Wuffi",
    symbol: "WUF",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/WUF.png",
    extraPaymentTokens: [],
    tags: ["BASE", "MEME"],
  },
  {
    communityId: "BENJI",
    name: "Basenji",
    symbol: "BENJI",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/BENJI.png",
    extraPaymentTokens: [],
    tags: ["BASE", "MEME"],
  },
  {
    communityId: "OVN",
    name: "Overnight Finance",
    symbol: "OVN",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/OVN.png",
    extraPaymentTokens: [],
    tags: ["BASE"],
  },
  {
    communityId: "PRIME",
    name: "Echelon Prime",
    symbol: "PRIME",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/PRIME.png",
    extraPaymentTokens: [],
    tags: ["BASE"],
  },
  {
    communityId: "REZ",
    name: "Renzo",
    symbol: "REZ",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/REZ.png",
    extraPaymentTokens: [],
    tags: ["BASE"],
  },

  // DeFi
  {
    communityId: "UNI",
    name: "Uniswap",
    symbol: "UNI",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/UNI.png",
    extraPaymentTokens: [],
    tags: ["DEFI"],
  },
  {
    communityId: "AAVE",
    name: "Aave",
    symbol: "AAVE",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/AAVE.png",
    extraPaymentTokens: [],
    tags: ["DEFI"],
  },
  {
    communityId: "CRV",
    name: "Curve",
    symbol: "CRV",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/CRV.png",
    extraPaymentTokens: [],
    tags: ["DEFI"],
  },
  {
    communityId: "COMP",
    name: "Compound",
    symbol: "COMP",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/COMP.png",
    extraPaymentTokens: [],
    tags: ["DEFI"],
  },
  {
    communityId: "LINK",
    name: "Chainlink",
    symbol: "LINK",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/LINK.png",
    extraPaymentTokens: [],
    tags: ["DEFI"],
  },
  {
    communityId: "CAKE",
    name: "PancakeSwap",
    symbol: "CAKE",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/CAKE.png",
    extraPaymentTokens: [],
    tags: ["DEFI"],
  },
  {
    communityId: "AXL",
    name: "Axelar",
    symbol: "AXL",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/AXL.png",
    extraPaymentTokens: [
      {
        name: "Axelar",
        symbol: "AXL",
        address: "0x23ee2343b892b1bb63503a4fabc840e0e2c6810f",
        chainId: 8453,
        decimals: 6,
        logoURI:
          "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/AXL.png",
      },
    ],
    tags: ["DEFI", "BASE"],
  },
  {
    communityId: "COW",
    name: "CoW Swap",
    symbol: "COW",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/COW.png",
    extraPaymentTokens: [],
    tags: ["DEFI", "BASE"],
  },

  // Bluechips & Stables
  {
    communityId: "BTC",
    name: "Bitcoin",
    symbol: "BTC",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/BTC.png",
    extraPaymentTokens: [],
    tags: ["BLUECHIP"],
  },
  {
    communityId: "ETH",
    name: "Ethereum",
    symbol: "ETH",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/ETH.png",
    extraPaymentTokens: [],
    tags: ["BLUECHIP"],
  },
  {
    communityId: "USDC",
    name: "USDC",
    symbol: "USDC",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/USDC.png",
    extraPaymentTokens: [],
    tags: ["BLUECHIP"],
  },
  {
    communityId: "DAI",
    name: "DAI",
    symbol: "DAI",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/DAI.png",
    extraPaymentTokens: [],
    tags: ["BLUECHIP"],
  },
  {
    communityId: "USDT",
    name: "Tether",
    symbol: "USDT",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/USDT.png",
    extraPaymentTokens: [],
    tags: ["BLUECHIP"],
  },
  {
    communityId: "BNB",
    name: "BNB",
    symbol: "BNB",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/BNB.png",
    extraPaymentTokens: [],
    tags: ["BLUECHIP"],
  },

  // Meme
  {
    communityId: "PUPS",
    name: "Bitcoin Puppets",
    symbol: "PUPS",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/PUPS.png",
    extraPaymentTokens: [],
    tags: ["MEME"],
  },
  {
    communityId: "DOGE",
    name: "Dogecoin",
    symbol: "DOGE",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/DOGE.png",
    extraPaymentTokens: [],
    tags: ["BLUECHIP", "MEME"],
  },
  {
    communityId: "SHIB",
    name: "Shiba Inu",
    symbol: "SHIB",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/SHIB.png",
    extraPaymentTokens: [],
    tags: ["MEME"],
  },
  {
    communityId: "PEPE",
    name: "Pepe",
    symbol: "PEPE",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/PEPE.png",
    extraPaymentTokens: [],
    tags: ["MEME"],
  },
  {
    communityId: "FLOKI",
    name: "Floki",
    symbol: "FLOKI",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/FLOKI.png",
    extraPaymentTokens: [],
    tags: ["MEME"],
  },

  // Solana
  {
    communityId: "SOL",
    name: "Solana",
    symbol: "SOL",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/SOL.png",
    extraPaymentTokens: [],
    tags: ["SOLANA", "BLUECHIP"],
  },
  {
    communityId: "WIF",
    name: "dogwifhat",
    symbol: "WIF",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/WIF.png",
    extraPaymentTokens: [],
    tags: ["SOLANA", "MEME"],
  },
  {
    communityId: "BONK",
    name: "Bonk",
    symbol: "BONK",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/BONK.png",
    extraPaymentTokens: [],
    tags: ["SOLANA", "MEME"],
  },
  {
    communityId: "POPCAT",
    name: "Popcat",
    symbol: "POPCAT",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/POPCAT.png",
    extraPaymentTokens: [],
    tags: ["SOLANA", "MEME"],
  },
  {
    communityId: "MOODENG",
    name: "Moodeng",
    symbol: "MOODENG",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/MOODENG.png",
    extraPaymentTokens: [],
    tags: ["SOLANA", "MEME"],
  },
  {
    communityId: "OMNI",
    name: "Omni",
    symbol: "OMNI",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/OMNI.png",
    extraPaymentTokens: [],
    tags: [],
  },
  {
    communityId: "COPI",
    name: "Cornucopias",
    symbol: "COPI",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/COPI.png",
    extraPaymentTokens: [],
    tags: [],
  },
  {
    communityId: "SDEX",
    name: "SmarDex",
    symbol: "SDEX",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/SDEX.png",
    extraPaymentTokens: [],
    tags: [],
  },
  {
    communityId: "RECORD",
    name: "Music Protocol",
    symbol: "RECORD",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/RECORD.png",
    extraPaymentTokens: [],
    tags: ["BASE"],
  },
  {
    communityId: "ORDER",
    name: "Orderly Network",
    symbol: "ORDER",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/ORDER.png",
    extraPaymentTokens: [],
    tags: ["BASE"],
  },
  {
    communityId: "DEVCON",
    name: "Devcon",
    symbol: "DEVCON",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/DEVCON.png",
    extraPaymentTokens: [],
    tags: [],
  },
];
