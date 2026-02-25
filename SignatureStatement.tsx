export function SignatureStatement() {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-950 via-amber-900/10 to-slate-950 border-y border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Statement */}
          <div className="mb-8">
            <div className="text-6xl mb-6">💎</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              "Built Between <span className="text-amber-500">Kinshasa</span> & <span className="text-amber-500">Dubai</span>.<br />
              I Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Visual Empires</span>."
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Bridging <span className="text-white font-semibold">African creativity</span> with{' '}
              <span className="text-white font-semibold">global opportunities</span>. 
              Every project designed to deliver <span className="text-green-400 font-semibold">measurable growth</span>.
            </p>
          </div>

          {/* Signature Method Highlight */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-amber-500/30 rounded-xl p-6 inline-block">
            <p className="text-amber-500 text-sm font-semibold mb-2">THE METHOD:</p>
            <p className="text-white text-2xl font-bold">
              The KBG Creative Impact System™
            </p>
            <p className="text-slate-400 text-sm mt-2">
              Strategy → Execution → Positioning → ROI
            </p>
          </div>

          {/* Bottom Line */}
          <div className="mt-8 pt-8 border-t border-slate-800">
            <p className="text-lg text-slate-400">
              One unique position. One signature method. One goal:{' '}
              <span className="text-white font-semibold">Your measurable success</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
