const AboutSection = () => {
  const handleLearnMore = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="bg-white dark:bg-gray-800 py-16">
      <br/>
      <div className="container mx-auto px-6 md:px-12 text-center text-size-adjust-100">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 md:text-4xl">
          About <span className="text-green-500">Abarq Digital</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg md:text-xl">
          We specialize in restoring the functionality of your essential devices, including mobile phones, laptops, and computers.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Our experienced team is dedicated to delivering reliable repair services with a commitment to quality and customer satisfaction. Trust us to bring your devices back to life and keep you connected.
        </p>
        <button
          onClick={handleLearnMore}
          className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
        >
          Learn More
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
