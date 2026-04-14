
const tripsData = [
  {
    id: 1,
    // UI ke slug se EXACT match hona chahiye
    slug: "kashmir-backpacking-trip/4n5d",
    title: "Kashmir Backpacking Trip - 4N/5D",
    image: "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be",
    description: "Paradise on Earth with stunning landscapes. Enjoy the beauty of Srinagar and Gulmarg.",
    visits: 8,
    duration: "5 Days 4 Nights",
    price: 16999,
    plans: ["5 Days Srinagar Trip", "Gulmarg Snow Trip", "Sonmarg Visit"],
  },
  {
    id: 2,
    slug: "kashmir-backpacking-trip/5n6d",
    title: "Kashmir Backpacking Trip - 5N/6D",
    image: "https://images.unsplash.com/photo-1614591276564-7b3e69347a48",
    description: "Explore the deeper valleys and hidden gems of Kashmir in this 6-day journey.",
    visits: 12,
    duration: "6 Days 5 Nights",
    price: 18999,
    plans: ["Pahalgam Visit", "Doodhpathri Trek", "Shikara Ride"],
  },
  {
    id: 3,
    slug: "kashmir-backpacking-trip/6n7d",
    title: "Kashmir Backpacking Trip - 6N/7D",
    image: "https://images.unsplash.com/photo-1643449416258-5c8e7ec598b1",
    description: "A complete week-long experience of the Kashmiri lifestyle and mountains.",
    visits: 15,
    duration: "7 Days 6 Nights",
    price: 20999,
    plans: ["Betaab Valley", "Aru Valley", "Sinthan Top Visit"],
  },
  {
    id: 4,
    slug: "manali-trip/4n5d",
    title: "Manali Adventure Trip - 3N/4D",
    image: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Enjoy snow-capped mountains, Solang Valley adventures and cozy Manali town experiences.",
    visits: 10,
    duration: "4 Days 3 Nights",
    price: 12999,
    plans: ["Solang Valley", "Hadimba Temple", "Mall Road Stroll"],
  },
  {
    id: 5,
    slug: "manali-trip/5n6d",
    title: "Manali Adventure Trip - 4N/5D",
    image: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c",
    description: "A longer Manali escape with hill station hikes, river rafting and mountain culture.",
    visits: 12,
    duration: "5 Days 4 Nights",
    price: 14999,
    plans: ["Rohtang Pass", "Beas River Rafting", "Old Manali Cafe Crawl"],
  },
  {
    id: 6,
    slug: "manali-trip/6n7d",
    title: "Manali Adventure Trip - 5N/6D",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7",
    description: "Explore Manali’s valleys, hot springs and scenic trails across six memorable days.",
    visits: 14,
    duration: "6 Days 5 Nights",
    price: 16999,
    plans: ["Jogini Waterfall", "Solang Valley", "Nicholas Roerich Art Gallery"],
  },
  {
  id: 7,
  slug: "char-dham-yatra/9n10d",
  title: "Char Dham Yatra",
  image: "https://images.unsplash.com/photo-1623952146070-f13fc902f769?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  description: "The Char Dham Yatra is a sacred pilgrimage covering four revered Hindu shrines in Uttarakhand: Yamunotri, Gangotri, Kedarnath, and Badrinath. Experience a soul-purifying journey through the Greater Himalayan Range.",
  duration: "10 Days 9 Nights",
  price: 24499, 
  
  highlights: [
    "Visit all four shrines: Yamunotri, Gangotri, Kedarnath, & Badrinath",
    "Ganga Aarti in Haridwar",
    "Visit Mana Village (Indo-Tibetan border)",
    "Trek to Tungnath (Highest Shiva temple)",
    "See confluences at Rudraprayag & Devprayag"
  ],

  itinerary: [
    { day: 1, title: "Haridwar to Barkot", details: "Travel to Barkot (180 km). Visit Kempty Falls and Lakhamandal Temple." },
    { day: 2, title: "Yamunotri Darshan", details: "Drive to Janki Chatti then 6km trek to Yamunotri. Visit Surya Kund and Divya Shila." },
    { day: 3, title: "Barkot to Uttarkashi", details: "Drive to Uttarkashi (80 km). Visit Vishwanath Temple and Shakti Temple." },
    { day: 4, title: "Gangotri Darshan", details: "Visit Gangotri Temple and Bhagirath Shila. Return to Uttarkashi." },
    { day: 5, title: "Uttarkashi to Sonprayag", details: "Long drive (220 km) via Tehri Dam and Rudraprayag." },
    { day: 6, title: "Kedarnath Trek", details: "22 km trek from Sonprayag to Kedarnath. Stay in guesthouse/camps." },
    { day: 7, title: "Kedarnath Darshan & Return", details: "Early morning darshan and trek back to Sonprayag." },
    { day: 8, title: "Sonprayag to Joshimath", details: "Drive via Chopta. Visit Tungnath Temple and Chandrashila Peak." },
    { day: 9, title: "Badrinath Darshan", details: "Visit Badrinath Temple, Tapt Kund, and Mana Village. Back to Joshimath." },
    { day: 10, title: "Haridwar Drop", details: "Return journey (280 km) via Devprayag confluence." }
  ],

  inclusions: [
    "Transportation (Sedan/SUV/TT)",
    "Stay in Hotel/Camps/Guesthouses",
    "Breakfast & Dinner (Except Kedarnath)",
    "Driver Allowance, Toll Taxes, & Parking",
    "E-Yatra Pass Assistance"
  ],

  exclusions: [
    "5% GST",
    "Lunch & Personal Snacks",
    "Trekking expenses (Pony/Palanquin)",
    "Helicopter tickets (Subject to availability)",
    "Sightseeing Entrance Fees"
  ],

  packages: [
    { name: "Budget", price: 24999 },
    // { name: "Standard", price: 27499 },
    // { name: "Deluxe", price: 32499 }
  ],

  essentials: [
    "Mandatory E-Yatra Pass",
    "Daily journey starts by 8:00 AM",
    "No vehicle movement after 7:30 PM in mountains",
    "Carry painkillers, Paracetamol, and Oxygen cans"
  ]
},
  // {
  //   id: 7,
  //   slug: "char-dham-yatra/9n10d",
  //   title: "CharDham Yatra 10D/9N Per Person",
  //   image: "https://images.unsplash.com/photo-1540214354326-6a70b8b4c672",
  //   description: "A spiritual journey to Yamunotri, Gangotri, Kedarnath and Badrinath with peaceful mountain vibes.",
  //   visits: 9,
  //   duration: "10 Days 9 Nights",
  //   price: 24999,
  //   plans: ["Yamunotri", "Gangotri", "Kedarnath"],
  // },
//   {
//   id: 7,
//   slug: "char-dham-yatra-9n10d",
//   title: "Char Dham Yatra [Haridwar to Haridwar]",
//   image: "/images/chardham.jpg", // Kedarnath temple image best rahegi
//   description: "The Char Dham Yatra is a sacred pilgrimage covering four revered Hindu shrines in Uttarakhand: Yamunotri, Gangotri, Kedarnath, and Badrinath[cite: 45]. Experience a soul-purifying journey through the Greater Himalayan Range[cite: 3, 63].",
//   duration: "10 Days 9 Nights [cite: 32]",
//   price: 24499, // Budget price [cite: 225]
  
//   // Quick Highlights for the sidebar or top section
//   highlights: [
//     "Visit all four shrines: Yamunotri, Gangotri, Kedarnath, & Badrinath [cite: 45]",
//     "Ganga Aarti in Haridwar [cite: 52]",
//     "Visit Mana Village (Indo-Tibetan border) [cite: 177]",
//     "Trek to Tungnath (Highest Shiva temple) [cite: 162]",
//     "See confluences at Rudraprayag & Devprayag [cite: 129, 189]"
//   ],

//   // Detailed day-wise itinerary [cite: 17]
//   itinerary: [
//     { day: 1, title: "Haridwar to Barkot", details: "Travel to Barkot (180 km). Visit Kempty Falls and Lakhamandal Temple[cite: 74, 78, 79]." },
//     { day: 2, title: "Yamunotri Darshan", details: "Drive to Janki Chatti then 6km trek to Yamunotri. Visit Surya Kund and Divya Shila[cite: 87, 89, 92, 93]." },
//     { day: 3, title: "Barkot to Uttarkashi", details: "Drive to Uttarkashi (80 km). Visit Vishwanath Temple and Shakti Temple[cite: 100, 102, 104]." },
//     { day: 4, title: "Gangotri Darshan", details: "Visit Gangotri Temple and Bhagirath Shila. Return to Uttarkashi[cite: 112, 116, 117]." },
//     { day: 5, title: "Uttarkashi to Sonprayag", details: "Long drive (220 km) via Tehri Dam and Rudraprayag[cite: 125, 126, 129]." },
//     { day: 6, title: "Kedarnath Trek", details: "22 km trek from Sonprayag to Kedarnath. Stay in guesthouse/camps[cite: 138, 142]." },
//     { day: 7, title: "Kedarnath Darshan & Return", details: "Early morning darshan and trek back to Sonprayag[cite: 149, 152]." },
//     { day: 8, title: "Sonprayag to Joshimath", details: "Drive via Chopta. Visit Tungnath Temple and Chandrashila Peak[cite: 159, 162, 163]." },
//     { day: 9, title: "Badrinath Darshan", details: "Visit Badrinath Temple, Tapt Kund, and Mana Village. Back to Joshimath[cite: 172, 175, 176, 177]." },
//     { day: 10, title: "Haridwar Drop", details: "Return journey (280 km) via Devprayag confluence[cite: 186, 187, 189]." }
//   ],

//   // What's included in the price [cite: 195]
//   inclusions: [
//     "Transportation (Sedan/SUV/TT) [cite: 197, 198]",
//     "Stay in Hotel/Camps/Guesthouses [cite: 198]",
//     "Breakfast & Dinner (Except Kedarnath) [cite: 198]",
//     "Driver Allowance, Toll Taxes, & Parking [cite: 198]",
//     "E-Yatra Pass Assistance [cite: 198]"
//   ],

//   // Extra costs [cite: 202]
//   exclusions: [
//     "5% GST [cite: 207]",
//     "Lunch & Personal Snacks [cite: 205]",
//     "Trekking expenses (Pony/Palanquin) [cite: 208]",
//     "Helicopter tickets (Subject to availability) [cite: 270]",
//     "Sightseeing Entrance Fees [cite: 217]"
//   ],

//   // Pricing Tiers [cite: 222]
//   packages: [
//     { name: "Budget", price: 24499 },
//     { name: "Standard", price: 27499 },
//     { name: "Deluxe", price: 32499 }
//   ],

//   // Mandatory Guidelines [cite: 237]
//   essentials: [
//     "Mandatory E-Yatra Pass [cite: 242]",
//     "Daily journey starts by 8:00 AM [cite: 244]",
//     "No vehicle movement after 7:30 PM in mountains [cite: 245]",
//     "Carry painkillers, Paracetamol, and Oxygen cans [cite: 255, 258]"
//   ]
// },


  {
    id: 8,
    slug: "do-dham-yatra/5n6d",
    title: "Do Dham Yatra 6D/5N Per Person",
    image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
    description: "A relaxed Char Dham pilgrimage with extra rest days and sacred rituals.",
    visits: 11,
    duration: "6 Days 5 Nights",
    price: 15999,
    plans: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
  },
  {
    id: 9,
    slug: "kedarnath-yatra/3n4d",
    title: "Kedarnath Yatra 4D/3N Per Person",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    description: "A comprehensive Char Dham expedition with temple visits and Himalayan views.",
    visits: 13,
    duration: "4 Days 3 Nights",
    price: 9999,
    plans: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath", "Local Temple Darshan"],
  },
  {
    id: 10,
    slug: "ladakh-bike-tour/4n5d",
    title: "Ladakh Bike Tour - 4N/5D",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    description: "Ride through high passes, crystal lakes and the raw beauty of Ladakh.",
    visits: 10,
    duration: "6 Days 5 Nights",
    price: 21999,
    plans: ["Leh Local Sightseeing", "Nubra Valley", "Khardung La"],
  },
  {
    id: 11,
    slug: "ladakh-bike-tour/5n6d",
    title: "Ladakh Bike Tour - 5N/6D",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    description: "A longer Ladakh ride with Pangong Lake, Tso Moriri and rugged landscapes.",
    visits: 12,
    duration: "7 Days 6 Nights",
    price: 23999,
    plans: ["Pangong Lake", "Nubra Valley", "Tso Moriri"],
  },
  {
    id: 12,
    slug: "ladakh-bike-tour/6n7d",
    title: "Ladakh Bike Tour - 6N/7D",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    description: "The ultimate Ladakh adventure with high-altitude roads, lakes and remote villages.",
    visits: 14,
    duration: "8 Days 7 Nights",
    price: 25999,
    plans: ["Pangong Lake", "Nubra Valley", "Tso Moriri", "Magnetic Hill"],
  },
  {
    id: 13,
    slug: "spiti-bike-tour/4n5d",
    title: "Spiti Bike Tour - 4N/5D",
    image: "https://images.unsplash.com/photo-1494071894512-5c1d13b1559d",
    description: "Ride through Spiti’s stark landscapes and visit ancient monasteries.",
    visits: 9,
    duration: "5 Days 4 Nights",
    price: 17999,
    plans: ["Kaza", "Key Monastery", "Chandratal Lake"],
  },
  {
    id: 14,
    slug: "spiti-bike-tour/5n6d",
    title: "Spiti Bike Tour - 5N/6D",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
    description: "Explore high-altitude villages, monasteries and dramatic mountain roads.",
    visits: 11,
    duration: "6 Days 5 Nights",
    price: 19999,
    plans: ["Kaza", "Langza", "Hikkim"],
  },
  {
    id: 15,
    slug: "spiti-bike-tour/6n7d",
    title: "Spiti Bike Tour - 6N/7D",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2",
    description: "A full Spiti odyssey with remote passes, traditional villages and alpine beauty.",
    visits: 13,
    duration: "7 Days 6 Nights",
    price: 21999,
    plans: ["Kaza", "Langza", "Tabo Monastery", "Chandratal"],
  }
];

