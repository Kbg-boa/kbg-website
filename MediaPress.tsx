import { Newspaper, Radio, Tv, Award, Mic, Users } from 'lucide-react';

const mediaFeatures = [
  {
    type: "Press Features",
    icon: Newspaper,
    items: [
      { outlet: "Forbes Africa", feature: "Young Entrepreneurs Bridging Africa-Middle East", year: "2024" },
      { outlet: "The National UAE", feature: "Dubai's Creative Economy Boom", year: "2023" },
      { outlet: "African Business Review", feature: "Akili Groupe Expansion Strategy", year: "2023" }
    ]
  },
  {
    type: "Podcasts & Interviews",
    icon: Mic,
    items: [
      { outlet: "Creative Minds Africa", feature: "Building a Multi-Disciplinary Career", year: "2024" },
      { outlet: "Dubai Business Radio", feature: "Real Estate & Creative Synergy", year: "2023" },
      { outlet: "Afro-Drill Podcast", feature: "KBG BOA - The Journey", year: "2023" }
    ]
  },
  {
    type: "Music & Entertainment",
    icon: Radio,
    items: [
      { outlet: "Spotify Editorial", feature: "Featured on 'African Heat' Playlist", year: "2024" },
      { outlet: "Apple Music", feature: "New Artist Spotlight - KBG BOA", year: "2023" },
      { outlet: "YouTube Music", feature: "Trending Artist - DRC", year: "2023" }
    ]
  },
  {
    type: "Speaking & Panels",
    icon: Users,
    items: [
      { outlet: "Dubai Creative Summit", feature: "Panel: Future of African Creatives", year: "2024" },
      { outlet: "Kinshasa Tech Week", feature: "Keynote: Creative Entrepreneurship", year: "2023" },
      { outlet: "Africa-UAE Business Forum", feature: "Cross-Border Opportunities", year: "2023" }
    ]
  }
];

const awards = [
  { title: "Top 30 Under 30 Creative Entrepreneurs", organization: "African Business Network", year: "2024" },
  { title: "Best Emerging Drill Artist", organization: "Afro Music Awards", year: "2023" },
  { title: "Innovation in Digital Media", organization: "DRC Creative Awards", year: "2023" }
];

export function MediaPress() {
  return (
    <section id="media-press" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-4">
            <span className="text-amber-400 text-sm font-semibold">🎤 MEDIA & RECOGNITION</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured In & Recognition
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            International media features, podcast interviews, speaking engagements, and industry recognition.
          </p>
        </div>

        {/* Featured Logos - Placeholder */}
        <div className="mb-16 bg-slate-900 border border-slate-700 rounded-2xl p-8">
          <p className="text-center text-slate-400 mb-6 font-semibold">AS SEEN ON:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {['Forbes', 'The National', 'Spotify', 'Apple Music', 'YouTube', 'Dubai Media'].map((logo, index) => (
              <div key={index} className="text-center">
                <div className="w-full h-20 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center hover:border-amber-500/50 transition-all">
                  <span className="text-slate-400 font-bold text-sm">{logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mediaFeatures.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.type}</h3>
                </div>

                <div className="space-y-4">
                  {category.items.map((item, i) => (
                    <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <p className="text-amber-400 font-semibold">{item.outlet}</p>
                        <span className="text-slate-500 text-sm">{item.year}</span>
                      </div>
                      <p className="text-slate-300 text-sm">{item.feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Awards & Recognition */}
        <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-8">
          <div className="text-center mb-8">
            <Award className="w-12 h-12 text-amber-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Awards & Recognition</h3>
            <p className="text-slate-400">Honored to be recognized by industry leaders</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-amber-500/30 rounded-xl p-6 text-center"
              >
                <div className="text-4xl mb-3">🏆</div>
                <h4 className="text-white font-bold mb-2">{award.title}</h4>
                <p className="text-slate-400 text-sm mb-1">{award.organization}</p>
                <p className="text-amber-400 text-sm font-semibold">{award.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Press Kit CTA */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-slate-900 border border-slate-700 rounded-xl p-6">
            <p className="text-white font-semibold mb-4">
              📰 Media & Press Inquiries
            </p>
            <p className="text-slate-400 mb-4 text-sm">
              Looking for interviews, features, or collaboration opportunities?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:kbgmathieu@gmail.com?subject=Media Inquiry"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 px-6 py-3 rounded-lg font-semibold transition-all"
              >
                📧 Press Contact
              </a>
              <button className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold transition-all border border-slate-700">
                📄 Download Press Kit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
