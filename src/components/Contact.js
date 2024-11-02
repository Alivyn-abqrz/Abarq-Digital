const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:flex lg:items-center lg:space-x-12">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 md:text-4xl">
            Get in <span className="text-green-500">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg md:text-xl">
            We’d love to hear from you! Please fill out the form below to reach out to us.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Alternatively, you can email us directly at <span className="font-semibold">contact@ourcompany.com</span> or call us at <span className="font-semibold">(123) 456-7890</span>.
          </p>
        </div>

        <div className="lg:w-1/2 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Message</label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
