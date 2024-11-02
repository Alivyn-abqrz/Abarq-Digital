
const HomeSection = () => {
  const text ={
    One:"Welcome to",
    two:"Abarq Digital",
    three:" We provide top-notch services to help you grow your business. Let’s work together to achieve your goals."
  }
  return (
    <section id="home" className="bg-gray-100 dark:bg-gray-900 py-20">
      <br/>
      <div className="container mx-auto px-6 md:px-12 lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 md:text-5xl lg:text-6xl">
           {text.One} <span className="text-green-500">{text.two}</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg md:text-xl">
           {text.three}
          </p>
          <button className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
            Get Started
          </button>
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="https://via.placeholder.com/400"
            alt="Welcome"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
