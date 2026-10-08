/**
 * Everything about the London event in one place, so copy changes stay out of the markup.
 * Anything marked TODO is a placeholder waiting on real details from the organisers.
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
    "https://docs.google.com/document/d/1NKjI_6sksQOKyrdeE1wEJZYSWEvix8LB74sIF2vokoI/edit?usp=sharing",
  contactEmail: "haven@hackclub.com",
} as const;

/** The email box submits as a GET, so these become the query string in this order, then `email`. */
export const signup = {
  action: "https://forms.hackclub.com/haven-signup",
  params: {
    r: "18",
    ref: "short-link-referral",
    event: "recQ6BUrgLYAcLZ7M",
  },
  placeholder: "you@example.com",
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

/** Draft running order. TODO: confirm with the team before launch. */
export const schedule = [
  { time: "09:00", title: "Doors open", detail: "Check in, grab breakfast, find a seat." },
  { time: "09:45", title: "Kickoff", detail: "Welcome, theme reveal and team forming." },
  { time: "10:30", title: "Start jamming", detail: "Workshops run alongside for beginners." },
  { time: "13:00", title: "Lunch", detail: "Free food. Obviously." },
  { time: "14:00", title: "Workshops & building", detail: "Mentors on hand all afternoon." },
  { time: "18:00", title: "Dinner", detail: "Refuel for the final push." },
  { time: "19:00", title: "Pencils down & demos", detail: "Ship to itch.io, then show it off." },
  { time: "20:30", title: "Prizes & wrap up", detail: "Awards, photos and goodbyes." },
  { time: "21:00", title: "Doors close", detail: "Home time!" },
] as const;

export const venue = {
  name: event.venue,
  // TODO: exact campus and street address.
  address: null as string | null,
  // TODO: add nearest stations once the campus is confirmed, e.g. { line: "Victoria", station: "Pimlico" }.
  travel: [] as { line: string; station: string; note?: string }[],
  // TODO: Google Maps embed URL for the confirmed address.
  mapEmbedUrl: null as string | null,
  notes: [
    "Doors open at 09:00. Please arrive on time for kickoff.",
    "Bring photo ID or your sign-up confirmation email to check in.",
    "The day is free, including food. Let us know about dietary needs when you sign up.",
  ],
};

/** TODO: swap `logo` in for real logo files under /public/images/sponsors/. */
export const sponsors = [
  {
    name: "Ada, the National College for Digital Skills",
    href: "https://ada.ac.uk",
    logo: null as string | null,
  },
  { name: "ElevenLabs", href: "https://elevenlabs.io", logo: null as string | null },
];

/** TODO: real organisers. `photo` is a path under /public/images/team/. */
export const team = [
  { name: "Organiser name", role: "Lead organiser", photo: null as string | null },
  { name: "Organiser name", role: "Workshops", photo: null as string | null },
  { name: "Organiser name", role: "Logistics", photo: null as string | null },
  { name: "Organiser name", role: "Outreach", photo: null as string | null },
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

/**
 * London events Hack Club has run before.
 * TODO: add photos (paths under /public/images/past/) and shipped projects for each.
 */
export const pastEvents = [
  {
    name: "Sunbeam London",
    date: "29 August 2026",
    where: "Hackney Depot",
    blurb: "A free social coding event for girls aged 13–18.",
    href: "https://sunbeam.hackclub.com/london",
    photos: [] as { src: string; alt: string }[],
    projects: [] as { title: string; href: string; by?: string }[],
  },
  {
    name: "Daydream London",
    date: "28 September 2025",
    where: "Ada, Pimlico",
    blurb: "A one-day game jam where teams built and published games on itch.io.",
    href: "https://daydream.hackclub.com/london",
    photos: [] as { src: string; alt: string }[],
    projects: [] as { title: string; href: string; by?: string }[],
  },
  {
    // TODO: date, venue and a blurb for Campfire London.
    name: "Campfire London",
    date: null as string | null,
    where: null as string | null,
    blurb: "Part of Campfire, Hack Club’s largest game jam: 10k teens making games in one weekend.",
    href: "https://campfire.hackclub.com",
    photos: [] as { src: string; alt: string }[],
    projects: [] as { title: string; href: string; by?: string }[],
  },
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
