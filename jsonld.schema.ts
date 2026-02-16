export const jsonLdSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Website Name",
    url: "https://example.com",
    description: "Website description",
    inLanguage: "en",
  },

  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Person Name",
    url: "https://example.com",
    image: "https://example.com/opengraph-image.png",
    email: "mailto:email@example.com",
    jobTitle: "Job Title",
    description: "Person description",

    address: {
      "@type": "PostalAddress",
      addressLocality: "City",
      addressRegion: "Region",
      addressCountry: "Country",
    },

    sameAs: [
      "https://github.com/username",
      "https://linkedin.com/in/username",
    ],

    knowsAbout: [
      "Skill1",
      "Skill2",
      "Skill3",
    ],
  },
];
