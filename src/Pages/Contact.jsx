const Contact = () => {
  return (
    <div className="bg-white w-full min-h-screen">
      {/* Header */}
      <div className="h-80 bg-gradient-to-r from-blue-800 to-blue-500 text-white flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>

        <p className="mt-3 text-blue-100">
          Have any queries or complaints? Send us a message and we'll reply
          shortly.
        </p>
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto px-4 -mt-14 pb-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gray-50 px-8 py-5 border-b">
            <h2 className="text-xl font-bold text-center">Send a Message</h2>
          </div>

          <form className="p-8 space-y-5">
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold">
                Full Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full border px-3 py-2 rounded-xl outline-none"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className="block mb-1 font-semibold">
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border px-3 py-2 rounded-xl outline-none"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-1 font-semibold">
                  Phone
                </label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="01XXXXXXXXX"
                  className="w-full border px-3 py-2 rounded-xl outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block mb-1 font-semibold">
                Subject
              </label>

              <input
                id="subject"
                type="text"
                placeholder="Subject"
                className="w-full border px-3 py-2 rounded-xl outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-semibold">
                Message
              </label>

              <textarea
                id="message"
                rows="5"
                placeholder="Write message..."
                className="w-full border px-3 py-2 rounded-xl outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-xl"
            >
              Submit Query
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
