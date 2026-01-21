import { Leaf, Award, Droplets, Zap } from "lucide-react";

const features = [
    {
        icon: <Leaf className="w-8 h-8 text-gold" />,
        title: "100% Ethical",
        desc: "Direct trade sourced from sustainable micro-lots in Ethiopia and Colombia."
    },
    {
        icon: <Award className="w-8 h-8 text-gold" />,
        title: "Top 1% Beans",
        desc: "We only roast specialty grade Arabica beans scoring 85+ points."
    },
    {
        icon: <Droplets className="w-8 h-8 text-gold" />,
        title: "Slow Roasted",
        desc: "Small batch roasting that unlocks complex flavor profiles without bitterness."
    },
    {
        icon: <Zap className="w-8 h-8 text-gold" />,
        title: "Peak Freshness",
        desc: "Roasted within 24 hours of shipping. Vacuum sealed for cinematic aroma."
    }
];

export default function WhyUs() {
    return (
        <section className="py-32 bg-background relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">The Lumière Standard</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">ENGINEERED PERFECTION</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {features.map((f, i) => (
                        <div key={i} className="flex flex-col items-center text-center group">
                            <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/5 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-500">
                                {f.icon}
                            </div>
                            <h3 className="text-white font-bold uppercase tracking-widest mb-3 text-sm">{f.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed max-w-[200px]">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
