import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const faqs = [
  {
    question: "Do I need to be certified?",
    answer: "Yes. You must be a New York State Certified Peer Specialist to work with us.",
  },
  {
    question: "What if I just got certified?",
    answer: "Perfect. We welcome newly certified peers and provide mentorship as you build experience.",
  },
  {
    question: "Where will I work?",
    answer: "Community-based settings across NYC: homes, parks, appointments, community centers. You'll meet people where they are.",
  },
  {
    question: "How many hours per week?",
    answer: "It depends on the role and your availability. Most positions range from 10–20 hours per week, with flexibility.",
  },
  {
    question: "Do I need a car?",
    answer: "Not required, but helpful. Many of our peer specialists use public transit to meet clients throughout the city.",
  },
  {
    question: "What's the pay?",
    answer: "Competitive and based on experience. We'll discuss specifics during the interview process.",
  },
  {
    question: "Will I get support as a peer specialist?",
    answer: "Yes. You'll have access to supervision, mentorship, and a team that values your wellbeing.",
  },
  {
    question: "How do I apply?",
    answer: "Email your resume and the boroughs/areas you can work in to info@rise2growth.com. We'll reach out to schedule a conversation.",
  },
  {
    question: "What makes Rise2Growth different from other agencies?",
    answer: "We're peer-focused. We understand the work because many of us have lived it. You're not just a number here. You're part of a community.",
  },
  {
    question: "What if I have more questions?",
    answer: "Reach out. We're happy to talk through anything you're wondering about.",
  },
];

const FAQsPage = () => {
  return (
    <>
      <Helmet>
        <title>FAQs | Rise2Growth Peer Specialist Staffing Agency NYC</title>
        <meta 
          name="description" 
          content="Questions about working with Rise2Growth? Learn about peer specialist certification, pay, hours, and how your story becomes someone else's hope in NYC." 
        />
        <meta 
          name="keywords" 
          content="Rise2Growth FAQ, peer specialist questions, certified peer specialist requirements NYC, peer support job questions" 
        />
        <link rel="canonical" href="https://rise2growth.com/faqs" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Do I need to be certified?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. You must be a New York State Certified Peer Specialist to work with Rise2Growth." }
              },
              {
                "@type": "Question",
                "name": "Where will I work?",
                "acceptedAnswer": { "@type": "Answer", "text": "Community-based settings across NYC: homes, parks, appointments, community centers. You'll meet people where they are." }
              },
              {
                "@type": "Question",
                "name": "What makes Rise2Growth different?",
                "acceptedAnswer": { "@type": "Answer", "text": "We're peer-focused. We understand the work because many of us have lived it. You're not just a number here. You're part of a community." }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  <span className="text-primary">FAQs</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  <strong>Questions about working as a peer specialist with Rise2Growth?</strong>
                  <br />
                  Here's what you need to know.
                </p>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="bg-card rounded-xl border border-border px-6"
                    >
                      <AccordionTrigger className="text-left font-display font-bold text-foreground hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-display font-bold mb-6">
                Ready to Apply?
              </h2>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">Apply Now</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FAQsPage;