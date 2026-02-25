import { TrendingUp, DollarSign, Users, Award, Target, Zap } from 'lucide-react';

export function ResultsShowcase() {
  const results = [
    {
      number: "$5M+",
      label: "Total Project Value Delivered",
      icon: DollarSign,
      color: "from-green-500 to-emerald-500"
    },
    {
      number: "300%",
      label: "Average ROI for Clients",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "500K+",
      label: "Total Audience Reach Generated",
      icon: Users,
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "$2.5M",
      label: "Largest Single Deal Closed",
      icon: Award,
      color: "from-amber-500 to-orange-500"
    }
  ];

  const provenResults = [
    {
      client: "Luxury Real Estate Dubai",
      before: "Property unsold for 6 months",
      after: "Sold in 21 days",
      result: "$2.5M sale",
      metric: "12x faster closing",
      icon: Target
    },
    {
      client: "Tech Startup Inc",
      before: "Zero brand awareness",
      after: "Secured seed funding",
      result: "$500K raised",
      metric: "300% ROI on video",
      icon: Zap
    },
    {
      client: "Fashion Brand Kinshasa",
      before: "2K followers, low sales",
      after: "15K followers in 60 days",
      result: "300% sales increase",
      metric: "8% engagement rate",
      icon: TrendingUp
    }
  ];

  return (
    <section id="results" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-4">
            <span className="text-green-400 text-sm font-semibold">📊 BY THE NUMBERS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Results That <span className="text-green-400">Speak For Themselves</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Not just beautiful work. <span className="text-white font-semibold">Measurable business impact</span>.
          </p>
        </div>

        {/* Big Numbers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {results.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-900 border border-slate-700 rounded-xl p-8 text-center hover:border-green-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className={`inline-flex w-14 h-14 rounded-full bg-gradient-to-br ${item.color} items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className={`text-5xl font-bold mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                  {item.number}
                </div>
                <p className="text-slate-400 text-sm font-medium">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Proven Results Grid */}
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            🎯 Real Clients. Real Numbers.
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {provenResults.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-green-500/50 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-green-400" />
                    </div>
                    <p className="text-white font-bold text-sm">{item.client}</p>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-red-400 text-xs font-semibold mb-1">❌ BEFORE:</p>
                      <p className="text-slate-400 text-sm">{item.before}</p>
                    </div>
                    <div>
                      <p className="text-green-400 text-xs font-semibold mb-1">✅ AFTER:</p>
                      <p className="text-slate-300 text-sm">{item.after}</p>
                    </div>
                  </div>

                  <div className="border-t border-slate-700 pt-4">
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center">
                      <p className="text-green-400 font-bold text-lg mb-1">{item.result}</p>
                      <p className="text-slate-400 text-xs">{item.metric}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-12 text-center">
          <p className="text-2xl text-white font-bold mb-4">
            "I don't just create content. I create <span className="text-green-400">measurable growth</span>."
          </p>
          <p className="text-slate-400">
            Every project is tracked, measured, and optimized for maximum ROI.
          </p>
        </div>
      </div>
    </section>
  );
}
