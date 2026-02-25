import { Play, Volume2 } from 'lucide-react';
import { useState } from 'react';

export function VideoHero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background - Placeholder */}
      <div className="absolute inset-0">
        {!isPlaying ? (
          // Static Background with Play Button
          <div className="relative w-full h-full">
            {/* Background Image/Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-900/20 to-slate-950">
              {/* Animated Grid Pattern */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.3) 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            {/* Placeholder Content */}
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center z-10">
                <div className="mb-8">
                  <div className="text-6xl mb-4">🎬</div>
                  <p className="text-white text-2xl font-bold mb-2">Background Video Area</p>
                  <p className="text-slate-400 max-w-md mx-auto mb-6">
                    Add your professional video here:<br />
                    • You directing on set<br />
                    • Studio sessions<br />
                    • Dubai scenes<br />
                    • Creative process montage
                  </p>
                </div>

                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-2xl mx-auto hover:shadow-purple-500/50"
                >
                  <Play className="w-10 h-10 text-white ml-1" fill="white" />
                </button>
              </div>
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-slate-950/40"></div>
          </div>
        ) : (
          // Playing State
          <div className="w-full h-full bg-slate-950 flex items-center justify-center">
            <div className="text-center">
              <Volume2 className="w-16 h-16 text-purple-500 mx-auto mb-4 animate-pulse" />
              <p className="text-white text-xl font-semibold mb-2">
                Your Hero Video Here
              </p>
              <p className="text-slate-400">
                Replace with actual video via YouTube/Vimeo embed or uploaded file
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6 backdrop-blur-sm">
            <span className="text-amber-500 text-sm font-semibold">Creative Professional Available for Projects</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            KABANGU <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">MATHIEU</span>
          </h1>

          <div className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500/20 to-red-500/20 border border-amber-500/50 rounded-lg backdrop-blur-sm mb-6">
            <p className="text-xl text-amber-400 font-semibold">
              aka <span className="text-amber-500">KBG BOA</span> 🎤
            </p>
          </div>

          <p className="text-2xl text-gray-300 mb-8">
            Multidisciplinary Creative Professional & Drill Artist
          </p>

          <p className="text-gray-400 text-lg mb-8 max-w-3xl mx-auto">
            Director · Photographer · Videographer · Motion Designer · Graphic Designer · IT Specialist · Real Estate Broker · Music Producer · Drill Artist
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-amber-500 text-slate-950 rounded-lg hover:bg-amber-400 transition-all hover:scale-105 font-bold text-lg shadow-xl"
            >
              Hire Me 🚀
            </a>
            
            <a
              href="#portfolio"
              className="inline-flex items-center px-8 py-4 bg-slate-800/80 backdrop-blur-sm text-white rounded-lg hover:bg-slate-700 transition-all border border-slate-700 font-bold text-lg"
            >
              View Portfolio
            </a>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-500">10+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="h-12 w-px bg-gray-700"></div>
            <div>
              <div className="text-4xl font-bold text-amber-500">500+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="h-12 w-px bg-gray-700"></div>
            <div>
              <div className="text-4xl font-bold text-amber-500">100+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="text-amber-500">
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <p className="text-xs text-slate-400 mt-2">Scroll to explore</p>
        </div>
      </div>

      {/* Instructions Box */}
      <div className="absolute top-4 right-4 z-20 bg-slate-900/90 backdrop-blur-sm border border-amber-500/30 rounded-lg p-4 max-w-xs">
        <p className="text-amber-400 font-semibold text-xs mb-2">💡 Video Hero Setup:</p>
        <p className="text-slate-300 text-xs">
          Replace background with your professional video: you directing, studio work, Dubai scenes, or creative process montage. Makes HUGE impact! 🎬
        </p>
      </div>
    </div>
  );
}
