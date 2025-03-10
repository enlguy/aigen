import { FC } from "react";
import { FaChartLine, FaCogs, FaUsers, FaSyncAlt } from "react-icons/fa";

const Features: FC = () => {
  const features = [
    {
      title: "Advanced Analytics",
      description:
        "Gain deep insights into customer behavior and trends with our advanced analytics tools.",
      icon: <FaChartLine />,
    },
    {
      title: "Automation",
      description:
        "Automate routine tasks to boost productivity and focus on what matters most.",
      icon: <FaCogs />,
    },
    {
      title: "Customer Insights",
      description:
        "Understand your customers better with comprehensive profiles and interaction history.",
      icon: <FaUsers />,
    },
    {
      title: "Seamless Integration",
      description:
        "Integrate with your favorite tools and platforms for a unified workflow.",
      icon: <FaSyncAlt />,
    },
  ];

  return (
    <section className="py-16 bg-white text-black">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="text-indigo-400 text-6xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-black">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
