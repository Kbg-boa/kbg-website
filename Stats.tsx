import { Clock, Zap, HeadphonesIcon, Award, TrendingUp, Globe } from 'lucide-react';

const stats = [
  {
    icon: Clock,
    title: "Available 24/7",
    description: "Fast response within 2h",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Zap,
    title: "Express Delivery",
    description: "Projects delivered on time",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: HeadphonesIcon,
    title: "Premium Support",
    description: "Assistance during and after project",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "100% client satisfaction",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: TrendingUp,
    title: "Proven ROI",
    description: "Measurable results for your business",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Clients in 15+ countries",
    color: "from-indigo-500 to-purple-500"
  }
];

const achievements = [
  { number: "5+", label: "Years of Experience" },
  { number: "100+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "14", label: "Services Offered" },
  { number: "24/7", label: "Availability" },
  { number: "100%", label: "Satisfaction Rate" }
];

export function Stats() {
  return (
    <section id="stats" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">{stat.title}</h3>
                    <p className="text-sm text-slate-400">{stat.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievement Numbers */}
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Numbers That Speak
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                  {achievement.number}
                </div>
                <p className="text-slate-400 text-sm">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications / Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-slate-400">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span>Secure Payments</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span>Confidential Data</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span>Professional Contracts</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span>Post-Delivery Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
