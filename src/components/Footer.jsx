import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-400 text-sm pt-12 pb-6 mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Column 1 */}
            <div>
              <h4 className="text-white text-xl font-bold mb-4">ShopHub</h4>

              <p className="leading-7">
                Your one-stop shop for all your shopping needs.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-white text-xl font-bold mb-4">Quick Links</h4>

              <ul className="space-y-3">
                <li>
                  <a href="/" className="hover:text-white transition">
                    Home
                  </a>
                </li>

                <li>
                  <a href="/categories" className="hover:text-white transition">
                    Categories
                  </a>
                </li>

                <li>
                  <a href="/contact" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-white text-xl font-bold mb-4">Contact</h4>

              <ul className="space-y-3">
                <li>Email: support@shophub.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: 123 Shop Street, City, Country</li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="text-white text-xl font-bold mb-4">Follow Us</h4>

              <div className="flex gap-4 text-xl">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  <FaTwitter />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Line */}
          <div className="border-t border-gray-700 mt-10 pt-6 text-center">
            <p>© 2025 ShopHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
