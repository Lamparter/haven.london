import { event, faqs, sponsors, venue, seo } from "../data/event";

/**
 * schema.org JSON-LD for the page, as one linked @graph.
 * Everything is derived from `src/data/event.ts`, so the structured data can't drift from the copy.
 */
export function buildSchema(site: URL) {
  const abs = (path: string) => new URL(path, site).href;
  const home = abs("/");
  const ids = {
    website: `${home}#website`,
    webpage: `${home}#webpage`,
    event: `${home}#event`,
    hackClub: `${home}#hack-club`,
    place: `${home}#venue`,
    faq: `${home}#faq`,
  };

  const hackClub = {
    "@type": "Organization",
    "@id": ids.hackClub,
    name: "Hack Club",
    url: "https://hackclub.com",
    description:
      "Hack Club is a 501(c)(3) nonprofit and a worldwide network of high school coders and makers.",
    sameAs: ["https://hackclub.com", "https://github.com/hackclub"],
  };

  const place = {
    "@type": "Place",
    "@id": ids.place,
    name: venue.name,
    url: "https://ada.ac.uk",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1 Sutherland St",
      addressLocality: "London",
      addressRegion: "Greater London",
      postalCode: "SW1V 4LD",
      addressCountry: "GB",
    },
    geo: { "@type": "GeoCoordinates", latitude: 51.4893, longitude: -0.1497 },
    hasMap: "https://www.google.com/maps/search/?api=1&query=Ada%2C+the+National+College+for+Digital+Skills",
  };

  const hackathon = {
    "@type": "Event",
    "@id": ids.event,
    name: event.name,
    alternateName: ["Hack Club Haven London", "Haven London hackathon"],
    description: `${seo.description} ${faqs[0].a}`,
    url: home,
    image: [abs(seo.ogImage)],
    startDate: event.startsAt,
    endDate: event.endsAt,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    inLanguage: "en-GB",
    isAccessibleForFree: true,
    typicalAgeRange: "13-18",
    audience: {
      "@type": "PeopleAudience",
      audienceType: "High school students",
      suggestedMinAge: 13,
      suggestedMaxAge: 18,
    },
    location: { "@id": ids.place },
    organizer: { "@id": ids.hackClub },
    sponsor: sponsors.map((s) => ({ "@type": "Organization", name: s.name, url: s.href })),
    offers: {
      "@type": "Offer",
      url: `${home}#signup`,
      price: "0",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
    },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": ids.website,
        url: home,
        name: event.name,
        alternateName: ["Hack Club Haven London", "Haven London hackathon"],
        inLanguage: "en-GB",
        publisher: { "@id": ids.hackClub },
      },
      {
        "@type": "WebPage",
        "@id": ids.webpage,
        url: home,
        name: seo.title,
        description: seo.description,
        inLanguage: "en-GB",
        isPartOf: { "@id": ids.website },
        about: { "@id": ids.event },
        primaryImageOfPage: { "@type": "ImageObject", url: abs(seo.ogImage), width: seo.ogImageWidth, height: seo.ogImageHeight },
      },
      hackClub,
      place,
      hackathon,
      {
        "@type": "FAQPage",
        "@id": ids.faq,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}
