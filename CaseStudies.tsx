import { Target, Zap, TrendingUp, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const caseStudies = [
  {
    client: "Luxury Properties Dubai",
    project: "$2.5M Property Sale",
    challenge: "High-end property not selling after 6 months on the market. Owner frustrated, market perception was poor.",
    strategy: "Complete repositioning: Professional 4K video tour, drone footage, luxury lifestyle branding, targeted social media campaign.",
    execution: [
      "Cinematic property video (3 min)",
      "10 professional photos retouched",
      "Instagram & LinkedIn campaign",
      "Luxury buyer targeting"
    ],
    results: [
      { metric: "21 days", label: "Time to Sell" },
      { metric: "$2.5M", label: "Sale Price" },
      { metric: "300%", label: "ROI on Marketing" },
      { metric: "15+", label: "Qualified Leads" }
    ],
    testimonial: "The video changed everything. We had 3 serious offers within 2 weeks.",
    image: "dubai luxury property interior",
    color: "from-blue-500 to-cyan-500"
  },
  {
    client: "TechStart Inc - Dubai Startup",
    project: "Brand Launch Video Campaign",
    challenge: "New tech startup with zero brand awareness. Needed to attract investors and first customers in competitive market.",
    strategy: "Complete brand storytelling: founder story video, product demo, motion graphics, social media content series.",
    execution: [
      "3-minute founder story video",
      "Product demo with motion graphics",
      "15 social media content pieces",
      "LinkedIn campaign strategy"
    ],
    results: [
      { metric: "$500K", label: "Funding Raised" },
      { metric: "50K", label: "Video Views" },
      { metric: "200+", label: "Lead Inquiries" },
      { metric: "12", label: "B2B Contracts" }
    ],
    testimonial: "Patrick understood our vision and translated it into visuals that secured our seed funding.",
    image: "tech startup office presentation",
    color: "from-purple-500 to-pink-500"
  },
  {
    client: "Fashion Brand - Kinshasa",
    project: "Social Media Transformation",
    challenge: "Local fashion brand struggling with Instagram growth. Only 2K followers, low engagement, no clear identity.",
    strategy: "Complete visual rebrand: professional photoshoot, consistent content calendar, influencer strategy, storytelling.",
    execution: [
      "2-day professional photoshoot",
      "Brand identity redesign",
      "60 days content calendar",
      "Influencer partnerships"
    ],
    results: [
      { metric: "15K", label: "New Followers (60 days)" },
      { metric: "8%", label: "Engagement Rate" },
      { metric: "300%", label: "Sales Increase" },
      { metric: "25+", label: "Press Features" }
    ],
    testimonial: "Our brand went from invisible to everywhere. Sales tripled in 2 months.",
    image: "fashion photography studio models",
    color: "from-pink-500 to-red-500"
  },
  {
    client: "KBG BOA - Music Career",
    project: "Artist Brand Development",
    challenge: "Building a drill music career from Kinshasa with global ambitions. Zero international recognition.",
    strategy: "Multi-platform brand building: music videos, social media presence, PR strategy, cross-border collaborations.",
    execution: [
      "5 professional music videos",
      "MU3IC de la Rue label launch",
      "Spotify & streaming optimization",
      "International collaborations"
    ],
    results: [
      { metric: "500K+", label: "Total Streams" },
      { metric: "20K+", label: "Social Media Following" },
      { metric: "10+", label: "Media Features" },
      { metric: "Global", label: "Audience Reach" }
    ],
    testimonial: "Self-directed project showcasing the power of consistent creative execution and strategic branding.",
    image: "music artist recording studio performance",
    color: "from-amber-500 to-orange-500"
  }
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-4">
            <span className="text-green-400 text-sm font-semibold">📈 PROVEN RESULTS</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Case Studies – Real Results
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Real projects. Real challenges. Real results. See how strategic creativity drives measurable business outcomes.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <article
              key={index}
              className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-80 lg:h-auto overflow-hidden">
                  <ImageWithFallback
                    src={`https://images.unsplash.com/photo-1653361953232-cd154e54beff?w=800&h=600&fit=crop`}
                    alt={study.project}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-20`}></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-lg p-4">
                      <p className="text-slate-400 text-sm mb-1">Client</p>
                      <p className="text-white font-bold text-lg">{study.client}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12">
                  <h3 className="text-3xl font-bold text-white mb-6">{study.project}</h3>

                  {/* Challenge */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="w-5 h-5 text-red-400" />
                      <h4 className="text-lg font-semibold text-white">Challenge</h4>
                    </div>
                    <p className="text-slate-400 leading-relaxed">{study.challenge}</p>
                  </div>

                  {/* Strategy */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="w-5 h-5 text-yellow-400" />
                      <h4 className="text-lg font-semibold text-white">Strategy</h4>
                    </div>
                    <p className="text-slate-400 leading-relaxed mb-3">{study.strategy}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {study.execution.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                      <h4 className="text-lg font-semibold text-white">Measurable Results</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {study.results.map((result, i) => (
                        <div key={i} className={`bg-gradient-to-br ${study.color} bg-opacity-10 border border-slate-700 rounded-xl p-4 text-center`}>
                          <div className={`text-3xl font-bold bg-gradient-to-r ${study.color} bg-clip-text text-transparent mb-1`}>
                            {result.metric}
                          </div>
                          <div className="text-slate-400 text-sm">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                    <p className="text-slate-300 italic">"{study.testimonial}"</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to Get Similar Results?
            </h3>
            <p className="text-slate-400 mb-6">
              Let's discuss how we can transform your project into a success story.
            </p>
            <a
              href="#booking"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Book FREE Strategy Call
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
