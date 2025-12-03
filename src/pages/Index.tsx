import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Peer Support Specialist Jobs NYC | Rise2Growth - Certified Peer Specialist Careers</title>
        <meta 
          name="description" 
          content="Join Rise2Growth as a peer support specialist in NYC. We're hiring certified peer specialists, recovery coaches, and peer advocates across Manhattan, Brooklyn, Queens, Bronx & Staten Island." 
        />
        <meta 
          name="keywords" 
          content="peer support specialist job nyc, peer specialist jobs nyc, certified peer support specialist jobs, peer support specialist jobs near me, peer recovery specialist, certified peer specialist, peer recovery coach, peer advocate, peer counselor, recovery coach NYC" 
        />
        <link rel="canonical" href="https://rise2growth.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Peer Support Specialist Jobs NYC | Rise2Growth" />
        <meta property="og:description" content="Join Rise2Growth as a peer support specialist in NYC. Certified peer specialist and recovery coach positions available." />
        <meta property="og:type" content="website" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Rise2Growth",
            "description": "Peer support specialist services in NYC",
            "telephone": "+1-212-470-7439",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "15 Perlman Dr",
              "addressLocality": "Spring Valley",
              "addressRegion": "NY",
              "postalCode": "10977",
              "addressCountry": "US"
            },
            "areaServed": ["Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Careers />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
