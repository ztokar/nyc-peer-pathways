import { Heart, Users, Brain, Shield } from "lucide-react";
import peerSession from "@/assets/peer-support-session.jpeg";

const services = [
  {
    icon: Users,
    title: "Youth Peer Support (Ages 13–21)",
    description: "Trained youth peers provide consistent encouragement, mentorship, and relatable guidance for adolescents dealing with anxiety, depression, and emotional struggles.",
    benefits: ["Coping Skills", "Self-Advocacy", "Resilience", "Connection"],
  },
  {
    icon: Heart,
    title: "Adult Peer Support (Ages 18+)",
    description: "Connect with someone who has faced similar struggles and come out stronger. Adult Peer Support helps with managing stress, mental health needs, and working toward independence.",
    benefits: ["Life Skills", "Self-Confidence", "Goal Achievement", "Recovery Support"],
  },
  {
    icon: Brain,
    title: "Mental Health Peer Support",
    description: "Certified peer specialists who understand mental health challenges firsthand provide support, guidance, and hope for those on their recovery journey.",
    benefits: ["Lived Experience", "Non-Judgmental", "Empowerment", "Community"],
  },
  {
    icon: Shield,
    title: "Recovery Coaching",
    description: "Peer recovery coaches offer guidance through substance use recovery, sharing their own experiences and providing continuous support.",
    benefits: ["Accountability", "Motivation", "Resources", "Long-term Support"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Our <span className="text-primary">Peer Support</span> Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Rise2Growth offers comprehensive peer support services across all five NYC boroughs, helping individuals achieve their goals through understanding and shared experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit) => (
                      <span
                        key={benefit}
                        className="px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={peerSession}
            alt="Peer support session - two people having a supportive conversation"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
            <div className="p-8 md:p-12 max-w-xl">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                Real Support from Real People
              </h3>
              <p className="text-white/90 mb-6">
                Our certified peer specialists bring lived experience to every interaction, creating genuine connections that foster growth and recovery.
              </p>
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
              >
                Start Your Journey
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
