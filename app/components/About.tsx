import React, { useState } from "react";
import TeamSection from "./ui/Team";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/about-bg.png)" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto py-10 px-4 sm:px-6 lg:px-8 text-white">
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Mission Statement</h2>
          <p>
            Our mission is to provide exceptional service and solutions that
            exceed our clients&apos; expectations.
          </p>
        </section>

        <section className="mb-16 text-right">
          <h2 className="text-3xl font-semibold mb-4">Company History</h2>
          <p>
            Founded in 2020, we have grown from a small startup to a leading
            provider in our industry.
          </p>
        </section>

        <div className="items-center align-center mb-10">
          <TeamSection />
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Accomplishments</h2>
          <p>
            We have achieved numerous milestones, including industry awards and
            certifications.
          </p>
        </section>

        <section className="mb-16 text-right">
          <h2 className="text-3xl font-semibold mb-4 ">Future Goals</h2>
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
