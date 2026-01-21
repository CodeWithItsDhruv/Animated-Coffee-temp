export default function Process() {
    const steps = [
        { num: "01", title: "Sourcing", desc: "Direct trade with micro-lot farmers." },
        { num: "02", title: "Roasting", desc: "Precision profiles for maximum clarity." },
        { num: "03", title: "Brewing", desc: "Scientific extraction methodology." },
        { num: "04", title: "Serving", desc: "Delivered at peak freshness." }
    ];

    return (
        <section className="py-24 bg-background relative z-10 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {steps.map((step, i) => (
                        <div key={i} className="relative pt-8 border-t border-white/10">
                            <span className="absolute -top-3 left-0 bg-background pr-4 text-gold font-mono text-sm">{step.num}</span>
                            <h3 className="text-white text-xl font-bold uppercase tracking-wide mb-3">{step.title}</h3>
                            <p className="text-white/40 text-sm">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
