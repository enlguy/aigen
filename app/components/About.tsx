import React from "react";

const About: React.FC = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/aboutbg.png)" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto py-10 px-4 sm:px-6 lg:px-8 text-white">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-lg mt-4">
            Learn more about our mission, values, and the team that makes it all
            happen.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Mission Statement</h2>
          <p>
            Our mission is to provide exceptional service and solutions that
            exceed our clients' expectations.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Company History</h2>
          <p>
            Founded in 2020, we have grown from a small startup to a leading
            provider in our industry.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="/member1.jpg"
                alt="Team Member 1"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-medium">John Doe</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="text-center">
              <img
                src="/member2.jpg"
                alt="Team Member 2"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-medium">Jane Smith</h3>
              <p>CTO</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Values</h2>
          <ul className="list-disc list-inside">
            <li>Integrity</li>
            <li>Innovation</li>
            <li>Customer Focus</li>
            <li>Collaboration</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Accomplishments</h2>
          <p>
            We have achieved numerous milestones, including industry awards and
            certifications.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Future Goals</h2>
          <p>
            Our vision for the future is to continue innovating and expanding
            our services to new markets.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
