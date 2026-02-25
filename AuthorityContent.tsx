import { Lightbulb, TrendingUp, Globe, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const insights = [
  {
    title: "The Future of Africa's Creative Economy: Why Now Is The Time",
    excerpt: "Africa's creative sector is experiencing unprecedented growth. Here's why smart investors and brands are paying attention.",
    category: "Thought Leadership",
    readTime: "8 min read",
    image: "african creative economy growth",
    impact: "High",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Dubai-Africa Investment Bridge: Untapped Opportunities",
    excerpt: "My unique perspective on connecting Middle East capital with African creative and real estate opportunities.",
    category: "Market Insights",
    readTime: "10 min read",
    image: "dubai africa business partnership",
    impact: "High",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Why African Drill Is The Next Global Wave (And How to Capitalize)",
    excerpt: "The drill music revolution happening in Africa right now. What the industry is missing and where it's headed.",
    category: "Music Industry",
    readTime: "7 min read",
    image: "african drill music performance",
    impact: "High",
    color: "from-amber-500 to-orange-500"
  },
  {
    title: "The Multidisciplinary Advantage: Why Specialists Are Losing",
    excerpt: "In today's economy, being great at one thing isn't enough. Here's why diverse skill sets create unprecedented value.",
    category: "Business Strategy",
    readTime: "6 min read",
    image: "multidisciplinary creative professional",
    impact: "Medium",
    color: "from-green-500 to-emerald-500"
  }
];

export function AuthorityContent() {
  return (
    <section id="authority" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-4">
            <span className="text-amber-400 text-sm font-semibold">💡 INSIGHTS & LEADERSHIP</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Insights & Thought Leadership
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Strong opinions on the future of creativity, business, and the African-global economy. 
            Not just what I do — but <span className="text-white font-semibold">what I believe</span>.
          </p>
        </div>

        {/* Featured Insight */}
        <div className="mb-16">
          <div className="bg-slate-950 border border-slate-700 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-auto overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1653361953232-cd154e54beff?w=800&h=600&fit=crop"
                  alt="Featured Insight"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-amber-500 text-white rounded-full text-sm font-bold">
                    🔥 FEATURED INSIGHT
                  </span>
                </div>
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="w-5 h-5 text-amber-500" />
                  <span className="text-amber-500 font-semibold text-sm">{insights[0].category}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-400 text-sm">{insights[0].readTime}</span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">
                  {insights[0].title}
                </h3>

                <p className="text-slate-400 leading-relaxed mb-6">
                  {insights[0].excerpt}
                </p>

                <div className="flex items-center gap-4">
                  <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105">
                    Read Full Article →
                  </button>
                  <span className="px-3 py-1 bg-red-500/20 border border-red-500/50 text-red-400 rounded-full text-xs font-bold">
                    HIGH IMPACT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Insights */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {insights.slice(1).map((insight, index) => (
            <article
              key={index}
              className="bg-slate-950 border border-slate-700 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1653361953232-cd154e54beff?w=400&h=300&fit=crop"
                  alt={insight.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${insight.color} opacity-20`}></div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-amber-400 text-sm font-semibold">{insight.category}</span>
                  <span className={`px-2 py-1 ${insight.impact === 'High' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'} rounded text-xs font-bold`}>
                    {insight.impact === 'High' ? '🔥 HIGH IMPACT' : '⚡ IMPACTFUL'}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                  {insight.title}
                </h3>

                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {insight.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500 text-xs">{insight.readTime}</span>
                  <button className="text-amber-400 font-semibold text-sm hover:underline">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">My Philosophy</h3>
            <p className="text-xl text-slate-300 italic max-w-3xl mx-auto">
              "I'm not just a service provider. I'm building the bridge between African creativity and global opportunities. 
              The future belongs to those who see potential where others see risk."
            </p>
            <p className="text-slate-500 mt-4">— Kabangu Mathieu</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <Globe className="w-10 h-10 text-amber-500 mx-auto mb-3" />
              <h4 className="text-white font-bold mb-2">Global Vision</h4>
              <p className="text-slate-400 text-sm">
                Africa to the world, not just for the world
              </p>
            </div>
            <div className="text-center">
              <Target className="w-10 h-10 text-amber-500 mx-auto mb-3" />
              <h4 className="text-white font-bold mb-2">Strategic Execution</h4>
              <p className="text-slate-400 text-sm">
                Ideas mean nothing without flawless execution
              </p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-10 h-10 text-amber-500 mx-auto mb-3" />
              <h4 className="text-white font-bold mb-2">Results Over Hype</h4>
              <p className="text-slate-400 text-sm">
                Measure everything, optimize always
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-white font-semibold mb-4">
            Want to discuss these ideas or explore collaboration?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Let's Have a Conversation
          </a>
        </div>
      </div>
    </section>
  );
}
