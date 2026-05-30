const Homepage = () => {
   
    const demoFriends = [1, 2, 3, 4];

    return (
        <div className="container mx-auto px-4 py-10 font-sans">
            
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-base-content tracking-tight">
                    Friends to keep close in your life
                </h1>
                <p className="text-sm text-base-content/70 leading-relaxed">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>
                <button className="btn btn-sm bg-[#1b4332] text-white hover:bg-[#143225] border-none px-6 mt-2">
                    + Add a Friend
                </button>
            </div>

            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16 text-center">
                <div className="bg-base-100 p-5 rounded-2xl border border-base-200 shadow-xs">
                    <h2 className="text-3xl font-bold">10</h2>
                    <p className="text-xs text-base-content/60 mt-1">Total Friends</p>
                </div>
                <div className="bg-base-100 p-5 rounded-2xl border border-base-200 shadow-xs">
                    <h2 className="text-3xl font-bold text-emerald-600">3</h2>
                    <p className="text-xs text-base-content/60 mt-1">On Track</p>
                </div>
                <div className="bg-base-100 p-5 rounded-2xl border border-base-200 shadow-xs">
                    <h2 className="text-3xl font-bold text-amber-600">6</h2>
                    <p className="text-xs text-base-content/60 mt-1">Need Attention</p>
                </div>
                <div className="bg-base-100 p-5 rounded-2xl border border-base-200 shadow-xs">
                    <h2 className="text-3xl font-bold text-blue-600">12</h2>
                    <p className="text-xs text-base-content/60 mt-1">Interactions This Month</p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto mb-6">
                <h3 className="text-lg font-bold text-base-content tracking-wide">Your Friends</h3>
            </div>

           
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-10">
                {demoFriends.map((item) => (
                    <div key={item} className="bg-base-100 p-6 rounded-2xl border border-base-200 text-center flex flex-col items-center shadow-xs">
                        <div className="avatar mb-4">
                            <div className="w-16 h-16 rounded-full ring-2 ring-[#1b4332] ring-offset-base-100 ring-offset-2">
                                <img src="https://unsplash.com" alt="Friend Profile" />
                            </div>
                        </div>
                        <h4 className="font-bold text-sm text-base-content">Emma Wilson</h4>
                        <span className="text-[10px] text-base-content/50 block mt-0.5">2d ago</span>
                        
                        <div className="mt-3 flex flex-wrap justify-center gap-1">
                            <span className="badge badge-xs bg-emerald-100 text-emerald-800 border-none font-medium px-2 py-0.5 text-[10px]">FAMILY</span>
                            <span className="badge badge-xs bg-rose-100 text-rose-800 border-none font-medium px-2 py-0.5 text-[10px]">Overdue</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Homepage;
