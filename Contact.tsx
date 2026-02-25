import { Mail, Phone, MapPin, Linkedin, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: ''
  });

  const whatsappNumber = "+971523711530";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hi Kabangu! I want to discuss a project.")}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:kbgmathieu@gmail.com?subject=New Project Inquiry - ${formData.budget}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nProject Budget: ${formData.budget}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-4">
            <span className="text-green-400 text-sm font-semibold">💬 LET'S TALK</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Build Your <span className="text-amber-500">Visual Empire?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Let's discuss how I can help grow your brand with <span className="text-white font-semibold">measurable results</span>.
          </p>
          <p className="text-slate-400">
            Projects start at <span className="text-amber-500 font-bold text-xl">$1,000</span> • Response within <span className="text-green-400 font-semibold">24 hours</span>
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl p-6 text-center transition-all hover:scale-105 shadow-xl group"
          >
            <MessageCircle className="w-10 h-10 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">WhatsApp Me</h3>
            <p className="text-sm text-green-100">Fastest response</p>
            <div className="mt-3 text-xs bg-white/20 rounded-full px-3 py-1 inline-block">
              ⚡ Instant Reply
            </div>
          </a>

          <a
            href="tel:+971523711530"
            className="bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl p-6 text-center transition-all hover:scale-105 shadow-xl"
          >
            <Phone className="w-10 h-10 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">Call Me (Dubai)</h3>
            <p className="text-sm text-blue-100">+971 52 371 1530</p>
            <div className="mt-3 text-xs bg-white/20 rounded-full px-3 py-1 inline-block">
              📞 Direct Line
            </div>
          </a>

          <a
            href="mailto:kbgmathieu@gmail.com"
            className="bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-xl p-6 text-center transition-all hover:scale-105 shadow-xl"
          >
            <Mail className="w-10 h-10 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">Email Me</h3>
            <p className="text-sm text-purple-100">kbgmathieu@gmail.com</p>
            <div className="mt-3 text-xs bg-white/20 rounded-full px-3 py-1 inline-block">
              📧 Detailed Inquiries
            </div>
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form - SIMPLIFIED */}
          <div>
            <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl p-6 mb-6">
              <p className="text-white font-semibold text-center">
                🚀 <span className="text-amber-400">Book a FREE 15-min strategy call</span> — I'll show you exactly how to achieve your goals.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-slate-900 p-8 rounded-xl border border-amber-500/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Contact Form</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-amber-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-amber-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold text-white mb-2">
                    Project Budget *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-amber-500/20 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="">Select your budget range</option>
                    <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                    <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000+">$10,000+ (Enterprise)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                    Tell Me About Your Project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800 border border-amber-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    placeholder="What results do you want to achieve?"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 rounded-xl font-bold transition-all hover:scale-105 shadow-xl text-lg"
              >
                Send My Message
                <Mail className="ml-2" size={20} />
              </button>

              <p className="text-slate-400 text-xs text-center mt-4">
                ⚡ I typically respond within 24 hours • 100% confidential
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-slate-900 p-8 rounded-xl border border-amber-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <a
                  href="tel:+971523711530"
                  className="flex items-start space-x-3 text-gray-300 hover:text-amber-500 transition-colors group"
                >
                  <Phone className="text-amber-500 group-hover:scale-110 transition-transform flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-white text-sm mb-1">📱 Dubai (WhatsApp)</div>
                    <div className="text-sm">+971 52 371 1530</div>
                  </div>
                </a>

                <a
                  href="tel:+243812119488"
                  className="flex items-start space-x-3 text-gray-300 hover:text-amber-500 transition-colors group"
                >
                  <Phone className="text-amber-500 group-hover:scale-110 transition-transform flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-white text-sm mb-1">📱 RDC (WhatsApp)</div>
                    <div className="text-sm">+243 81 211 9488</div>
                  </div>
                </a>

                <a
                  href="mailto:kbgmathieu@gmail.com"
                  className="flex items-start space-x-3 text-gray-300 hover:text-amber-500 transition-colors group"
                >
                  <Mail className="text-amber-500 group-hover:scale-110 transition-transform flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-white text-sm mb-1">Email</div>
                    <div className="text-sm">kbgmathieu@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-white text-sm mb-1">Location</div>
                    <div className="text-sm">Business Bay, Dubai, UAE</div>
                  </div>
                </div>

                <a
                  href="https://www.linkedin.com/in/mathieu-kbg-24890838b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-gray-300 hover:text-amber-500 transition-colors group"
                >
                  <Linkedin className="text-amber-500 group-hover:scale-110 transition-transform flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-white text-sm mb-1">LinkedIn</div>
                    <div className="text-sm">Connect with me</div>
                  </div>
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-amber-500/20">
                <h4 className="text-sm font-semibold text-white mb-3">Follow My Work</h4>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.tiktok.com/@mathieukbg1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-slate-800 rounded-lg hover:bg-amber-500 transition-all hover:scale-110 group"
                    title="TikTok"
                  >
                    <svg className="w-5 h-5 text-amber-500 group-hover:text-slate-950" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>

                  <a
                    href="https://www.instagram.com/kbg_boa?igsh=MWdlMHgxN2x4aG8wZw%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-slate-800 rounded-lg hover:bg-amber-500 transition-all hover:scale-110 group"
                    title="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-amber-500 group-hover:text-slate-950" />
                  </a>

                  <a
                    href="https://www.facebook.com/share/1BsMxh3vsP/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-slate-800 rounded-lg hover:bg-amber-500 transition-all hover:scale-110 group"
                    title="Facebook"
                  >
                    <Facebook className="w-5 h-5 text-amber-500 group-hover:text-slate-950" />
                  </a>

                  <a
                    href="https://snapchat.com/t/naNcyhmo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-slate-800 rounded-lg hover:bg-amber-500 transition-all hover:scale-110 group"
                    title="Snapchat"
                  >
                    <svg className="w-5 h-5 text-amber-500 group-hover:text-slate-950" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.206 2.003a7.482 7.482 0 0 0-7.17 6.417c-.124.898.039 1.681.463 2.31.39.576.932.979 1.526 1.13a.376.376 0 0 1 .282.43c-.072.281-.272.492-.496.622-.284.166-.612.252-.946.341-.244.066-.495.133-.728.233-.447.192-.676.508-.663.92.013.403.249.71.682.887.677.277 1.44.437 2.274.477.089.004.177.063.243.129.343.343.72.627 1.165.845.735.36 1.554.536 2.433.523a5.2 5.2 0 0 0 2.433-.523c.445-.218.822-.502 1.165-.845.066-.066.154-.125.243-.129.834-.04 1.597-.2 2.274-.477.433-.177.669-.484.682-.887.013-.412-.216-.728-.663-.92a5.756 5.756 0 0 0-.728-.233 3.255 3.255 0 0 1-.946-.341c-.224-.13-.424-.34-.496-.622a.376.376 0 0 1 .282-.43c.594-.151 1.136-.554 1.526-1.13.424-.629.587-1.412.463-2.31a7.482 7.482 0 0 0-7.17-6.417z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/30">
              <h3 className="text-lg font-bold text-white mb-3">✅ What You Get:</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Free 15-min strategy call
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Custom project quote
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  ROI projection analysis
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  24-hour response guarantee
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-6 rounded-xl border border-amber-500/30 text-center">
              <p className="text-white font-bold text-lg mb-2">
                💎 Projects Start at $1,000
              </p>
              <p className="text-slate-300 text-sm">
                I work with serious brands ready to invest in <span className="text-white font-semibold">measurable growth</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-amber-500/20 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 Kabangu Mathieu. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Built Between Kinshasa & Dubai • I Build Visual Empires
          </p>
        </div>
      </div>
    </section>
  );
}
