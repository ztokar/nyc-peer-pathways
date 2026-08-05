import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Briefcase, CheckCircle, MapPin, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ApploiJobBoard from "@/components/ApploiJobBoard";
import peerMeeting from "@/assets/peer-meeting.png";

const whatWeOffer = [
  { text: "Community-based field work", description: ": real connection, not desk work" },
  { text: "Supportive team culture", description: ": you'll have backup" },
  { text: "Flexible scheduling", description: ": work that fits your life" },
  { text: "Meaningful impact", description: ": your story becomes someone else's hope" },
  { text: "Competitive pay", description: ": based on your experience" },
];

const whoWereLookingFor = [
  "Talented",
  "Adults 18+",
  "Motivated individuals",
  "Reliable with strong boundaries",
  "Ready to travel within NY",
  "Compassionate and grounded",
];

const jobIncludes = [
  "Meeting peers in the community",
  "1:1 recovery support",
  "Group support facilitation",
  "Daily life navigation",
  "Documentation",
  "Real connection and mentorship",
];

const positions = [
  {
    title: "Peer Support Specialist",
    description:
      "Provides real connection and mentorship to peers in the community through 1:1 recovery support, group facilitation, and daily life navigation.",
    location: "All 5 NY Boroughs",
    schedule: "Flexible Schedule",
    type: "Full-Time / Part-Time",
  },
  {
    title: "Special Instruction",
    description:
      "Provides individualized developmental support and intervention services to young children with developmental delays or disabilities. The position focuses on promoting growth in communication, cognitive, social-emotional, and adaptive skills through evidence-based strategies, child-centered activities, and family collaboration to support each child's development and progress.",
    location: "NY",
    schedule: "Flexible Schedule",
    type: "Full-Time / Part-Time",
  },
  {
    title: "Occupational Therapist",
    description:
      "The Occupational Therapist evaluates and provides treatment to help patients develop, recover, and maintain the skills needed to perform daily activities and improve independence. The Occupational Therapist creates individualized treatment plans, provides therapeutic interventions, monitors patient progress, and collaborates with families and healthcare professionals to support patient goals and improve quality of life.",
    location: "NY",
    schedule: "Flexible Schedule",
    type: "Full-Time / Part-Time",
  },
  {
    title: "Speech Therapist",
    description:
      "The Speech Therapist evaluates, diagnoses, and provides treatment to patients with communication, speech, language, voice, and swallowing disorders. The Speech Therapist develops individualized treatment plans, provides therapeutic interventions, monitors patient progress, and collaborates with families and healthcare professionals to support patient goals and improve overall quality of life.",
    location: "NY",
    schedule: "Flexible Schedule",
    type: "Full-Time / Part-Time",
  },
  {
    title: "School-Based Board Certified Behavior Analyst (BCBA)",
    description:
      "The School-Based Board Certified Behavior Analyst (BCBA) provides behavioral assessment, consultation, and intervention services to support students within an educational setting. The BCBA evaluates student needs, develops individualized behavior support plans, monitors progress, and provides clinical supervision to behavior support staff, including Registered Behavior Technicians (RBTs). The BCBA collaborates with teachers, administrators, families, related service providers, and the staffing agency to develop effective strategies that promote student success, independence, communication, and positive behavioral outcomes. The BCBA is expected to maintain professional standards, follow school district requirements, and comply with agency, state, and federal regulations.",
    location: "NY",
    schedule: "Flexible Schedule",
    type: "Full-Time / Part-Time",
  },
  {
    title: "School-Based Registered Behavior Technician (RBT)",
    description:
      "The School-Based Registered Behavior Technician (RBT) provides direct behavioral support services to students within an educational setting under the supervision and direction of a Board Certified Behavior Analyst (BCBA) or other qualified supervisor. The RBT implements individualized behavior intervention plans, supports skill development, collects behavioral data, and assists students in improving communication, social, academic, and daily living skills. The RBT collaborates with teachers, school staff, families, supervisors, and the staffing agency to promote student success and maintain a safe, supportive, and structured learning environment. The RBT is expected to provide services with professionalism, follow school and agency policies, and comply with all applicable regulations and professional standards.",
    location: "NY",
    schedule: "Flexible Schedule",
    type: "Full-Time / Part-Time",
  },
];

