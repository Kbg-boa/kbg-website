import { Briefcase, MapPin, Award } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-amber-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Multidisciplinary entrepreneur, creative director, and drill artist with a strong background in film production, 
              music production, digital content, real estate, and business leadership. As Director General of <span className="text-amber-500 font-semibold">Akili Groupe</span> in Kinshasa, I combine creativity, strategy, 
              and innovation to deliver impactful visual content and sustainable business solutions.
            </p>

            <p className="text-gray-300 leading-relaxed">
              As a <span className="text-amber-500 font-semibold">drill artist and music producer</span> performing under the name <span className="text-amber-500 font-semibold">KBG BOA</span>, I bring authentic African sound to the global drill scene 
              through MU3IC de la Rue. With additional experience in Dubai's luxury real estate market, my work bridges art, 
              technology, music, real estate, and entrepreneurship, with a passion for building brands, developing creative talent, 
              and connecting Africa's potential to global opportunities.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3 p-4 bg-slate-800/50 rounded-lg border border-amber-500/20">
                <MapPin className="text-amber-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-white mb-1">Location</h3>
                  <p className="text-gray-400 text-sm">Business Bay, Dubai, UAE</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-slate-800/50 rounded-lg border border-amber-500/20">
                <Briefcase className="text-amber-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-white mb-1">Experience</h3>
                  <p className="text-gray-400 text-sm">10+ Years in Creative Industry</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-amber-500/20">
              <div className="flex items-start space-x-4">
                <Award className="text-amber-500 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Director General - Akili Groupe, Kinshasa</h3>
                  <p className="text-sm text-gray-400 mb-3">2019 - Present</p>
                  <p className="text-gray-300 text-sm">
                    Oversee strategic and operational management of the company across multiple sectors including travel, 
                    media, and digital. Supervise growth, partnerships, and financial sustainability while coordinating 
                    cross-border business initiatives between Kinshasa and Dubai.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-amber-500/20">
              <div className="flex items-start space-x-4">
                <Award className="text-amber-500 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Drill Artist & Music Producer - <span className="text-amber-500">KBG BOA</span></h3>
                  <p className="text-sm text-gray-400 mb-3">2018 - Present</p>
                  <p className="text-gray-300 text-sm">
                    Active drill artist performing as <span className="text-amber-500 font-semibold">KBG BOA</span> and music producer, bringing authentic African sound to the global drill scene. 
                    Co-founder of <span className="text-amber-500 font-semibold">MU3IC de la Rue</span>, an independent record label 
                    empowering local artists and promoting Congolese music globally through innovative production and artist development.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-amber-500/20">
              <div className="flex items-start space-x-4">
                <Award className="text-amber-500 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Creative Director & Film Producer</h3>
                  <p className="text-sm text-gray-400 mb-3">2019 - Present</p>
                  <p className="text-gray-300 text-sm">
                    Lead creative direction and production across film, photography, and motion design. Deliver digital 
                    and IT-based solutions for content production and brand storytelling aligned with client objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
