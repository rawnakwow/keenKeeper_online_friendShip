import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const Timeline = () => {
    // গ্লোবাল লেআউট থেকে লাইভ কন্টাক্ট হিস্ট্রি ডাটা রিড করা হচ্ছে
    const { timeline } = useOutletContext();
    const [filter, setFilter] = useState("All");

    // সিলেকশন ফিল্টারিং লজিক (Challenge Requirement C2)
    const filteredTimeline = filter === "All" 
        ? timeline 
        : timeline.filter(item => item.type === filter);

    return (
        <div className="container mx-auto px-4 py-10 max-w-4xl font-sans min-h-[60vh]">
            <h1 className="text-4xl font-extrabold tracking-tight mb-6">Timeline</h1>

            <div className="mb-8">
                <select 
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="select select-sm select-bordered w-full max-w-xs rounded-xl text-xs bg-base-100 text-base-content/70"
                >
                    <option value="All">Filter timeline</option>
                    <option value="Meetup">Meetups Only</option>
                    <option value="Text">Texts Only</option>
                    <option value="Call">Calls Only</option>
                    <option value="Video">Videos Only</option>
                </select>
            </div>

            <div className="space-y-3">
                {filteredTimeline.map((item) => (
                    <div key={item.id} className="bg-base-100 border border-base-200 hover:border-base-300 rounded-2xl p-5 flex items-center gap-4 transition-all duration-200">
                        <div className="w-10 h-10 rounded-xl bg-base-50 border border-base-100 flex items-center justify-center text-lg">
                            {item.icon}
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-sm font-bold text-base-content">{item.title}</h3>
                            <span className="text-[11px] text-base-content/40 mt-1 font-medium">{item.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
