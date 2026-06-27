export interface Slide {
  kicker: string;
  title: string;
  sub: string;
  image: string;
  alt: string;
}

export const slides: Slide[] = [
  {
    kicker: "Bali · Indonesia",
    title: "Where the World\nWaits for You",
    sub: "Travel isn't just about where you go. It's about who you become along the way.",
    image: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?w=1920&q=80",
    alt: "Cliffside view of a turquoise beach cove in Bali, Indonesia",
  },
  {
    kicker: "Santorini · Greece",
    title: "Romance Written\nin Blue & White",
    sub: "Luxury retreats designed for couples ready to reconnect, recharge, and rediscover each other.",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1920&q=80",
    alt: "Whitewashed clifftop village of Santorini, Greece at dusk",
  },
  {
    kicker: "Marrakech · Morocco",
    title: "Colour, Spice\n& Endless Wonder",
    sub: "Curated cultural experiences that balance luxury, discovery, and unforgettable moments.",
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1920&q=80",
    alt: "Ornate tiled fountain and mosaic archways in Marrakech, Morocco",
  },
  {
    kicker: "Cartagena · Colombia",
    title: "Live Boldly,\nTravel Together",
    sub: "Travel, laughter, and friendship with people who are ready to experience life fully.",
    image: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=1920&q=80",
    alt: "Colorful colonial balconies along a street in Cartagena, Colombia",
  },
  {
    kicker: "Dubai · UAE",
    title: "Extraordinary,\nBy Design",
    sub: "Exclusive access to private events and experiences unavailable to the average traveler.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80",
    alt: "Dubai skyline with the Burj Khalifa at sunset",
  },
];

export interface Feature {
  icon: string;
  label: string;
  bg: string;
  fg: string;
}

export const features: Feature[] = [
  { icon: "✦", label: "Luxury accommodations", bg: "#fdeee6", fg: "#d9542f" },
  { icon: "◇", label: "Curated cultural experiences", bg: "#e3f1ee", fg: "#0e6b5e" },
  { icon: "✧", label: "Flexible payment plans", bg: "#fcf2dd", fg: "#c98a2c" },
  { icon: "❖", label: "Exclusive private events", bg: "#fdeee6", fg: "#d9542f" },
  { icon: "✚", label: "Wellness & medical tourism", bg: "#e3f1ee", fg: "#0e6b5e" },
  { icon: "✦", label: "Concierge-level service", bg: "#fcf2dd", fg: "#c98a2c" },
];

export interface Collection {
  emoji: string;
  tag: string;
  title: string;
  desc: string;
  gradient: string;
  image: string;
  alt: string;
}

export const collections: Collection[] = [
  {
    emoji: "✨",
    tag: "Nigeria & Ghana",
    title: "Passport to Detty",
    desc: "Celebrate culture, music, food, and nightlife during the most exciting season in West Africa.",
    gradient: "linear-gradient(150deg, #f0a93f, #d9542f)",
    image: "https://images.unsplash.com/photo-1660675133902-acd1b057f75d?w=900&q=80",
    alt: "Dancers in traditional West African dress performing at a festival",
  },
  {
    emoji: "❤️",
    tag: "Singles 40+",
    title: "Second Chapter Society",
    desc: "For accomplished men and women ready to meet, travel, connect, and create new possibilities.",
    gradient: "linear-gradient(150deg, #ff7a9c, #c0395f)",
    image: "https://images.unsplash.com/photo-1645518044910-8223215a9909?w=900&q=80",
    alt: "A man and woman laughing together over wine at an outdoor table",
  },
  {
    emoji: "🥂",
    tag: "Couples Escapes",
    title: "Velvet Vows Retreat",
    desc: "Luxury retreats for couples who want to reconnect, recharge, and rediscover each other.",
    gradient: "linear-gradient(150deg, #c98ad6, #7a3f9c)",
    image: "https://images.unsplash.com/photo-1496602910407-bacda74a0fe4?w=900&q=80",
    alt: "Couple sitting together watching the sunset",
  },
  {
    emoji: "🌴",
    tag: "Active Retirees",
    title: "Golden Horizons Club",
    desc: "Because retirement is not the end of the adventure — it's the beginning of your next chapter.",
    gradient: "linear-gradient(150deg, #2bb6a3, #0e7a6b)",
    image: "https://images.unsplash.com/photo-1748969721837-2b290323022b?w=900&q=80",
    alt: "An older couple holding hands while hiking a scenic trail",
  },
  {
    emoji: "🌺",
    tag: "Medical & Wellness",
    title: "Renew You Journey",
    desc: "World-class healthcare, wellness experiences, and recovery retreats in select destinations.",
    gradient: "linear-gradient(150deg, #7fd0c0, #2f8f9c)",
    image: "https://images.unsplash.com/photo-1630595271375-5073a6c0638b?w=900&q=80",
    alt: "Woman in a spa robe relaxing with tea",
  },
  {
    emoji: "👑",
    tag: "Leaders & Founders",
    title: "Black Excellence Experiences",
    desc: "Curated luxury travel celebrating culture, achievement, networking, and legacy.",
    gradient: "linear-gradient(150deg, #e0b25a, #8a5a1f)",
    image: "https://images.unsplash.com/photo-1573164574511-73c773193279?w=900&q=80",
    alt: "Group of Black professionals in a boardroom meeting",
  },
  {
    emoji: "💎",
    tag: "Women's Getaways",
    title: "Passport & Prosecco",
    desc: "Travel, laughter, friendship, and unforgettable experiences with women ready to live boldly.",
    gradient: "linear-gradient(150deg, #ff9eb6, #d9542f)",
    image: "https://images.unsplash.com/photo-1649019182102-dea1e156d94f?w=900&q=80",
    alt: "Three women toasting with champagne glasses",
  },
];

