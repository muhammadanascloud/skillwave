import Button from "@/components/Button";

const Contact = () => {
  return (
    <div className="bg-darkPrimary text-white min-h-screen flex flex-col">
      {/* Contact Form Section */}
      <section className="flex-grow flex items-center justify-center">
        <div className="max-w-3xl w-full px-4 py-16 md:py-24 lg:py-32">
          <h1 className="text-5xl md:text-5xl font-bold text-primary text-center mb-8">
            Contact Us
          </h1>
          <p className="text-gray-300 text-center mb-12">
            Feel free to reach out to us for any inquiries or support. We are
            here to help you.
          </p>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="w-full p-4 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email"
                className="w-full p-4 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your message"
                rows={6}
                className="w-full p-4 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex justify-center">
              <Button
                href="#"
                variant="primary"
                className="max-w-xs py-3 text-lg"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
