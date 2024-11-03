import mobile_repair from '../img/mobile_repair.jpg';
import laptop_repair from '../img/laptop_repair.jpg';
import Computer_repair from '../img/Computer_repair.jpg';

const ServiceSection = () => {
  const services = [
    {
      icon: mobile_repair,
      title: "Mobile Phone Repair",
      description: "Expert repairs for all mobile devices, restoring performance and functionality."
    },
    {
      icon: laptop_repair,
      title: "Laptop Repair",
      description: "Comprehensive laptop repair services, including hardware and software solutions."
    },
    {
      icon: Computer_repair,
      title: "Computer Repair",
      description: "Professional desktop repair and maintenance to keep your system running smoothly."
    },
  ];

  const handleCardClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="bg-gray-100 dark:bg-gray-900 py-16"><br/>
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 md:text-4xl">
          Our <span className="text-green-500">Services</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 text-lg md:text-xl">
           We provide reliable repair services for your essential devices.
        </p>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 cursor-pointer"
              onClick={handleCardClick}
            >
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
