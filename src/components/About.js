const AboutSection = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-800 py-16">
      <div className="container mx-auto px-6 md:px-12 text-center text-size-adjust-100">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 md:text-4xl">
          About <span className="text-green-500">Us</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg md:text-xl">
          We are a passionate team dedicated to providing top-notch solutions tailored to your needs.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          With years of experience in the industry, we understand the importance of innovation and creativity in delivering results that exceed expectations.
        </p>
        <button className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
