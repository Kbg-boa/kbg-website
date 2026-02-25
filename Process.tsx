import { MessageSquare, FileText, Rocket, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Discussion & Brief",
    icon: MessageSquare,
    description: "We discuss your project, goals, vision and expectations. I ask the right questions to understand everything.",
    duration: "30-60 min",
    color: "from-blue-500 to-cyan-500"
  },
  {
    number: "02",
    title: "Proposal & Quote",
    icon: FileText,
    description: "I send you a detailed proposal with action plan, precise deadlines, and transparent pricing. You validate and we sign.",
    duration: "24-48h",
    color: "from-purple-500 to-pink-500"
  },
  {
    number: "03",
    title: "Production & Creation",
    icon: Rocket,
    description: "I get to work! You receive regular updates and a first draft for feedback. Constant communication throughout.",
    duration: "Per package",
    color: "from-orange-500 to-red-500"
  },
  {
    number: "04",
    title: "Revisions & Delivery",
    icon: CheckCircle,
    description: "We adjust based on your feedback (revisions included). Once perfect, I deliver all final files. Post-delivery support included!",
    duration: "2-5 days",
    color: "from-green-500 to-emerald-500"
  }
];

export function Process() {
  return (
    <section id="process" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            How I Work
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A simple, transparent and efficient 4-step process. From idea to realization, I support you every step of the way.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-orange-500 to-green-500 opacity-20 -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -right-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-xl`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-lg px-3 py-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-sm text-slate-300 font-medium">{step.duration}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8 max-w-3xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-slate-400 mb-6">
              The process is simple and fast. Contact me now for a free consultation and personalized quote within 24h!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/971523711530"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-green-500/50"
              >
                💬 Free Consultation
              </a>
              <a
                href="mailto:amouripatrickdiego@gmail.com"
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 border border-slate-700"
              >
                ✉️ Request a Quote
              </a>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 text-center">
            <div className="text-3xl mb-2">⚡</div>
            <p className="text-white font-bold mb-1">Fast Response</p>
            <p className="text-sm text-slate-400">I respond in less than 2h during business hours</p>
          </div>
          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 text-center">
            <div className="text-3xl mb-2">🔒</div>
            <p className="text-white font-bold mb-1">100% Secure</p>
            <p className="text-sm text-slate-400">Your information and files are confidential</p>
          </div>
          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 text-center">
            <div className="text-3xl mb-2">✅</div>
            <p className="text-white font-bold mb-1">Satisfaction Guaranteed</p>
            <p className="text-sm text-slate-400">I work until you're 100% satisfied</p>
          </div>
        </div>
      </div>
    </section>
  );
}
