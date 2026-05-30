import { useState } from "react";

const Timeline = () => {
    const timelineData = [
        { id: 1, type: "Meetup", icon: "🤝", title: "Meetup with Tom Baker", date: "March 29, 2026" },
        { id: 2, type: "Text", icon: "💬", title: "Text with Sarah Chen", date: "March 28, 2026" },
        { id: 3, type: "Meetup", icon: "🤝", title: "Meetup with Olivia Martinez", date: "March 26, 2026" },
        { id: 4, type: "Video", icon: "📹", title: "Video with Aisha Patel", date: "March 23, 2026" },
        { id: 5, type: "Meetup", icon: "🤝", title: "Meetup with Sarah Chen", date: "March 21, 2026" },
        { id: 6, type: "Call", icon: "📞", title: "Call with Marcus Johnson", date: "March 19, 2026" },
        { id: 7, type: "Meetup", icon: "🤝", title: "Meetup with Aisha Patel", date: "March 17, 2026" },
        { id: 8, type: "Text", icon: "💬", title: "Text with Olivia Martinez", date: "March 13, 2026" },
        { id: 9, type: "Call", icon: "📞", title: "Call with Lisa Nakamura", date: "March 11, 2026" },
        { id: 10, type: "Call", icon: "📞", title: "Call with Sarah Chen", date: "March 11, 2026" },
        { id: 11, type: "Video", icon: "📹", title: "Video with Marcus Johnson", date: "March 6, 2026" },
        { id: 12, type: "Video", icon: "📹", title: "Video with Ryan O'Brien", date: "February 24, 2026" }
    ];

    const [filter, setFilter] = useState("All");

  
    const filteredTimeline = filter === "All" 
        ? timelineData 
        : timelineData.filter(item => item.type === filter);

    return (
        <div className="container mx-auto px-4 py-10 max-w-4xl font-sans min-h-[60vh]">
            
           
            <h1 className="text-4xl font-extrabold text-base-content tracking-tight mb-6">
                Timeline
            </h1>

            
            <div className="mb-8">
                <select 
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="select select-sm select-bordered w-full max-w-xs rounded-xl bg-base-100 text-xs font-medium text-base-content/70 focus:outline-none focus:border-[#1b4332]"
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
                    <div 
                        key={item.id} 
                        className="bg-base-100 border border-base-200 hover:border-base-300 rounded-2xl p-5 shadow-2xs flex items-center gap-4 transition-all duration-200"
                    >
                       
                        <div className="w-10 h-10 rounded-xl bg-base-50 border border-base-100 flex items-center justify-center text-lg shadow-3xs">
                            {item.icon}
                        </div>
                        
                       
                        <div className="flex flex-col">
                            <h3 className="text-sm font-bold text-base-content leading-tight">
                                {item.title}
                            </h3>
                            <span className="text-[11px] text-base-content/40 mt-1 font-medium">
                                {item.date}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Timeline;
