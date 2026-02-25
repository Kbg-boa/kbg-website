export function PremiumSignaling() {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-950 via-purple-900/10 to-slate-950 border-y border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Quote/Slogan */}
          <div>
            <div className="mb-6">
              <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-4">
                <span className="text-amber-400 text-sm font-semibold">🌍 GLOBAL PRESENCE</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Built Between<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                  Kinshasa & Dubai
                </span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed mb-4">
                Connecting <span className="text-amber-500 font-semibold">African creativity</span> to{' '}
                <span className="text-amber-500 font-semibold">global opportunities</span>.
              </p>
              <p className="text-slate-400">
                A unique perspective shaped by two continents, multiple industries, and 
                an unwavering commitment to excellence.
              </p>
            </div>

            {/* Signature */}
            <div className="border-t border-slate-700 pt-6">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 mb-2" style={{ fontFamily: 'cursive' }}>
                Kabangu Mathieu
              </div>
              <p className="text-slate-400 text-sm">
                Creative Director • Entrepreneur • KBG BOA
              </p>
            </div>
          </div>

          {/* Right: Premium Visual Elements */}
          <div className="space-y-6">
            {/* Location Badges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-amber-500/50 transition-all">
                <div className="text-3xl mb-2">🇨🇩</div>
                <p className="text-white font-bold mb-1">Kinshasa, DRC</p>
                <p className="text-slate-400 text-sm">African Headquarters</p>
              </div>
              <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-amber-500/50 transition-all">
                <div className="text-3xl mb-2">🇦🇪</div>
                <p className="text-white font-bold mb-1">Dubai, UAE</p>
                <p className="text-slate-400 text-sm">Middle East Operations</p>
              </div>
            </div>

            {/* Premium Stats */}
            <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl p-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-amber-500 mb-1">15+</div>
                  <p className="text-slate-400 text-sm">Countries Served</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-500 mb-1">$5M+</div>
                  <p className="text-slate-400 text-sm">Projects Value</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-500 mb-1">10+</div>
                  <p className="text-slate-400 text-sm">Years Experience</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-500 mb-1">100%</div>
                  <p className="text-slate-400 text-sm">Client Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Industries */}
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
              <p className="text-slate-400 text-sm mb-4">Active In:</p>
              <div className="flex flex-wrap gap-2">
                {['Real Estate', 'Music Production', 'Film & Video', 'Creative Direction', 'Digital Media', 'Business Consulting'].map((industry, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 rounded-full text-xs">
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-12 text-center">
          <blockquote className="text-lg text-slate-400 italic max-w-3xl mx-auto">
            "Luxury isn't about price — it's about <span className="text-white font-semibold">uncompromising quality</span>, 
            {' '}<span className="text-white font-semibold">strategic vision</span>, and 
            {' '}<span className="text-white font-semibold">results that speak for themselves</span>."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
