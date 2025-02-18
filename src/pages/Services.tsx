
import Navbar from "@/components/Navbar";
import { ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Navbar />
      
      <div className="pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-semibold text-neutral-900 mb-6">Our Services</h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Comprehensive AI training and consultation services tailored to your needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Individual Training",
                description: "One-on-one personalized AI training sessions designed to match your learning pace and goals.",
                features: [
                  "Customized curriculum",
                  "Flexible scheduling",
                  "Hands-on projects",
                  "Progress tracking"
                ]
              },
              {
                title: "Corporate Workshops",
                description: "Comprehensive training programs for teams and organizations looking to leverage AI.",
                features: [
                  "Team-based learning",
                  "Industry-specific cases",
                  "Interactive workshops",
                  "Assessment reports"
                ]
              },
              {
                title: "AI Consultation",
                description: "Expert guidance on implementing AI solutions in your business operations.",
                features: [
                  "Technical assessment",
                  "Strategy development",
                  "Implementation support",
                  "Regular reviews"
                ]
              }
            ].map((service) => (
              <div key={service.title} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">{service.title}</h3>
                <p className="text-neutral-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-neutral-600">
                      <ArrowRight className="h-4 w-4 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2 px-4 bg-primary hover:bg-primary-darker text-white rounded transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm mb-16">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-6">Our Training Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Assessment",
                  description: "We evaluate your current knowledge and goals"
                },
                {
                  step: "2",
                  title: "Planning",
                  description: "Creating a customized training program"
                },
                {
                  step: "3",
                  title: "Implementation",
                  description: "Hands-on training and practice sessions"
                },
                {
                  step: "4",
                  title: "Review",
                  description: "Regular progress evaluation and adjustments"
                }
              ].map((phase) => (
                <div key={phase.step} className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">{phase.title}</h3>
                  <p className="text-neutral-600">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
