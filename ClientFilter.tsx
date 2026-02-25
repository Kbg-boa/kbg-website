import { Target, Sparkles, TrendingUp } from 'lucide-react';

export function ClientFilter() {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-y border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center text-center">
          <div>
            <Target className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-white font-bold text-xl mb-2">Ambitious Brands</h3>
            <p className="text-slate-400 text-sm">
              I work with brands that are ready to invest in quality and growth
            </p>
          </div>

          <div>
            <Sparkles className="w-12 h-12 text-amber-400 mx-auto mb-4" />
            <h3 className="text-white font-bold text-xl mb-2">Serious About Results</h3>
            <p className="text-slate-400 text-sm">
              Partners who value strategic creativity over cheap execution
            </p>
          </div>

          <div>
            <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-white font-bold text-xl mb-2">Ready to Scale</h3>
            <p className="text-slate-400 text-sm">
              Companies and individuals prepared for transformative growth
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-300 text-lg">
            <span className="text-white font-semibold">"I work with ambitious brands ready to scale."</span>
          </p>
          <p className="text-slate-500 text-sm mt-2">
            If you're looking for the cheapest option, we're probably not the right fit. 
            If you want <span className="text-amber-500 font-semibold">results that matter</span>, let's talk.
          </p>
        </div>
      </div>
    </section>
  );
}
