import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const Stats = () => {
    const data = [
        { name: "Text", value: 35 },
        { name: "Call", value: 40 },
        { name: "Video", value: 25 },
    ];

    
    const COLORS = ["#8b5cf6", "#10b981", "#14532d"];

    return (
        <div className="container mx-auto px-4 py-10 max-w-4xl font-sans min-h-[60vh]">
            <h1 className="text-4xl font-extrabold text-base-content tracking-tight mb-8">
                Friendship Analytics
            </h1>

            <div className="bg-base-100 border border-base-200 rounded-3xl p-6 sm:p-8 shadow-2xs max-w-3xl">
                <h2 className="text-xs uppercase tracking-widest font-semibold text-base-content/40 mb-2">
                    By Interaction Type
                </h2>

                <div className="flex flex-col items-center justify-center pt-6 pb-2">
                    

                    
                    <div className="w-full h-56 max-w-[240px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={65}
                                    outerRadius={85}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell 
                                            key={`cell-${index}`} 
                                            fill={COLORS[index % COLORS.length]} 
                                            stroke="none"
                                        />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="flex justify-center items-center gap-8 mt-8 text-xs font-bold text-base-content/60">
                        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                            <span className="w-3 h-3 rounded-full bg-[#8b5cf6] block shadow-3xs"></span>
                            <span>Text</span>
                        </div>

                        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                            <span className="w-3 h-3 rounded-full bg-[#10b981] block shadow-3xs"></span>
                            <span>Call</span>
                        </div>

                        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                            <span className="w-3 h-3 rounded-full bg-[#14532d] block shadow-3xs"></span>
                            <span>Video</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Stats;
