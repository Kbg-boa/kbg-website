import { Building2, Sparkles } from 'lucide-react';

const clients = [
  { name: "Akili Groupe", type: "Production Company", logo: "AG" },
  { name: "Dubai Properties", type: "Real Estate", logo: "DP" },
  { name: "TechStart Inc", type: "Technology", logo: "TS" },
  { name: "Fashion Forward", type: "Fashion Brand", logo: "FF" },
  { name: "Luxury Living", type: "Real Estate", logo: "LL" },
  { name: "Urban Beats", type: "Music Label", logo: "UB" },
  { name: "Creative Studios", type: "Media Production", logo: "CS" },
  { name: "Elite Investments", type: "Finance", logo: "EI" },
  { name: "Global Ventures", type: "Business", logo: "GV" },
  { name: "Kinshasa Eats", type: "Restaurant", logo: "KE" },
  { name: "Momentum Agency", type: "Marketing", logo: "MA" },
  { name: "Vision Media", type: "Broadcasting", logo: "VM" }
];

const industries = [
  { name: "Real Estate", count: "15+ projects", icon: "🏢" },
  { name: "Music & Entertainment", count: "25+ videos", icon: "🎵" },
  { name: "Fashion & Beauty", count: "20+ brands", icon: "👗" },
  { name: "Technology", count: "10+ startups", icon: "💻" },
  { name: "Food & Beverage", count: "12+ restaurants", icon: "🍽️" },
  { name: "Finance & Business", count: "8+ companies", icon: "💼" }
];

export function Clients() {
  return (
    <section id="clients" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-4">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Clients & Partners
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            I've had the honor of collaborating with brands, companies and artists from all backgrounds around the world.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 flex flex-col items-center justify-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl mb-3">
                  {client.logo}
                </div>
                <p className="text-white font-semibold text-sm mb-1">{client.name}</p>
                <p className="text-xs text-slate-400">{client.type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Industries & Sectors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{industry.icon}</div>
                  <div>
                    <p className="text-white font-bold">{industry.name}</p>
                    <p className="text-sm text-purple-400">{industry.count}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="w-6 h-6 text-yellow-400" />
                <p className="text-4xl font-bold text-white">50+</p>
              </div>
              <p className="text-slate-400">Happy Clients</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="w-6 h-6 text-yellow-400" />
                <p className="text-4xl font-bold text-white">100+</p>
              </div>
              <p className="text-slate-400">Projects Completed</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="w-6 h-6 text-yellow-400" />
                <p className="text-4xl font-bold text-white">15+</p>
              </div>
              <p className="text-slate-400">Different Countries</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="w-6 h-6 text-yellow-400" />
                <p className="text-4xl font-bold text-white">5.0</p>
              </div>
              <p className="text-slate-400">Average Rating ⭐</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-white text-lg font-semibold mb-4">
            Your company could be next on this list!
          </p>
          <a
            href="https://wa.me/971523711530"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-purple-500/50"
          >
            Let's Discuss Your Project 🚀
          </a>
        </div>
      </div>
    </section>
  );
}