export interface Difference {
  num: string;
  title: string;
  desc: string;
  bg: string;
  numColor: string;
  titleColor: string;
  descColor: string;
}

export const differences: Difference[] = [
  {
    num: "01",
    title: "Community First",
    desc: "Travel alongside successful professionals, entrepreneurs, and adventurers who share your passion for living fully.",
    bg: "#0e6b5e",
    numColor: "#e3c277",
    titleColor: "#fff",
    descColor: "rgba(255,255,255,.8)",
  },
  {
    num: "02",
    title: "Curated by Experts",
    desc: "Every itinerary is intentionally crafted to balance luxury, culture, relaxation, and memorable experiences.",
    bg: "#f3e7d6",
    numColor: "#0e6b5e",
    titleColor: "#16110d",
    descColor: "#5a5048",
  },
  {
    num: "03",
    title: "Luxury Without Stress",
    desc: "We handle every detail so you can focus entirely on creating memories that last a lifetime.",
    bg: "#0c3f39",
    numColor: "#e3c277",
    titleColor: "#fff",
    descColor: "rgba(255,255,255,.82)",
  },
  {
    num: "04",
    title: "Exclusive Access",
    desc: "Private events, unique experiences, and local connections unavailable to the average traveler.",
    bg: "#f3e7d6",
    numColor: "#bf9b4e",
    titleColor: "#16110d",
    descColor: "#5a5048",
  },
];

export interface Testimonial {
  quote: string;
  bg: string;
  text: string;
  accent: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "This wasn't just a trip. It was an experience I'll remember for the rest of my life.",
    bg: "#0e6b5e",
    text: "#fff",
    accent: "#ffd98c",
  },
  {
    quote: "The friendships, luxury, and attention to detail were absolutely unmatched.",
    bg: "#fff",
    text: "#16110d",
    accent: "#c0902f",
  },
  {
    quote: "Everything was effortless. All I had to do was show up and enjoy myself.",
    bg: "#f3e7d6",
    text: "#16110d",
    accent: "#bf9b4e",
  },
];

export const marquee: string[] = [
  "Bangkok",
  "Seoul",
  "Dubai",
  "Ghana",
  "Nigeria",
  "Greece",
  "Morocco",
  "Cartagena",
  "Bali",
  "Bangkok",
  "Seoul",
  "Dubai",
  "Ghana",
  "Nigeria",
  "Greece",
  "Morocco",
  "Cartagena",
  "Bali",
];

export const founder = {
  name: "Tiley Akerejola",
  quote: "Life is short. The time to see the world is now.",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
  alt: "Portrait of Tiley Akerejola, founder of Solstice Privé",
};
