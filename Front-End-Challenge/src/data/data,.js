export const residentEvil4DLC = Array.from({ length: 165 }, (_, i) => {
    const id = i + 1;
    return {
      id,
      title: `DLC Title ${id}`,
      originalPrice: (Math.random() * (29.99 - 5.99) + 5.99).toFixed(2),
      discountedPrice: (Math.random() * (24.99 - 2.99) + 2.99).toFixed(2),
      inStock: Math.random() > 0.1, // 90% chance of being in stock
      badge: Math.random() > 0.5 ? "ON SALE" : "IN STOCK",
      image: "https://via.placeholder.com/150",
      description: `This is a detailed description for DLC Title ${id}. It includes unique features and enhancements to improve your Resident Evil 4 experience.`,
      features: [
        `Feature 1 for DLC Title ${id}`,
        `Feature 2 for DLC Title ${id}`,
        `Feature 3 for DLC Title ${id}`
      ],
      platform: ["Steam", "PlayStation", "Xbox"][Math.floor(Math.random() * 3)],
    };
  });
  
  console.log(residentEvil4DLC);

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