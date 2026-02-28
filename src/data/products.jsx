// Data Object for gali itra
export const products = [
  {
    id: "gulab-e-mysore",
    name: "Gulab-e-Mysore",
    hindiName: "गुलाब-ए-मैसूर",
    price: 2499,
    shortDescription: "A deep Mysore rose attar distilled in the old-world hydro method, rich and intoxicating.",
    fullDescription: "Gulab-e-Mysore is our tribute to the legendary rose fields of Karnataka. Each batch is handcrafted using traditional deg-bhapka hydro-distillation, where thousands of fresh Mysore rose petals are slowly coaxed into sandalwood oil over 15 days. The result is a fragrance that carries the warmth of Indian soil — rich, honeyed, and deeply romantic. This is not a synthetic rose. This is the real thing, the way your dadi's generation knew it.",
    category: "attar",
    // FIXED PATH FOR VERCEL
    image: "/product-images/gulab-e-mysore.jpg",
    fragranceNotes: {
      top: ["Mysore Rose Petals", "Saffron"],
      heart: ["Damask Rose Absolute", "Cardamom"],
      base: ["Indian Sandalwood", "Musk", "Amber"]
    },
    size: "12ml Attar Roll-on",
    longevity: "10-14 hours",
    occasion: "Weddings, Festive Evenings, Date Nights",
    craftsmanship: "Hydro-distilled using the ancient deg-bhapka technique in Kannauj, Uttar Pradesh. Each bottle requires over 4,000 rose petals.",
    featured: true
  },
  {
    id: "raat-ki-rani",
    name: "Raat Ki Rani",
    hindiName: "रात की रानी",
    price: 1899,
    shortDescription: "Night-blooming jasmine captured at peak bloom — heady, sultry, unforgettable.",
    fullDescription: "Named after the intoxicating night-blooming cestrum, Raat Ki Rani is a fragrance that comes alive after sunset. We harvest parijaat and raat ki rani flowers between 2 AM and 4 AM when their scent is most potent. The attar is a liquid ode to warm Indian nights — the kind where the air itself feels perfumed. Wear it and you carry the galli's best-kept secret on your skin.",
    category: "attar",
    image: "/product-images/raat-ki-rani.png",
    fragranceNotes: {
      top: ["Night Jasmine", "Tuberose"],
      heart: ["Parijaat", "Ylang Ylang", "White Lotus"],
      base: ["Vetiver", "Cedarwood", "Vanilla"]
    },
    size: "12ml Attar Roll-on",
    longevity: "12-16 hours",
    occasion: "Evening Gatherings, Intimate Occasions, Night Out",
    craftsmanship: "Flowers hand-picked at 3 AM during peak bloom season in Jaunpur. Aged 6 months in camel-skin bottles before decanting.",
    featured: true
  },
  {
    id: "kannauj-mitti",
    name: "Mitti Attar",
    hindiName: "मिट्टी अत्तर",
    price: 1299,
    shortDescription: "The smell of first rain on dry earth — bottled. Pure petrichor from Kannauj.",
    fullDescription: "There is no fragrance more Indian than the smell of rain hitting parched earth. Mitti Attar captures exactly that — the petrichor, the nostalgia, the relief of monsoon's first drops on sun-baked clay. Made by distilling baked earthen discs (from the banks of the Ganga) into sandalwood oil, this is Kannauj's most iconic creation. One drop and you're standing in a village courtyard, chai in hand, watching the sky open up.",
    category: "ittar",
    image: "/product-images/mitti-attar.png",
    fragranceNotes: {
      top: ["Petrichor", "Wet Earth"],
      heart: ["Baked Clay", "Geosmin"],
      base: ["Sandalwood", "Dry Moss", "Warm Musk"]
    },
    size: "10ml Attar Roll-on",
    longevity: "8-10 hours",
    occasion: "Daily Wear, Monsoon Season, Meditation",
    craftsmanship: "Earthen discs baked from Ganga riverbank clay, then hydro-distilled into aged sandalwood oil. A 500-year-old Kannauj tradition.",
    featured: true
  },
  {
    id: "shah-jahan-oud",
    name: "Shah Jahan Oud",
    hindiName: "शाहजहाँ ऊद",
    price: 4999,
    shortDescription: "Assam agarwood aged 20 years, distilled into liquid royalty. For those who command a room.",
    fullDescription: "Shah Jahan Oud is not a fragrance — it is a statement. Sourced from 20-year-old agarwood trees in the dense forests of Assam, this oud is distilled slowly over 72 hours, yielding a dark, resinous oil of extraordinary depth. It opens with a smoky, almost medicinal sharpness that mellows into a creamy, animalic warmth. This was the scent of Mughal courts, of power whispered through incense smoke. One application lasts an entire day.",
    category: "attar",
    image: "/product-images/shahajahan-oud.png",
    fragranceNotes: {
      top: ["Assam Agarwood", "Smoky Birch"],
      heart: ["Aged Oud", "Leather", "Saffron"],
      base: ["Dark Amber", "Animalic Musk", "Benzoin"]
    },
    size: "6ml Attar Roll-on",
    longevity: "18-24 hours",
    occasion: "Special Occasions, Power Meetings, Grand Celebrations",
    craftsmanship: "Wild Assam agarwood aged 20+ years, steam-distilled over 72 hours. Each 6ml bottle represents one entire tree's resin yield.",
    featured: true
  },
  {
    id: "chameli-ka-phool",
    name: "Chameli Ka Phool",
    hindiName: "चमेली का फूल",
    price: 1599,
    shortDescription: "Pure Madurai jasmine sambac — the flower that defines Indian summer evenings.",
    fullDescription: "Chameli Ka Phool is the essence of Madurai's jasmine garland market at dawn. We source Jasminum sambac from small family farms in Tamil Nadu, where the flowers are hand-picked before sunrise and immediately sent for enfleurage extraction. The result is a jasmine that smells alive — green, dewy, indolic, with that unmistakable sweetness that clings to your hair and clothes. This is the fragrance South Indian women have worn for centuries, and for good reason.",
    category: "attar",
    image: "/product-images/chameli.png",
    fragranceNotes: {
      top: ["Jasmine Sambac", "Green Stems"],
      heart: ["Mogra", "Orange Blossom", "Jasmine Absolute"],
      base: ["White Musk", "Coconut", "Sandalwood"]
    },
    size: "12ml Attar Roll-on",
    longevity: "8-12 hours",
    occasion: "Daily Wear, Temple Visits, Summer Evenings",
    craftsmanship: "Madurai jasmine extracted via traditional enfleurage on cold fat, then washed into sandalwood oil. No chemicals, no shortcuts.",
    featured: false
  },
  {
    id: "hina-amber",
    name: "Hina Amber",
    hindiName: "हिना अम्बर",
    price: 1799,
    shortDescription: "A complex blend of henna flowers and warm amber — earthy, sweet, deeply Indian.",
    fullDescription: "Hina is perhaps the most misunderstood attar in the Indian perfumer's palette. It is not a single-note fragrance but a complex compound attar, blending the green-earthy scent of henna flowers with warm amber, spices, and musk. Our Hina Amber pays homage to the old Lucknowi tradition — where nawabs would commission personal hina blends as a mark of taste. Wear it and you carry centuries of refinement on your pulse points.",
    category: "ittar",
    image: "/product-images/heena.png",
    fragranceNotes: {
      top: ["Henna Flower", "Bergamot", "Coriander"],
      heart: ["Amber", "Cinnamon Bark", "Clove Bud"],
      base: ["Labdanum", "Patchouli", "Warm Musk"]
    },
    size: "12ml Attar Roll-on",
    longevity: "10-14 hours",
    occasion: "Evening Wear, Eid, Cultural Gatherings",
    craftsmanship: "Compound attar blended by a 4th-generation perfumer in Lucknow using the traditional tarkib method.",
    featured: false
  },
  {
    id: "kesar-chandan",
    name: "Kesar Chandan",
    hindiName: "केसर चन्दन",
    price: 2199,
    shortDescription: "Kashmiri saffron meets Mysore sandalwood — warm, golden, sacred.",
    fullDescription: "Kesar Chandan is the fragrance of Indian temples, of tilak ceremonies, of sacred mornings. We combine the world's finest Kashmiri kesar (saffron) with old-growth Mysore sandalwood to create an attar that feels like liquid gold on skin. The saffron lends a honeyed, slightly metallic warmth, while the sandalwood provides a creamy, meditative base. It's the scent equivalent of a warm shawl — comforting, luxurious, unmistakably Indian.",
    category: "attar",
    image: "/product-images/kesar chandan.png",
    fragranceNotes: {
      top: ["Kashmiri Saffron", "Cardamom"],
      heart: ["Sandalwood Cream", "Turmeric Flower", "Milk"],
      base: ["Mysore Sandalwood", "Golden Amber", "Skin Musk"]
    },
    size: "10ml Attar Roll-on",
    longevity: "12-16 hours",
    occasion: "Puja, Daily Luxury, Winter Wear",
    craftsmanship: "Hand-ground Kashmiri saffron macerated in Mysore sandalwood oil for 30 days. Each batch is limited to 50 bottles.",
    featured: false
  },
  {
    id: "loban-nights",
    name: "Loban Nights",
    hindiName: "लोबान नाइट्स",
    price: 1499,
    shortDescription: "Smoked frankincense and benzoin resin — the scent of old bazaars and dargahs.",
    fullDescription: "Loban Nights is for those who find beauty in smoke. Inspired by the dargahs and old bazaars of Ajmer and Hyderabad, this attar captures the hypnotic scent of burning loban (frankincense) mixed with benzoin resin. It's meditative, slightly sweet, and deeply grounding. The smoke note is authentic — we actually pass the oil through loban fumes during the aging process. This is the India that smells like prayer and history.",
    category: "ittar",
    image: "/product-images/urban night.png",
    fragranceNotes: {
      top: ["Frankincense Smoke", "Black Pepper"],
      heart: ["Benzoin Resin", "Myrrh", "Guggul"],
      base: ["Smoked Sandalwood", "Dark Musk", "Leather"]
    },
    size: "10ml Attar Roll-on",
    longevity: "10-14 hours",
    occasion: "Meditation, Evening Prayer, Winter Nights",
    craftsmanship: "Oil aged in copper vessels and smoked with loban resin fumes. Each bottle carries the essence of sacred Indian incense traditions.",
    featured: false
  },
  {
    id: "vetiver-roots",
    name: "Khas Attar",
    hindiName: "खस अत्तर",
    price: 999,
    shortDescription: "Wild vetiver roots from Rajasthan — cooling, green, and deeply grounding.",
    fullDescription: "Khas (vetiver) is India's answer to air conditioning — a cooling, earthy root that has been used for centuries in curtains, fans, and fragrances. Our Khas Attar is distilled from wild vetiver roots harvested in Rajasthan's Bhilwara district. The fragrance is green, smoky, slightly sweet, and incredibly calming. In the scorching Indian summer, a touch of khas on the wrists feels like a breeze through a wet khus curtain. Simple, honest, essential.",
    category: "essential",
    image: "/product-images/vitivar-roots.png",
    fragranceNotes: {
      top: ["Fresh Vetiver", "Lemongrass"],
      heart: ["Vetiver Root", "Green Grass", "Cucumber"],
      base: ["Dry Vetiver", "Earth", "Light Musk"]
    },
    size: "15ml Attar Roll-on",
    longevity: "6-8 hours",
    occasion: "Summer Daily Wear, Office, Casual",
    craftsmanship: "Wild-harvested vetiver roots from Bhilwara, Rajasthan. Steam-distilled in small copper stills. Pure, single-origin, no blending.",
    featured: false
  },
  {
    id: "shamama-blend",
    name: "Shamama",
    hindiName: "शमामा",
    price: 3499,
    shortDescription: "The legendary 40-ingredient Kannauj masterpiece — India's most complex attar.",
    fullDescription: "Shamama is the magnum opus of Indian perfumery. A compound attar containing over 40 natural ingredients — flowers, herbs, spices, resins, and woods — all distilled together in a single deg over several days. No two batches are identical. The fragrance is impossible to deconstruct: warm, spicy, floral, woody, resinous, all at once. It is said that a true shamama takes a master perfumer an entire lifetime to perfect. Ours is made by Ustad Munir Ahmed, a 5th-generation attar-saz from Kannauj.",
    category: "attar",
    image: "/product-images/shamama.png",
    fragranceNotes: {
      top: ["Saffron", "Rose", "Marigold", "Kewra"],
      heart: ["40+ Botanicals", "Spice Blend", "Hina"],
      base: ["Aged Sandalwood", "Amber", "Deer Musk (Synthetic)", "Civet (Synthetic)"]
    },
    size: "6ml Attar Roll-on",
    longevity: "16-24 hours",
    occasion: "Grand Celebrations, Weddings, Collector's Item",
    craftsmanship: "40+ ingredients co-distilled by Ustad Munir Ahmed, 5th-generation attar-saz of Kannauj. 7-day distillation cycle. Limited edition.",
    featured: false
  }
];

export const categories = [
  { value: "all", label: "All Fragrances" },
  { value: "attar", label: "Attar" },
  { value: "ittar", label: "Ittar" },
  { value: "essential", label: "Essential Oils" }
];

// Helper functions for easy data fetching
export function getProductById(id) {
  return products.find(p => p.id === id);
}

export function getFeaturedProducts() {
  return products.filter(p => p.featured);
}

export function getProductsByCategory(category) {
  if (category === "all") return products;
  return products.filter(p => p.category === category);
}