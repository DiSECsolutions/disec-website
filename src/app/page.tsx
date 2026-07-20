"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Vision from "@/sections/Vision";
import CEO from "@/sections/CEO";
import Products from "@/sections/Products";
import WhyDiSEC from "@/sections/WhyDiSEC";
import Industries from "@/sections/Industries";
import TechStack from "@/sections/TechStack";
import Research from "@/sections/Research";
import Stats from "@/sections/Stats";
import Investors from "@/sections/Investors";
import Testimonials from "@/sections/Testimonials";
import Blog from "@/sections/Blog";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "DiSEC Enterprise AI Stack",
    "description": "Proprietary Artificial Intelligence products, enterprise software, and intelligent infrastructure.",
    "brand": {
      "@type": "Brand",
      "name": "DiSEC Solutions"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "0.00",
      "priceModel": "Enterprise Contact sales for licensing pricing.",
      "availability": "https://schema.org/InStock"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does DiSEC Solutions offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DiSEC Solutions develops proprietary Artificial Intelligence products, enterprise software, and intelligent infrastructure for enterprises, startups, and governments."
        }
      },
      {
        "@type": "Question",
        "name": "Who is the founder of DiSEC Solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DiSEC Solutions was founded by Gautham Krishna, who serves as the Founder & CEO."
        }
      },
      {
        "@type": "Question",
        "name": "How can I partner with DiSEC Solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact our partnerships team through the contact section on our landing page, choosing the 'Become Partner' pipeline."
        }
      }
    ]
  };

  return (
    <div className="relative min-h-screen bg-[#050816] text-white flex flex-col justify-between overflow-x-hidden">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Landing Page Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* Hero Section & Core Metrics */}
        <Hero />

        {/* Corporate Overview */}
        <About />

        {/* Values, Vision & Mission Pillars */}
        <Vision />

        {/* Leadership Spotlight */}
        <CEO />

        {/* Interconnected Products Ecosystem */}
        <Products />

        {/* Corporate Performance Metrics */}
        <Stats />

        {/* Why Choose DiSEC Stack */}
        <WhyDiSEC />

        {/* Industry Verticals */}
        <Industries />

        {/* Technology Ecosystem Stack */}
        <TechStack />

        {/* Model Lifecycle Research Timeline */}
        <Research />

        {/* Institutional Investors Portal */}
        <Investors />

        {/* Customer Validation Masonry */}
        <Testimonials />


        {/* R&D Publications */}
        <Blog />

        {/* Dynamic Enterprise Contact Intake */}
        <Contact />
      </main>

      {/* Corporate Sitemap Footer */}
      <Footer />
    </div>
  );
}
