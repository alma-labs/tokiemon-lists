import { CommunityToken } from "../types";

export const communityTokens: CommunityToken[] = [
  // DeFi
  {
    communityId: "AAVE",
    name: "Aave",
    symbol: "AAVE",
    logoURI:
      "https://assets.coingecko.com/coins/images/12645/large/aave-token-round.png?1720472354",
    extraPaymentTokens: [],
    tags: ["DEFI"],
  },
  {
    communityId: "UNI",
    name: "Uniswap",
    symbol: "UNI",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/UNI.png",
    extraPaymentTokens: [],
    tags: ["DEFI"],
  },

  // Partners
  {
    communityId: "MIGGLES",
    name: "Mister Miggles",
    symbol: "MIGGLES",
    logoURI:
      "https://assets.coingecko.com/coins/images/39251/large/miggles.jpg?1721283044",
    extraPaymentTokens: [
      {
        name: "Mister Miggles",
        symbol: "MIGGLES",
        address: "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
        chainId: 8453,
        decimals: 18,
        logoURI:
          "https://assets.coingecko.com/coins/images/39251/large/miggles.jpg?1721283044",
      },
    ],
    tags: ["PARTNER"],
  },
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
    communityId: "ABOND",
    name: "ApeBond",
    symbol: "ABOND",
    logoURI:
      "https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/ABOND.png",
    extraPaymentTokens: [],
    tags: ["PARTNER"],
  },
  {
    communityId: "RECORD",
    name: "Music Protocol",
    symbol: "RECORD",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/RECORD.png",
    extraPaymentTokens: [],
    tags: ["PARTNER", "BASE"],
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

  // Base-Specific Tokens
  {
    communityId: "BRETT",
    name: "Brett",
    symbol: "BRETT",
    logoURI:
      "https://assets.coingecko.com/coins/images/35529/large/1000050750.png?1709031995",
    extraPaymentTokens: [],
    tags: ["BASE"],
  },
  {
    communityId: "OVN",
    name: "Overnight Finance",
    symbol: "OVN",
    logoURI:
      "https://assets.coingecko.com/coins/images/31970/large/OVN.png?1696959174",
    extraPaymentTokens: [],
    tags: ["BASE"],
  },
  {
    communityId: "PRIME",
    name: "Echelon Prime",
    symbol: "PRIME",
    logoURI:
      "https://assets.coingecko.com/coins/images/29053/large/prime-logo-small-border_%282%29.png?1696528020",
    extraPaymentTokens: [],
    tags: ["BASE"],
  },
  {
    communityId: "REZ",
    name: "Renzo",
    symbol: "REZ",
    logoURI:
      "https://assets.coingecko.com/coins/images/37327/large/renzo_200x200.png?1714025012",
    extraPaymentTokens: [],
    tags: ["BASE"],
  },
  {
    communityId: "AERO",
    name: "Aerodrome",
    symbol: "AERO",
    logoURI:
      "https://assets.coingecko.com/coins/images/31745/large/token.png?1696530564",
    extraPaymentTokens: [],
    tags: ["BASE"],
  },
  {
    communityId: "DEGEN",
    name: "Degen",
    symbol: "DEGEN",
    logoURI:
      "https://assets.coingecko.com/coins/images/34515/large/android-chrome-512x512.png?1706198225",
    extraPaymentTokens: [],
    tags: ["BASE"],
  },
  {
    communityId: "TOSHI",
    name: "Toshi",
    symbol: "TOSHI",
    logoURI:
      "https://assets.coingecko.com/coins/images/31126/large/Toshi_Logo_-_Circular.png?1721677476",
    extraPaymentTokens: [],
    tags: ["BASE"],
  },
  {
    communityId: "MOG",
    name: "Mog Coin",
    symbol: "MOG",
    logoURI:
      "https://assets.coingecko.com/coins/images/31059/large/MOG_LOGO_200x200.png?1696529893",
    extraPaymentTokens: [],
    tags: ["BASE", "SOLANA"],
  },
  {
    communityId: "WUF",
    name: "Wuffi",
    symbol: "WUF",
    logoURI:
      "https://assets.coingecko.com/coins/images/36933/large/WUFFI.jpg?1720613603",
    extraPaymentTokens: [],
    tags: ["BASE"],
  },
  {
    communityId: "MOCHI",
    name: "Mochi",
    symbol: "MOCHI",
    logoURI:
      "https://assets.coingecko.com/coins/images/33083/large/CIRCLE-200x200.png?1713297273",
    extraPaymentTokens: [],
    tags: ["BASE"],
  },
  {
    communityId: "SPX",
    name: "SPX6900",
    symbol: "SPX",
    logoURI:
      "https://assets.coingecko.com/coins/images/31401/large/sticker_%281%29.jpg?1702371083",
    extraPaymentTokens: [],
    tags: ["BASE"],
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
      "https://assets.coingecko.com/coins/images/33566/large/dogwifhat.jpg?1702499428",
    extraPaymentTokens: [],
    tags: ["SOLANA"],
  },
];