const JobsPage = () => {
  return (
    <>
      <Helmet>
        <title>Open Positions NY | Rise2Growth Staffing Agency Careers</title>
        <meta 
          name="description" 
          content="Rise2Growth is hiring across NY: Support Specialist, Special Instruction, Occupational Therapist, Speech Therapist, Physical Therapist, BCBA, and RBT. Apply today for meaningful work." 
        />
        <meta 
          name="keywords" 
          content="Rise2Growth jobs, support specialist jobs NY, special instruction jobs NY, occupational therapist jobs NY, speech therapist jobs NY, physical therapist jobs NY, BCBA jobs NY, RBT jobs NY, healthcare staffing NY" 
        />
        <link rel="canonical" href="https://rise2growth.com/jobs" />
        
        <script type="application/ld+json">
          {JSON.stringify(
            positions.map((position) => ({
              "@context": "https://schema.org",
              "@type": "JobPosting",
              "title": position.title,
              "description": position.description,
              "hiringOrganization": {
                "@type": "EmploymentAgency",
                "name": "Rise2Growth",
                "description": "Staffing agency connecting talented individuals with meaningful work across NY"
              },
              "jobLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "New York",
                  "addressRegion": "NY",
                  "addressCountry": "US"
                }
              },
              "employmentType": ["FULL_TIME", "PART_TIME"]
            }))
          )}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  Jobs at <span className="text-primary">Rise2Growth</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  <strong>We're hiring specialists across NY.</strong>
                </p>
                <p className="text-muted-foreground mt-4">
                  If you are looking for meaningful community-based work, let's talk.
                </p>
              </div>
            </div>
          </section>

          {/* Open Positions */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                  Open Positions
                </h2>

                <div className="bg-card rounded-xl border border-border shadow-lg p-6 md:p-8">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4 text-center">
                    Apply Through Our Job Board
                  </h3>
                  <ApploiJobBoard />

                  <div className="mt-12">
                    <h4 className="text-xl font-display font-bold text-foreground mb-6 text-center">
                      Current Opportunities
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      {positions.map((position) => (
                        <div key={position.title} className="bg-background rounded-xl p-8 shadow-lg border border-border flex flex-col">
                          <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                            {position.title}
                          </h3>
                          <p className="text-muted-foreground mb-6 flex-grow">
                            {position.description}
                          </p>
                          <div className="flex flex-wrap gap-4 mb-6">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <MapPin className="h-5 w-5" />
                              <span>{position.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Clock className="h-5 w-5" />
                              <span>{position.schedule}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Briefcase className="h-5 w-5" />
                              <span>{position.type}</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-4">
                            <Button size="lg" asChild>
                              <Link to="/contact">Apply Now</Link>
                            </Button>
                            <Button size="lg" variant="secondary" asChild>
                              <Link to="/faqs">Read FAQs</Link>
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* What We Offer */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-8">
                  What We Offer
                </h2>
                <ul className="space-y-4">
                  {whatWeOffer.map((item) => (
                    <li key={item.text} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-lg text-foreground">
                        <strong>{item.text}</strong> {item.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Who We're Looking For */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <div>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                    Who We're Looking For
                  </h2>
                  <p className="text-muted-foreground mb-8">People who are:</p>
                  <ul className="space-y-3">
                    {whoWereLookingFor.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <img 
                    src={peerMeeting} 
                    alt="Rise2Growth peer specialist meeting"
                    className="w-full rounded-2xl shadow-xl clip-watermark"
                  />
                </div>
              </div>
            </div>
          </section>


          {/* Why Work With Us */}
          <section className="py-16 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                  Why Work With Us
                </h2>
                <p className="text-xl text-muted-foreground mb-2">
                  Your story has power.
                </p>
                <p className="text-xl text-muted-foreground mb-2">
                  Your experience matters here.
                </p>
                <p className="text-lg text-foreground font-medium mt-4">
                  You'll be supported while you support others.
                </p>
              </div>
            </div>
          </section>

          {/* Apply CTA */}
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-display font-bold mb-4">
                Apply Today
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Send your resume and the areas you can work in.
                <br />
                We'll reach out soon.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">Apply Now</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/faqs">Read FAQs</Link>
                </Button>
              </div>
              <p className="mt-8 opacity-80">
                Not certified yet? <Link to="/resources" className="underline hover:no-underline">Learn how to get started →</Link>
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>

    </>
  );
};

export default JobsPage;