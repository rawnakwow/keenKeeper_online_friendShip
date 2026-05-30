import "../../../index.css";

const Navber = () => {
    return (
        <div className="navbar bg-base-100 px-6 sm:px-12 py-4 border-b border-base-200">
            
            <div className="navbar-start">
                <a href="/" className="text-xl font-bold tracking-tight text-base-content hover:opacity-80 transition-opacity">
                    KeenKeeper
                </a>
            </div>

           




            <div className="navbar-end hidden md:flex">
                <div className="flex gap-4 items-center">
                   
                    <a href="#" className="btn btn-sm gap-2 bg-[#1b4332] text-white hover:bg-[#143225] border-none rounded-lg px-4 normal-case font-medium shadow-xs">
                        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        Home
                    </a>

                    
                    <a href="#" className="btn btn-sm btn-ghost gap-2 text-base-content/60 hover:text-base-content hover:bg-base-200 rounded-lg px-2 normal-case font-medium transition-colors">
                        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-base-content/40">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        Timeline
                    </a>

                    
                    <a href="#" className="btn btn-sm btn-ghost gap-2 text-base-content/60 hover:text-base-content hover:bg-base-200 rounded-lg px-2 normal-case font-medium transition-colors">
                        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-base-content/40">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v5.25c0 .621-.504 1.125-1.125 1.125h-2.25A1.125 1.125 0 0 1 3 18.375v-5.25ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125v-9.75ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v14.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                        </svg>
                        Stats
                    </a>
                </div>
            </div>

            <div className="navbar-end md:hidden">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
                        <svg xmlns="http://w3.org" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-xl z-50 mt-3 w-40 p-2 shadow-lg border border-base-200">
                        <li><a className="bg-[#1b4332] text-white font-medium">Home</a></li>
                        <li><a>Timeline</a></li>
                        <li><a>Stats</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navber;

