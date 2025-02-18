
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-neutral-900 mb-6 animate-fadeIn">
              Empowering You with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-600">
                AI Knowledge
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto mb-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              Transform your business with cutting-edge AI training tailored for individuals and organizations.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors animate-fadeIn"
              style={{ animationDelay: "0.4s" }}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-neutral-900 text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Individual Training",
                description: "Personalized AI coaching tailored to your learning pace and goals."
              },
              {
                title: "Corporate Workshops",
                description: "Comprehensive AI training programs for teams and organizations."
              },
              {
                title: "Consultation",
                description: "Expert guidance on implementing AI solutions in your business."
              }
            ].map((service, index) => (
              <div
                key={service.title}
                className="p-6 bg-neutral-100 rounded-lg hover:shadow-md transition-shadow animate-fadeIn"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{service.title}</h3>
                <p className="text-neutral-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-neutral-900 mb-6">About Pink Cactus</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
              We believe in making AI accessible and understandable for everyone. Our mission is to bridge the gap between complex AI technologies and practical business applications.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-neutral-900 hover:text-neutral-700 transition-colors"
            >
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Pink Cactus</h3>
              <p className="text-neutral-400">Empowering You with AI Knowledge</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["About", "Services", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase()}`}
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-neutral-400">info@pinkcactus.ai</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {["Twitter", "LinkedIn", "Instagram"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-neutral-400">
            <p>&copy; {new Date().getFullYear()} Pink Cactus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
