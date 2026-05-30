import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch dynamic dataset on component mount
    useEffect(() => {
       fetch("/data/friends.json") 

            .then((res) => res.json())
            .then((data) => {
                setFriends(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching friends data:", err);
                setLoading(false);
            });
    }, []);

    
    const totalFriends = friends.length;
    const onTrackCount = friends.filter(f => f.status === "on_track").length;
    const dueSoonCount = friends.filter(f => f.status === "due_soon").length;
    const overdueCount = friends.filter(f => f.status === "overdue").length;

    
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[50vh]">
                <span className="loading loading-spinner loading-lg text-[#1b4332]"></span>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 sm:px-8 py-10 font-sans">
            {/* Hero Section */}
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-base-content tracking-tight">
                    Friends to keep close in your life
                </h1>
                <p className="text-sm text-base-content/70 leading-relaxed">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>
                <button className="btn btn-sm bg-[#1b4332] text-white hover:bg-[#143225] border-none px-6 mt-2 rounded-lg font-medium">
                    + Add a Friend
                </button>
            </div>

           
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16 text-center">
                <div className="bg-base-100 p-5 rounded-2xl border border-base-200 shadow-xs">
                    <h2 className="text-3xl font-bold text-base-content">{totalFriends}</h2>
                    <p className="text-xs text-base-content/60 mt-1">Total Friends</p>
                </div>
                <div className="bg-base-100 p-5 rounded-2xl border border-base-200 shadow-xs">
                    <h2 className="text-3xl font-bold text-emerald-600">{onTrackCount}</h2>
                    <p className="text-xs text-base-content/60 mt-1">On Track</p>
                </div>
                <div className="bg-base-100 p-5 rounded-2xl border border-base-200 shadow-xs">
                    <h2 className="text-3xl font-bold text-amber-500">{dueSoonCount}</h2>
                    <p className="text-xs text-base-content/60 mt-1">Due Soon</p>
                </div>
                <div className="bg-base-100 p-5 rounded-2xl border border-base-200 shadow-xs">
                    <h2 className="text-3xl font-bold text-rose-600">{overdueCount}</h2>
                    <p className="text-xs text-base-content/60 mt-1">Overdue</p>
                </div>
            </div>

      
            <div className="max-w-5xl mx-auto mb-6">
                <h3 className="text-lg font-bold text-base-content tracking-wide">Your Friends</h3>
            </div>

           
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
                {friends.map((friend) => (
    <Link 
        to={`/friend/${friend.id}`} // এটি প্রতিটি ফ্রেন্ডের নিজস্ব আইডিতে নিয়ে যাবে
        key={friend.id} 
        className="bg-base-100 p-6 rounded-2xl border border-base-200 text-center flex flex-col items-center shadow-xs transition-all duration-200 hover:shadow-md cursor-pointer group"
    >
                        {/* Status Ring Avatar Layout */}
                        <div className="avatar mb-4">
                            <div className={`w-20 h-20 rounded-full ring-3 ring-offset-base-100 ring-offset-2 ${
                                friend.status === 'on_track' ? 'ring-emerald-500' :
                                friend.status === 'due_soon' ? 'ring-amber-500' : 'ring-rose-500'
                            }`}>
                                <img src={friend.picture} alt={friend.name} />
                            </div>
                        </div>

                        
        <h4 className="font-bold text-base text-base-content group-hover:text-[#1b4332] transition-colors">
            {friend.name}
        </h4>
                        <p className="text-xs text-base-content/50 mt-1">
                            Contact: <span className="font-semibold">{friend.days_since_contact}d ago</span>
                        </p>
                        
                        
                        <div className="mt-4 flex flex-wrap justify-center gap-1.5 w-full">
                          
                            <span className={`badge badge-sm font-bold border-none px-2.5 py-1 text-[10px] tracking-wide rounded-md ${
                                friend.status === 'on_track' ? 'bg-emerald-100 text-emerald-800' :
                                friend.status === 'due_soon' ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'
                            }`}>
                                {friend.status.replace('_', ' ').toUpperCase()}
                            </span>

                           
                            {friend.tags.map((tag, index) => (
                                <span 
                                    key={index} 
                                    className="badge badge-sm bg-base-200 text-base-content/70 border-none font-medium px-2 py-1 text-[10px] uppercase rounded-md"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p className="text-xs text-base-content/60 mt-4 line-clamp-2 italic px-1">
                            "{friend.bio}"
                        </p>
                    </Link>
))}
                
            </div>
        </div>
    );
};

export default Homepage;
