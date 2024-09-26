import { CommunityToken, PaymentToken } from "../types";

export const communityTokens: CommunityToken[] = [
  // Bluechips & Stables
  {
    communityId: "USDC",
    name: "USDC",
    symbol: "USDC",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/USDC.png",
    extraPaymentTokens: [],
  },

  // Major Tokens
  {
    communityId: "AAVE",
    name: "Aave",
    symbol: "AAVE",
    logoURI:
      "https://assets.coingecko.com/coins/images/12645/large/aave-token-round.png?1720472354",
    extraPaymentTokens: [],
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
  },
  {
    communityId: "WIF",
    name: "dogwifhat",
    symbol: "WIF",
    logoURI:
      "https://assets.coingecko.com/coins/images/33566/large/dogwifhat.jpg?1702499428",
    extraPaymentTokens: [],
  },
  {
    communityId: "UNI",
    name: "Uniswap",
    symbol: "UNI",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/UNI.png",
    extraPaymentTokens: [],
  },

  // Base-Specific Tokens
  {
    communityId: "BRETT",
    name: "Brett",
    symbol: "BRETT",
    logoURI:
      "https://assets.coingecko.com/coins/images/35529/large/1000050750.png?1709031995",
    extraPaymentTokens: [],
  },
  {
    communityId: "OVN",
    name: "Overnight Finance",
    symbol: "OVN",
    logoURI:
      "https://assets.coingecko.com/coins/images/31970/large/OVN.png?1696959174",
    extraPaymentTokens: [],
  },
  {
    communityId: "PRIME",
    name: "Echelon Prime",
    symbol: "PRIME",
    logoURI:
      "https://assets.coingecko.com/coins/images/29053/large/prime-logo-small-border_%282%29.png?1696528020",
    extraPaymentTokens: [],
  },
  {
    communityId: "REZ",
    name: "Renzo",
    symbol: "REZ",
    logoURI:
      "https://assets.coingecko.com/coins/images/37327/large/renzo_200x200.png?1714025012",
    extraPaymentTokens: [],
  },
  {
    communityId: "AERO",
    name: "Aerodrome",
    symbol: "AERO",
    logoURI:
      "https://assets.coingecko.com/coins/images/31745/large/token.png?1696530564",
    extraPaymentTokens: [],
  },
  {
    communityId: "DEGEN",
    name: "Degen",
    symbol: "DEGEN",
    logoURI:
      "https://assets.coingecko.com/coins/images/34515/large/android-chrome-512x512.png?1706198225",
    extraPaymentTokens: [],
  },
  {
    communityId: "TOSHI",
    name: "Toshi",
    symbol: "TOSHI",
    logoURI:
      "https://assets.coingecko.com/coins/images/31126/large/Toshi_Logo_-_Circular.png?1721677476",
    extraPaymentTokens: [],
  },
  {
    communityId: "MOG",
    name: "Mog Coin",
    symbol: "MOG",
    logoURI:
      "https://assets.coingecko.com/coins/images/31059/large/MOG_LOGO_200x200.png?1696529893",
    extraPaymentTokens: [],
  },
  {
    communityId: "WUF",
    name: "Wuffi",
    symbol: "WUF",
    logoURI:
      "https://assets.coingecko.com/coins/images/36933/large/WUFFI.jpg?1720613603",
    extraPaymentTokens: [],
  },
  {
    communityId: "RGOAT",
    name: "Real Goat",
    symbol: "RGOAT",
    logoURI:
      "https://assets.coingecko.com/coins/images/38923/large/IMG_20240625_033037_003.jpg?1719521003",
    extraPaymentTokens: [],
  },
  {
    communityId: "MOCHI",
    name: "Mochi",
    symbol: "MOCHI",
    logoURI:
      "https://assets.coingecko.com/coins/images/33083/large/CIRCLE-200x200.png?1713297273",
    extraPaymentTokens: [],
  },
  {
    communityId: "SPX",
    name: "SPX6900",
    symbol: "SPX",
    logoURI:
      "https://assets.coingecko.com/coins/images/31401/large/sticker_%281%29.jpg?1702371083",
    extraPaymentTokens: [],
  },
  {
    communityId: "DOGINME",
    name: "DogInMe",
    symbol: "DOGINME",
    logoURI:
      "https://assets.coingecko.com/coins/images/35123/large/doginme-logo1-transparent200.png?1710856784",
    extraPaymentTokens: [],
  },
  {
    communityId: "BBQ",
    name: "BaseBearCute",
    symbol: "BBQ",
    logoURI:
      "https://assets.coingecko.com/coins/images/40006/large/logo.jpg?1725221317",
    extraPaymentTokens: [],
  },
  {
    communityId: "MIGGLES",
    name: "Mister Miggles",
    symbol: "MIGGLES",
    logoURI:
      "https://assets.coingecko.com/coins/images/39251/large/miggles.jpg?1721283044",
    extraPaymentTokens: [],
  },
  {
    communityId: "BAMBOO",
    name: "Bamboo on Base",
    symbol: "BAMBOO",
    logoURI:
      "https://assets.coingecko.com/coins/images/39126/large/Bamboo_Logo_800x800.png?1720656497",
    extraPaymentTokens: [],
  },

  // Non-Token Projects
  {
    communityId: "GHOST",
    name: "GHOST",
    symbol: "GHOST",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/GHOST.png",
    extraPaymentTokens: [],
  },
];
