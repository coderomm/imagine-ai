export const siteUrl = "https://example.com";
export const ogImage = "/opengraph-image.png";
export const googleSiteVerification = "verification_token";

export const siteTitle = "Website Title";
export const siteDescription = "Website description.";

export const socialLinks = [
  "https://github.com/username",
  "https://linkedin.com/in/username",
  "https://x.com/username",
  "https://instagram.com/username",
];

export const appMetadata = {
  metadataBase: siteUrl,

  title: {
    default: siteTitle,
    template: `%s | Website Name`,
  },

  description: siteDescription,

  keywords: ["keyword1", "keyword2", "keyword3"],

  authors: [
    {
      name: "Author Name",
      url: "https://linkedin.com/in/username",
    },
  ],

  creator: "Creator Name",
  publisher: "Publisher Name",
  category: "technology",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "Website Name",
    images: [
      {
        width: 1200,
        height: 630,
        url: ogImage,
        alt: "OpenGraph preview",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
    creator: "@handle",
    images: [ogImage],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  verification: {
    google: googleSiteVerification,
  },

  manifest: "/site.webmanifest",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],

    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],

    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },

  other: {
    "msapplication-TileColor": "#ffffff",
    "theme-color": "#ffffff",
  },
};
