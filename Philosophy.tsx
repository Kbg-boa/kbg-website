import { Lightbulb, Target, TrendingUp, Zap } from 'lucide-react';

export function Philosophy() {
  const principles = [
    {
      icon: Target,
      title: "Strategy First",
      quote: "Creativity without strategy is just noise.",
      description: "Every visual must serve a business goal. Beautiful but ineffective is worthless."
    },
    {
      icon: Zap,
      title: "Execute Flawlessly",
      quote: "Strategy without execution is invisible.",
      description: "Ideas are cheap. World-class execution is what separates winners from dreamers."
    },
    {
      icon: TrendingUp,
      title: "Measure Everything",
      quote: "What gets measured gets improved.",
      description: "I don't do 'creative for creative's sake'. Every project must deliver measurable ROI."
    },
    {
      icon: Lightbulb,
      title: "Think Different",
      quote: "If everyone is doing it, it's already too late.",
      description: "I don't follow trends. I create movements that others will copy next year."
    }
  ];

  return (
    <section id="philosophy" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-4">
            <span className="text-amber-400 text-sm font-semibold">💭 MY PHILOSOPHY</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            What I Stand For
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
            Not just what I do — but <span className="text-white font-semibold">how I think</span> and{' '}
            <span className="text-white font-semibold">why it matters</span>.
          </p>
        </div>

        {/* Core Belief */}
        <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-8 md:p-12 mb-16 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl mb-6">💎</div>
            <blockquote className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              "Creativity without strategy is noise.<br />
              <span className="text-amber-500">Strategy without creativity is invisible.</span>"
            </blockquote>
            <p className="text-xl text-slate-300">
              You need both. And that's exactly what I deliver.
            </p>
            <div className="mt-6 pt-6 border-t border-amber-500/30">
              <p className="text-slate-400 italic">— Kabangu Mathieu (KBG BOA)</p>
            </div>
          </div>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div
                key={index}
                className="bg-slate-900 border border-slate-700 rounded-xl p-8 hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{principle.title}</h3>
                    <p className="text-amber-400 italic font-semibold text-lg">
                      "{principle.quote}"
                    </p>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed pl-18">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Why This Matters */}
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Why This Philosophy Matters For Your Business
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="text-white font-bold mb-2">No Wasted Budget</h4>
              <p className="text-slate-400 text-sm">
                Every dollar you invest is tied to a measurable outcome. No "creative for creative's sake."
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="text-white font-bold mb-2">Faster Results</h4>
              <p className="text-slate-400 text-sm">
                Strategic clarity means faster execution. No endless revisions or unclear direction.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📈</div>
              <h4 className="text-white font-bold mb-2">Predictable ROI</h4>
              <p className="text-slate-400 text-sm">
                When strategy and execution align, results become predictable and scalable.
              </p>
            </div>
          </div>
        </div>

        {/* Personal Touch */}
        <div className="mt-12 text-center">
          <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-6">
            I've spent 10+ years building this philosophy across{' '}
            <span className="text-amber-500 font-semibold">500+ projects</span>,{' '}
            <span className="text-amber-500 font-semibold">3 companies</span>, and{' '}
            <span className="text-amber-500 font-semibold">15+ countries</span>.
          </p>
          <p className="text-slate-400">
            It's not theory. It's what actually works in the real world.
          </p>
        </div>
      </div>
    </section>
  );
}
