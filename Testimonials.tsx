import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Al-Mansoori",
    role: "CEO, Luxury Properties Dubai",
    image: "real estate client",
    rating: 5,
    text: "Excellent broker! He helped me sell my property in Downtown Dubai in just 3 weeks. Very professional and responsive.",
    project: "Real Estate Deal - $2.5M"
  },
  {
    name: "Marcus Johnson",
    role: "Founder, TechStart Inc",
    image: "tech entrepreneur",
    rating: 5,
    text: "The promotional video he created for our startup was absolutely incredible. The motion design and storytelling were top-notch. Highly recommended!",
    project: "Company Video Production"
  },
  {
    name: "Fatima Osman",
    role: "Fashion Brand Owner",
    image: "fashion entrepreneur woman",
    rating: 5,
    text: "His photos and videos transformed our Instagram presence. Our engagement increased by 300% in 2 months! A true creative professional.",
    project: "Brand Photography & Content"
  },
  {
    name: "David Chen",
    role: "Music Producer",
    image: "music producer studio",
    rating: 5,
    text: "Working with KBG BOA was amazing. He directed and produced our music video with incredible energy and vision. The final result exceeded all expectations!",
    project: "Music Video - 'Summer Nights'"
  },
  {
    name: "Amina Kabongo",
    role: "Restaurant Owner, Kinshasa",
    image: "restaurant owner african",
    rating: 5,
    text: "He created the complete visual identity for my restaurant - logo, menu, photos. The result is beautiful and our customers love it! Thank you so much.",
    project: "Complete Brand Identity"
  },
  {
    name: "James Wilson",
    role: "Real Estate Investor",
    image: "businessman investor",
    rating: 5,
    text: "I've worked with many brokers in Dubai, but his market knowledge and negotiation skills are exceptional. Closed 3 deals together - all successful.",
    project: "Investment Properties Portfolio"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            What My Clients Say
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Client satisfaction is my priority. Here are some testimonials from people I've had the pleasure of working with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <Quote className="w-8 h-8 text-purple-500 opacity-50" />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <p className="text-slate-300 mb-6 italic">"{testimonial.text}"</p>

              <div className="border-t border-slate-700 pt-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-xs text-purple-400 font-medium">
                  📁 {testimonial.project}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl px-8 py-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">50+</p>
              <p className="text-sm text-slate-400">Happy Clients</p>
            </div>
            <div className="w-px h-12 bg-slate-700"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">100+</p>
              <p className="text-sm text-slate-400">Projects Completed</p>
            </div>
            <div className="w-px h-12 bg-slate-700"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">5.0</p>
              <p className="text-sm text-slate-400">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
