function ContactPage() {
  return (
    <>
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 flex justify-center">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <section aria-label="Contact form" className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-black mb-6">Get in Touch</h2>
              <form noValidate="">
                <div className="mb-6">
                  <label htmlFor="name" className="block font-semibold text-gray-700 mb-2">Name</label>
                  <input id="name" placeholder="Your full name" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition" required="" aria-required="true" aria-describedby="name-desc" type="text" name="user_name" />
                  <p id="name-desc" className="sr-only">Enter your full name</p>
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block font-semibold text-gray-700 mb-2">Email</label>
                  <input id="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition" required="" aria-required="true" aria-describedby="email-desc" type="email" name="user_email" />
                  <p id="email-desc" className="sr-only">Enter a valid email address</p>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block font-semibold text-gray-700 mb-2">Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="Your message here..." className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-y" required="" aria-required="true" aria-describedby="message-desc">
                  </textarea>
                  <p id="message-desc" className="sr-only">Enter your message to send us</p>
                </div>
                <button type="submit" className="w-full py-3 rounded-md font-semibold text-white transition duration-300 bg-blue-600 hover:bg-blue-700" aria-live="polite">Send Message</button>
              </form>
            </section>
            <aside className="space-y-10">
              <section aria-label="Contact information" className="p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-black mb-6">Contact Information</h2>
                <div className="space-y-6 text-gray-700 text-lg">
                  <div className="flex items-center gap-4">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-blue-600" aria-hidden="true" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" d="M0 0h24v24H0V0z"></path><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path>
                    </svg>
                    <div>
                      <h3 className="font-medium text-black">Email</h3>
                      <p>support@shophub.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600" aria-hidden="true" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <div>
                      <h3 className="font-medium text-black">Phone</h3>
                      <p>(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600" aria-hidden="true" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3">
                      </circle>
                    </svg>
                    <div>
                      <h3 className="font-medium text-black">Address</h3>
                      <address className="not-italic">123 Shop Street<br />City, Country</address>
                    </div>
                  </div>
                </div>
              </section>
              <section aria-label="Business hours" className="p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-black mb-6">Business Hours</h2>
                <ul className="space-y-3 text-gray-800 text-lg">
                  <li><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</li>
                  <li><strong>Saturday:</strong> 10:00 AM - 4:00 PM</li>
                  <li><strong>Sunday:</strong> Closed</li>
                </ul>
              </section>
            </aside>
          </div>
        </div>
      </main>

    </>
  );
} export default ContactPage;
