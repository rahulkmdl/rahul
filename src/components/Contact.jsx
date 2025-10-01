import data from "../data.json";

const Contact = () => {
  const { contact } = data;

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <p className="text-gray-400 mb-6">
              Feel free to reach out for data analysis opportunities or collaborations.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <strong className="w-24">Email:</strong>
                <a href={`mailto:${contact.email}`} className="text-blue-400 hover:text-blue-300">
                  {contact.email}
                </a>
              </div>
              <div className="flex items-center">
                <strong className="w-24">Phone:</strong>
                <a href={`tel:+91${contact.phone}`} className="text-blue-400 hover:text-blue-300">
                  <span>{contact.phone}</span>
                </a>
              </div>
              <div className="flex items-center">
                <strong className="w-24">Location:</strong>
                <span>{contact.location}</span>
              </div>
              <div className="flex items-center">
                <strong className="w-24">Languages:</strong>
                <span>{contact.languages}</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form>
              <div className="mb-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div className="mb-4">
                <input type="email" placeholder="Your Email" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div className="mb-4">
                <input type="text" placeholder="Subject" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div className="mb-4">
                <textarea placeholder="Your Message" rows="5" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
