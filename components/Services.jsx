// app/services/page.js

import { FaPaintBrush, FaCode, FaReact, FaServer, FaTools } from 'react-icons/fa';

const services = [
  {
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs tailored to your business needs.",
    icon: <FaPaintBrush className="text-4xl text-blue-500" />,
  },
  {
    title: "Front-End Development",
    description: "Building responsive and dynamic websites using HTML, CSS, and JavaScript.",
    icon: <FaCode className="text-4xl text-green-500" />,
  },
  {
    title: "React Development",
    description: "Developing interactive and efficient single-page applications using React.",
    icon: <FaReact className="text-4xl text-cyan-500" />,
  },
  {
    title: "Next.js Development",
    description: "Building server-rendered React applications and static websites using Next.js.",
    icon: <FaServer className="text-4xl text-purple-500" />,
  },
  {
    title: "Website Maintenance",
    description: "Providing ongoing website maintenance and support to keep your site up-to-date.",
    icon: <FaTools className="text-4xl text-red-500" />,
  },
];

const Services = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-orange-700">My Services</h1>
        <p className="text-xl text-gray-600">I offer a wide range of web development services to meet your business needs.</p>
      </section>
      <section className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Services;
