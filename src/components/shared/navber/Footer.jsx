
import "../../../index.css";

import facebookImg from "../../../assets/facebook.png";
import twitterImg from "../../../assets/twitter.png";
import instagramImg from "../../../assets/instagram.png";

const Footer = () => {
    return (
        <footer className="w-full bg-[#1b4332] text-white py-12 px-4 font-sans mt-auto">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
                
                
                <h1 className="text-4xl font-semibold tracking-wide text-white mb-3">
                    KeenKeeper
                </h1>
                
                <p className="text-xs text-emerald-100/70 max-w-xl leading-relaxed mb-6">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>
                
                
                  <div className="flex flex-col items-center space-y-4 mb-10">
                    <span className="text-xs uppercase tracking-widest font-semibold text-emerald-200/60">
                        Social Links
                    </span>
                    
                  
                    <div className="flex gap-5">
                        <a href="#" className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:bg-emerald-100 transition-all duration-200 shadow-md transform hover:scale-105">
                            <img src={instagramImg} alt="Instagram" className="w-6 h-6 object-contain" />
                        </a>
                        <a href="#" className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:bg-emerald-100 transition-all duration-200 shadow-md transform hover:scale-105">
                            <img src={facebookImg} alt="Facebook" className="w-6 h-6 object-contain" />
                        </a>
                        <a href="#" className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:bg-emerald-100 transition-all duration-200 shadow-md transform hover:scale-105">
                            <img src={twitterImg} alt="Twitter/X" className="w-5.5 h-5.5 object-contain" />
                        </a>
                    </div>
                </div>
                
                
                
                <div className="w-full border-t border-emerald-800/60 pt-6 mt-2">
                    
                    
                    <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] text-emerald-100/40 gap-4 w-full">
                        <p>© 2026 KeenKeeper. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors cursor-pointer">Terms of Service</a>
                            <a href="#" className="hover:text-white transition-colors cursor-pointer">Cookies</a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
