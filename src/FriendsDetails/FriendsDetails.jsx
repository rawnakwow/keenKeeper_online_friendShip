import { useState, useEffect } from "react";
import { useParams, Link, useOutletContext } from "react-router-dom";
import toast from "react-hot-toast"; // টোস্ট ইম্পোর্ট

const FriendDetails = () => {
    const { id } = useParams();
    const [friend, setFriend] = useState(null);
    const [loading, setLoading] = useState(true);
    
    // মেইন লেআউট থেকে টাইমলাইন স্টেট হুকটি রিসিভ করা হলো
    const { timeline, setTimeline } = useOutletContext(); 

    useEffect(() => {
        fetch("/data/friends.json")
            .then((res) => res.json())
            .then((data) => {
                const foundFriend = data.find((f) => f.id === parseInt(id));
                setFriend(foundFriend);
                setLoading(false);
            });
    }, [id]);

    // ইন্টারঅ্যাকশন হ্যান্ডলার ফাংশন (Requirement #6 & #10.3)
    const handleCheckIn = (type, icon) => {
        const currentDate = new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });

        const newEntry = {
            id: Date.now(),
            type: type,
            icon: icon,
            title: `${type} with ${friend.name}`,
            date: currentDate
        };

        // গ্লোবাল স্টেটে নতুন ডাটা পুশ (Timeline পেজের সাথে সিঙ্ক)
        setTimeline([newEntry, ...timeline]);

        // রিকোয়ারমেন্ট অনুযায়ী সাকসেস টোস্ট শো করা
        toast.success(`${type} interaction logged successfully!`, {
            style: {
                border: '1px solid #1b4332',
                padding: '12px 16px',
                color: '#1b4332',
                fontWeight: 'bold',
            },
            iconTheme: {
                primary: '#1b4332',
                secondary: '#FFFAEE',
            },
        });
    };

    if (loading) return <div className="flex justify-center py-20"><span className="loading loading-spinner text-[#1b4332]"></span></div>;
    if (!friend) return <div className="text-center py-20">Friend not found!</div>;

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl font-sans">
            <div className="mb-4"><Link to="/" className="text-xs font-bold text-[#1b4332]">← Back to Dashboard</Link></div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* বাম পাশের কলাম */}
                <div className="md:col-span-4 space-y-4">
                    <div className="bg-base-100 border border-base-200 rounded-2xl p-6 text-center flex flex-col items-center shadow-xs">
                        <div className="avatar mb-4">
                            <div className={`w-24 h-24 rounded-full ring-3 ring-offset-2 ${
                                friend.status === 'on_track' ? 'ring-emerald-500' : 'ring-rose-500'
                            }`}>
                                <img src={friend.picture} alt={friend.name} />
                            </div>
                        </div>
                        <h2 className="text-xl font-bold">{friend.name}</h2>
                        <p className="text-xs italic mt-2">"{friend.bio}"</p>
                        <p className="text-[11px] text-base-content/50 mt-2">{friend.email}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <button className="btn btn-sm bg-base-100 border-base-200 text-xs rounded-xl py-2">⏰ Snooze 2 Weeks</button>
                        <button className="btn btn-sm bg-base-100 border-base-200 text-xs rounded-xl py-2">📦 Archive</button>
                        <button className="btn btn-sm bg-rose-50 text-rose-600 border-rose-200 text-xs rounded-xl py-2">🗑️ Delete</button>
                    </div>
                </div>

                {/* ডান পাশের কলাম */}
                <div className="md:col-span-8 space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-base-100 border border-base-200 rounded-2xl p-5 text-center shadow-xs">
                            <h3 className="text-2xl font-bold">{friend.days_since_contact}</h3>
                            <p className="text-[10px] uppercase text-base-content/40 font-bold mt-1">Days Since Contact</p>
                        </div>
                        <div className="bg-base-100 border border-base-200 rounded-2xl p-5 text-center shadow-xs">
                            <h3 className="text-2xl font-bold">{friend.goal}</h3>
                            <p className="text-[10px] uppercase text-base-content/40 font-bold mt-1">Goal (Days)</p>
                        </div>
                        <div className="bg-base-100 border border-base-200 rounded-2xl p-5 text-center shadow-xs">
                            <h3 className="text-sm font-bold pt-2">{friend.next_due_date}</h3>
                            <p className="text-[10px] uppercase text-base-content/40 font-bold mt-2">Next Due</p>
                        </div>
                    </div>

                    <div className="bg-base-100 border border-base-200 rounded-2xl p-6 shadow-xs">
                        <h4 className="text-xs uppercase font-semibold text-base-content/40 mb-2">Relationship Goal</h4>
                        <p className="text-sm">Connect every <span className="font-bold">{friend.goal} days</span></p>
                    </div>

                    {/* কুইক চেক-ইন ইন্টারঅ্যাকশন প্যানেল */}
                    <div className="bg-base-100 border border-base-200 rounded-2xl p-6 shadow-xs">
                        <h4 className="text-xs uppercase font-semibold text-base-content/40 mb-4">Quick Check-In</h4>
                        <div className="grid grid-cols-3 gap-4">
                            <button onClick={() => handleCheckIn("Call", "📞")} className="btn bg-base-50 hover:bg-base-100 border border-base-200 rounded-xl h-24 flex flex-col gap-1.5 normal-case">
                                <span className="text-xl">📞</span> <span className="text-xs font-semibold">Call</span>
                            </button>
                            <button onClick={() => handleCheckIn("Text", "💬")} className="btn bg-base-50 hover:bg-base-100 border border-base-200 rounded-xl h-24 flex flex-col gap-1.5 normal-case">
                                <span className="text-xl">💬</span> <span className="text-xs font-semibold">Text</span>
                            </button>
                            <button onClick={() => handleCheckIn("Video", "📹")} className="btn bg-base-50 hover:bg-base-100 border border-base-200 rounded-xl h-24 flex flex-col gap-1.5 normal-case">
                                <span className="text-xl">📹</span> <span className="text-xs font-semibold">Video</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;
