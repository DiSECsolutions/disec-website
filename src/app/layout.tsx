import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#050816",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: {
    default: "DiSEC Solutions | Building AI That Solves Real Problems",
    template: "%s | DiSEC Solutions",
  },
  description: "DiSEC Solutions develops proprietary Artificial Intelligence products, enterprise software, and intelligent infrastructure for enterprises, startups, and governments.",
  keywords: [
    "Artificial Intelligence Company",
    "AI Startup India",
    "Enterprise AI",
    "AI Products",
    "Machine Learning Solutions",
    "DiSEC Solutions",
    "Gautham Krishna P",
    "Intelligent Software Platforms",
    "Cloud-Native Technologies"
  ],
  metadataBase: new URL("https://disec.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DiSEC Solutions | Building AI That Solves Real Problems",
    description: "DiSEC Solutions develops proprietary Artificial Intelligence products, enterprise software, and intelligent infrastructure for enterprises, startups, and governments.",
    url: "https://disec.ai",
    siteName: "DiSEC Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DiSEC Solutions | Building AI That Solves Real Problems",
    description: "DiSEC Solutions develops proprietary Artificial Intelligence products, enterprise software, and intelligent infrastructure for enterprises, startups, and governments.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://disec.ai/#organization",
      "name": "DiSEC Solutions",
      "url": "https://disec.ai",
      "logo": "https://disec.ai/logo.png",
      "description": "DiSEC Solutions develops proprietary Artificial Intelligence products, enterprise software, and intelligent infrastructure.",
      "founder": {
        "@type": "Person",
        "name": "Gautham Krishna P",
        "jobTitle": "Founder & CEO",
        "url": "https://gauthamkrishna.com"
      },
      "sameAs": [
        "https://github.com/disec",
        "https://linkedin.com/company/disec"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://disec.ai/#website",
      "url": "https://disec.ai",
      "name": "DiSEC Solutions",
      "description": "Building AI That Solves Real Problems",
      "publisher": {
        "@id": "https://disec.ai/#organization"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#050816] text-[#FFFFFF] antialiased selection:bg-primary/30 selection:text-primary">
        {children}
      </body>
    </html>
  );
}

