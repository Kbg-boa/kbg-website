import { Calendar, MapPin, Award, Rocket, Globe, TrendingUp } from 'lucide-react';

const timeline = [
  {
    year: "2016",
    title: "Creative Journey Begins",
    location: "Kinshasa, DRC",
    icon: Rocket,
    description: "Started as a self-taught creative, exploring photography, video, and design. First paid client projects.",
    highlight: "Foundation Phase",
    color: "from-blue-500 to-cyan-500"
  },
  {
    year: "2018",
    title: "KBG BOA - Drill Artist Born",
    location: "Kinshasa, DRC",
    icon: Award,
    description: "Launched music career as drill artist KBG BOA. Started producing beats and developing unique Afro-drill sound.",
    highlight: "Music Career Launch",
    color: "from-purple-500 to-pink-500"
  },
  {
    year: "2019",
    title: "Founded Akili Groupe",
    location: "Kinshasa, DRC",
    icon: TrendingUp,
    description: "Established Akili Groupe as Director General, expanding into travel, media, and digital services across sectors.",
    highlight: "Entrepreneurship",
    color: "from-green-500 to-emerald-500"
  },
  {
    year: "2020",
    title: "MU3IC de la Rue Label Launch",
    location: "Kinshasa, DRC",
    icon: Award,
    description: "Co-founded independent record label to empower local artists and promote Congolese music globally.",
    highlight: "Music Industry Impact",
    color: "from-amber-500 to-orange-500"
  },
  {
    year: "2021",
    title: "Dubai Expansion",
    location: "Dubai, UAE",
    icon: Globe,
    description: "Relocated to Dubai. Started real estate brokerage, expanded client base internationally, bridged Africa-Middle East markets.",
    highlight: "International Growth",
    color: "from-red-500 to-pink-500"
  },
  {
    year: "2024",
    title: "Global Creative Director",
    location: "Dubai & Kinshasa",
    icon: Rocket,
    description: "Managing international clients across 15+ countries. Full-service creative agency spanning music, real estate, film, and digital.",
    highlight: "International Authority",
    color: "from-indigo-500 to-purple-500"
  },
  {
    year: "2026",
    title: "The Future Unfolds",
    location: "Global",
    icon: TrendingUp,
    description: "Expanding partnerships, scaling operations, building the bridge between African creativity and global opportunities.",
    highlight: "Vision Forward",
    color: "from-purple-500 to-pink-500"
  }
];

export function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4">
            <span className="text-purple-400 text-sm font-semibold">🚀 MY JOURNEY</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            From Kinshasa to Global Stages
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A decade-long journey of creative evolution, entrepreneurship, and building bridges between continents.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-20 -translate-x-1/2"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  {/* Content */}
                  <div className={`${isEven ? 'lg:text-right' : 'lg:col-start-2'}`}>
                    <div className="inline-block mb-4">
                      <span className={`px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${item.color} text-white`}>
                        {item.highlight}
                      </span>
                    </div>

                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                          <div className="flex items-center gap-2 text-slate-400 text-sm">
                            <MapPin className="w-4 h-4" />
                            {item.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Year Badge - Center */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center border-4 border-slate-900 shadow-2xl`}>
                      <div className="text-center">
                        <div className="text-white font-bold text-xl">{item.year}</div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Year */}
                  <div className="lg:hidden">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${item.color} rounded-lg`}>
                      <Calendar className="w-4 h-4 text-white" />
                      <span className="text-white font-bold">{item.year}</span>
                    </div>
                  </div>

                  {/* Spacer for even items */}
                  {isEven && <div className="hidden lg:block"></div>}
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">10+</div>
              <p className="text-slate-400">Years Journey</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">3</div>
              <p className="text-slate-400">Companies Founded</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <p className="text-slate-400">Countries Reached</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <p className="text-slate-400">Projects Delivered</p>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-12 text-center">
          <blockquote className="text-2xl text-white font-semibold italic max-w-3xl mx-auto">
            "Built between Kinshasa & Dubai. <br />
            <span className="text-amber-500">Connecting African creativity to global opportunities.</span>"
          </blockquote>
          <p className="text-slate-400 mt-4">— Kabangu Mathieu (KBG BOA)</p>
        </div>
      </div>
    </section>
  );
}
