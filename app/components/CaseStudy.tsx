import { FC } from "react";
import { FaChartLine, FaCogs, FaUsers, FaSyncAlt } from "react-icons/fa";

const CaseStudy: FC = () => {
  return (
    <section
      className="relative py-16 text-gray-900 bg-cover bg-center"
      style={{ backgroundImage: "url(/aboutbg.png)" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Overlay */}
      <div className="relative container mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Case Study: How TechCorp Transformed Their CRM
        </h1>

        {/* Client Overview */}
        <div className="mb-8 text-white">
          <h2 className="text-2xl font-semibold mb-4">Client Overview</h2>
          <p className="text-lg">
            TechCorp is a leading technology company with over 500 employees,
            specializing in innovative solutions for businesses worldwide.
          </p>
        </div>

        {/* Challenge */}
        <div className="mb-8 text-white">
          <h2 className="text-2xl font-semibold mb-4">Challenge</h2>
          <p className="text-lg">
            Before using our CRM solution, TechCorp faced significant challenges
            in managing customer relationships and streamlining workflows. They
            struggled with data silos and inefficient processes.
          </p>
        </div>

        {/* Solution */}
        <div className="mb-8 text-white">
          <h2 className="text-2xl font-semibold mb-4">Solution</h2>
          <p className="text-lg">
            Our CRM platform provided TechCorp with a unified view of customer
            data, automation tools to reduce manual tasks, and advanced
            analytics for better decision-making. The integration capabilities
            allowed seamless workflows with their existing systems.
          </p>
          <div className="flex justify-around mt-4">
            <FaChartLine className="text-indigo-200 text-6xl" />
            <FaCogs className="text-indigo-200 text-6xl" />
            <FaUsers className="text-indigo-200 text-6xl" />
            <FaSyncAlt className="text-indigo-200 text-6xl" />
          </div>
        </div>

        {/* Results */}
        <div className="mb-8 text-white">
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
          <ul className="list-disc list-inside text-lg">
            <li>30% increase in customer satisfaction</li>
            <li>25% reduction in manual data entry tasks</li>
            <li>Improved decision-making with real-time analytics</li>
            <li>Seamless integration with existing tools and platforms</li>
          </ul>
          <div className="flex justify-around mt-8">
            <img
              src="/images/before-revenue.jpg"
              alt="Before Revenue Growth"
              className="w-1/2 h-auto rounded-lg shadow-lg"
            />
            <img
              src="/images/after-revenue.jpg"
              alt="After Revenue Growth"
              className="w-1/2 h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg">
            Start Your Success Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
