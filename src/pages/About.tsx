
import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Navbar />
      
      <div className="pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-semibold text-neutral-900 mb-6">About Pink Cactus</h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Pioneering AI education and training solutions since 2023
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-neutral-900">Our Mission</h2>
              <p className="text-neutral-600">
                At Pink Cactus, we're dedicated to making AI technology accessible and understandable 
                for everyone. We believe that AI education should be practical, engaging, and tailored 
                to real-world applications.
              </p>
              <p className="text-neutral-600">
                Our team of expert trainers and consultants brings years of industry experience to help 
                individuals and organizations harness the power of AI effectively and responsibly.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/photo-1649972904349-6e44c42644a7" 
                alt="Team member working"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Experience",
                value: "10+",
                description: "Years Combined Experience"
              },
              {
                title: "Clients",
                value: "500+",
                description: "Satisfied Learners"
              },
              {
                title: "Training Hours",
                value: "5000+",
                description: "Hours of Training Delivered"
              }
            ].map((stat) => (
              <div key={stat.title} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-neutral-900 mb-1">{stat.title}</div>
                <div className="text-neutral-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
