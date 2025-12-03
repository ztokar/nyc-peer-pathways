import { CheckCircle } from "lucide-react";
import peerOutdoor from "@/assets/peer-support-outdoor.jpeg";

const values = [
  "Compassion and understanding in every interaction",
  "Lived experience as a foundation for support",
  "Empowerment through shared growth",
  "Serving all five NYC boroughs",
  "Building lasting recovery and wellness",
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={peerOutdoor}
              alt="Peer support specialist providing comfort and guidance"
              className="w-full rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-xl shadow-lg hidden md:block">
              <p className="text-3xl font-display font-bold">5</p>
              <p className="text-sm font-medium">NYC Boroughs Served</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              About <span className="text-primary">Rise2Growth</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Rise2Growth is dedicated to connecting individuals with certified peer support specialists who understand their journey firsthand. Our team of compassionate professionals brings lived experience in mental health recovery, substance use recovery, and personal growth.
            </p>
            <p className="text-muted-foreground mb-8">
              We believe that the most powerful support comes from those who have walked a similar path. Our peer specialists serve as role models, advocates, and guides, helping individuals in Manhattan, Brooklyn, Queens, The Bronx, and Staten Island achieve their personal goals.
            </p>

            <ul className="space-y-4 mb-8">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{value}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <div className="bg-muted rounded-lg p-4 text-center">
                <p className="text-2xl font-display font-bold text-primary">NYC</p>
                <p className="text-sm text-muted-foreground">Based</p>
              </div>
              <div className="bg-muted rounded-lg p-4 text-center">
                <p className="text-2xl font-display font-bold text-primary">Certified</p>
                <p className="text-sm text-muted-foreground">Specialists</p>
              </div>
              <div className="bg-muted rounded-lg p-4 text-center">
                <p className="text-2xl font-display font-bold text-primary">24/7</p>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
