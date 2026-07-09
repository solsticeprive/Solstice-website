export interface Slide {
  kicker: string;
  title: string;
  sub: string;
  image: string;
  alt: string;
}

export const slides: Slide[] = [
  {
    kicker: "Lagos · Nigeria",
    title: "Where the World\nWaits for You",
    sub: "Travel isn't just about where you go. It's about who you become along the way.",
    image: "/assets/lagos.jpg",
    alt: "Lagos city skyline with Eko bridge at night",
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
  { icon: "✦", label: "Luxury accommodations", bg: "#fbe6df", fg: "#e75c2d" },
  { icon: "◇", label: "Curated cultural experiences", bg: "#f3e9ed", fg: "#8c6478" },
  { icon: "✧", label: "Flexible payment plans", bg: "#fdecd2", fg: "#f58f00" },
  { icon: "❖", label: "Exclusive private events", bg: "#fbe6df", fg: "#e75c2d" },
  { icon: "✚", label: "Wellness & medical tourism", bg: "#f3e9ed", fg: "#8c6478" },
  { icon: "✦", label: "Concierge-level service", bg: "#fdecd2", fg: "#f58f00" },
];

export interface Collection {
  tag: string;
  title: string;
  desc: string;
  gradient: string;
  image: string;
  alt: string;
  comingSoon?: boolean;
  href?: string;
}

export const collections: Collection[] = [
  {
    tag: "Lagos & Accra · Dec 20–27",
    title: "Lagos Itinerary",
    desc: "Eight days across Lagos and Accra — art galleries, Afrobeats nights, Elmina Castle, and a Christmas dinner under the stars.",
    gradient: "linear-gradient(150deg, #f58f00, #e75c2d)",
    image: "https://images.unsplash.com/photo-1660675133902-acd1b057f75d?w=900&q=80",
    alt: "Dancers in traditional West African dress performing at a festival",
    href: "/itinerary/lagos-accra",
  },
  {
    tag: "Singles 40+",
    title: "Second Chapter Society",
    desc: "For accomplished men and women ready to meet, travel, connect, and create new possibilities.",
    gradient: "linear-gradient(150deg, #bf9bae, #8c6478)",
    image: "https://images.unsplash.com/photo-1645518044910-8223215a9909?w=900&q=80",
    alt: "A man and woman laughing together over wine at an outdoor table",
    comingSoon: true,
  },
  {
    tag: "Couples Escapes",
    title: "Velvet Vows Retreat",
    desc: "Luxury retreats for couples who want to reconnect, recharge, and rediscover each other.",
    gradient: "linear-gradient(150deg, #8c6478, #5a3d49)",
    image: "https://images.unsplash.com/photo-1496602910407-bacda74a0fe4?w=900&q=80",
    alt: "Couple sitting together watching the sunset",
    comingSoon: true,
  },
  {
    tag: "Active Retirees",
    title: "Golden Horizons Club",
    desc: "Because retirement is not the end of the adventure — it's the beginning of your next chapter.",
    gradient: "linear-gradient(150deg, #f58f00, #b8862b)",
    image: "https://images.unsplash.com/photo-1748969721837-2b290323022b?w=900&q=80",
    alt: "An older couple holding hands while hiking a scenic trail",
    comingSoon: true,
  },
  {
    tag: "Medical & Wellness",
    title: "Renew You Journey",
    desc: "World-class healthcare, wellness experiences, and recovery retreats in select destinations.",
    gradient: "linear-gradient(150deg, #bf9bae, #f58f00)",
    image: "https://images.unsplash.com/photo-1630595271375-5073a6c0638b?w=900&q=80",
    alt: "Woman in a spa robe relaxing with tea",
    comingSoon: true,
  },
  {
    tag: "Leaders & Founders",
    title: "Black Excellence Experiences",
    desc: "Curated luxury travel celebrating culture, achievement, networking, and legacy.",
    gradient: "linear-gradient(150deg, #f58f00, #8a5a1f)",
    image: "https://images.unsplash.com/photo-1573164574511-73c773193279?w=900&q=80",
    alt: "Group of Black professionals in a boardroom meeting",
    comingSoon: true,
  },
  {
    tag: "Women's Getaways",
    title: "Passport & Prosecco",
    desc: "Travel, laughter, friendship, and unforgettable experiences with women ready to live boldly.",
    gradient: "linear-gradient(150deg, #bf9bae, #e75c2d)",
    image: "https://images.unsplash.com/photo-1649019182102-dea1e156d94f?w=900&q=80",
    alt: "Three women toasting with champagne glasses",
    comingSoon: true,
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
    bg: "#1a1310",
    numColor: "#bf9bae",
    titleColor: "#fff",
    descColor: "rgba(255,255,255,.8)",
  },
  {
    num: "02",
    title: "Curated by Experts",
    desc: "Every itinerary is intentionally crafted to balance luxury, culture, relaxation, and memorable experiences.",
    bg: "#f3e7d6",
    numColor: "#e75c2d",
    titleColor: "#16110d",
    descColor: "#5a5048",
  },
  {
    num: "03",
    title: "Luxury Without Stress",
    desc: "We handle every detail so you can focus entirely on creating memories that last a lifetime.",
    bg: "#1a1310",
    numColor: "#bf9bae",
    titleColor: "#fff",
    descColor: "rgba(255,255,255,.82)",
  },
  {
    num: "04",
    title: "Exclusive Access",
    desc: "Private events, unique experiences, and local connections unavailable to the average traveler.",
    bg: "#f3e7d6",
    numColor: "#f58f00",
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
    bg: "#1a1310",
    text: "#fff",
    accent: "#bf9bae",
  },
  {
    quote: "The friendships, luxury, and attention to detail were absolutely unmatched.",
    bg: "#fff",
    text: "#16110d",
    accent: "#f58f00",
  },
  {
    quote: "Everything was effortless. All I had to do was show up and enjoy myself.",
    bg: "#f3e7d6",
    text: "#16110d",
    accent: "#e75c2d",
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
  image: "/assets/founder.jpg",
  alt: "Portrait of Tiley Akerejola, founder of Solstice Privé",
};

export interface ItineraryActivity {
  time?: string;
  label: string;
  optional?: boolean;
}

export interface ItineraryDay {
  day: string;
  date: string;
  activities: ItineraryActivity[];
  dressCode?: string;
}

export interface ItineraryPhase {
  phase: string;
  location: string;
  dateRange: string;
  days: ItineraryDay[];
}

export interface ItineraryPackage {
  name: string;
  price: number;
  currency: string;
  unit: string;
  description: string;
  includes: string[];
}

export const lagosItinerary = {
  slug: "lagos-accra",
  title: "Lagos Itinerary",
  tag: "Lagos & Accra · Dec 20–27",
  summary:
    "Eight days across Lagos and Accra — art galleries, Afrobeats nights, Elmina Castle, and a Christmas dinner under the stars.",
  heroImage: "https://images.unsplash.com/photo-1660675133902-acd1b057f75d?w=1920&q=80",
  heroAlt: "Dancers in traditional West African dress performing at a festival",
  packages: [
    {
      name: "Full Experience Package",
      price: 4200,
      currency: "USD",
      unit: "per person",
      description: "The complete eight-day Lagos & Accra experience, door to door.",
      includes: [
        "Accommodation for all 8 days across Lagos & Accra",
        "All group dinners, the Welcome Dinner, and Christmas Dinner",
        "Nike Art Gallery, Elmina Castle, and Labadi Beach excursions",
        "Concierge support throughout the trip",
      ],
    },
  ] as ItineraryPackage[],
  phases: [
    {
      phase: "Phase 1",
      location: "Lagos, Nigeria",
      dateRange: "20th – 23rd Dec",
      days: [
        {
          day: "Day One",
          date: "20th",
          activities: [
            { label: "Arrival of guests to Lagos, Nigeria" },
            { time: "7:00pm – 9:00pm", label: "Welcome Dinner" },
          ],
          dressCode: "Comfortable and Casual",
        },
        {
          day: "Day Two",
          date: "21st",
          activities: [
            { time: "10am – 2pm", label: "Trip to Nike Art Gallery" },
            { label: "Street Photography", optional: true },
            { label: "Massage", optional: true },
            { time: "7pm – 9pm", label: "Group Dinner" },
          ],
        },
        {
          day: "Day Three",
          date: "22nd",
          activities: [
            { label: "Personal activities" },
            { label: "Street Photography" },
            { time: "7pm – 9pm", label: "Group Dinner" },
            { label: "Afrobeats Concert", optional: true },
          ],
        },
      ],
    },
    {
      phase: "Phase 2",
      location: "Accra, Ghana",
      dateRange: "23rd – 27th Dec",
      days: [
        {
          day: "Day Four",
          date: "23rd",
          activities: [
            { label: "Departure of guests from Lagos to Ghana" },
            { time: "7:00pm – 9:00pm", label: "Welcome dinner at Movenpick Ambassador Hotel, Accra" },
          ],
          dressCode: "Comfortable and Casual",
        },
        {
          day: "Day Five",
          date: "24th",
          activities: [{ label: "Trip to Elmina Castle" }, { label: "Cape Coast / Elmina lunch" }],
        },
        {
          day: "Day Six",
          date: "25th",
          activities: [{ time: "7:00pm – 9:00pm", label: "Christmas Dinner" }],
          dressCode: "Formal",
        },
        {
          day: "Day Seven",
          date: "26th",
          activities: [
            { label: "Waterfall massage spa", optional: true },
            { label: "Visit to Arts & Crafts Market" },
            { label: "Hair braid", optional: true },
            { label: "Visit to Labadi Beach" },
            { time: "7:00pm – 9:00pm", label: "Dinner" },
          ],
          dressCode: "Local African Prints",
        },
        {
          day: "Day Eight",
          date: "27th",
          activities: [{ label: "Departures" }],
        },
      ],
    },
  ] as ItineraryPhase[],
};

export const visaConcierge = {
  eyebrow: "Concierge Support",
  title: "Visa Concierge Service",
  intro:
    "Solstice Privé provides visa concierge support for travelers who require assistance with applications.",
  includes: [
    "General guidance on visa requirements",
    "Document checklist support",
    "Application form review",
    "Invitation/support letter coordination, where applicable",
    "Reminders for submission deadlines",
  ],
  disclaimer:
    "Please note that visa approval is solely at the discretion of the respective embassy, consulate, or immigration authority. Solstice Privé does not guarantee visa approval, processing timelines, or entry into any country.",
  notIncluded: [
    "Government visa fees",
    "Embassy/consulate fees",
    "Courier fees",
    "Passport photos",
    "Expedited processing fees",
    "Any third-party charges",
  ],
  notIncludedNote: "Not included unless expressly stated in the selected travel package.",
  fee: 150,
  feeUnit: "per traveler",
};
