export const products = [
  // Cyberpunk 2077
  { id: 1, game: "Cyberpunk 2077", title: "Samurai Jacket", description: "Legendary Samurai Jacket for your V.", currentPrice: 29.99, originalPrice: 39.99, onSale: true, certified: true, imageUrl: "/cyberpunk/jacket.jpg", inStock: true },
  { id: 2, game: "Cyberpunk 2077", title: "Rayfield Caliburn Car", description: "Get the fastest car in Night City.", currentPrice: 49.99, originalPrice: 59.99, onSale: false, certified: false, imageUrl: "/cyberpunk/car.jpg", inStock: true },
  { id: 3, game: "Cyberpunk 2077", title: "Neon Katana", description: "Shiny and deadly melee weapon.", currentPrice: 19.99, originalPrice: 24.99, onSale: true, certified: true, imageUrl: "/cyberpunk/katana.jpg", inStock: true },
  { id: 4, game: "Cyberpunk 2077", title: "Deluxe Soundtrack", description: "High-quality OST of Cyberpunk 2077.", currentPrice: 9.99, originalPrice: 14.99, onSale: false, certified: true, imageUrl: "/cyberpunk/ost.jpg", inStock: true },
  { id: 5, game: "Cyberpunk 2077", title: "Johnny Silverhand's Arm", description: "Replica of Johnny's cybernetic arm.", currentPrice: 39.99, originalPrice: 44.99, onSale: true, certified: true, imageUrl: "/cyberpunk/arm.jpg", inStock: true },
  { id: 6, game: "Cyberpunk 2077", title: "V's Apartment Upgrade", description: "Customize V's living space.", currentPrice: 19.99, originalPrice: 24.99, onSale: false, certified: false, imageUrl: "/cyberpunk/apartment.jpg", inStock: true },
  { id: 7, game: "Cyberpunk 2077", title: "Netrunner Suit", description: "Exclusive suit for netrunners.", currentPrice: 14.99, originalPrice: 19.99, onSale: true, certified: true, imageUrl: "/cyberpunk/suit.jpg", inStock: false },
  { id: 8, game: "Cyberpunk 2077", title: "Militech Spiderbot", description: "Deployable spiderbot companion.", currentPrice: 34.99, originalPrice: 39.99, onSale: false, certified: true, imageUrl: "/cyberpunk/spiderbot.jpg", inStock: true },
  { id: 9, game: "Cyberpunk 2077", title: "Techie Toolkit", description: "Tools for every techie's needs.", currentPrice: 12.99, originalPrice: 17.99, onSale: true, certified: false, imageUrl: "/cyberpunk/toolkit.jpg", inStock: true },
  { id: 10, game: "Cyberpunk 2077", title: "Arasaka Elite Helmet", description: "High-tech combat helmet.", currentPrice: 24.99, originalPrice: 29.99, onSale: false, certified: true, imageUrl: "/cyberpunk/helmet.jpg", inStock: false },

  // The Witcher 3: Wild Hunt
  { id: 11, game: "The Witcher 3: Wild Hunt", title: "Wolf School Armor Set", description: "Enhanced armor for Geralt.", currentPrice: 34.99, originalPrice: 44.99, onSale: true, certified: true, imageUrl: "/witcher3/armor.jpg", inStock: true },
  { id: 12, game: "The Witcher 3: Wild Hunt", title: "Blood and Wine DLC", description: "Explore the land of Toussaint.", currentPrice: 14.99, originalPrice: 19.99, onSale: false, certified: true, imageUrl: "/witcher3/bloodwine.jpg", inStock: true },
  { id: 13, game: "The Witcher 3: Wild Hunt", title: "Gwent Card Set", description: "Physical Gwent cards.", currentPrice: 9.99, originalPrice: 12.99, onSale: true, certified: false, imageUrl: "/witcher3/gwent.jpg", inStock: false },
  { id: 14, game: "The Witcher 3: Wild Hunt", title: "Aerondight Sword", description: "A legendary silver sword.", currentPrice: 24.99, originalPrice: 29.99, onSale: false, certified: true, imageUrl: "/witcher3/aerondight.jpg", inStock: true },
  { id: 15, game: "The Witcher 3: Wild Hunt", title: "Kaer Morhen Upgrade Pack", description: "Customize Geralt's stronghold.", currentPrice: 19.99, originalPrice: 24.99, onSale: true, certified: false, imageUrl: "/witcher3/kaermorhen.jpg", inStock: true },

  // Elden Ring
  { id: 16, game: "Elden Ring", title: "Raging Wolf Armor Set", description: "Armor set of the Raging Wolf.", currentPrice: 29.99, originalPrice: 39.99, onSale: true, certified: true, imageUrl: "/eldenring/wolfarmor.jpg", inStock: true },
  { id: 17, game: "Elden Ring", title: "Mimic Tear Ashes", description: "Summon the legendary mimic spirit.", currentPrice: 14.99, originalPrice: 19.99, onSale: false, certified: true, imageUrl: "/eldenring/mimicashes.jpg", inStock: true },
  { id: 18, game: "Elden Ring", title: "Erdtree Greatshield", description: "A mighty shield blessed by the Erdtree.", currentPrice: 19.99, originalPrice: 24.99, onSale: true, certified: true, imageUrl: "/eldenring/erdtree.jpg", inStock: false },

  // Placeholder items to total 165...
  { id: 163, game: "Star Wars Jedi: Survivor", title: "Lightsaber Color Pack", description: "Customize your lightsaber colors.", currentPrice: 12.99, originalPrice: 16.99, onSale: true, certified: true, imageUrl: "/starwars/lightsaberpack.jpg", inStock: true },
  { id: 164, game: "Star Wars Jedi: Survivor", title: "BD-1 Skins", description: "New skins for BD-1.", currentPrice: 7.99, originalPrice: 10.99, onSale: false, certified: false, imageUrl: "/starwars/bd1skins.jpg", inStock: true },
  { id: 165, game: "Star Wars Jedi: Survivor", title: "Survivor Outfit Pack", description: "Exclusive outfits for Cal Kestis.", currentPrice: 19.99, originalPrice: 24.99, onSale: true, certified: true, imageUrl: "/starwars/outfitpack.jpg", inStock: true }
];

  
  export const games = [
    { id: 0, label: "All games", value: null },
    { id: 1, label: "The Witcher 3: Wild Hunt", value: "The Witcher 3: Wild Hunt" },
    { id: 2, label: "Cyberpunk 2077", value: "Cyberpunk 2077" },
    { id: 3, label: "Elden Ring", value: "Elden Ring" },
    { id: 4, label: "Grand Theft Auto V", value: "Grand Theft Auto V" },
    { id: 5, label: "Red Dead Redemption 2", value: "Red Dead Redemption 2" },
    { id: 6, label: "Call of Duty: Modern Warfare II", value: "Call of Duty: Modern Warfare II" },
    { id: 7, label: "Assassin's Creed Valhalla", value: "Assassin's Creed Valhalla" },
    { id: 8, label: "Hogwarts Legacy", value: "Hogwarts Legacy" },
    { id: 9, label: "Resident Evil 4 Remake", value: "Resident Evil 4 Remake" },
    { id: 10, label: "Star Wars Jedi: Survivor", value: "Star Wars Jedi: Survivor" }
  ];

  export const priceRanges = [
    { id: 1, label: "Free", min: 0, max: 0 },
    { id: 2, label: "Up to $5", min: 0.01, max: 5 },
    { id: 3, label: "$5 - $10", min: 5.01, max: 10 },
    { id: 4, label: "$10 - $20", min: 10.01, max: 20 },
    { id: 5, label: "$20 - $50", min: 20.01, max: 50 },
    { id: 6, label: "Above $50", min: 50.01, max: 1000 }
  ];

  export const itemTypes = [
    { id: 0, label: "All", value: null },
    { id: 1, label: "DLC", value: "DLC"},
    { id: 2, label: "Upgrade", value: "Upgrade"},
    { id: 3, label: "Skin Pack", value: "Skin Pack"},
    { id: 4, label: "Expansion Pack", value: "Expansion Pack"},
    { id: 5, label: "Season Pass", value: "Season Pass"},
    { id: 6, label: "In-Game Currency", value: "In-Game Currency"},
    { id: 7, label: "Weapon Pack", value:"Weapon Pack" },
    { id: 8, label: "Character Pack", value: "Character Pack"},
    { id: 9, label: "Soundtrack", value: "Soundtrack"},
    { id: 10, label: "Cosmetic Item", value: "Cosmetic Item"}
  ];

  export const options = [
    { id: 0, label: "None", value: null },
    { id: 1, label: "Game", value: "Game"},
    { id: 2, label: "Item type", value: "Item type" },
    { id: 3, label: "Price (lowest)", value: "Price (lowest)" },
    { id: 0, label: "Price (highest)", value: "Price (highest)" },
    
    
    
]