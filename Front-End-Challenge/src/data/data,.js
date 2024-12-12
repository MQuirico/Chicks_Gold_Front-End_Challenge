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