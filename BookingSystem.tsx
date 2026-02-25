import { Calendar, Clock, Video, Phone, MessageSquare, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const consultationTypes = [
  {
    icon: Video,
    title: "Video Call Consultation",
    duration: "30 minutes",
    price: "FREE",
    description: "Perfect for discussing your project needs and getting a personalized quote",
    popular: true
  },
  {
    icon: Phone,
    title: "Phone Consultation",
    duration: "15 minutes",
    price: "FREE",
    description: "Quick call to answer your questions and explore how I can help"
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Consultation",
    duration: "Flexible",
    price: "FREE",
    description: "Chat via WhatsApp at your convenience - perfect for quick questions"
  }
];

export function BookingSystem() {
  const [selectedType, setSelectedType] = useState(0);

  // In production, replace with your actual Calendly link
  const calendlyLink = "https://calendly.com/your-link";
  const whatsappLink = "https://wa.me/971523711530?text=Hi! I'd like to book a consultation about my project.";

  const handleBooking = () => {
    if (selectedType === 2) {
      // WhatsApp consultation
      window.open(whatsappLink, '_blank');
    } else {
      // Video or Phone consultation - would open Calendly
      alert("🎯 SETUP NEEDED: Add your Calendly link in BookingSystem.tsx\n\nFor now, contact via WhatsApp or Email!");
      window.open(whatsappLink, '_blank');
    }
  };

  return (
    <section id="booking" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Urgency Banner */}
        <div className="mb-12 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/50 rounded-xl p-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="animate-pulse text-2xl">🔥</span>
            <p className="text-white font-bold text-xl">LIMITED AVAILABILITY!</p>
            <span className="animate-pulse text-2xl">🔥</span>
          </div>
          <p className="text-orange-300 text-lg">
            Only <span className="text-red-400 font-bold text-2xl">3 SLOTS LEFT</span> this month! Book your free consultation NOW before they're gone!
          </p>
          <div className="mt-3 flex items-center justify-center gap-2 text-yellow-300">
            <Clock className="w-5 h-5 animate-pulse" />
            <span className="font-semibold">⏰ Special offer ends February 28, 2026</span>
          </div>
        </div>

        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-4">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Book Your FREE Consultation
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Let's discuss your project! Choose your preferred consultation method and book a time that works for you.
          </p>
        </div>

        {/* Consultation Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {consultationTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <div
                key={index}
                onClick={() => setSelectedType(index)}
                className={`relative cursor-pointer bg-slate-900 border rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                  selectedType === index
                    ? 'border-purple-500 shadow-2xl shadow-purple-500/30'
                    : 'border-slate-700 hover:border-purple-500/50'
                }`}
              >
                {type.popular && (
                  <div className="absolute -top-3 right-4">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                      ⭐ MOST POPULAR
                    </span>
                  </div>
                )}

                {selectedType === index && (
                  <div className="absolute top-4 right-4">
                    <CheckCircle className="w-6 h-6 text-green-400" fill="currentColor" />
                  </div>
                )}

                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{type.title}</h3>
                
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{type.duration}</span>
                  </div>
                  <div className="text-green-400 font-bold">{type.price}</div>
                </div>

                <p className="text-slate-400 text-sm">{type.description}</p>
              </div>
            );
          })}
        </div>

        {/* Booking Button */}
        <div className="text-center mb-12">
          <button
            onClick={handleBooking}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-purple-500/50"
          >
            <Calendar className="w-6 h-6" />
            Book My FREE Consultation Now
          </button>
          <p className="text-slate-400 text-sm mt-4">
            💯 No commitment required • 🔒 100% confidential • ⚡ Get response within 24h
          </p>
        </div>

        {/* Scarcity Timer */}
        <div className="bg-slate-900 border border-amber-500/30 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-500 mb-2">3</div>
              <p className="text-slate-400">Slots Remaining</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-500 mb-2">24h</div>
              <p className="text-slate-400">Average Response Time</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-500 mb-2">20%</div>
              <p className="text-slate-400">Book Now Discount</p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-700">
            <p className="text-center text-white font-semibold mb-2">
              🎁 BONUS: Book today and get 20% OFF your first project!
            </p>
            <p className="text-center text-slate-400 text-sm">
              Offer valid until February 28, 2026 • Limited to first 3 bookings
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 text-center">
            <div className="text-3xl mb-2">⚡</div>
            <p className="text-white font-semibold text-sm">Fast Response</p>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 text-center">
            <div className="text-3xl mb-2">🎯</div>
            <p className="text-white font-semibold text-sm">Free Consultation</p>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 text-center">
            <div className="text-3xl mb-2">💎</div>
            <p className="text-white font-semibold text-sm">Expert Advice</p>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 text-center">
            <div className="text-3xl mb-2">🔒</div>
            <p className="text-white font-semibold text-sm">100% Confidential</p>
          </div>
        </div>
      </div>
    </section>
  );
}
