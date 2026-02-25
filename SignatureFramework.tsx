import { Target, Zap, TrendingUp, CheckCircle } from 'lucide-react';

export function SignatureFramework() {
  const steps = [
    {
      number: "01",
      title: "Strategic Discovery",
      icon: Target,
      description: "Deep dive into your brand, goals, audience, and competitive landscape. We identify the exact story that needs to be told.",
      deliverables: [
        "Brand audit & analysis",
        "Target audience profiling",
        "Competitive positioning",
        "Creative strategy document"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "02",
      title: "Visual Execution",
      icon: Zap,
      description: "Bringing strategy to life through world-class creative production - from concept to final delivery with obsessive attention to detail.",
      deliverables: [
        "Professional production",
        "High-end post-production",
        "Brand-aligned aesthetics",
        "Multi-format deliverables"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "03",
      title: "Market Positioning",
      icon: TrendingUp,
      description: "Strategic deployment across channels to maximize reach, engagement, and conversion. Making sure your content works for you.",
      deliverables: [
        "Channel strategy",
        "Content distribution plan",
        "Social media optimization",
        "Performance tracking"
      ],
      color: "from-amber-500 to-orange-500"
    },
    {
      number: "04",
      title: "Revenue Optimization",
      icon: CheckCircle,
      description: "Continuous refinement based on data and results. We don't just deliver - we ensure your investment generates measurable returns.",
      deliverables: [
        "Performance analytics",
        "A/B testing & optimization",
        "ROI reporting",
        "Ongoing support"
      ],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="framework" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4">
            <span className="text-purple-400 text-sm font-semibold">⚡ SIGNATURE METHOD</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">KBG Creative Impact System™</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-6">
            A proven 4-step methodology that transforms creative vision into measurable business results.
          </p>
          <p className="text-slate-500 max-w-2xl mx-auto">
            This isn't just freelance work. It's a strategic framework refined over 10+ years and 500+ projects, 
            designed to deliver not just content - but <span className="text-amber-500 font-semibold">impact</span>.
          </p>
        </div>

        {/* Framework Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-slate-950 border border-slate-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -right-4">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xl shadow-2xl border-4 border-slate-900`}>
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>

                {/* Description */}
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2">
                  {step.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Why This Works */}
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Why The KBG Creative Impact System™ Works
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="text-white font-bold mb-2">Strategy-First</h4>
              <p className="text-slate-400 text-sm">
                We don't just execute - we solve business problems through creative strategy
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="text-white font-bold mb-2">Execution Excellence</h4>
              <p className="text-slate-400 text-sm">
                World-class production quality that matches international standards
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📈</div>
              <h4 className="text-white font-bold mb-2">Results-Driven</h4>
              <p className="text-slate-400 text-sm">
                Every decision tracked, measured, and optimized for maximum ROI
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-300 mb-4">
              <span className="text-amber-500 font-bold">500+ projects</span> delivered using this exact system.
            </p>
            <a
              href="#booking"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Experience The System
            </a>
          </div>
        </div>

        {/* Testimonial Quote */}
        <div className="mt-12 text-center">
          <blockquote className="text-xl text-slate-300 italic max-w-3xl mx-auto">
            "The difference between good creatives and great ones? 
            <span className="text-white font-semibold"> A repeatable system that delivers results every single time.</span>"
          </blockquote>
          <p className="text-slate-500 mt-4">— The KBG Philosophy</p>
        </div>
      </div>
    </section>
  );
}
