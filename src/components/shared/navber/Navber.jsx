import "../../../index.css";

import { Link, useLocation } from "react-router-dom";

const Navber = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className="navbar bg-base-100 px-6 sm:px-12 py-4 border-b border-base-200">
            
            {/* ১. লোগো এরিয়া (বাম পাশ) */}
            <div className="navbar-start">
                <Link to="/" className="text-xl font-bold tracking-tight text-base-content hover:opacity-80 transition-opacity">
                   Keen<span className="text-[#1b4332]">Keeper</span>
                </Link>
            </div>

            {/* ২. ডেক্সটপ নেভিগেশন মেনু (ডান পাশে ছড়ানো) */}
            <div className="navbar-end hidden md:flex">
                <div className="flex gap-4 items-center">
                   
                    {/* Home ট্যাব */}
                    <Link 
                        to="/" 
                        className={`btn btn-sm gap-2 rounded-lg px-4 normal-case font-medium transition-all ${
                            currentPath === "/" 
                            ? "bg-[#1b4332] text-white hover:bg-[#143225] border-none shadow-xs" 
                            : "btn-ghost text-base-content/60 hover:text-base-content hover:bg-base-200"
                        }`}
                    >
                        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        Home
                    </Link>

                    {/* Timeline ট্যাব */}
                    <Link 
                        to="/timeline" 
                        className={`btn btn-sm gap-2 rounded-lg px-4 normal-case font-medium transition-all ${
                            currentPath === "/timeline" 
                            ? "bg-[#1b4332] text-white hover:bg-[#143225] border-none shadow-xs" 
                            : "btn-ghost text-base-content/60 hover:text-base-content hover:bg-base-200"
                        }`}
                    >
                        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        Timeline
                    </Link>

                    {/* Stats ট্যাব */}
                   <Link 
    to="/stats" // <-- নিশ্চিত করুন এখানে '/stats' বানানটি সঠিক আছে (sats নয়)
    className={`btn btn-sm gap-2 rounded-lg px-4 normal-case font-medium transition-all ${
        currentPath === "/stats" 
        ? "bg-[#1b4332] text-white hover:bg-[#143225] border-none shadow-xs" 
        : "btn-ghost text-base-content/60 hover:text-base-content hover:bg-base-200"
    }`}
>
    <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v5.25c0 .621-.504 1.125-1.125 1.125h-2.25A1.125 1.125 0 0 1 3 18.375v-5.25ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125v-9.75ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v14.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
    Stats
</Link>
                </div>
            </div>

            {/* ৩. মোবাইল ড্রপডাউন মেনু */}
            <div className="navbar-end md:hidden">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
                        <svg xmlns="http://w3.org" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-xl z-50 mt-3 w-40 p-2 shadow-lg border border-base-200">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/timeline">Timeline</Link></li>
    <li><Link to="/stats" className={currentPath === "/stats" ? "bg-[#1b4332] text-white" : ""}>Stats</Link></li>
</ul>
                </div>
            </div>
        </div>
    );
};

export default Navber;

