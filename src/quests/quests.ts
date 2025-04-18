import { Quest } from "../types";

export const quests: Quest[] = [
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
    id: "craft_item",
    name: "Craft an Item",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/crafting-start.png",
    type: "Story",
    questPoints: 1,
    description:
      "Visit Big Dick Rick at the Crafting Workshop to learn the art of crafting and create your first item. Give him what he's asking for to get XP!",
    requirements: [],
    rewards: [],
    check: "Player has earned crafting XP",
    verified: false,
    isActive: true,
    hint: "Head to the Crafting Workshop and talk to Rick - he'll teach you the basics of crafting.",
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
      { itemId: "727", amount: 1 }, // Common Shard Cluster
    ],
    check: "Player has won at least one PvP battle",
    verified: false,
    isActive: true,
    hint: "You can also click on the weights rack in your room to get recommended battles!",
  },
  {
    questId: 3,
    id: "gm_streak_5",
    name: "5 Day GM Streak",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/GM-5-day.png",
    type: "Task",
    questPoints: 1,
    description: "Show your dedication by maintaining a GM streak for 5 days.",
    requirements: [],
    rewards: [
      { itemId: "727", amount: 1 }, // Common Shard Cluster
    ],
    check: "Player GM streak ≥ 5 days",
    verified: false,
    isActive: true,
    hint: "Say GM in chat once per day to keep your streak going!",
  },
  {
    questId: 4,
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
      { itemId: "727", amount: 2 }, // Common Shard Cluster
      { itemId: "728", amount: 1 }, // Large Common Shard Cluster
    ],
    check: "Player GM streak ≥ 25 days",
    verified: false,
    isActive: true,
    hint: "Keep saying GM daily - set a reminder if needed to maintain your streak!",
  },
  {
    questId: 5,
    id: "gm_streak_50",
    name: "50 Day GM Streak",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/GM-50-day.png",
    type: "Task",
    questPoints: 1,
    description: "Keep your GM streak alive for an impressive 50 days.",
    requirements: [],
    rewards: [
      { itemId: "737", amount: 2 }, // Rare Shard Cluster
    ],
    check: "Player GM streak ≥ 50 days",
    verified: true,
    isActive: true,
    hint: "Don't break that streak now!",
  },
  {
    questId: 6,
    id: "gm_streak_100",
    name: "100 Day GM Streak",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/GM-100-day.png",
    type: "Task",
    questPoints: 2,
    description: "Achieve legendary status with a 100-day GM streak.",
    requirements: [],
    rewards: [
      { itemId: "255", amount: 5 }, // Legendary Shards
    ],
    check: "Player GM streak ≥ 100 days",
    verified: true,
    isActive: true,
    hint: "Keep GMing babyyyy!",
  },
  {
    questId: 7,
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
    questId: 8,
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
    questId: 9,
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
    questId: 10,
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
    questId: 11,
    id: "crafting_stud",
    name: "Crafting Stud",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/crafting-novice.png",
    type: "Skilling",
    questPoints: 1,
    description: "Develop your crafting abilities to reach level 33.",
    requirements: ["Level 33 Crafting"],
    rewards: [],
    check: "Player Crafting level ≥ 33",
    verified: true,
    isActive: true,
    hint: "Keep crafting items at the Workshop to gain XP - practice makes perfect!",
  },
  {
    questId: 12,
    id: "crafting_player",
    name: "Crafting Player",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/crafting-stud.png",
    type: "Skilling",
    questPoints: 2,
    description: "Hone your crafting skills to achieve level 66.",
    requirements: ["Level 66 Crafting"],
    rewards: [],
    check: "Player Crafting level ≥ 66",
    verified: true,
    isActive: true,
    hint: "Try crafting higher-tier items for better XP rates!",
  },
  {
    questId: 13,
    id: "crafting_legend",
    name: "Crafting Legend",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/crafting-legend.png",
    type: "Skilling",
    questPoints: 3,
    description: "Master the art of crafting by reaching level 99.",
    requirements: ["Level 99 Crafting"],
    rewards: [],
    check: "Player Crafting level ≥ 99",
    verified: true,
    isActive: true,
    hint: "The path to 99 is long - focus on the most efficient crafting methods and rare materials!",
  },
  {
    questId: 14,
    id: "become_degen",
    name: "Become a Degen!",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/degen-start.png",
    type: "Task",
    questPoints: 1,
    description:
      "Embrace the degen lifestyle by consuming your first Degen item.",
    requirements: ["Degen Consumable Item"],
    rewards: [],
    check: "Player has > 0 Degen XP",
    verified: true,
    isActive: true,
    hint: "Find and consume any Degen item to start your journey into degeneracy!",
  },
  {
    questId: 15,
    id: "degeneracy_stud",
    name: "Degeneracy Stud",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/degen-novice.png",
    type: "Skilling",
    questPoints: 1,
    description: "Embrace the degen life and reach level 33 Degeneracy.",
    requirements: ["Level 33 Degeneracy"],
    rewards: [],
    check: "Player Degeneracy level ≥ 33",
    verified: true,
    isActive: true,
    hint: "Keep consuming Degen items regularly to build up that XP!",
  },
  {
    questId: 16,
    id: "degeneracy_player",
    name: "Degeneracy Player",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/degen-stud.png",
    type: "Skilling",
    questPoints: 2,
    description: "Further your degen mastery to level 66.",
    requirements: ["Level 66 Degeneracy"],
    rewards: [],
    check: "Player Degeneracy level ≥ 66",
    verified: true,
    isActive: true,
    hint: "Mix different types of Degen items for optimal XP gains!",
  },
  {
    questId: 17,
    id: "degeneracy_legend",
    name: "Degeneracy Legend",
    image:
      "https://raw.githubusercontent.com/alma-labs/tokiemon-lists/refs/heads/main/assets/quests/degen-legend.png",
    type: "Skilling",
    questPoints: 3,
    description: "Become a true degen legend by reaching level 99.",
    requirements: ["Level 99 Degeneracy"],
    rewards: [],
    check: "Player Degeneracy level ≥ 99",
    verified: true,
    isActive: true,
    hint: "The ultimate degen challenge - use rare and powerful Degen items to reach the top!",
  },
];
