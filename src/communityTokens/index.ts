import {
  CommunityToken,
  DEGEN_PREFIX,
  DRAGON_PREFIX,
  KAWAII_PREFIX,
} from "../types";
import {
  TOKIEMON_PROMPTS,
  HOLIDAY_PROMPTS,
  DICKBUTT_PROMPTS,
  BODA_PROMPTS,
  AVI_PROMPTS,
  EASTER_PROMPTS,
  CATTOWN_PROMPTS,
  AIP_PROMPTS,
  SQUIRT_PROMPTS,
  MNRY_PROMPTS,
  PACAAI_PROMPTS,
  BARIO_PROMPTS,
  FOXARIA_PROMPTS,
  UPTOPIA_PROMPTS,
  BASEDMC_PROMPTS,
  DAEMONS_PROMPTS,
  FARCASTER_PROMPTS,
  SOS_PROMPTS,
  TOPI_PROMPTS,
  LOFFY_PROMPTS,
  FACTOR_PROMPTS,
  BEETLE_PROMPTS,
  MANTIS_PROMPTS,
  BEE_PROMPTS,
  WOODS_PROMPTS,
  ELECTRIC_PROMPTS,
  FIRE_PROMPTS,
  LEAF_PROMPTS,
  BASETOWN_PROMPTS,
  FARM_PROMPTS,
  SHEEP_PROMPTS,
  PIG_PROMPTS,
  HORSE_PROMPTS,
  BEACH_PROMPTS,
  SEAHORSE_PROMPTS,
  CROC_PROMPTS,
  SHARK_PROMPTS,
  SUMMER_PROMPTS,
  HYDREX_PROMPTS,
  QUICKSWAP_PROMPTS,
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
    hunting: {
      capture: true,
      scene: "TOWN",
      only: false,
      premium: false,
    },
  },
  {
    communityId: "SUMMER",
    name: "Hot Onchain Summer",
    symbol: "SUMMER",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/SUMMER.png",
    extraPaymentTokens: [],
    tags: [],
    prompts: SUMMER_PROMPTS,
    inactive: true,
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
    inactive: true,
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

  // Premium Hunter Tokens
  {
    communityId: "SHARK",
    name: "Shark",
    symbol: "SHARK",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/SHARK.png",
    extraPaymentTokens: [],
    tags: ["HUNTER"],
    hunting: {
      capture: true,
      scene: "BEACH",
      only: true,
      premium: true,
    },
    prompts: SHARK_PROMPTS,
  },
  {
    communityId: "CROC",
    name: "Croc",
    symbol: "CROC",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/CROC.png",
    extraPaymentTokens: [],
    tags: ["HUNTER"],
    hunting: {
      capture: true,
      scene: "BEACH",
      only: true,
      premium: true,
    },
    prompts: CROC_PROMPTS,
  },
  {
    communityId: "SEAHORSE",
    name: "Seahorse",
    symbol: "SEAHORSE",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/SEAHORSE.png",
    extraPaymentTokens: [],
    tags: ["HUNTER"],
    hunting: {
      capture: true,
      scene: "BEACH",
      only: true,
      premium: true,
    },
    prompts: SEAHORSE_PROMPTS,
  },
  {
    communityId: "BEACH",
    name: "Beach",
    symbol: "BEACH",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/BEACH.png",
    extraPaymentTokens: [],
    tags: ["HUNTER"],
    hunting: {
      capture: true,
      scene: "BEACH",
      only: true,
      premium: true,
    },
    prompts: BEACH_PROMPTS,
  },
  {
    communityId: "HORSE",
    name: "Horse",
    symbol: "HORSE",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/HORSE.png",
    extraPaymentTokens: [],
    tags: ["HUNTER"],
    hunting: {
      capture: true,
      scene: "FARM",
      only: true,
      premium: true,
    },
    prompts: HORSE_PROMPTS,
  },
  {
    communityId: "PIG",
    name: "Pig",
    symbol: "PIG",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/PIG.png",
    extraPaymentTokens: [],
    tags: ["HUNTER"],
    hunting: {
      capture: true,
      scene: "FARM",
      only: true,
      premium: true,
    },
    prompts: PIG_PROMPTS,
  },
  {
    communityId: "SHEEP",
    name: "Sheep",
    symbol: "SHEEP",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/SHEEP.png",
    extraPaymentTokens: [],
    tags: ["HUNTER"],
    hunting: {
      capture: true,
      scene: "FARM",
      only: true,
      premium: true,
    },
    prompts: SHEEP_PROMPTS,
  },
  {
    communityId: "FARM",
    name: "Farm",
    symbol: "FARM",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/FARM.png",
    extraPaymentTokens: [],
    tags: ["HUNTER"],
    hunting: {
      capture: true,
      scene: "FARM",
      only: true,
      premium: true,
    },
    prompts: FARM_PROMPTS,
  },
  {
    communityId: "BEETLE",
    name: "Beetle",
    symbol: "BEETLE",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/BEETLE.png",
    extraPaymentTokens: [],
    tags: ["HUNTER"],
    hunting: {
      capture: true,
      scene: "WOODS",
      only: true,
      premium: true,
    },
    prompts: BEETLE_PROMPTS,
  },
  {
    communityId: "MANTIS",
    name: "Mantis",
    symbol: "MANTIS",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/MANTIS.png",
    extraPaymentTokens: [],
    tags: ["HUNTER"],
    hunting: {
      capture: true,
      scene: "WOODS",
      only: true,
      premium: true,
    },
    prompts: MANTIS_PROMPTS,
  },
  {
    communityId: "BEE",
    name: "Bee",
    symbol: "BEE",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/BEE.png",
    extraPaymentTokens: [],
    tags: ["HUNTER"],
    hunting: {
      capture: true,
      scene: "WOODS",
      only: true,
      premium: true,
    },
    prompts: BEE_PROMPTS,
  },
  {
    communityId: "WOODS",
    name: "Woods",
    symbol: "WOODS",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/WOODS.png",
    extraPaymentTokens: [],
    tags: ["HUNTER"],
    hunting: {
      capture: true,
      scene: "WOODS",
      only: true,
      premium: true,
    },
    prompts: WOODS_PROMPTS,
  },
  {
    communityId: "ELECTRIC",
    name: "Electric",
    symbol: "ELECTRIC",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/ELECTRIC.png",
    extraPaymentTokens: [],
    tags: ["HUNTER"],
    hunting: {
      capture: true,
      scene: "TOWN",
      only: true,
      premium: true,
    },
    prompts: ELECTRIC_PROMPTS,
  },
  {
    communityId: "FIRE",
    name: "Fire",
    symbol: "FIRE",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/FIRE.png",
    extraPaymentTokens: [],
    tags: ["HUNTER"],
    hunting: {
      capture: true,
      scene: "TOWN",
      only: true,
      premium: true,
    },
    prompts: FIRE_PROMPTS,
  },
  {
    communityId: "LEAF",
    name: "Leaf",
    symbol: "LEAF",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/LEAF.png",
    extraPaymentTokens: [],
    tags: ["HUNTER"],
    hunting: {
      capture: true,
      scene: "TOWN",
      only: true,
      premium: true,
    },
    prompts: LEAF_PROMPTS,
  },
  {
    communityId: "BASETOWN",
    name: "Basetown",
    symbol: "BASETOWN",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/BASETOWN.png",
    extraPaymentTokens: [],
    tags: ["HUNTER"],
    hunting: {
      capture: true,
      scene: "TOWN",
      only: true,
      premium: true,
    },
    prompts: BASETOWN_PROMPTS,
  },

  // Prominent Base Memecoins & Partners
  {
    communityId: "HYDREX",
    name: "Hydrex",
    symbol: "HYDREX",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/HYDREX.png",
    extraPaymentTokens: [],
    tags: ["BASE", "PARTNER"],
    hunting: {
      capture: true,
      scene: "BEACH",
      only: false,
      premium: false,
    },
    prompts: HYDREX_PROMPTS,
  },
  {
    communityId: "QUICKSWAP",
    name: "QuickSwap",
    symbol: "QUICKSWAP",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/QUICKSWAP.png",
    extraPaymentTokens: [],
    tags: ["BASE", "PARTNER"],
    prompts: QUICKSWAP_PROMPTS,
  },
  {
    communityId: "HUNGRYDEGEN",
    name: "Hungry Degens",
    symbol: "HUNGRYDEGEN",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/HUNGRYDEGEN.png",
    extraPaymentTokens: [],
    tags: ["BASE", "PARTNER"],
    artOverrides: {
      kawaii: [
        `${KAWAII_PREFIX}/HUNGRYDEGENKAWAII1.png`,
        `${KAWAII_PREFIX}/HUNGRYDEGENKAWAII2.png`,
        `${KAWAII_PREFIX}/HUNGRYDEGENKAWAII3.png`,
        `${KAWAII_PREFIX}/HUNGRYDEGENKAWAII4.png`,
        `${KAWAII_PREFIX}/HUNGRYDEGENKAWAII5.png`,
      ],
      dragon: [
        `${DRAGON_PREFIX}/HUNGRYDEGENDRAGON1.png`,
        `${DRAGON_PREFIX}/HUNGRYDEGENDRAGON2.png`,
        `${DRAGON_PREFIX}/HUNGRYDEGENDRAGON3.png`,
        `${DRAGON_PREFIX}/HUNGRYDEGENDRAGON4.png`,
      ],
      degen: [
        `${DEGEN_PREFIX}/HUNGRYDEGENDEGEN1.png`,
        `${DEGEN_PREFIX}/HUNGRYDEGENDEGEN2.png`,
        `${DEGEN_PREFIX}/HUNGRYDEGENDEGEN3.png`,
        `${DEGEN_PREFIX}/HUNGRYDEGENDEGEN4.png`,
      ],
    },
  },
  {
    communityId: "PANIC",
    name: "Panic",
    symbol: "PANIC",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/PANIC.png",
    extraPaymentTokens: [],
    tags: ["BASE", "PARTNER"],
    artOverrides: {
      kawaii: [
        `${KAWAII_PREFIX}/PANICKAWAII1.png`,
        `${KAWAII_PREFIX}/PANICKAWAII2.png`,
        `${KAWAII_PREFIX}/PANICKAWAII3.png`,
        `${KAWAII_PREFIX}/PANICKAWAII4.png`,
        `${KAWAII_PREFIX}/PANICKAWAII5.png`,
        `${KAWAII_PREFIX}/PANICKAWAII6.png`,
        `${KAWAII_PREFIX}/PANICKAWAII7.png`,
        `${KAWAII_PREFIX}/PANICKAWAII8.png`,
        `${KAWAII_PREFIX}/PANICKAWAII9.png`,
        `${KAWAII_PREFIX}/PANICKAWAII10.png`,
        `${KAWAII_PREFIX}/PANICKAWAII11.png`,
        `${KAWAII_PREFIX}/PANICKAWAII12.png`,
        `${KAWAII_PREFIX}/PANICKAWAII13.png`,
        `${KAWAII_PREFIX}/PANICKAWAII14.png`,
        `${KAWAII_PREFIX}/PANICKAWAII15.png`,
        `${KAWAII_PREFIX}/PANICKAWAII16.png`,
        `${KAWAII_PREFIX}/PANICKAWAII17.png`,
        `${KAWAII_PREFIX}/PANICKAWAII18.png`,
        `${KAWAII_PREFIX}/PANICKAWAII19.png`,
        `${KAWAII_PREFIX}/PANICKAWAII20.png`,
        `${KAWAII_PREFIX}/PANICKAWAII21.png`,
        `${KAWAII_PREFIX}/PANICKAWAII22.png`,
        `${KAWAII_PREFIX}/PANICKAWAII23.png`,
      ],
      dragon: [
        `${DRAGON_PREFIX}/PANICDRAGON1.png`,
        `${DRAGON_PREFIX}/PANICDRAGON2.png`,
        `${DRAGON_PREFIX}/PANICDRAGON3.png`,
        `${DRAGON_PREFIX}/PANICDRAGON4.png`,
        `${DRAGON_PREFIX}/PANICDRAGON5.png`,
        `${DRAGON_PREFIX}/PANICDRAGON6.png`,
      ],
      degen: [
        `${DEGEN_PREFIX}/PANICDEGEN1.png`,
        `${DEGEN_PREFIX}/PANICDEGEN2.png`,
        `${DEGEN_PREFIX}/PANICDEGEN3.png`,
        `${DEGEN_PREFIX}/PANICDEGEN4.png`,
        `${DEGEN_PREFIX}/PANICDEGEN5.png`,
        `${DEGEN_PREFIX}/PANICDEGEN6.png`,
        `${DEGEN_PREFIX}/PANICDEGEN7.png`,
        `${DEGEN_PREFIX}/PANICDEGEN8.png`,
        `${DEGEN_PREFIX}/PANICDEGEN9.png`,
        `${DEGEN_PREFIX}/PANICDEGEN10.png`,
        `${DEGEN_PREFIX}/PANICDEGEN11.png`,
        `${DEGEN_PREFIX}/PANICDEGEN12.png`,
      ],
    },
  },
  {
    communityId: "FACTOR",
    name: "FactorFi",
    symbol: "FACTOR",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/FACTOR.png",
    extraPaymentTokens: [],
    tags: ["BASE", "PARTNER"],
    prompts: FACTOR_PROMPTS,
  },
  {
    communityId: "LOFFY",
    name: "Loffy",
    symbol: "LOFFY",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/LOFFY.png",
    extraPaymentTokens: [],
    tags: ["BASE", "PARTNER"],
    hunting: {
      capture: true,
      scene: "FARM",
      only: false,
      premium: false,
    },
    prompts: LOFFY_PROMPTS,
  },
  {
    communityId: "TOPI",
    name: "Topi",
    symbol: "TOPI",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/TOPI.png",
    extraPaymentTokens: [],
    tags: ["BASE", "PARTNER"],
    prompts: TOPI_PROMPTS,
  },
  {
    communityId: "SOS",
    name: "SOS",
    symbol: "SOS",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/SOS.png",
    extraPaymentTokens: [],
    tags: ["BASE", "PARTNER"],
    prompts: SOS_PROMPTS,
  },
  {
    communityId: "FARCASTER",
    name: "Farcaster",
    symbol: "FARCASTER",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/FARCASTER.png",
    extraPaymentTokens: [],
    tags: ["BASE", "PARTNER"],
    prompts: FARCASTER_PROMPTS,
  },
  {
    communityId: "DAEMONS",
    name: "Daemons",
    symbol: "DAEMONS",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/DAEMONS.png",
    extraPaymentTokens: [],
    tags: ["BASE", "PARTNER"],
    prompts: DAEMONS_PROMPTS,
    hunting: {
      capture: true,
      scene: "WOODS",
      only: false,
      premium: false,
    },
  },
  {
    communityId: "BASEDMC",
    name: "Based Minecraft",
    symbol: "BASEDMC",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/BASEDMC.png",
    extraPaymentTokens: [],
    tags: ["BASE", "MEME"],
    prompts: BASEDMC_PROMPTS,
  },
  {
    communityId: "UPTOPIA",
    name: "UpTopia",
    symbol: "UPTOPIA",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/UPTOPIA.png",
    extraPaymentTokens: [],
    tags: ["BASE", "MEME"],
    hunting: {
      capture: true,
      scene: "BEACH",
      only: false,
      premium: false,
    },
    prompts: UPTOPIA_PROMPTS,
  },
  {
    communityId: "SQUIRT",
    name: "Base is for...",
    symbol: "SQUIRT",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/SQUIRT.png",
    extraPaymentTokens: [],
    tags: ["BASE", "MEME"],
    prompts: SQUIRT_PROMPTS,
    inactive: true,
  },
  {
    communityId: "REGENERATES",
    name: "Regenerates",
    symbol: "REGENERATES",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/REGENERATES.png",
    extraPaymentTokens: [],
    tags: ["BASE", "PARTNER"],
    artOverrides: {
      kawaii: [
        `${KAWAII_PREFIX}/REGENERATES1.png`,
        `${KAWAII_PREFIX}/REGENERATES2.png`,
      ],
      dragon: [
        `${DRAGON_PREFIX}/REGENERATES1.png`,
        `${DRAGON_PREFIX}/REGENERATES2.png`,
        `${DRAGON_PREFIX}/REGENERATES3.png`,
      ],
      degen: [
        `${DEGEN_PREFIX}/REGENERATES1.png`,
        `${DEGEN_PREFIX}/REGENERATES2.png`,
        `${DEGEN_PREFIX}/REGENERATES3.png`,
      ],
    },
  },
  {
    communityId: "BARIO",
    name: "Bario",
    symbol: "BARIO",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/BARIO.png",
    extraPaymentTokens: [],
    tags: ["BASE", "PARTNER"],
    hunting: {
      capture: true,
      scene: "FARM",
      only: false,
      premium: false,
    },
    prompts: BARIO_PROMPTS,
  },
  {
    communityId: "FOXARIA",
    name: "Foxaria",
    symbol: "FOXARIA",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/FOXARIA.png",
    extraPaymentTokens: [],
    tags: ["BASE", "PARTNER"],
    hunting: {
      capture: true,
      scene: "FARM",
      only: false,
      premium: false,
    },
    prompts: FOXARIA_PROMPTS,
  },
  {
    communityId: "PACAAI",
    name: "Alpaca Network",
    symbol: "PACAAI",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/PACAAI.png",
    extraPaymentTokens: [],
    tags: ["BASE", "PARTNER"],
    prompts: PACAAI_PROMPTS,
  },
  {
    communityId: "CATTOWN",
    name: "Cat Town",
    symbol: "CATTOWN",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/CATTOWN.png",
    extraPaymentTokens: [],
    tags: ["BASE", "PARTNER"],
    hunting: {
      capture: true,
      scene: "FARM",
      only: false,
      premium: false,
    },
    prompts: CATTOWN_PROMPTS,
  },
  {
    communityId: "MNRY",
    name: "Moonray",
    symbol: "MNRY",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/MNRY.png",
    extraPaymentTokens: [],
    tags: ["BASE", "PARTNER"],
    prompts: MNRY_PROMPTS,
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
    hunting: {
      capture: true,
      scene: "TOWN",
      only: false,
      premium: false,
    },
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
    hunting: {
      capture: true,
      scene: "TOWN",
      only: false,
      premium: false,
    },
  },
  {
    communityId: "TOSHI",
    name: "Toshi",
    symbol: "TOSHI",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/TOSHI.png",
    extraPaymentTokens: [],
    tags: ["BASE", "MEME"],
    hunting: {
      capture: true,
      scene: "TOWN",
      only: false,
      premium: false,
    },
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
    hunting: {
      capture: true,
      scene: "BEACH",
      only: false,
      premium: false,
    },
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
    hunting: {
      capture: true,
      scene: "TOWN",
      only: false,
      premium: false,
    },
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
    hunting: {
      capture: true,
      scene: "FARM",
      only: false,
      premium: false,
    },
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
    hunting: {
      capture: true,
      scene: "FARM",
      only: false,
      premium: false,
    },
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
    hunting: {
      capture: true,
      scene: "TOWN",
      only: false,
      premium: false,
    },
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
    hunting: {
      capture: true,
      scene: "FARM",
      only: false,
      premium: false,
    },
  },
  {
    communityId: "TIMI",
    name: "This Is My Iguana",
    symbol: "TIMI",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/TIMI.png",
    extraPaymentTokens: [],
    tags: ["PARTNER", "MEME", "BASE"],
    hunting: {
      capture: true,
      scene: "WOODS",
      only: false,
      premium: false,
    },
  },
  {
    communityId: "UNLUCKY",
    name: "Unlucky",
    symbol: "UNLUCKY",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/UNLUCKY.png",
    extraPaymentTokens: [],
    tags: ["PARTNER", "MEME", "BASE"],
    hunting: {
      capture: true,
      scene: "TOWN",
      only: false,
      premium: false,
    },
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
    hunting: {
      capture: true,
      scene: "WOODS",
      only: false,
      premium: false,
    },
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
    hunting: {
      capture: true,
      scene: "FARM",
      only: false,
      premium: false,
    },
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
    hunting: {
      capture: true,
      scene: "WOODS",
      only: false,
      premium: false,
    },
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
    hunting: {
      capture: true,
      scene: "TOWN",
      only: false,
      premium: false,
    },
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
    hunting: {
      capture: true,
      scene: "BEACH",
      only: false,
      premium: false,
    },
  },
  {
    communityId: "ABOND",
    name: "ApeBond",
    symbol: "ABOND",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/ABOND.png",
    extraPaymentTokens: [],
    tags: ["PARTNER"],
    hunting: {
      capture: true,
      scene: "WOODS",
      only: false,
      premium: false,
    },
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
    hunting: {
      capture: true,
      scene: "WOODS",
      only: false,
      premium: false,
    },
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
    hunting: {
      capture: true,
      scene: "WOODS",
      only: false,
      premium: false,
    },
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
    hunting: {
      capture: true,
      scene: "BEACH",
      only: false,
      premium: false,
    },
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
    hunting: {
      capture: true,
      scene: "BEACH",
      only: false,
      premium: false,
    },
  },
  {
    communityId: "COW",
    name: "CoW Swap",
    symbol: "COW",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/COW.png",
    extraPaymentTokens: [],
    tags: ["DEFI", "BASE"],
    hunting: {
      capture: true,
      scene: "FARM",
      only: false,
      premium: false,
    },
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
    hunting: {
      capture: true,
      scene: "TOWN",
      only: false,
      premium: false,
    },
  },
  {
    communityId: "ETH",
    name: "Ethereum",
    symbol: "ETH",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/ETH.png",
    extraPaymentTokens: [],
    tags: ["BLUECHIP"],
    hunting: {
      capture: true,
      scene: "TOWN",
      only: false,
      premium: false,
    },
  },
  {
    communityId: "USDC",
    name: "USDC",
    symbol: "USDC",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/USDC.png",
    extraPaymentTokens: [],
    tags: ["BLUECHIP"],
    hunting: {
      capture: true,
      scene: "WOODS",
      only: false,
      premium: false,
    },
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
    hunting: {
      capture: true,
      scene: "WOODS",
      only: false,
      premium: false,
    },
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
    hunting: {
      capture: true,
      scene: "BEACH",
      only: false,
      premium: false,
    },
  },
  {
    communityId: "FLOKI",
    name: "Floki",
    symbol: "FLOKI",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/FLOKI.png",
    extraPaymentTokens: [],
    tags: ["MEME"],
    hunting: {
      capture: true,
      scene: "WOODS",
      only: false,
      premium: false,
    },
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
    hunting: {
      capture: true,
      scene: "FARM",
      only: false,
      premium: false,
    },
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
    hunting: {
      capture: true,
      scene: "BEACH",
      only: false,
      premium: false,
    },
  },
  {
    communityId: "OMNI",
    name: "Omni",
    symbol: "OMNI",
    logoURI:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/main/assets/tokens/OMNI.png",
    extraPaymentTokens: [],
    tags: [],
    hunting: {
      capture: true,
      scene: "BEACH",
      only: false,
      premium: false,
    },
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
