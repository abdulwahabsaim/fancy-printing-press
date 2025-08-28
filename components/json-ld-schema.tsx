// FILE: components/json-ld-schema.tsx

import Script from 'next/script';

export function JsonLdSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "PrintingService",
    "name": "Fancy Printing Press",
    "description": "Your trusted partner for premium printing solutions for over 20 years in Gujranwala. We offer business cards, banners, book printing, and more.",
    "url": "https://abdulwahabsaim.site",
    "telephone": "+923006484741",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bank More Near TCS Office",
      "addressLocality": "Gujranwala",
      "addressRegion": "Punjab",
      "postalCode": "52250", // Standard Gujranwala Cantt postal code
      "addressCountry": "PK"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "image": "https://abdulwahabsaim.site/opengraph-image", // Points to your OG image
    "priceRange": "$$",
    "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+923006484741",
          "contactType": "Customer Service",
          "contactOption": "TollFree",
          "areaServed": "PK"
        },
        {
          "@type": "ContactPoint",
          "telephone": "+923041568682",
          "contactType": "Technical Support",
          "contactOption": "TollFree",
          "areaServed": "PK"
        }
      ]
  };

  return (
    <Script
      id="json-ld-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}