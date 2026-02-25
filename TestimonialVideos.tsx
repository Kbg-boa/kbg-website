import { Play, Quote, Star, X, Youtube } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const videoTestimonials = [
  {
    clientName: "Sarah Al-Mansoori",
    role: "CEO, Luxury Properties Dubai",
    project: "Real Estate Video Campaign",
    thumbnail: "https://images.unsplash.com/photo-1640285865892-38f969efe90e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhcmFiJTIwd29tYW4lMjBidXNpbmVzcyUyMGR1YmFpfGVufDF8fHx8MTc3MTQ2OTMwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    videoUrl: "#", // Replace with actual video
    rating: 5,
    quote: "Patrick's video didn't just showcase the property - it sold a lifestyle. We closed in 21 days.",
    result: "$2.5M Property Sale"
  },
  {
    clientName: "Marcus Johnson",
    role: "Founder, TechStart Inc",
    project: "Brand Launch Video",
    thumbnail: "https://images.unsplash.com/photo-1663743556121-0ef426d85803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHRlY2glMjBlbnRyZXByZW5ldXIlMjBzdGFydHVwJTIwZm91bmRlcnxlbnwxfHx8fDE3NzE0NjkzMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    videoUrl: "#",
    rating: 5,
    quote: "The video Patrick created helped us secure $500K in seed funding. Worth every penny.",
    result: "$500K Funding Raised"
  },
  {
    clientName: "Amina Kabongo",
    role: "Fashion Brand Owner, Kinshasa",
    project: "Brand Photography & Social Media",
    thumbnail: "https://images.unsplash.com/photo-1720343354396-da6abc30d3f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBmYXNoaW9uJTIwZGVzaWduZXIlMjBlbnRyZXByZW5ldXJ8ZW58MXx8fHwxNzcxNDY5MzEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    videoUrl: "#",
    rating: 5,
    quote: "Our brand went from invisible to everywhere. Sales tripled in just 2 months.",
    result: "300% Sales Increase"
  }
];

export function TestimonialVideos() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const openVideo = (index: number) => {
    setSelectedVideo(index);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="video-testimonials" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-4">
            <span className="text-green-400 text-sm font-semibold">🎥 CLIENT SUCCESS STORIES</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Hear It From My Clients
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Real people. Real results. Real testimonials on video — because written words can only say so much.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videoTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-700 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              {/* Video Thumbnail */}
              <div 
                onClick={() => openVideo(index)}
                className="relative h-64 bg-slate-800 group cursor-pointer overflow-hidden"
              >
                {/* Real Image Background */}
                <ImageWithFallback
                  src={testimonial.thumbnail}
                  alt={testimonial.clientName}
                  className="w-full h-full object-cover"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/40 group-hover:bg-slate-950/60 transition-all">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                    <Play className="w-7 h-7 text-white ml-1" fill="white" />
                  </div>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-lg px-3 py-1 flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Video Label */}
                <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-lg px-3 py-1">
                  <p className="text-white text-xs font-semibold">🎥 Video Testimonial</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {testimonial.clientName.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-bold">{testimonial.clientName}</p>
                    <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <Quote className="w-6 h-6 text-purple-500 opacity-50 mb-2" />
                  <p className="text-slate-300 italic text-sm leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-3">
                  <p className="text-xs text-slate-400 mb-1">Project:</p>
                  <p className="text-white text-sm font-semibold mb-2">{testimonial.project}</p>
                  <p className="text-green-400 font-bold text-sm">✓ {testimonial.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions & CTA */}
        <div className="mt-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8">
          <div className="text-center">
            <p className="text-white font-semibold text-lg mb-2">
              💡 Setup Tip: Add Your Real Video Testimonials
            </p>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto text-sm">
              Film short testimonials (30-60 sec) with happy clients on your phone. 
              Clean background, good lighting, authentic reactions. 
              Upload to YouTube/Vimeo and embed here. Video testimonials convert 10x better than text!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105">
                🎬 See All Video Testimonials
              </button>
              <a
                href="#contact"
                className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold transition-all border border-slate-700"
              >
                Become a Success Story
              </a>
            </div>
          </div>
        </div>

        {/* Trust Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <p className="text-slate-400 text-sm">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">5.0</div>
            <p className="text-slate-400 text-sm">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">50+</div>
            <p className="text-slate-400 text-sm">Video Testimonials</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">95%</div>
            <p className="text-slate-400 text-sm">Repeat Clients</p>
          </div>
        </div>

        {/* Video Modal */}
        {selectedVideo !== null && (
          <div 
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={closeVideo}
          >
            <div 
              className="bg-slate-900 border border-slate-700 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl animate-in zoom-in duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-700">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                    {videoTestimonials[selectedVideo].clientName.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-bold">{videoTestimonials[selectedVideo].clientName}</p>
                    <p className="text-slate-400 text-sm">{videoTestimonials[selectedVideo].role}</p>
                  </div>
                </div>
                <button
                  onClick={closeVideo}
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Content Area */}
              <div className="p-8">
                {/* Placeholder for Real Video */}
                <div className="aspect-video bg-slate-950 rounded-xl border border-slate-700 flex items-center justify-center mb-6">
                  <div className="text-center max-w-lg px-8">
                    <Youtube className="w-20 h-20 text-purple-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-4">
                      🎬 Add Your Real Video Here
                    </h3>
                    <p className="text-slate-400 mb-6 leading-relaxed">
                      Replace with YouTube/Vimeo embed code or video file URL. 
                      Example: <code className="text-purple-400 bg-slate-800 px-2 py-1 rounded">https://www.youtube.com/embed/YOUR_VIDEO_ID</code>
                    </p>
                    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-4">
                      <p className="text-white font-semibold mb-2">💡 Pro Tip:</p>
                      <p className="text-slate-300 text-sm">
                        Film 30-60 second testimonials with your phone. Good lighting + clean background = professional results. 
                        Upload to YouTube (unlisted) and embed the link here!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Testimonial Details */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-slate-400 text-sm mb-2">Project:</p>
                      <p className="text-white font-semibold mb-4">{videoTestimonials[selectedVideo].project}</p>
                      
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(videoTestimonials[selectedVideo].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-slate-400 text-sm ml-2">5.0 / 5.0</span>
                      </div>

                      <Quote className="w-8 h-8 text-purple-500 opacity-50 mb-3" />
                      <p className="text-slate-300 italic leading-relaxed">
                        "{videoTestimonials[selectedVideo].quote}"
                      </p>
                    </div>

                    <div className="flex flex-col justify-center">
                      <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-6 text-center">
                        <p className="text-slate-400 text-sm mb-2">Result Achieved:</p>
                        <p className="text-3xl font-bold text-green-400 mb-2">
                          {videoTestimonials[selectedVideo].result}
                        </p>
                        <p className="text-slate-300 text-sm">
                          Measurable, real-world impact
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-slate-700 bg-slate-800/30">
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="#contact"
                    onClick={closeVideo}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
                  >
                    Get Similar Results
                  </a>
                  <button
                    onClick={closeVideo}
                    className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