export default tripsData;

// const tripsData = [
//   {
//     id: 1,
//     slug: "kashmir-backpacking-trip", // Unique Slug
//     title: "Kashmir Backpacking",
//     image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a",
//     description: "Paradise on Earth with stunning landscapes.",
//     visits: 8,
//     duration: "5 Days 4 Nights",
//     price: 16999,
//     plans: ["5 Days Srinagar Trip", "Gulmarg Snow Trip", "Sonmarg Visit"],
//   },
//   {
//     id: 2,
//     slug: "manali-adventure-trip",
//     title: "Manali Adventure",
//     image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7",
//     description: "Snowy mountains and adventure.",
//     visits: 6,
//     duration: "4 Days 3 Nights",
//     price: 12999,
//     plans: ["Rohtang Pass", "Solang Valley"],
//   },
//   {
//     id: 3,
//     slug: "kashmir-backpacking-trip-5n6d",
//     title: "Kashmir Backpacking - 5N/6D",
//     image: "https://images.unsplash.com/photo-1614591276564-7b3e69347a48",
//     description: "Explore the deeper valleys of Kashmir.",
//     visits: 12,
//     duration: "6 Days 5 Nights",
//     price: 18999,
//     plans: ["Pahalgam Visit", "Doodhpathri Trek"],
//   },
//   {
//     id: 4,
//     slug: "manali-solang-special",
//     title: "Manali - Solang Special",
//     image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7",
//     description: "Perfect for winter lovers.",
//     visits: 5,
//     duration: "3 Days 2 Nights",
//     price: 9999,
//     plans: ["Hadimba Temple", "Old Manali Cafe Crawl"],
//   }
// ];

// export default tripsData;