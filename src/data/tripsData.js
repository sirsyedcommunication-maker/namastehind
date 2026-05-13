
const tripsData = [
  // {
  //   id: 1,
  //   // UI ke slug se EXACT match hona chahiye
  //   slug: "kashmir-backpacking-trip/4n5d",
  //   title: "Kashmir Backpacking Trip - 4N/5D",
  //   image: "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be",
  //   description: "Paradise on Earth with stunning landscapes. Enjoy the beauty of Srinagar and Gulmarg.",
  //   visits: 8,
  //   duration: "5 Days 4 Nights",
  //   price: 16999,
  //   plans: ["5 Days Srinagar Trip", "Gulmarg Snow Trip", "Sonmarg Visit"],
  // },
{
  id: 1,
  slug: "kashmir-backpacking/5n6d",
  title: "Kashmir Backpacking Group Trip",
  image: "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be", 
  description: "Experience the 'Paradise on Earth' with our comprehensive 6-day backpacking trip. Explore the serene Dal Lake, the golden meadows of Sonamarg, and the breathtaking valleys of Pahalgam and Gulmarg.",
  duration: "6 Days 5 Nights",
  price: 15999, 
 location: "Srinagar",

  highlights: [
    "Shikara Ride & Houseboat stay at Dal Lake",
    "Explore Sonamarg - The Meadow of Gold",
    "Visit Betaab Valley & Chandanwari in Pahalgam",
    "Gondola Ride in Gulmarg (World's highest cable car)",
    "Local sightseeing of Srinagar's Mughal Gardens"
  ],

  itinerary: [
    { day: 1, title: "Arrival & Transfer", details: "Arrival and transfer to Srinagar. Check-in to the hotel and enjoy a peaceful evening at the gateway of Kashmir." },
    { day: 2, title: "Srinagar Local Sightseeing", details: "Visit Dal Lake for a Shikara ride. Explore Mughal Gardens including Nishat and Shalimar Bagh. Overnight stay in Srinagar." },
    { day: 3, title: "Sonamarg Excursion", details: "Full day excursion to Sonamarg. Enjoy the Thajiwas Glacier and meadows. Return to Srinagar for overnight stay." },
    { day: 4, title: "Pahalgam Valley Tour", details: "Transfer to Pahalgam. Explore the saffron fields and ancient Awantipora ruins en route. Visit Betaab Valley." },
    { day: 5, title: "Gulmarg Snow Adventure", details: "Drive to Gulmarg. Experience the Gondola ride and explore the snow-covered peaks. Overnight stay in Gulmarg or Srinagar." },
    { day: 6, title: "Departure Journey", details: "Early morning departure after breakfast with beautiful memories of the valley." }
  ],

  inclusions: [
    "Internal transportation for the entire tour",
    "Accommodation in Hotels/Houseboat on sharing basis",
    "Breakfast & Dinner as per the itinerary",
    "All internal transfers and sightseeing",
    "Expert Trip Captain throughout the journey"
  ],

  exclusions: [
    "5% GST on total booking",
    "Lunch and personal snacks",
    "Union Cab fees in specific locations",
    "Gondola ride and Pony ride expenses",
    "Anything not explicitly mentioned in inclusions"
  ],

  // packages: [
  //   { name: "Group Sharing", price: 13499 }
  // ],

  essentials: [
    "Carry heavy woolens for high-altitude locations",
    "Postpaid SIM cards work best in the region",
    "Original Govt ID is mandatory for all check-ins",
    "Advance booking for Gondola is highly recommended"
  ]
},
{
  id: 2,
  slug: "kashmir-backpacking/4n5d-srinagar",
  title: "Mystical Kashmir Backpacking",
  image: "https://images.unsplash.com/photo-1614591276564-7b3e69347a48", 
  description: "A compact 5-day soulful journey through the heart of Kashmir. Starting from Srinagar, this trip covers the most iconic spots like Gulmarg, Sonamarg, and the hidden gem Doodhpatri.",
  duration: "5 Days 4 Nights",
  price: 13999, 
  location: "Srinagar",
  highlights: [
    "Houseboat stay with Shikara ride in Srinagar",
    "Visit Doodhpatri - The Valley of Milk",
    "Snow adventures and Gondola ride in Gulmarg",
    "Full day excursion to Sonamarg",
    "Guided local sightseeing of Mughal Gardens"
  ],

  itinerary: [
    { day: 1, title: "Arrival in Srinagar", details: "Airport pickup. Check-in to Houseboat. Evening Shikara ride on Dal Lake and visit local markets." },
    { day: 2, title: "Srinagar to Doodhpatri", details: "Day trip to Doodhpatri. Explore the lush green meadows and the river. Return to Srinagar for hotel stay." },
    { day: 3, title: "Srinagar to Sonamarg & Back", details: "Full day trip to the 'Meadow of Gold'. Optional trek or pony ride to Thajiwas Glacier. Stay in Srinagar." },
    { day: 4, title: "Srinagar to Gulmarg", details: "Transfer to Gulmarg. Full day for Gondola ride (Phase 1 & 2) and snow activities. Return to Srinagar." },
    { day: 5, title: "Departure from Srinagar", details: "Breakfast and transfer to Srinagar Airport for your return flight." }
  ],

  inclusions: [
    "Srinagar Airport Pickup & Drop",
    "Accommodation in Deluxe Hotel & Houseboat",
    "Meals: Breakfast & Dinner",
    "Internal transportation for sightseeing",
    "Expert Trip Lead"
  ],

  exclusions: [
    "Union Cab charges (not included in package)",
    "Lunch & Personal expenses",
    "5% GST",
    "Gondola and Pony ride tickets",
    "Anything not explicitly mentioned"
  ],

  // packages: [
  //   { name: "Srinagar Special Group", price: 14999 }
  // ],

  essentials: [
    "Book return flight after 3 PM on Day 5",
    "Carry valid Govt ID (Postpaid SIMs work best)",
    "Advance booking of Gondola tickets is recommended",
    "Only Postpaid SIM cards work in J&K"
  ]
},
  // {
  //   id: 2,
  //   slug: "kashmir-backpacking-trip/5n6d",
  //   title: "Kashmir Backpacking Trip - 5N/6D",
  //   image: "https://images.unsplash.com/photo-1614591276564-7b3e69347a48",
  //   description: "Explore the deeper valleys and hidden gems of Kashmir in this 6-day journey.",
  //   visits: 12,
  //   duration: "6 Days 5 Nights",
  //   price: 18999,
  //   plans: ["Pahalgam Visit", "Doodhpathri Trek", "Shikara Ride"],
  // },
  // {
  //   id: 3,
  //   slug: "kashmir-backpacking-trip/6n7d",
  //   title: "Kashmir Backpacking Trip - 6N/7D",
  //   image: "https://images.unsplash.com/photo-1643449416258-5c8e7ec598b1",
  //   description: "A complete week-long experience of the Kashmiri lifestyle and mountains.",
  //   visits: 15,
  //   duration: "7 Days 6 Nights",
  //   price: 20999,
  //   plans: ["Betaab Valley", "Aru Valley", "Sinthan Top Visit"],
  // },
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

  // CharDham
  {
  id: 7,
  slug: "char-dham-yatra/9n10d",
  title: "Char Dham Yatra",
  image: "/image/char-dham-blog-banner-scaled.webp", 
  description: "The Char Dham Yatra is a sacred pilgrimage covering four revered Hindu shrines in Uttarakhand: Yamunotri, Gangotri, Kedarnath, and Badrinath. Experience a soul-purifying journey through the Greater Himalayan Range.",
  duration: "10 Days 9 Nights",
  price: 19499, 
  location: "Haridwar",

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
    { name: "Budget", price: 19499 },
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
  slug: "do-dham-yatra/5n6d", // URL structure ke hisaab se set kiya hai
  title: "Do Dham Yatra",
  image: "/image/dodham image.png", // Kedarnath aur Badrinath ki combined image best rahegi
  description: "Experience the spiritual bliss of the Do Dham Yatra, covering two of the most sacred Hindu shrines in Uttarakhand: Kedarnath (Lord Shiva) and Badrinath (Lord Vishnu). A journey of faith amidst the majestic Himalayas.",
  duration: "6 Days 5 Nights ",
  price: 14499, // Budget price 
  location: "Haridwar",
  // Quick Highlights [cite: 393, 401]
  highlights: [
    "Darshan of Kedarnath (one of 12 Jyotirlingas)",
    "Visit Badrinath Temple (dedicated to Lord Vishnu)",
    "Ganga Aarti in Haridwar",
    "Trek to Tungnath (Highest Shiva temple in the world)",
    "Explore Mana Village (Indo-Tibetan border)",
    "See confluences at Rudraprayag & Devprayag"
  ],

  // Detailed day-wise itinerary 
  itinerary: [
    { day: 1, title: "Haridwar to Sonprayag", details: "Drive 230 km (7 hours) via Devprayag and Rudraprayag. Take a holy Ganga Snan in Haridwar before starting." },
    { day: 2, title: "Kedarnath Trek", details: "22 km trek from Sonprayag/Gaurikund to Kedarnath Temple. Visit Bhairav Temple and Adi Shankaracharya Samadhi." },
    { day: 3, title: "Kedarnath Darshan to Sonprayag", details: "Early morning darshan at Kedarnath Temple and trek back (18-20 km) to Sonprayag." },
    { day: 4, title: "Sonprayag to Joshimath via Chopta", details: "Drive 182 km (5-6 hours). Visit Chopta, Tungnath Temple, and Chandrashila Peak." },
    { day: 5, title: "Badrinath Darshan & Back", details: "Drive 80 km (3 hours round trip). Visit Badrinath Temple, Tapt Kund, and Mana Village. Return to Joshimath." },
    { day: 6, title: "Joshimath to Haridwar Drop", details: "Return journey of 269 km (7 hours) via Narsingh Temple and Devprayag." }
  ],

  // What's included in the price [cite: 478]
  inclusions: [
    "Transportation (Sedan/SUV/Tempo Traveler)",
    "Entire itinerary fuel, driver allowance, and toll taxes",
    "Stay in Hotel/Camps/Guesthouses (As per package)",
    "Breakfast & Dinner (Except at Kedarnath)",
    "E-Yatra Pass Assistance"
  ],

  // Extra costs [cite: 485]
  exclusions: [
    "5% GST",
    "Lunch & Personal Snacks",
    "Trekking Expenses (Pony/Horse/Doli)",
    "Any personal expenses or damages",
    "Sightseeing Entrance Fees"
  ],

  // Pricing Tiers [cite: 505]
  packages: [
    { name: "Budget", price: 14499 },
    // { name: "Standard", price: 15999 },
    // { name: "Deluxe", price: 17999 }
  ],

  // Mandatory Guidelines [cite: 521]
  essentials: [
    "Mandatory E-Yatra Pass",
    "Daily journey starts by 7:30 AM / 8:00 AM",
    "No mountain travel after 7:30 PM for safety",
    "Carry painkillers, Paracetamol, and Oxygen cans"
  ]
},


  // {
  //   id: 8,
  //   slug: "do-dham-yatra/5n6d",
  //   title: "Do Dham Yatra 6D/5N Per Person",
  //   image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
  //   description: "A relaxed Char Dham pilgrimage with extra rest days and sacred rituals.",
  //   visits: 11,
  //   duration: "6 Days 5 Nights",
  //   price: 15999,
  //   plans: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
  // },


{
  id: 9,
  slug: "kedarnath-yatra/3n4d",
  title: "Kedarnath Yatra",
  image: "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  description: "Embark on a soul-stirring journey to Kedarnath, one of the twelve Jyotirlingas and a part of the Panch Kedar. Situated at 3,583 meters, this sacred shrine dedicated to Lord Shiva offers a deep spiritual experience amidst the majestic Garhwal Himalayas.",
  duration: "4 Days 3 Nights",
  price: 9499, // Starting Budget Price 
  location: "Haridwar",
  // Quick Highlights
  highlights: [
    "Special Morning Darshan at Kedarnath Temple",
    "Holy Ganga Snan and Aarti in Haridwar",
    "Visit to Vishwanath Temple in Guptkashi",
    "See the confluences at Devprayag & Rudraprayag",
    "Trek through scenic Himalayan landscapes"
  ],

  // Detailed day-wise itinerary [cite: 655]
  itinerary: [
    { 
      day: 1, 
      title: "Haridwar to Sonprayag", 
      details: "Drive 230 km (approx. 7 hours) via Devprayag and Rudraprayag. Take a holy ritualistic bath (Ganga Snan) in Haridwar before check-in." 
    },
    { 
      day: 2, 
      title: "Sonprayag to Kedarnath Trek", 
      details: "Start the 18-20 km trek to Kedarnath Temple. Visit the Bhairav Temple and Adi Shankaracharya Samadhi. Overnight stay in guesthouse/camps" 
    },
    { 
      day: 3, 
      title: "Kedarnath Darshan to Sonprayag", 
      details: "Enjoy morning Darshan at Kedarnath Temple and trek back (18-20 km) to Sonprayag. Optional visit to Triyuginarayan Temple is recommended" 
    },
    { 
      day: 4, 
      title: "Sonprayag to Haridwar Drop", 
      details: "Return journey of 229 km (7-8 hours). Enroute sightseeing at Vishwanath Temple in Guptkashi and the confluences at Rudraprayag and Devprayag" 
    }
  ],

  // What's included in the price [cite: 728]
  inclusions: [
    "Transportation in Sedan/SUV/Tempo Traveler",
    "Accommodation in Hotel/Camps/Guesthouse (as per package)",
    "Fuel, Driver Allowance, Toll Taxes, and Parking",
    "Breakfast & Dinner (Except at Kedarnath)",
    "Mandatory E-Yatra Pass Assistance"
  ],

  // Extra costs [cite: 735]
  exclusions: [
    "5% GST",
    "Lunch & Personal Snacks ",
    "Trekking Expenses (Pony, Horse, or Doli)",
    "Personal/Accidental Damage costs",
    "Any component not mentioned in inclusions"
  ],

  // Pricing Tiers [cite: 755]
  packages: [
    { name: "Budget", price: 9499 },
    // { name: "Standard", price: 11999 },
    // { name: "Deluxe", price: 13999 }
  ],

  // Mandatory Guidelines [cite: 770]
  essentials: [
    "E-Yatra pass is mandatory for the pilgrimage",
    "Journey must begin by 7:30 AM or 8:00 AM sharp",
    "Vehicles will not operate after 7:30 PM in mountain areas",
    "Carry essential medicines: Painkillers, Paracetamol, and Oxygen cans"
  ]
},




  // {
  //   id: 9,
  //   slug: "kedarnath-yatra/3n4d",
  //   title: "Kedarnath Yatra 4D/3N Per Person",
  //   image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  //   description: "A comprehensive Char Dham expedition with temple visits and Himalayan views.",
  //   visits: 13,
  //   duration: "4 Days 3 Nights",
  //   price: 9999,
  //   plans: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath", "Local Temple Darshan"],
  // },
  // {
  //   id: 10,
  //   slug: "ladakh-bike-tour/4n5d",
  //   title: "Ladakh Bike Tour - 4N/5D",
  //   image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  //   description: "Ride through high passes, crystal lakes and the raw beauty of Ladakh.",
  //   visits: 10,
  //   duration: "6 Days 5 Nights",
  //   price: 21999,
  //   plans: ["Leh Local Sightseeing", "Nubra Valley", "Khardung La"],
  // },

{
  id: 10,
  slug: "ladakh-bike-tour/7n8d",
  title: "Ladakh Bike Tour 2026 - Leh to Leh",
  image: "https://images.unsplash.com/photo-1663316037756-f0ecdcf62dac?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  description: "A premium 8-day bike expedition through the land of high passes. Experience the thrill of riding to Umling-La (the world's highest motorable road), the serene Pangong Lake, and the remote beauty of Hanle observatory.",
  duration: "8 Days 7 Nights",
  price: 19999, // Starting from Price (Own Bike)
  location: "Leh",
  // Quick Highlights
  highlights: [
    "Ride to Umling-La Pass (19,024 ft) - Highest motorable road",
    "Stay at Pangong Lake (14,270 ft) with changing hues",
    "Explore Hanle - One of the world's highest Astronomical Observatories",
    "Cross Khardung La - World's second highest motorable pass",
    "Experience Hunder Sand Dunes & Double-humped Camel Ride",
    "Leh Culture Dance & Traditional Program"
  ],

  // Detailed day-wise itinerary
  itinerary: [
    { 
      day: 1, 
      title: "Arrival at Leh", 
      details: "Arrive in Leh (11,562 ft) by flight. Full day for rest and acclimatization. Evening optional visit to Leh Palace and Shanti Stupa." 
    },
    { 
      day: 2, 
      title: "Leh Local Sightseeing", 
      details: "Visit Thiksey Monastery, Shey Palace, Hall of Fame Museum, Magnetic Hill, and the Sangam (confluence of Indus and Zanskar rivers)." 
    },
    { 
      day: 3, 
      title: "Leh to Nubra Valley", 
      details: "Cross Khardung La (17,582 ft). Visit Diskit Monastery and the giant Maitreya Buddha. Ride camels in the Hunder Sand Dunes. (130 km)" 
    },
    { 
      day: 4, 
      title: "Nubra Valley to Pangong Lake", 
      details: "Scenic drive through the Shyok River route to reach the famous Pangong Lake. Spend a tranquil evening by the lake. (180 km)" 
    },
    { 
      day: 5, 
      title: "Pangong Lake to Hanle", 
      details: "Drive to the remote gem of Ladakh. Visit Rezang-La War Memorial and the Indian Astronomical Observatory. (Hanle Stay)" 
    },
    { 
      day: 6, 
      title: "Hanle to Umling-La to Hanle", 
      details: "The ultimate thrill: ride to the world's highest motorable road, Umling-La (19,024 ft), and return to Hanle by evening." 
    },
    { 
      day: 7, 
      title: "Hanle to Leh", 
      details: "Return journey to Leh via Chushul and Tangsta. Attend the traditional Leh Cultural Program in the evening. (270 km)" 
    },
    { 
      day: 8, 
      title: "Checkout & Departure", 
      details: "Departure from Leh with unforgettable memories of the Himalayas. Airport drop included." 
    }
  ],

  // What's included in the price
  inclusions: [
    "RE Himalayan 411 Bike with Fuel (for bike packages)",
    "Stay on Double Sharing Basis (Hotels/Camps)",
    "Breakfast & Dinner throughout the tour",
    "Airport Pick Up & Drop (Leh)",
    "Dedicated Tour Leader & Mechanic support",
    "Backup Vehicle for Luggage, Oxygen Cylinders & First Aid",
    "Riding Jacket, Knee Guard & Helmet",
    "Certificate of Riding Completion"
  ],

  // Extra costs
  exclusions: [
    "5% GST",
    "Flight Tickets (To/From Leh)",
    "Lunch & Personal Snacks",
    "Inner Line Permits kharcha",
    "Personal/Accidental Damage costs to the bike",
    "Any specific component not mentioned in inclusions"
  ],

  // Pricing Tiers (Based on Package Cost table)
  // packages: [
  //   { name: "Own Bike", price: 19999 + " + " + "5%"+" GST" },
  //   { name: "Tempo Traveler", price: 24999 + " + " + "5%"+" GST" },
  //   { name: "Sharing Bike Ride", price: 29999 + " + " + "5%"+" GST" },
  //   { name: "Solo Bike Ride", price: 39999 + " + " + "5%"+" GST" }
  // ],

  // Mandatory Guidelines & Notes
  essentials: [
    "Acclimatization is crucial on Day 1 to prevent altitude sickness",
    "Valid Govt ID card is mandatory for verification",
    "No Trolley bags or Suitcases allowed (only rucksacks/duffels)",
    "Rider & Pillion equally responsible for any bike damage cost",
    "Inner Line Permits are required for Hanle and Umling-La"
  ]
},


  // {
  //   id: 11,
  //   slug: "ladakh-bike-tour/5n6d",
  //   title: "Ladakh Bike Tour - 5N/6D",
  //   image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
  //   description: "A longer Ladakh ride with Pangong Lake, Tso Moriri and rugged landscapes.",
  //   visits: 12,
  //   duration: "7 Days 6 Nights",
  //   price: 23999,
  //   plans: ["Pangong Lake", "Nubra Valley", "Tso Moriri"],
  // },

{
  id: 11,
  slug: "ladakh-bike-tour/srinagar-to-delhi",
  title: "Ladakh Bike Tour 2026 - Srinagar to Delhi",
  image: "https://images.unsplash.com/photo-1600242466690-c1c04f081762?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  description: "An epic 12-day Himalayan odyssey starting from the serene Dal Lake in Srinagar, crossing the highest motorable passes in Ladakh including Umling-La, and concluding through the lush valleys of Manali to Delhi.",
  duration: "12 Days 11 Nights",
  price: 34999, // Starting from Price (Own Bike)
  location: "Srinagar to Delhi",
  // Quick Highlights
  highlights: [
    "Dal Lake & Srinagar Local Sightseeing",
    "Kargil War Memorial at Drass",
    "Lamayuru Monastery & Moonland Terrain",
    "Umling-La Pass (19,024 ft) - World's highest road",
    "Stay at Pangong Lake & Nubra Valley",
    "Drive through Atal Tunnel & Baralacha La Pass",
    "Overnight Volvo journey from Manali to Delhi"
  ],

  // Detailed day-wise itinerary
  itinerary: [
    { day: 1, title: "Arrival at Srinagar", details: "Touch down in Srinagar. Airport pickup arranged. Explore Dal Lake and Nishat Garden. Evening briefing session. Stay: Sonamarg." },
    { day: 2, title: "Sonamarg to Kargil", details: "Drive 210 km via Zoji La Pass. Explore Drass Village (2nd coldest inhabited place) and Kargil War Memorial. Stay: Kargil." },
    { day: 3, title: "Kargil to Leh", details: "Drive 250 km. Explore Lamayuru Moonland, Magnetic Hill, Gurudwara Patthar Saheb, and the Sangam (Indus & Zanskar confluence). Stay: Leh." },
    { day: 4, title: "Leh to Nubra Valley", details: "Cross Khardung La (17,582 ft). Visit Diskit Monastery and Maitreya Buddha. Optional camel ride in Hunder Sand Dunes. Stay: Nubra." },
    { day: 5, title: "Nubra Valley to Pangong Lake", details: "Drive 180 km via Shyok River route to the famous Pangong Lake (14,270 ft). Evening at leisure by the lake. Stay: Pangong." },
    { day: 6, title: "Pangong Lake to Hanle", details: "Drive to Hanle via Rezang-La Pass and War Memorial. Visit the Indian Astronomical Observatory. Stay: Hanle." },
    { day: 7, title: "Hanle to Umling-La to Hanle", details: "The ultimate thrill: ride to Umling-La (19,024 ft), the world's highest motorable road, and return to Hanle. Stay: Hanle." },
    { day: 8, title: "Hanle to Leh", details: "Return journey to Leh via Chushul & Tangsta. Evening Leh Cultural Program. Stay: Leh." },
    { day: 9, title: "Leh to Sarchu", details: "Drive 250 km crossing Tanglang-La (17,480 ft), Gata Loops (21 hairpin bends), and Nakee-La Pass. Stay: Sarchu." },
    { day: 10, title: "Sarchu to Manali", details: "Drive 220 km via Baralacha La and Atal Tunnel. Witness surreal Lahaul Valley landscapes. Stay: Manali." },
    { day: 11, title: "Explore Manali & Departure", details: "Visit Hadimba Temple and Mall Road. Scooty provided for local travel. Evening Volvo bus departure for Delhi." },
    { day: 12, title: "Reach Delhi", details: "Arrival in Delhi. Departure with loads of memories and new friends." }
  ],

  // What's included in the price
  inclusions: [
    "RE Himalayan 411 Bike with Fuel (for bike packages)",
    "Stay on Double Sharing Basis (Hotels/Camps)",
    "Breakfast & Dinner throughout the tour",
    "Srinagar Airport Pickup & Manali Bus stand Drop",
    "Scooty (without fuel) for Manali local sightseeing",
    "Dedicated Tour Leader & Mechanic support",
    "Oxygen Cylinders, First Aid Kit & Backup Luggage Vehicle",
    "Riding Jacket, Knee Guard & Helmet",
    "Certificate of Riding"
  ],

  // Extra costs
  exclusions: [
    "5% GST",
    "Flight Tickets & Lunch",
    "Inner Line Permits",
    "Personal/Accidental Bike Damage costs",
    "Any personal expenses or entrance fees"
  ],

  // Pricing Tiers (Based on Package Cost table)
  // packages: [
  //   { name: "Own Bike", price: 34999 + " + " + "5%"+" GST" },
  //   { name: "Tempo Traveler", price: 39999 + " + " + "5%"+" GST" },
  //   { name: "Sharing Bike Ride", price: 44999 + " + " + "5%"+" GST" },
  //   { name: "Solo Bike Ride", price: 54999 + " + " + "5%"+" GST" }
  // ],

  // Mandatory Guidelines
  essentials: [
    "Reach Srinagar by 11:00 AM on Day 1",
    "Valid Govt ID card is mandatory for verification",
    "No Trolley bags or Suitcases allowed (Rucksacks only)",
    "Complimentary Srinagar sightseeing included for early arrivals",
    "Both rider and pillion responsible for bike damage costs"
  ]
},

  // {
  //   id: 12,
  //   slug: "ladakh-bike-tour/6n7d",
  //   title: "Ladakh Bike Tour - 6N/7D",
  //   image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
  //   description: "The ultimate Ladakh adventure with high-altitude roads, lakes and remote villages.",
  //   visits: 14,
  //   duration: "8 Days 7 Nights",
  //   price: 25999,
  //   plans: ["Pangong Lake", "Nubra Valley", "Tso Moriri", "Magnetic Hill"],
  // },

  {
  id: 12,
  slug: "ladakh-bike-tour/delhi-to-srinagar",
  title: "Ladakh Bike Tour 2026 - Delhi to Srinagar",
  image: "https://images.unsplash.com/photo-1581793746485-04698e79a4e8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  description: "An ultimate 12-day Himalayan crossing starting from the capital Delhi, passing through the lush Manali valley, conquering the highest passes of Ladakh including Umling-La, and concluding in the beautiful 'Heaven on Earth' - Srinagar.",
  duration: "12 Days 11 Nights",
  price: 34999, // Starting Price (Own Bike) [cite: 4094]
  location: "Delhi to Srinagar",
  // Quick Highlights
  highlights: [
    "Overnight Volvo journey from Delhi to Manali",
    "Ride through Atal Tunnel & Baralacha La Pass",
    "Umling-La Pass (19,024 ft) - World's highest road",
    "Hanle Observatory - One of the highest astronomical sites",
    "Stay at Pangong Lake & Nubra Valley",
    "Cross Zoji La Pass & visit Kargil War Memorial",
    "Explore Srinagar: Dal Lake & Nishad Garden"
  ],

  // Detailed day-wise itinerary
  itinerary: [
    { day: 1, title: "Delhi to Manali", details: "Departure from Delhi in the evening via overnight Volvo bus (550 km, 12-14 hours). " },
    { day: 2, title: "Explore Manali", details: "Acclimatization day. Explore Hadimba Temple and Mall Road. Scooty provided for local travel" },
    { day: 3, title: "Manali to Sarchu", details: "Drive 220 km through Atal Tunnel and Baralacha La to reach the high-altitude plateau of Sarchu." },
    { day: 4, title: "Sarchu to Leh", details: "Cross Gata Loops, Lachung-La, and Tanglang-La (17,480 ft) to reach Leh. " },
    { day: 5, title: "Leh to Nubra Valley", details: "Cross Khardung La, visit Diskit Monastery, and enjoy Hunder Sand Dunes." },
    { day: 6, title: "Nubra Valley to Pangong Lake", details: "Scenic drive via Shyok River to the famous high-altitude Pangong Lake." },
    { day: 7, title: "Pangong Lake to Hanle", details: "Drive to the remote village of Hanle via Rezang-La War Memorial. " },
    { day: 8, title: "Hanle to Umling-La to Hanle", details: "Ride to the world's highest motorable road (19,024 ft) and return to Hanle." },
    { day: 9, title: "Hanle to Leh", details: "Return journey to Leh via Chushul. Attend Leh's traditional cultural program. " },
    { day: 10, title: "Leh to Kargil", details: "Explore Lamayuru Monastery, Magnetic Hill, and Pathar Sahib Gurudwara." },
    { day: 11, title: "Kargil to Sonamarg", details: "Cross Zoji La Pass and visit Drass (2nd coldest place) and Kargil War Memorial." },
    { day: 12, title: "Srinagar Drop", details: "Explore Dal Lake and Nishad Garden. Drop-off at Srinagar airport (flights after 3 PM)." }
  ],

  // What's included in the price [cite: 4077]
  inclusions: [
    "RE Himalayan 411 Bike with Fuel (for bike packages)",
    "Double sharing stay in Hotels/Camps",
    "Breakfast & Dinner throughout the tour",
    "Delhi to Manali Volvo & Srinagar Airport Drop",
    "Scooty (without fuel) for Manali local sightseeing",
    "Support mechanic, oxygen cylinders, and backup vehicle",
    "Riding Gear: Jacket, Knee Guard & Helmet"
  ],

  // Extra costs [cite: 4083]
  exclusions: [
    "5% GST",
    "Flight tickets to Delhi or from Srinagar",
    "Lunch & personal snacks",
    "Inner Line Permits",
    "Any personal expenses or bike damage costs"
  ],

  // Pricing Tiers [cite: 4090]
  // packages: [
  //   { name: "Own Bike", price: 34999 },
  //   { name: "Tempo Traveler", price: 39999 },
  //   { name: "Sharing Bike Ride", price: 44999 },
  //   { name: "Solo Bike Ride", price: 54999 }
  // ],

  // Mandatory Guidelines [cite: 4108]
  essentials: [
    "No Trolley bags or Suitcases allowed (Rucksacks only)",
    "Valid Govt ID card is mandatory for verification",
    "Book return flight from Srinagar after 3:00 PM",
    "Rider & pillion are equally responsible for bike damage"
  ]
},
  // {
  //   id: 13,
  //   slug: "spiti-bike-tour/4n5d",
  //   title: "Spiti Bike Tour - 4N/5D",
  //   image: "https://images.unsplash.com/photo-1494071894512-5c1d13b1559d",
  //   description: "Ride through Spiti’s stark landscapes and visit ancient monasteries.",
  //   visits: 9,
  //   duration: "5 Days 4 Nights",
  //   price: 17999,
  //   plans: ["Kaza", "Key Monastery", "Chandratal Lake"],
  // },

{
  id: 13,
  slug: "winter-spiti-backpacking/8n9d",
  title: "Winter Spiti Backpacking Trip 2026 - Ex. Delhi",
  image: "https://images.unsplash.com/photo-1617159156637-dfb8655c9f95?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  description: "Experience the magic of the 'Middle Land' in its most pristine winter form. Journey through snow-covered landscapes from Delhi to Shimla, explore ancient monasteries like Key and Tabo, and visit the world's highest post office at Hikkim.",
  duration: "9 Days 8 Nights",
  price: 17999, // Base price for group
  location: "Delhi",

  highlights: [
    "Winter expedition to the high-altitude Spiti Valley",
    "Visit Key Monastery - A stunning Tibetan Buddhist monastery",
    "Explore Tabo Monastery - The 'Ajanta of the Himalayas'",
    "Visit Hikkim - World's highest post office",
    "Drive through the scenic Kinnaur and Spiti valleys",
    "Stargazing in the clear winter skies of Kaza",
    "Overnight stays in traditional homestays and hotels"
  ],

  itinerary: [
    { day: 1, title: "Delhi to Shimla", details: "Start the journey from Delhi to Shimla. Overnight travel to reach the Queen of Hills." },
    { day: 2, title: "Shimla to Chitkul/Sangla", details: "Drive through the beautiful Kinnaur Valley to reach Chitkul, the last Indian village on the Indo-Tibetan border." },
    { day: 3, title: "Chitkul to Kalpa", details: "Travel from Chitkul to Kalpa. Enjoy breathtaking views of the Kinner Kailash range." },
    { day: 4, title: "Kalpa to Tabo", details: "Enter the Spiti Valley. Visit the ancient Tabo Monastery, known for its exquisite murals and statues." },
    { day: 5, title: "Tabo to Kaza via Dhankar", details: "Visit Dhankar Monastery perched on a cliff. Reach Kaza, the administrative headquarters of Spiti." },
    { day: 6, title: "Kaza Local Sightseeing", details: "Explore Key Monastery, Kibber village, and the world's highest post office at Hikkim. Visit Langza and Komic." },
    { day: 7, title: "Kaza to Kalpa/Rampur", details: "Begin the return journey. Drive back through the stunning landscapes towards Kalpa or Rampur." },
    { day: 8, title: "Kalpa/Rampur to Shimla", details: "Continue the return journey to Shimla. Evening at leisure on Mall Road." },
    { day: 9, title: "Shimla to Delhi", details: "Departure from Shimla and reach Delhi by late evening with memories of the white desert." }
  ],

  inclusions: [
    "Transportation from Delhi to Delhi (Volvo/Traveler)",
    "Accommodation in Hotels/Homestays on sharing basis",
    "Breakfast & Dinner as per the plan",
    "Expert Trip Captain & Local Guide support",
    "All internal transfers and sightseeing",
    "Basic Medical Kit and Oxygen support"
  ],

  exclusions: [
    "5% GST on total booking",
    "Any lunch or personal snacks/drinks",
    "Entrance fees to monasteries or monuments",
    "Travel insurance and personal expenses",
    "Anything not mentioned in the inclusions"
  ],

  // PDF ke hisab se updated 3 packages
  // packages: [
  //   { name: "Tempo Traveler", price: 19999 + " + " +"5%" +" GST" },
  //   { name: "Double Sharing Ride", price: 29999 + " + " +"5%" +" GST"},
  //   { name: "Solo Bike Ride", price: 39999 + " + " +"5%" +" GST"}
  // ],

  essentials: [
    "Extreme cold weather gear is mandatory (heavy jackets, thermals, gloves)",
    "Carry valid Government ID for permits and verification",
    "Physical fitness is required for high-altitude travel",
    "Stay hydrated to prevent altitude sickness",
    "Respect local Ladakhi/Spitian culture and traditions"
  ]
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
