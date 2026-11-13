/**
 * Everything about the London event in one place, so copy changes stay out of the markup.
 */
export const event = {
  name: "Haven London",
  tagline: "A game jam for teens aged 13-18",
  dateLabel: "Saturday, 14 November 2026",
  dateShort: "14 November 2026",
  timeLabel: "09:00 - 20:00",
  startsAt: "2026-11-14T09:00:00Z",
  endsAt: "2026-11-14T20:00:00Z",
  venue: "Ada, the National College for Digital Skills",
  venueShort: "Ada, the National College for Digital Skills",
  parentGuideUrl:
    "https://docs.google.com/document/d/1o0IIxcglfIlBbyfnIONJiUj8o4oxToQYWQRMnnJKzkA",
  contactEmail: "london@haven.hackclub.com",
} as const;

/** Search and social metadata. The page title and description are written around what people actually search for. */
export const seo = {
  title: "Haven London – Hack Club's High School Hackathon in London",
  description: `Haven London is Hack Club's free high school hackathon in London for ages 13-18. Build a game with friends on ${event.dateShort} in Pimlico. Food included.`,
  ogImage: "/images/og-image.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: "Hack Club Haven London: a free high school hackathon in London on 14 November 2026",
} as const;

/** The email box submits as a GET, so these become the query string in this order, then `email`. */
export const signup = {
  action: "https://forms.hackclub.com/haven-signup",
  params: {
    r: "18",
    ref: "short-link-referral",
    event: "recQ6BUrgLYAcLZ7M",
  },
  placeholder: "put ya email here",
  button: "sign up!",
} as const;

export const navLinks = [
  { href: "#about", label: "about", wide: true },
  { href: "#schedule", label: "schedule", wide: false },
  { href: "#venue", label: "venue", wide: true },
  { href: "#faq", label: "faq", wide: false },
] as const;

export const perks = [
  {
    icon: "🛠️",
    title: "Learn & build",
    blurb: "Follow workshops or create at your own pace.",
  },
  {
    icon: "👋",
    title: "Make friends",
    blurb: "Meet other teens in London who love making things.",
  },
  {
    icon: "🍕",
    title: "Free food & prizes",
    blurb: "You wouldn't possibly say no to free snacks!",
  },
] as const;

/** Rows on the departure board. While this is empty the board shows `scheduleNote` instead. */
export const schedule = [
  { time: "9:00", title: "doors open", detail: "Come and get set up!"},
  { time: "9:45", title: "opening ceremony" },
  { time: "10:15", title: "form teams & start building" },
  { time: "10:45", title: "workshops start" },
  { time: "11:30", title: "lunch!" },
  { time: "13:00", title: "lightning talks" },
  { time: "16:30", title: "dinner" },
  { time: "17:00", title: "ship projects" },
  { time: "17:30", title: "project demos & voting" },
  { time: "18:30", title: "closing ceremony" },
  { time: "19:30", title: "home time" },
] as { time: string; title: string; detail?: string }[];

export const scheduleNote =
  "We're still working out the schedule. Sign up and we'll let you know as soon as we figure it out!";

export const venue = {
  name: event.venue,
  address: "1 Sutherland St, Pimlico, London SW1V 4LD",
  travel: [
    { station: "Victoria", lines: ["Victoria", "Circle", "District"] },
    { station: "Pimlico", lines: ["Victoria"] },
    { station: "Sloane Square", lines: ["Circle", "District"] },
  ] as { station: string; lines: string[]; note?: string }[],
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.302427537281!2d-0.1497113222096472!3d51.489317471809414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c3b9c336b35%3A0xb559f2dd59d7c71!2sAda%2C%20the%20National%20College%20for%20Digital%20Skills!5e0!3m2!1sen!2suk!4v1791479954312!5m2!1sen!2suk",
  notes: [
    "Doors open at 09:00. For safeguarding purposes, we cannot accept latecomers.",
    "You will receive a QR code after signing up that you must bring to check in.",
    "The day is free, including food. You'll be asked about dietary requirements prior to the event.",
    "Bring a friend! Even if they don't know anything about coding, we'll ensure they have a great time."
  ],
};

export const sponsors: { name: string; href: string; logo: string | null; logoHasName?: boolean }[] = [
  { name: "Ada College", href: "https://ada.ac.uk", logo: "/images/sponsors/ada.webp", logoHasName: true  },
  { name: "PCBWay", href: "https://www.pcbway.com", logo: "/images/sponsors/pcbway.webp", logoHasName: true },
  { name: "Kitronik", href: "https://kitronik.co.uk", logo: "/images/sponsors/kitronik.webp", logoHasName: true },
  { name: "GenXYZ", href: "https://gen.xyz", logo: "/images/sponsors/xyz.webp" },
  { name: "Sakura Box", href: "https://www.sakurabox.com/en-gb", logo: "/images/sponsors/sakura.webp" },
  { name: "Mr. Wang Hot Pot", href: "https://www.mrwanghotpotuk.co.uk", logo: "/images/sponsors/hotpot.webp", logoHasName: true },
  { name: "Mongoose Publishing", href: "https://www.mongoosepublishing.com", logo: "/images/sponsors/mongoose.webp" },
  { name: "Free Lives", href: "https://freelives.net", logo: "/images/sponsors/freelives.webp" },
];

