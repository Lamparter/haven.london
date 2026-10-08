/**
 * Everything about the London event in one place, so copy changes stay out of the markup.
 */
export const event = {
  name: "Haven London",
  tagline: "A game jam for teens aged 13-18",
  dateLabel: "Saturday, 14 November 2026",
  timeLabel: "09:00 - 21:00",
  startsAt: "2026-11-14T09:00:00Z",
  endsAt: "2026-11-14T21:00:00Z",
  venue: "Ada, the National College for Digital Skills",
  parentGuideUrl:
    "https://docs.google.com/document/d/1o0IIxcglfIlBbyfnIONJiUj8o4oxToQYWQRMnnJKzkA",
  contactEmail: "london@hackclub.com",
} as const;

/** The email box submits as a GET, so these become the query string in this order, then `email`. */
export const signup = {
  action: "https://forms.hackclub.com/haven-signup",
  params: {
    r: "18",
    ref: "short-link-referral",
    event: "recQ6BUrgLYAcLZ7M",
  },
  placeholder: "johndoe@gmail.com",
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
    title: "Learn & build",
    blurb: "Follow workshops or create at your own pace.",
  },
  {
    title: "Make friends",
    blurb: "Meet other teens in London who love making things.",
  },
  {
    title: "Free food & prizes",
    blurb: "You wouldn't possibly say no to free snacks!",
  },
] as const;

export const schedule = [
  { time: "TBD!", title: "We're still working out the schedule. Sign up and we'll let you know as soon as we figure it out!", detail: "" },
] as const;

export const venue = {
  name: event.venue,
  address: "1 Sutherland St, Pimlico, London SW1V 4LD",
  travel: [{ line: "Victoria", station: "Pimlico" }, { line: "Circle", station: "Sloane Square" }] as { line: string; station: string; note?: string }[],
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.302427537281!2d-0.1497113222096472!3d51.489317471809414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c3b9c336b35%3A0xb559f2dd59d7c71!2sAda%2C%20the%20National%20College%20for%20Digital%20Skills!5e0!3m2!1sen!2suk!4v1791479954312!5m2!1sen!2suk",
  notes: [
    "Doors open at 09:00. For safeguarding purposes, we cannot accept latecomers.",
    "You will receive a QR code after signing up that you must bring to check in.",
    "The day is free, including food. You'll be asked about dietary requirements prior to the event.",
    "Bring a friend! Even if they don't know anything about coding, we'll ensure they have a great time."
  ],
};

export const sponsors = [
  { name: "Ada College", href: "https://ada.ac.uk", logo: "/images/sponsors/ada.webp" },
  { name: "ElevenLabs", href: "https://elevenlabs.io", logo: "/images/sponsors/elevenlabs.webp" },
];

export const team = [
  { name: "Matthew S", role: "Lead organiser", photo: "/images/team/mattsoh.webp" },
  { name: "Jupiter F", role: null as string | null, photo: "/images/team/lamparter.webp" },
  { name: "Nirvaan T", role: null as string | null, photo: "/images/team/duckida.webp" },
  { name: "Nihaal S", role: null as string | null, photo: null as string | null },
  { name: "Arca C", role: null as string | null, photo: "/images/team/arc.webp" },
  { name: "Derek Y", role: null as string | null, photo: "/images/team/derekyuan100.webp" },
];

export const resources = [
  {
    title: "Parent guide",
    blurb: "Safety, supervision and everything a parent or guardian might want to know.",
    href: event.parentGuideUrl as string | null,
  },
  {
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
    photos: [{ src: "/images/past/sunbeam-1.webp", alt: "Sunbeam London organisers group selfie" }] as { src: string; alt: string }[],
    projects: [] as { title: string; href: string; by?: string }[],
  },
  {
    name: "Campfire London",
    date: "28 February 2026",
    where: "Ada College",
    blurb: "Part of Campfire, Hack Club's largest game jam: 10k teens making games in one weekend.",
    href: "https://campfire.hackclub.com/london",
    photos: [{ src: "/images/past/campfire-1.webp", alt: "Campfire London participants on the rooftop of Ada College" }] as { src: string; alt: string }[],
    projects: [] as { title: string; href: string; by?: string }[],
  },
  {
    name: "Daydream London",
    date: "28 September 2025",
    where: "Ada College",
    blurb: "A one-day game jam where teams built and published games on itch.io.",
    href: "https://daydream.hackclub.com/london",
    photos: [] as { src: string; alt: string }[],
    projects: [] as { title: string; href: string; by?: string }[],
  }
];

export const faqs = [
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
