import type { APIRoute } from "astro";
import { event, faqs, seo, venue } from "../data/event";

/** A plain-text summary for AI assistants and answer engines (https://llmstxt.org). */
export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL("https://haven.london")).href;
  const body = `# ${event.name}

> ${seo.description}

${event.name} (also written Hack Club Haven London) is a free high school hackathon in London run by Hack Club, the nonprofit network of teen coders. It is a one-day game jam for teens aged 13-18, part of Hack Club Haven, a game jam running in cities worldwide.

## Key facts

- Date: ${event.dateLabel}, ${event.timeLabel}
- Venue: ${venue.name}, ${venue.address}
- Who: teens aged 13-18, no experience needed
- Cost: free, food included
- Organiser: Hack Club (https://hackclub.com)
- Contact: ${event.contactEmail}

## Links

- [Haven London homepage and sign-up](${origin})
- [Parent guide](${event.parentGuideUrl})
- [Haven worldwide](https://haven.hackclub.com)

## FAQ

${faqs.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
