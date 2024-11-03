import technician from '../img/technician.jpg';

const HomeSection = () => {
  const text = {
    one: "Welcome to",
    two: "Abarq Digital",
    three: "We offer expert repairs to get your devices back to peak performance—quickly, reliably, and affordably."
  };

  const handleGetStarted = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gray-100 dark:bg-gray-900 py-20">
      <br />
      <div className="container mx-auto px-6 md:px-12 lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 md:text-5xl lg:text-6xl">
            {text.one} <span className="text-green-500">{text.two}</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg md:text-xl">
            {text.three}
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
          >
            Get Started
          </button>
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={technician}
            alt="Welcome"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
