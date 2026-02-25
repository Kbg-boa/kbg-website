import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Download, Sparkles, Zap } from 'lucide-react';
import cvImage from 'figma:asset/65d47052cb08c9b9e0d645781ab12c4017a38772.png';
import professionalPhoto from 'figma:asset/ba01f169fad5ad98e31f2d63c43e64f6bba7ff00.png';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-900/10 to-slate-950">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-amber-500 text-sm font-semibold">Available for High-Impact Projects</span>
            </div>
            
            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              KABANGU <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                MATHIEU
              </span>
            </h1>

            {/* KBG BOA Badge */}
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-amber-500/20 to-red-500/20 border border-amber-500/50 rounded-lg backdrop-blur-sm">
              <p className="text-xl text-amber-400 font-semibold">
                aka <span className="text-amber-500">KBG BOA</span> 🎤
              </p>
            </div>

            {/* SIGNATURE POSITIONING - THE ONE THING */}
            <div className="bg-slate-900/70 backdrop-blur-sm border-l-4 border-amber-500 rounded-r-xl p-6 shadow-2xl">
              <p className="text-3xl font-bold text-white leading-tight mb-3">
                Built Between <span className="text-amber-500">Kinshasa</span> & <span className="text-amber-500">Dubai</span>.
              </p>
              <p className="text-xl text-slate-300 leading-relaxed">
                I help ambitious brands and artists create high-impact visual identity that drives <span className="text-green-400 font-semibold">measurable growth</span>.
              </p>
            </div>

            {/* The One-Line Identity */}
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-bold text-lg mb-1">
                    Strategic Creativity + Flawless Execution + Measurable ROI
                  </p>
                  <p className="text-slate-400 text-sm">
                    Not just a creative. A <span className="text-white font-semibold">growth partner</span> with proven results.
                  </p>
                </div>
              </div>
            </div>

            {/* Premium Filter */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4">
              <p className="text-slate-300 text-sm">
                <span className="text-white font-semibold">I work with serious brands ready to scale.</span>
                {' '}Projects start at <span className="text-amber-500 font-bold text-lg">$1,000</span>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 rounded-xl font-bold transition-all hover:scale-105 shadow-xl"
              >
                Let's Build Your Empire
                <ArrowRight className="ml-2" size={20} />
              </a>
              
              <a
                href="#results"
                className="inline-flex items-center px-8 py-4 bg-slate-800/80 backdrop-blur-sm text-white rounded-xl hover:bg-slate-700 transition-all border border-slate-700 font-semibold"
              >
                See Proven Results
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500">$5M+</div>
                <div className="text-xs text-gray-400">Projects Value</div>
              </div>
              <div className="h-12 w-px bg-gray-700"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500">300%</div>
                <div className="text-xs text-gray-400">Avg Client ROI</div>
              </div>
              <div className="h-12 w-px bg-gray-700"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500">15+</div>
                <div className="text-xs text-gray-400">Countries</div>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Photo */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 blur-3xl animate-pulse"></div>
            <div className="relative">
              <div className="relative">
                <img
                  src={professionalPhoto}
                  alt="Kabangu Mathieu - Professional Photo"
                  className="w-full rounded-2xl shadow-2xl border-4 border-amber-500/30"
                />
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 backdrop-blur-sm border border-amber-500/30 rounded-xl p-4">
                  <p className="text-white font-bold text-lg mb-1">
                    "I Build Visual Empires"
                  </p>
                  <p className="text-slate-400 text-sm">
                    — Kabangu Mathieu
                  </p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <a
                  href={cvImage}
                  download="Kabangu_Mathieu_CV.png"
                  className="inline-flex items-center justify-center px-4 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg transition-all text-sm font-semibold"
                >
                  <Download className="mr-2" size={18} />
                  Download CV
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-4 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-all text-sm font-semibold"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="text-amber-500">
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
