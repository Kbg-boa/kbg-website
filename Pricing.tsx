import { Check, Zap, Crown, Sparkles } from 'lucide-react';

const pricingPlans = [
  {
    name: "STARTER",
    icon: Sparkles,
    price: "$500",
    duration: "per project",
    description: "Perfect for small projects and beginners",
    features: [
      "1 service of your choice",
      "Revisions: 2 included",
      "Delivery: 5-7 days",
      "Email support",
      "Basic source files",
      "Standard resolution"
    ],
    popular: false,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "PROFESSIONAL",
    icon: Zap,
    price: "$1,500",
    duration: "per project",
    description: "Most popular - Ideal for most projects",
    features: [
      "Up to 3 combined services",
      "Revisions: 5 included",
      "Delivery: 3-5 days",
      "Priority 24/7 support",
      "All source files",
      "High resolution / 4K",
      "Content strategy included",
      "Free consultation session"
    ],
    popular: true,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "PREMIUM VIP",
    icon: Crown,
    price: "$5,000+",
    duration: "per project",
    description: "Complete solution for large-scale projects",
    features: [
      "Unlimited combined services",
      "Unlimited revisions",
      "Delivery: 2-3 days (express)",
      "Dedicated VIP support 24/7",
      "All files + multiple formats",
      "Ultra HD / 8K available",
      "Complete marketing strategy",
      "Dedicated project management",
      "3 months post-delivery support",
      "Extended commercial rights"
    ],
    popular: false,
    color: "from-yellow-500 to-orange-500"
  }
];

const serviceCategories = [
  { name: "Music Video Production", starting: "$800" },
  { name: "Photography Session", starting: "$300" },
  { name: "Logo & Brand Design", starting: "$400" },
  { name: "Motion Design Animation", starting: "$600" },
  { name: "Real Estate Brokerage", starting: "Commission-based" },
  { name: "Social Media Content", starting: "$500" },
  { name: "Website Design", starting: "$1,200" },
  { name: "Video Editing", starting: "$350" }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Packages & Pricing
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Flexible solutions for every budget. Transparent pricing, no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative bg-slate-900 border ${
                  plan.popular ? 'border-purple-500 shadow-2xl shadow-purple-500/20 scale-105' : 'border-slate-700'
                } rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-1 rounded-full text-sm font-bold">
                      ⭐ MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${plan.color} mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-400 text-sm mb-4">{plan.description}</p>
                  <div className="mb-2">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                  </div>
                  <p className="text-slate-400 text-sm">{plan.duration}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-xl hover:shadow-purple-500/50'
                      : 'bg-slate-800 text-white hover:bg-slate-700'
                  }`}
                >
                  Choose {plan.name}
                </button>
              </div>
            );
          })}
        </div>

        {/* Service Categories Pricing */}
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Pricing by Service
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceCategories.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4 hover:border-purple-500/50 transition-all duration-300"
              >
                <p className="text-white font-semibold text-sm mb-2">{service.name}</p>
                <p className="text-purple-400 font-bold">{service.starting}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-center mt-6 text-sm">
            💡 Prices may vary based on project complexity. Contact me for a free personalized quote.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2 text-slate-400">
            <Check className="w-5 h-5 text-green-400" />
            <span>Secure payment</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Check className="w-5 h-5 text-green-400" />
            <span>Money-back guarantee</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Check className="w-5 h-5 text-green-400" />
            <span>On-time delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}
