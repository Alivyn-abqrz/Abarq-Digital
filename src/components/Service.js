const ServiceSection = () => {
  const services = [
    {
      icon: "https://via.placeholder.com/100",
      title: "Web Development",
      description: "Building responsive and modern websites to bring your ideas to life."
    },
    {
      icon: "https://via.placeholder.com/100",
      title: "App Development",
      description: "Creating intuitive and efficient mobile applications for all platforms."
    },
    {
      icon: "https://via.placeholder.com/100",
      title: "Digital Marketing",
      description: "Helping you reach a broader audience with targeted marketing strategies."
    },
  ];

  return (
    <section id="services" className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 md:text-4xl">
          Our <span className="text-green-500">Services</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 text-lg md:text-xl">
          We offer a range of services to help your business succeed in the digital world.
        </p>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={service.icon} alt={`${service.title} Icon`} className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
