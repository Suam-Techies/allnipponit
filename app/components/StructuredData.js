import BUSINESS from "../business-config";

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.name,
    description:
      "Professional IT support, managed IT services, computer support, network assistance, and business technology solutions in South Jordan, Utah.",
    url: BUSINESS.website,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.stateAbbr,
      postalCode: BUSINESS.address.zip,
      addressCountry: "US",
    },
    hasMap: BUSINESS.mapDirectionsUrl,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    areaServed: BUSINESS.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
      "@id": `https://en.wikipedia.org/wiki/${area},_Utah`,
    })),
    serviceType: [
      "IT Support",
      "Managed IT Services",
      "Computer Support",
      "Network Support",
      "Cloud Services",
      "Cybersecurity",
      "Backup & Data Recovery",
    ],
    priceRange: "$$",
    // Only uncomment and add social profiles when they exist
    // sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
