import { Quest } from "../types";

const PLACEHOLDER_IMAGE =
  "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/placeholder.png";

export const quests: Quest[] = [
  {
    questId: 25,
    id: "become_based",
    name: "Become Based",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/become-based.png",
    type: "Story",
    questPoints: 1,
    description: "Craft a Base Shirt.",
    requirements: ["A Base Shirt"],
    rewards: [
      { itemId: "803", amount: 1 }, // 1 Base Blue Boy Skin
      { itemId: "808", amount: 1 }, // 1 Base Blue Girl Skin
    ],
    check: "Player has crafted a Base Shirt",
    verified: false,
    isActive: true,
    hint: "Go to the Crafting Workshop and craft a Base Shirt!",
  },
  {
    questId: 0,
    id: "first_tokiemon",
    name: "My First Tokiemon",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/first-tokiemon.png",
    type: "Task",
    questPoints: 1,
    description:
      "Begin your journey by minting your very first Tokiemon from your favorite Base community.",
    requirements: [],
    rewards: [],
    check: "Player has used their free mint allocation",
    verified: false,
    isActive: true,
    hint: "Visit the Mint tab and select a community to mint your first Tokiemon for free!",
  },
  {
    questId: 1,
    id: "crafting_tutorial",
    name: "Crafting Tutorial",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/crafting-start.png",
    type: "Story",
    questPoints: 1,
    description:
      "Visit Big Dick Rick at the Crafting Workshop to learn the art of crafting and create your first item. Give him what he's asking for to get XP!",
    requirements: [],
    rewards: [],
    check: "Player has completed the crafting tutorial.",
    verified: false,
    isActive: true,
    hint: "Make sure to give Rick what he's asking for to get XP!",
  },
  {
    questId: 2,
    id: "defeat_player",
    name: "Defeat Another Player",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/first-battle.png",
    type: "Task",
    questPoints: 1,
    description:
      "Prove your worth as a trainer by defeating another player's Tokiemon in battle at the Nightclub.",
    requirements: ["A Tokiemon"],
    rewards: [
      { itemId: "256", amount: 4 }, // 4 Lube
      { itemId: "727", amount: 1 }, // 1 Common Shard Cluster
    ],
    check: "Player has won at least one PvP battle",
    verified: false,
    isActive: true,
    hint: "You can also click on the weights rack in your room to get recommended battles!",
  },
  {
    questId: 3,
    id: "say_gm",
    name: "Say GM!",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/GM-1-day.png",
    type: "Task",
    questPoints: 1,
    description: "Open your account tab and say GM!",
    requirements: [],
    rewards: [
      { itemId: "256", amount: 4 }, // 4 Lube
      { itemId: "727", amount: 1 }, // 1 Common Shard Cluster
    ],
    check: "Player has gm streak ≥ 1 day",
    verified: false,
    isActive: true,
    hint: "Say GM in chat once per day to keep your streak going!",
  },
  {
    questId: 4,
    id: "gm_streak_5",
    name: "5 Day GM Streak",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/GM-5-day.png",
    type: "Task",
    questPoints: 1,
    description: "Show your dedication by maintaining a GM streak for 5 days.",
    requirements: [],
    rewards: [
      { itemId: "256", amount: 8 }, // 8 Lube
      { itemId: "728", amount: 1 }, // 1 Large Common Shard Cluster
    ],
    check: "Player GM streak ≥ 5 days",
    verified: false,
    isActive: true,
    hint: "Say GM in chat once per day to keep your streak going!",
  },
  {
    questId: 5,
    id: "gm_streak_25",
    name: "25 Day GM Streak",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/GM-25-day.png",
    type: "Task",
    questPoints: 1,
    description:
      "Maintain your GM streak for 25 days to prove your commitment.",
    requirements: [],
    rewards: [
      { itemId: "256", amount: 50 }, // 50 Lube
      { itemId: "728", amount: 1 }, // 1 Large Common Shard Cluster
      { itemId: "730", amount: 1 }, // 1 Large Pixelite Fragment Cluster
    ],
    check: "Player GM streak ≥ 25 days",
    verified: false,
    isActive: true,
    hint: "Keep saying GM daily - set a reminder if needed to maintain your streak!",
  },
  {
    questId: 6,
    id: "gm_streak_50",
    name: "50 Day GM Streak",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/GM-50-day.png",
    type: "Task",
    questPoints: 1,
    description: "Keep your GM streak alive for an impressive 50 days.",
    requirements: [],
    rewards: [
      { itemId: "126", amount: 2 }, // 2 Kawaii Passes
      { itemId: "127", amount: 1 }, // 1 Dragon Pass
      { itemId: "791", amount: 3 }, // 3 Uncommon Geodes
    ],
    check: "Player GM streak ≥ 50 days",
    verified: true,
    isActive: true,
    hint: "Don't break that streak now!",
  },
  {
    questId: 7,
    id: "gm_streak_100",
    name: "100 Day GM Streak",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/GM-100-day.png",
    type: "Task",
    questPoints: 1,
    description: "Achieve master status with a 100-day GM streak.",
    requirements: [],
    rewards: [
      { itemId: "128", amount: 3 }, // 3 degen passes
      { itemId: "130", amount: 1 }, // 1 Blueball
      { itemId: "792", amount: 1 }, // 1 rare geode
    ],
    check: "Player GM streak ≥ 100 days",
    verified: true,
    isActive: true,
    hint: "Keep GMing babyyyy!",
  },
  {
    questId: 8,
    id: "gm_streak_200",
    name: "200 Day GM Streak",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/GM-200-day.png",
    type: "Task",
    questPoints: 2,
    description: "Achieve legendary status with a 200-day GM streak.",
    requirements: [],
    rewards: [
      { itemId: "3", amount: 50 }, // 50 degen keys
      { itemId: "128", amount: 5 }, // 5 degen passes
      { itemId: "131", amount: 1 }, // 1 moonball
    ],
    check: "Player GM streak ≥ 200 days",
    verified: true,
    isActive: true,
    hint: "Keep GMing babyyyy!",
  },
  {
    questId: 9,
    id: "gm_streak_365",
    name: "1 Year GM Streak",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/GM-1-year.png",
    type: "Task",
    questPoints: 3,
    description: "Achieve god tier status with a 365-day GM streak.",
    requirements: [],
    rewards: [
      { itemId: "3", amount: 100 }, // 100 degen keys
      { itemId: "128", amount: 10 }, // 10 degen passes
      { itemId: "172", amount: 1 }, // 1 masterbater ball
      { itemId: "793", amount: 1 }, // 1 epic geode
    ],
    check: "Player GM streak ≥ 365 days",
    verified: true,
    isActive: true,
    hint: "Keep GMing babyyyy!",
  },
  {
    questId: 10,
    id: "free_evolution",
    name: "Free Evolution",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/evo-free.png",
    type: "Task",
    questPoints: 1,
    description:
      "Visit Professor Pollak at the Evolution Lab to evolve your Starter Tokiemon into Kawaii+ Tier.",
    requirements: ["Free Tier Tokiemon", "Any Shrooom"],
    rewards: [],
    check: "Player has completed a Free Tier evolution",
    verified: false,
    isActive: false,
    hint: "Get a Shrooom and bring your Free Tier Tokiemon to Professor Pollak for evolution!",
  },
  {
    questId: 11,
    id: "basic_evolution",
    name: "Basic Evolution",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/evo-basic.png",
    type: "Task",
    questPoints: 1,
    description:
      "Work with Professor Armstrong to evolve your Kawaii+ Tier Tokiemon to the next stage.",
    requirements: ["Level 50+ Kawaii or Better Tier Tokiemon", "Basic Essence"],
    rewards: [],
    check: "Player has completed a Kawaii+ Tier evolution",
    verified: true,
    isActive: false,
    hint: "Train your Kawaii+ Tokiemon to level 50 and gather Basic Essence for evolution.",
  },
  {
    questId: 12,
    id: "advanced_evolution",
    name: "Advanced Evolution",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/evo-advanced.png",
    type: "Task",
    questPoints: 2,
    description:
      "Master advanced evolution techniques to unlock your Tokiemon's hidden potential.",
    requirements: [
      "Level 100+ Kawaii or Better Tier Tokiemon",
      "Advanced Essence",
    ],
    rewards: [],
    check: "Player has completed an Advanced evolution",
    verified: true,
    isActive: false,
    hint: "Level 100 and Advanced Essence are needed - keep training and gathering resources!",
  },
  {
    questId: 13,
    id: "ultimate_evolution",
    name: "Ultimate Evolution",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/evo-ultimate.png",
    type: "Task",
    questPoints: 3,
    description:
      "Push your Tokiemon to its absolute limits with the ultimate evolution.",
    requirements: [
      "Level 200+ Kawaii or Better Tier Tokiemon",
      "Ultimate Essence",
    ],
    rewards: [],
    check: "Player has completed an Ultimate evolution",
    verified: true,
    isActive: false,
    hint: "The pinnacle of evolution requires level 200 and Ultimate Essence - a true test of dedication!",
  },
  {
    questId: 14,
    id: "crafting_stud",
    name: "Crafting Stud",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/crafting-novice.png",
    type: "Skilling",
    questPoints: 1,
    description: "Develop your crafting abilities to reach level 33.",
    requirements: ["Level 33 Crafting"],
    rewards: [
      { itemId: "126", amount: 3 }, // 3 Kawaii Passes
      { itemId: "92", amount: 3 }, // 3 Tokieballs
    ],
    check: "Player Crafting level ≥ 33",
    verified: true,
    isActive: true,
    hint: "Keep crafting items at the Workshop to gain XP - practice makes perfect!",
  },
  {
    questId: 15,
    id: "crafting_player",
    name: "Crafting Player",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/crafting-stud.png",
    type: "Skilling",
    questPoints: 2,
    description: "Hone your crafting skills to achieve level 66.",
    requirements: ["Level 66 Crafting"],
    rewards: [
      { itemId: "126", amount: 3 }, // 3 Kawaii Passes
      { itemId: "127", amount: 3 }, // 3 Dragon Passes
      { itemId: "128", amount: 3 }, // 3 Degen Passes
      { itemId: "92", amount: 5 }, // 5 Tokieballs
    ],
    check: "Player Crafting level ≥ 66",
    verified: true,
    isActive: true,
    hint: "Try crafting higher-tier items for better XP rates!",
  },
  {
    questId: 16,
    id: "crafting_legend",
    name: "Crafting Legend",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/crafting-legend.png",
    type: "Skilling",
    questPoints: 3,
    description: "Master the art of crafting by reaching level 99.",
    requirements: ["Level 99 Crafting"],
    rewards: [
      { itemId: "796", amount: 1 }, // Crafting Cloak
    ],
    check: "Player Crafting level ≥ 99",
    verified: true,
    isActive: true,
    hint: "The path to 99 is long - focus on the most efficient crafting methods and rare materials!",
  },
  {
    questId: 17,
    id: "capture_kawaii",
    name: "Capture a Kawaii Tokiemon",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/capture-kawaii.png",
    type: "Task",
    questPoints: 1,
    description:
      "Use a Kawaii Capture pass to encounter & catch a Kawaii Tokiemon!",
    requirements: [
      "Kawaii Capture Pass",
      "A Decent Tokiemon",
      "Tokieball or Other Capture Item",
    ],
    rewards: [
      { itemId: "1", amount: 10 }, // 10 Kawaii Keys
    ],
    check: "Player has captured a Kawaii Tokiemon",
    verified: false,
    isActive: true,
    hint: "Visit the Capture tab and use a Kawaii Capture pass to catch a Kawaii Tokiemon!",
  },
  {
    questId: 18,
    id: "capture_dragon",
    name: "Capture a Dragon Tokiemon",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/capture-dragon.png",
    type: "Task",
    questPoints: 1,
    description:
      "Use a Dragon Capture pass to encounter & catch a Dragon Tokiemon!",
    requirements: [
      "Dragon Capture Pass",
      "A Strong Tokiemon",
      "Tokieball or Other Capture Item",
    ],
    rewards: [
      { itemId: "2", amount: 10 }, // 10 Dragon Keys
    ],
    check: "Player has captured a Dragon Tokiemon",
    verified: true,
    isActive: true,
    hint: "Visit the Capture tab and use a Dragon Capture pass to catch a Dragon Tokiemon!",
  },
  {
    questId: 19,
    id: "capture_degen",
    name: "Capture a Degen Tokiemon",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/capture-degen.png",
    type: "Task",
    questPoints: 1,
    description:
      "Use a Degen Capture pass to encounter & catch a Degen Tokiemon!",
    requirements: [
      "Degen Capture Pass",
      "A Powerful Tokiemon",
      "Tokieball or Other Capture Item",
    ],
    rewards: [
      { itemId: "3", amount: 10 }, // 10 Degen Keys
    ],
    check: "Player has captured a Degen Tokiemon",
    verified: true,
    isActive: true,
    hint: "Visit the Capture tab and use a Degen Capture pass to catch a Degen Tokiemon!",
  },
  {
    questId: 20,
    id: "become_degen",
    name: "Become a Degen!",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/degen-start.png",
    type: "Task",
    questPoints: 1,
    description:
      "Embrace the degen lifestyle by consuming your first Degen item.",
    requirements: ["Degen Consumable Item"],
    rewards: [
      { itemId: "256", amount: 4 }, // 4 Lube
      { itemId: "727", amount: 1 }, // 1 Common Shard Cluster
    ],
    check: "Player has > 0 Degen XP",
    verified: false,
    isActive: true,
    hint: "Talk to your momma!",
  },
  {
    questId: 21,
    id: "degeneracy_stud",
    name: "Degeneracy Stud",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/degen-novice.png",
    type: "Skilling",
    questPoints: 1,
    description: "Embrace the degen life and reach level 33 Degeneracy.",
    requirements: ["Level 33 Degeneracy"],
    rewards: [
      { itemId: "128", amount: 1 }, // 1 degen pass
      { itemId: "3", amount: 10 }, // 10 degen keys
    ],
    check: "Player Degeneracy level ≥ 33",
    verified: true,
    isActive: true,
    hint: "Keep consuming Degen items regularly to build up that XP!",
  },
  {
    questId: 22,
    id: "degeneracy_player",
    name: "Degeneracy Player",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/degen-stud.png",
    type: "Skilling",
    questPoints: 2,
    description: "Further your degen mastery to level 66.",
    requirements: ["Level 66 Degeneracy"],
    rewards: [
      { itemId: "128", amount: 10 }, // 10 degen passes
      { itemId: "3", amount: 100 }, // 100 degen keys
    ],
    check: "Player Degeneracy level ≥ 66",
    verified: true,
    isActive: true,
    hint: "Mix different types of Degen items for optimal XP gains!",
  },
  {
    questId: 23,
    id: "degeneracy_legend",
    name: "Degeneracy Legend",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/degen-legend.png",
    type: "Skilling",
    questPoints: 3,
    description: "Become a true degen legend by reaching level 99.",
    requirements: ["Level 99 Degeneracy"],
    rewards: [
      { itemId: "797", amount: 1 }, // Degen Cloak
    ],
    check: "Player Degeneracy level ≥ 99",
    verified: true,
    isActive: true,
    hint: "The ultimate degen challenge - use rare and powerful Degen items to reach the top!",
  },
  {
    questId: 24,
    id: "sacrifice_tokiemon",
    name: "Sacrifice a Tokiemon",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/sacrifice-tokiemon.png",
    type: "Task",
    questPoints: 1,
    description: "Sacrifice a Tokiemon to the altar.",
    requirements: ["A Tokiemon"],
    rewards: [
      { itemId: "256", amount: 4 }, // 4 Lube
      { itemId: "727", amount: 1 }, // 1 Common Shard Cluster
    ],
    check: "Player has sacrificed a Tokiemon",
    verified: false,
    isActive: false,
    hint: "Go to the Crafting Workshop and sacrifice a Tokiemon to the altar!",
  },
];
