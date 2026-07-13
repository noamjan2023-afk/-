export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "name": "GANOOV מספרת גברים",
    "description": "Premium barbershop in Rishon LeZion. Mens haircuts, beard trims, and styling.",
    "telephone": "052-400-2658",
    "url": "https://simpletor.app",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hatsor St 1",
      "addressLocality": "Rishon LeZion",
      "addressCountry": "IL"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Rishon LeZion"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
