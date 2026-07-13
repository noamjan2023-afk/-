export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "name": "עידן עבודות אינסטלציה ואיתור נזילות",
    "description": "Professional plumbing services, specializing in thermal leak detection, sewage systems, and bathroom renovations. Serving the Sharon and Center areas.",
    "telephone": "054-590-8198",
    "email": "idan.ihie@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Natanya/Rishon LeZion",
      "addressCountry": "IL"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Natanya"
      },
      {
        "@type": "City",
        "name": "Tel Aviv"
      },
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
