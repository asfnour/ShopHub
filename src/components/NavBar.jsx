import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';
function NavBar() {
    return (
        <nav className="bg-white shadow-md px-6 md:px-20 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-8">
                <div className="logo text-2xl font-bold">
                    <Link to="/">ShopHub</Link>
                </div>
                <ul className="flex space-x-4" >
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/categories">Category</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="flex items-center space-x-6">
                <div className="relative">
                    <input placeholder="Search products..." className="w-40 md:w-64 border border-gray-300 rounded-full px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" />
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                </div>
                <FavoriteButton />

                <button className="">
                    <Link to="/cart">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                        <span className="absolute ml-5 top-3 right-15 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">3</span>
                    </Link>
                </button>
                <button className="text-sm text-black hover:text-gray-600 ">
                    <Link to="/sign-in">Sign In</Link>
                </button>

            </div>
        </nav>
    );
} export default NavBar;