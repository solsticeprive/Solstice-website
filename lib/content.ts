export const contactEmail = "solsticeprive@gmail.com";

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/solsticeprive?igsh=MTFobHk3NWlqYXU3bw==" },
  { label: "TikTok", href: "https://www.tiktok.com/@solsticeprive?_r=1&_t=ZS-97wVr5GBjdQ" },
  { label: "Facebook", href: "https://www.facebook.com/share/199sKeL5P5/?mibextid=wwXIfr" },
];

export interface Slide {
  kicker: string;
  title: string;
  sub: string;
  image: string;
  alt: string;
}

export const slides: Slide[] = [
  // {
  //   kicker: "Lagos · Nigeria",
  //   title: "Where the World\nWaits for You",
  //   sub: "Travel isn't just about where you go. It's about who you become along the way.",
  //   image: "/assets/lagos.jpg",
  //   alt: "Lagos city skyline with Eko bridge at night",
  // },
  {
    kicker: "Santorini · Greece",
    title: "Romance Written\nin Blue & White",
    sub: "Luxury retreats designed for couples ready to reconnect, recharge, and rediscover each other.",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1920&q=80",
    alt: "Whitewashed clifftop village of Santorini, Greece at dusk",
  },
  {
    kicker: "Seoul · Korea",
    title: "Extraordinary, \n By Design",
    sub: "Luxury meets culture.  Vibrant. Dynamic. Unforgettable.",
    image: "/assets/Seoul.jpeg",
    alt: "Ornate tiled fountain and mosaic archways in Marrakech, Morocco",
  },
  {
    kicker: "Beijing · China",
    title: "Journey to the Past",
    sub: "Where ancient history meets modern luxury.  Majestic. Timeless. Unforgettable.",
    image: "/assets/Beijing.jpeg",
    alt: "Colorful colonial balconies along a street in Cartagena, Colombia",
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
    title: "Passport to Detty",
    desc: "Celebrate culture, music, food, and nightlife during the most exciting season in West Africa.",
    gradient: "linear-gradient(150deg, #f58f00, #e75c2d)",
    image: "/assets/detty.jpeg",
    alt: "Dancers in traditional West African dress performing at a festival",
    href: "/itinerary/lagos-accra",
  },
  {
    tag: "Singles 40+",
    title: "Second Chapter Society",
    desc: "For accomplished men and women ready to meet, travel, connect, and create new possibilities.",
    gradient: "linear-gradient(150deg, #bf9bae, #8c6478)",
    image: "/assets/img-4.jpeg",
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
    desc: "Because retirement is not the end of the adventure. It's the beginning of your next chapter.",
    gradient: "linear-gradient(150deg, #f58f00, #b8862b)",
    image: "/assets/img-5.jpeg",
    alt: "An older couple holding hands while hiking a scenic trail",
    comingSoon: true,
  },
  {
    tag: "Medical & Wellness",
    title: "Renew You Journey",
    desc: "World-class healthcare, wellness experiences, and recovery retreats in select destinations.",
    gradient: "linear-gradient(150deg, #bf9bae, #f58f00)",
    image: "/assets/img-6.jpeg",
    alt: "Woman in a spa robe relaxing with tea",
    comingSoon: true,
  },
  {
    tag: "Leaders & Founders",
    title: "Black Excellence Experiences",
    desc: "Curated luxury travel celebrating culture, achievement, networking, and legacy.",
    gradient: "linear-gradient(150deg, #f58f00, #8a5a1f)",
    image: "/assets/img-10.jpeg",
    alt: "Group of Black professionals in a boardroom meeting",
    comingSoon: true,
  },
  {
    tag: "Women's Getaways",
    title: "Passport & Prosecco",
    desc: "Travel, laughter, friendship, and unforgettable experiences with women ready to live boldly.",
    gradient: "linear-gradient(150deg, #bf9bae, #e75c2d)",
    image: "/assets/p&p.jpg",
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
  depositAmount: number;
}

export const lagosItinerary = {
  slug: "lagos-accra",
  title: "Passport to Detty",
  tag: "Lagos & Accra · Dec 20–27",
  summary: "Celebrate culture, music, food, and nightlife during the most exciting season in West Africa.",
  heroImage: "/assets/detty.jpeg",
  heroAlt: "Dancers in traditional West African dress performing at a festival",
  depositDeadline: "August 15, 2026",
  flightsIncluded: false,
  paymentContactEmail: contactEmail,
  paymentTerms: [
    "The initial deposit secures your reservation. The remaining balance will be divided into equal monthly installments.",
    "Monthly payments are required and must be received by the scheduled due date to keep your reservation in good standing.",
    "Failure to make a scheduled monthly payment may result in the cancellation of your reservation. In such cases, all payments previously made may be forfeited in accordance with our cancellation and refund policy.",
    "The final payment is due no later than one (1) month prior to the departure date. Reservations with an outstanding balance after the final payment deadline may be canceled.",
    "Guests choosing to pay via Zelle are responsible for notifying Solstice Privé immediately after each payment is sent. Please include your full name and trip name in the payment memo, when possible, and retain your payment confirmation for your records. Solstice Privé is not responsible for payments that cannot be matched due to insufficient payment information or failure to provide notification.",
  ],
  gallery: [
    {
      image: "https://images.unsplash.com/photo-1569706971306-de5d78f6418e?w=1000&q=80",
      alt: "Lagos rooftops silhouetted against a golden sunset sky",
      caption: "Lagos at golden hour",
    },
    {
      image: "https://images.unsplash.com/photo-1618434772075-47936b9f2840?w=800&q=80",
      alt: "Friends rollerblading through Lagos traffic beside a yellow bus",
      caption: "Street life in Lagos",
    },
    {
      image: "https://images.unsplash.com/photo-1769297468250-dfdea4662b00?w=800&q=80",
      alt: "A wooden fishing boat beside the whitewashed walls of Elmina Castle",
      caption: "Elmina Castle, Cape Coast",
    },
    {
      image: "https://images.unsplash.com/photo-1628353100859-d2fb3c142234?w=800&q=80",
      alt: "Palm-lined residential street in Lagos, Nigeria",
      caption: "Lagos neighborhoods",
    },
    {
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1000&q=80",
      alt: "Crowd at a concert under colorful stage lights",
      caption: "Afrobeats nights",
    },
    {
      image: "https://images.unsplash.com/photo-1667988113241-a9819757f6d6?w=800&q=80",
      alt: "Wooden fishing boats resting on a Ghanaian beach",
      caption: "Coastal Ghana",
    },
    // {
    //   image: "https://images.unsplash.com/photo-1743637262768-9acaf83ce548?w=800&q=80",
    //   alt: "Fishermen pulling in a net together on the beach",
    //   caption: "Life on the coast",
    // },
    {
      image: "https://images.unsplash.com/photo-1769905226608-2b05fd8d9212?w=1000&q=80",
      alt: "Visitors admiring colorful African art and textiles in a gallery",
      caption: "Nike Art Gallery",
    },
  ],
  overview: {
    destinations: ["Lagos, Nigeria.", "Accra, Ghana."],
    duration: "7 Nights in West Africa",
    durationBreakdown: "3 days in Lagos, 4 days in Accra",
    depositPrompt: "Make an initial deposit of $500 now to secure your spot.",
  },
  packages: [
    {
      name: "Single Occupancy",
      price: 2999,
      currency: "USD",
      unit: "per person",
      description: "One person per room.",
      includes: [
        "Accommodation for all 7 nights across Lagos & Accra",
        "All group dinners, the Welcome Dinner, and Christmas Dinner",
        "Nike Art Gallery, Elmina Castle, and Labadi Beach excursions",
        "Concierge support throughout the trip",
      ],
      depositAmount: 500,
    },
    {
      name: "Double Occupancy",
      price: 2100,
      currency: "USD",
      unit: "per person",
      description: "Shared room (two people).",
      includes: [
        "Accommodation for all 7 nights across Lagos & Accra",
        "All group dinners, the Welcome Dinner, and Christmas Dinner",
        "Nike Art Gallery, Elmina Castle, and Labadi Beach excursions",
        "Concierge support throughout the trip",
      ],
      depositAmount: 500,
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

export const cancellationPolicy = {
  title: "Cancellation & Refund Policy",
  intro: "By submitting your deposit, you acknowledge and agree to the following cancellation terms.",
  sections: [
    {
      heading: "Non-Refundable Deposit",
      body: [
        "A non-refundable, non-transferable deposit is required to secure your reservation. Your space is not confirmed until the deposit has been received.",
      ],
    },
    {
      heading: "Payments",
      body: [
        "Because Solstice Privé makes advance payments to hotels, transportation providers, activity operators, and other suppliers on your behalf, all payments made toward your trip are generally non-refundable.",
        "If a cancellation occurs, any refund will be limited to amounts, if any, recovered from our suppliers, less the non-refundable deposit, payment processing fees, administrative costs, and any other non-recoverable expenses already incurred.",
      ],
    },
    {
      heading: "Reservation Transfers",
      body: [
        "If you are unable to travel, you may request to transfer your reservation to another eligible traveler. All transfers are subject to supplier approval, availability, applicable deadlines, and any name-change or administrative fees.",
      ],
    },
    {
      heading: "Trip Cancellation by Solstice Privé",
      body: [
        "If Solstice Privé cancels a trip for reasons other than force majeure, travelers will receive a refund of all monies paid to Solstice Privé, excluding any third-party fees that cannot be recovered from suppliers.",
      ],
    },
    {
      heading: "Force Majeure",
      body: [
        "Solstice Privé shall not be responsible for cancellations, delays, or changes caused by events beyond our reasonable control, including but not limited to natural disasters, severe weather, pandemics, government actions, civil unrest, airline disruptions, strikes, or other unforeseen circumstances. Refunds, if any, will be subject to the refund policies of our suppliers.",
      ],
    },
    {
      heading: "Travel Insurance",
      body: [
        "We strongly recommend purchasing comprehensive travel insurance, including trip cancellation, trip interruption, medical coverage, and baggage protection. Many circumstances that prevent travel are covered only through travel insurance and not through Solstice Privé's cancellation policy.",
      ],
    },
  ],
  closing:
    "Failure to make scheduled monthly payments may result in cancellation of your reservation. All amounts previously paid will be forfeited, and your reservation may be released to another traveler without further notice.",
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
  paymentContactEmail: contactEmail,
};

export const manifesto = {
  eyebrow: "Our Philosophy",
  tagline: "Where Extraordinary People Meet Extraordinary Places",
  collage: [
    {
      image: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?w=900&q=80",
      alt: "Cliffside view of a turquoise beach cove in Bali, Indonesia",
    },
    {
      image: "/assets/img-2.jpeg",
      alt: "A man and woman laughing together over wine at an outdoor table",
    },
    {
      image: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=900&q=80",
      alt: "Colorful colonial balconies along a street in Cartagena, Colombia",
    },
  ],
  paragraphs: [
    "At Solstice Privé, we don't just plan trips. We curate unforgettable journeys that connect people, cultures, and extraordinary experiences.",
    "We are a luxury travel community created for curious travelers who want more than a vacation. Our journeys are intentionally designed to immerse you in the heart of each destination through authentic culture, exceptional hospitality, meaningful connections, and experiences you simply can't recreate on your own.",
    "Built on three guiding principles. Discover. Connect. Transform. Every Solstice Privé experience invites you to see the world differently. Whether you're celebrating life's milestones, exploring with friends, traveling solo, investing in your wellness, or stepping into a new adventure, we believe the best memories are created when travel is shared.",
    "From vibrant festivals and hidden cultural gems to wellness retreats, culinary discoveries, luxury accommodations, and once-in-a-lifetime moments, our goal is simple: to create journeys that leave you inspired long after you've returned home.",
    "Because for us, travel isn't just about checking countries off a list. It's about collecting stories, building lifelong friendships, embracing new perspectives, and returning home with a fuller heart.",
  ],
  pillars: [
    {
      num: "01",
      label: "Discover",
      image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=900&q=80",
      alt: "Ornate tiled fountain and mosaic archways in Marrakech, Morocco",
    },
    {
      num: "02",
      label: "Connect",
      image: "/assets/img-1.jpeg",
      alt: "Three women toasting with champagne glasses",
    },
    {
      num: "03",
      label: "Transform",
      image: "/assets/img-3.jpeg",
      alt: "Woman in a spa robe relaxing with tea",
    },
  ],
  closingLine: "Your passport opens the door. Solstice Privé opens the experience.",
};

export interface GalleryImage {
  image: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export const galleryImages: GalleryImage[] = [
  {
    image: "/assets/img-1.jpeg",
    alt: "Two travelers posing in front of the Taj Mahal, India",
    caption: "The Taj Mahal, India",
    width: 3024,
    height: 4032,
  },
  {
    image: "/assets/img-9.jpeg",
    alt: "Group celebrating a milestone birthday on a palm-lined terrace",
    caption: "Milestone Celebrations",
    width: 1600,
    height: 738,
  },
  {
    image: "/assets/img-6.jpeg",
    alt: "Traveler in colorful outfit on the steps of a Japanese shrine",
    caption: "Temple Steps, Japan",
    width: 768,
    height: 1024,
  },
  {
    image: "/assets/img-3.jpeg",
    alt: "Travelers dressed in traditional Thai attire for a cultural ceremony",
    caption: "Cultural Traditions, Thailand",
    width: 900,
    height: 1600,
  },
  {
    image: "/assets/img-8.jpeg",
    alt: "Crowd gathered at the Super Nintendo World entrance, Universal Studios Japan",
    caption: "Universal Studios Japan",
    width: 768,
    height: 1024,
  },
  {
    image: "/assets/img-4.jpeg",
    alt: "Friends enjoying an evening dinner overlooking the Adriatic coastline",
    caption: "Dinner With a View",
    width: 768,
    height: 1024,
  },
  {
    image: "/assets/img-10.jpeg",
    alt: "Large group photo celebrating a 40th birthday trip together",
    caption: "Turning 40 in Paradise",
    width: 1600,
    height: 794,
  },
  {
    image: "/assets/img-7.jpeg",
    alt: "Friends posing on shrine steps beside a stone lion statue in Japan",
    caption: "Temple Visits, Japan",
    width: 768,
    height: 1024,
  },
  {
    image: "/assets/img-2.jpeg",
    alt: "Group of friends posing together on a volcanic coastal viewpoint",
    caption: "Island Adventures",
    width: 1200,
    height: 1600,
  },
  {
    image: "/assets/img-5.jpeg",
    alt: "Group enjoying an ice cream stop together while traveling",
    caption: "Sweet Stops Along the Way",
    width: 900,
    height: 1600,
  },
];