export const team = [
  { name: "Matthew S", role: "Lead organiser", photo: "/images/team/mattsoh.webp" },
  { name: "Jupiter F", role: null as string | null, photo: "/images/team/lamparter.webp" },
  { name: "Nirvaan T", role: null as string | null, photo: "/images/team/duckida.webp" },
  { name: "Nihaal S", role: null as string | null, photo: "/images/team/neon.webp" },
  // { name: "Arca C", role: null as string | null, photo: "/images/team/arc.webp" },
  { name: "Derek Y", role: null as string | null, photo: "/images/team/derekyuan100.webp" },
];

export const resources = [
  {
    icon: "🧭",
    title: "Parent guide",
    blurb: "Safety, supervision and everything a parent or guardian might want to know.",
    href: event.parentGuideUrl as string | null,
  },
  {
    icon: "🎞️",
    title: "Workshop slides",
    blurb: "The presentations from the in-person workshops, for reference during and after.",
    // TODO: Google Drive / OneDrive folder link.
    href: null as string | null,
  },
];

export const pastEvents = [
  {
    name: "Sunbeam London",
    date: "29 August 2026",
    where: "Hackney Depot",
    blurb: "A free social coding event for girls aged 13-18.",
    href: "https://sunbeam.hackclub.com/london",
    photos: [
      { src: "/images/past/sunbeam-1.webp", alt: "Sunbeam London organisers group selfie" },
      { src: "/images/past/sunbeam-2.webp", alt: "Sunbeam London organiser running a workshop" },
      { src: "/images/past/sunbeam-3.webp", alt: "Sunbeam London participants group selfie" },
      { src: "/images/past/sunbeam-4.webp", alt: "Sunbeam London participants group selfie" },
    ] as { src: string; alt: string }[],
    projects: [] as { title: string; href: string; by?: string }[],
  },
  {
    name: "Campfire London",
    date: "28 February 2026",
    where: "Ada, the National College for Digital Skills",
    blurb: "Part of Campfire, Hack Club's largest game jam: 10k teens making games in one weekend.",
    href: "https://campfire.hackclub.com/london",
    photos: [
      { src: "/images/past/campfire-1.webp", alt: "Campfire London participants on the rooftop of Ada College" },
      { src: "/images/past/campfire-2.webp", alt: "Campfire London organisers group selfie" },
    ] as { src: string; alt: string }[],
    projects: [] as { title: string; href: string; by?: string }[],
  },
  {
    name: "Daydream London",
    date: "28 September 2025",
    where: "Ada, the National College for Digital Skills",
    blurb: "A one-day game jam where teams built and published games on itch.io.",
    href: "https://daydream.hackclub.com/london",
    photos: [
      { src: "/images/past/daydream-1.webp", alt: "Daydream London participants in the lecture theatre at Ada College" },
      { src: "/images/past/daydream-2.webp", alt: "Daydream London organisers setting up for lunch" },
    ] as { src: string; alt: string }[],
    projects: [] as { title: string; href: string; by?: string }[],
  }
];

export const faqs = [
  {
    q: "What is Haven London?",
    a: `Haven London is a free high school hackathon in London, run by Hack Club. It's a one-day game jam for teens aged 13-18, held on ${event.dateLabel} at ${event.venue}.`,
  },
  {
    q: "Is this a hackathon for high school students in London?",
    a: "Yes. Haven London is a hackathon for secondary school and sixth form students aged 13-18 in London. Teams spend the day building and shipping a game, with workshops, mentors, free food and prizes.",
  },
  {
    q: "Where and when is Haven London?",
    a: `${event.dateLabel}, ${event.timeLabel}, at ${event.venue}, ${venue.address}. The nearest stations are Victoria, Pimlico and Sloane Square.`,
  },
  {
    q: "Who can come?",
    a: "Anyone aged 13-18. No prior coding or game-making experience needed.",
  },
  {
    q: "I've never made a game. Is that okay?",
    a: "Absolutely! There are workshops, mentors and teammates to help you get started.",
  },
  {
    q: "How much does it cost?",
    a: "Nothing. Hack Club is a nonprofit, so the event, food and swag are all free.",
  },
  {
    q: "What should I bring?",
    a: "A laptop, a charger, and anything you need to be comfy for the day.",
  },
  {
    q: "What if my parents are concerned?",
    a: `Point them at the parent guide in the resources section, or they can email ${event.contactEmail}.`,
  },
  {
    q: "I have more questions!",
    a: `Ask in #haven-help on the Hack Club Slack, or email ${event.contactEmail}.`,
  },
] as const;
