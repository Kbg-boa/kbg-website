import { Video, Camera, Building2, Music, Layers, Monitor, Palette, Smartphone, Megaphone, Globe, Edit, TrendingUp, Users, Zap, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function Services() {
  const [showAll, setShowAll] = useState(false);

  // TOP 5 PREMIUM SERVICES - Front and Center
  const premiumServices = [
    {
      icon: Monitor,
      title: 'Creative Direction & Brand Strategy',
      description: 'End-to-end creative direction for campaigns, brands, and visual storytelling. From strategy to execution.',
      features: ['Campaign Strategy', 'Art Direction', 'Brand Development', 'Content Strategy'],
      color: 'from-purple-500 to-pink-500',
      badge: '🔥 MOST POPULAR'
    },
    {
      icon: Video,
      title: 'Video Production & Filmmaking',
      description: 'Professional video production, directing, and cinematography for commercials, documentaries, and branded content.',
      features: ['Commercial Films', 'Documentaries', 'Music Videos', 'Corporate Videos'],
      color: 'from-blue-500 to-cyan-500',
      badge: '⭐ PREMIUM'
    },
    {
      icon: Building2,
      title: 'Real Estate Services - Dubai',
      description: 'Expert real estate brokerage services for luxury properties and investment opportunities in Dubai.',
      features: ['Property Acquisition', 'Investment Consulting', 'Luxury Properties', 'Market Analysis'],
      color: 'from-amber-500 to-orange-500',
      badge: '💎 HIGH VALUE'
    },
    {
      icon: Music,
      title: 'Music Production & Artist Development - KBG BOA',
      description: 'Professional drill music production, beat making, artist development, and recording services.',
      features: ['Beat Production', 'Recording & Mixing', 'Artist Development', 'Music Distribution'],
      color: 'from-red-500 to-pink-500',
      badge: '🎤 SIGNATURE'
    },
    {
      icon: Layers,
      title: 'Motion Design & Animation',
      description: 'Creating engaging motion graphics, animations, and visual effects for digital platforms and campaigns.',
      features: ['Motion Graphics', '2D/3D Animation', 'Visual Effects', 'Logo Animation'],
      color: 'from-green-500 to-emerald-500',
      badge: '⚡ HIGH DEMAND'
    }
  ];

  // ADDITIONAL CAPABILITIES
  const additionalServices = [
    {
      icon: Camera,
      title: 'Photography & Videography',
      description: 'High-quality photography for events, products, portraits, and commercial projects.',
      features: ['Event Photography', 'Product Shoots', 'Portrait Sessions', 'Commercial Photography']
    },
    {
      icon: Palette,
      title: 'Graphic Design & Branding',
      description: 'Complete branding solutions including logo design, brand identity, and marketing materials.',
      features: ['Brand Identity', 'Logo Design', 'Marketing Materials', 'Print Design']
    },
    {
      icon: Smartphone,
      title: 'Social Media Management',
      description: 'Complete social media strategy, content creation, and account management.',
      features: ['Content Creation', 'Account Management', 'Growth Strategy', 'Analytics']
    },
    {
      icon: Megaphone,
      title: 'Marketing & Advertising',
      description: 'Strategic marketing campaigns and advertising solutions to boost brand awareness.',
      features: ['Campaign Strategy', 'Ad Production', 'Market Research', 'ROI Optimization']
    },
    {
      icon: Globe,
      title: 'Web Design & Development',
      description: 'Modern, responsive websites and web applications that drive conversions.',
      features: ['Website Design', 'E-commerce', 'Landing Pages', 'Web Apps']
    },
    {
      icon: Edit,
      title: 'Video Editing & Post-Production',
      description: 'Professional video editing, color grading, and post-production services.',
      features: ['Video Editing', 'Color Grading', 'Sound Design', 'Post-Production']
    },
    {
      icon: TrendingUp,
      title: 'Business Consulting',
      description: 'Strategic business consulting for growth and market expansion in Africa and Middle East.',
      features: ['Business Strategy', 'Market Entry', 'Operations', 'Partnerships']
    },
    {
      icon: Users,
      title: 'Event Production & Coverage',
      description: 'Full-service event production and professional coverage.',
      features: ['Event Planning', 'Live Coverage', 'Event Photography', 'Video Production']
    },
    {
      icon: Zap,
      title: 'Digital & IT Solutions',
      description: 'Technical solutions for content production and workflow optimization.',
      features: ['Production Tech', 'Workflow Solutions', 'Digital Tools', 'IT Consulting']
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-4">
            <span className="text-amber-500 text-sm font-semibold">🎯 WHAT I DO BEST</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Premium <span className="text-amber-500">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Strategic creative services that deliver measurable business results
          </p>
        </div>

        {/* PREMIUM SERVICES - Top 5 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            🔥 Core Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-slate-900 border border-slate-700 rounded-xl p-8 hover:border-amber-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
                >
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-bold bg-amber-500/20 text-amber-400 px-2 py-1 rounded-full border border-amber-500/30">
                      {service.badge}
                    </span>
                  </div>

                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                        <span className="text-amber-500">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* ADDITIONAL CAPABILITIES - Collapsible */}
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              Additional Capabilities
            </h3>
            <p className="text-slate-400">
              Extended services to support your complete project needs
            </p>
          </div>

          {showAll && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {additionalServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-all"
                  >
                    <div className="w-12 h-12 rounded-lg bg-slate-700 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-amber-500" />
                    </div>
                    
                    <h4 className="text-lg font-bold text-white mb-2">
                      {service.title}
                    </h4>
                    
                    <p className="text-gray-400 text-sm mb-3">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-gray-400 flex items-center gap-2">
                          <span className="text-amber-500">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          )}

          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all font-semibold"
            >
              {showAll ? 'Show Less' : `View ${additionalServices.length} More Services`}
              <ChevronDown className={`w-5 h-5 transition-transform ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-8 inline-block">
            <p className="text-white text-lg font-semibold mb-4">
              Not sure which service you need?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-xl"
            >
              Book FREE Strategy Call
            </a>
            <p className="text-slate-400 text-sm mt-3">
              Minimum project investment: <span className="text-amber-500 font-bold">$1,000</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
