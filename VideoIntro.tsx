import { Play, Volume2 } from 'lucide-react';
import { useState } from 'react';

export function VideoIntro() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video-intro" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Discover Who I Am
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A short video to get to know me better, understand my creative vision and see how I can help you bring your projects to life.
          </p>
        </div>

        <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-700 group">
          {/* Video Placeholder with Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            {!isPlaying ? (
              <>
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm">
                  <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-8">
                    <div className="text-6xl">🎬</div>
                    <div className="text-center">
                      <p className="text-white font-bold text-2xl mb-2">Patrick Diego Amouri</p>
                      <p className="text-slate-300 text-lg">Multidisciplinary Creator & Entrepreneur</p>
                    </div>
                  </div>
                </div>

                {/* Play Button Overlay */}
                <button
                  onClick={() => setIsPlaying(true)}
                  className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-2xl group-hover:shadow-purple-500/50"
                >
                  <Play className="w-10 h-10 text-white ml-1" fill="white" />
                </button>
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-slate-950">
                {/* Video would go here - using placeholder */}
                <div className="text-center p-8">
                  <Volume2 className="w-16 h-16 text-purple-500 mx-auto mb-4 animate-pulse" />
                  <p className="text-white text-xl font-semibold mb-2">
                    Introduction Video
                  </p>
                  <p className="text-slate-400">
                    Add your personal introduction video here via a YouTube, Vimeo link or uploaded file
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Video Description */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
            <div className="text-3xl mb-2">🎯</div>
            <p className="text-white font-bold mb-1">My Vision</p>
            <p className="text-sm text-slate-400">Create content that inspires and generates results</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
            <div className="text-3xl mb-2">⚡</div>
            <p className="text-white font-bold mb-1">My Approach</p>
            <p className="text-sm text-slate-400">Close collaboration and transparent communication</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
            <div className="text-3xl mb-2">🚀</div>
            <p className="text-white font-bold mb-1">My Goal</p>
            <p className="text-sm text-slate-400">Transform your vision into reality exceeding expectations</p>
          </div>
        </div>

        {/* Instructions for adding real video */}
        <div className="mt-8 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl p-6">
          <p className="text-sm text-slate-300">
            <strong className="text-white">💡 To Add Your Real Video:</strong> Upload your introduction video to YouTube or Vimeo, 
            then replace this placeholder with an iframe embed. Recommended duration: 30-90 seconds. 
            Introduce yourself, talk about your passion and why clients should choose you!
          </p>
        </div>
      </div>
    </section>
  );
}
