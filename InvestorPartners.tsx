import { Handshake, Building2, TrendingUp, Globe, Music, Film, DollarSign, Users } from 'lucide-react';

const opportunities = [
  {
    icon: Building2,
    title: "Real Estate Investment Partners",
    description: "Joint venture opportunities in Dubai's luxury property market. Looking for investors interested in high-ROI property deals.",
    benefits: [
      "Access to exclusive Dubai listings",
      "Market expertise & local connections",
      "Proven track record",
      "Co-investment opportunities"
    ],
    investment: "$100K - $5M+",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Music,
    title: "Music Label & Artist Development",
    description: "Partnership opportunities with MU3IC de la Rue label. Invest in the future of African drill music and emerging talent.",
    benefits: [
      "Growing African music market",
      "Artist development pipeline",
      "Distribution partnerships",
      "Revenue sharing model"
    ],
    investment: "$50K - $500K",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Film,
    title: "Film & Content Production",
    description: "Co-production opportunities for film projects, documentaries, and commercial content across Africa and Middle East.",
    benefits: [
      "Experienced production team",
      "International distribution channels",
      "Strategic partnerships",
      "Creative & financial returns"
    ],
    investment: "$100K - $2M",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: Globe,
    title: "Akili Groupe Expansion",
    description: "Strategic investment in Akili Groupe's expansion across travel, media, and digital sectors. Scale a proven business model.",
    benefits: [
      "Established operations in DRC",
      "Multi-sector diversification",
      "Regional expansion plans",
      "Strong leadership team"
    ],
    investment: "$250K - $1M+",
    color: "from-green-500 to-emerald-500"
  }
];

const partnerTypes = [
  { type: "Strategic Investors", icon: DollarSign },
  { type: "Business Partners", icon: Handshake },
  { type: "Creative Collaborators", icon: Film },
  { type: "Distribution Partners", icon: Globe }
];

export function InvestorPartners() {
  return (
    <section id="investors" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-4">
            <span className="text-green-400 text-sm font-semibold">💼 PARTNERSHIP OPPORTUNITIES</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Investment & Partnership Opportunities
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Strategic partnership and investment opportunities across real estate, music, film, and business ventures.
          </p>
        </div>

        {/* Partner Types */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {partnerTypes.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={index}
                className="bg-slate-900 border border-slate-700 rounded-xl p-6 text-center hover:border-green-500/50 transition-all"
              >
                <Icon className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <p className="text-white font-semibold text-sm">{partner.type}</p>
              </div>
            );
          })}
        </div>

        {/* Opportunities */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {opportunities.map((opp, index) => {
            const Icon = opp.icon;
            return (
              <div
                key={index}
                className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${opp.color} flex items-center justify-center`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{opp.title}</h3>
                    <p className="text-slate-400 text-sm">{opp.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {opp.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                        <span className="text-green-400 mt-1">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`bg-gradient-to-r ${opp.color} bg-opacity-10 border border-slate-700 rounded-lg p-4`}>
                  <p className="text-slate-400 text-sm mb-1">Investment Range:</p>
                  <p className="text-white font-bold text-xl">{opp.investment}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Partner With Me */}
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-8 md:p-12 mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Why Partner With Me?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="text-white font-bold mb-2">Proven Track Record</h4>
              <p className="text-slate-400 text-sm">
                10+ years successfully building and scaling businesses across multiple sectors
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🌍</div>
              <h4 className="text-white font-bold mb-2">Strategic Positioning</h4>
              <p className="text-slate-400 text-sm">
                Uniquely positioned between Africa and Middle East markets with deep local knowledge
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💼</div>
              <h4 className="text-white font-bold mb-2">Multi-Sector Expertise</h4>
              <p className="text-slate-400 text-sm">
                Diverse portfolio reduces risk and creates cross-sector synergies
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">$5M+</div>
              <p className="text-slate-400 text-sm">Deals Facilitated</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">3</div>
              <p className="text-slate-400 text-sm">Companies Founded</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">15+</div>
              <p className="text-slate-400 text-sm">Countries Reached</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
              <p className="text-slate-400 text-sm">Commitment</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-white text-xl font-semibold mb-6">
            Interested in Exploring Partnership Opportunities?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:kbgmathieu@gmail.com?subject=Investment/Partnership Inquiry"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-xl"
            >
              📧 Schedule Confidential Discussion
            </a>
            <a
              href="https://wa.me/971523711530?text=Hi! I'm interested in partnership opportunities"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-bold transition-all border border-slate-700"
            >
              💬 WhatsApp Inquiry
            </a>
          </div>
          <p className="text-slate-500 text-sm mt-4">
            🔒 All inquiries handled with strict confidentiality
          </p>
        </div>
      </div>
    </section>
  );
}
