import { X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function StrategicPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user already dismissed it in this session
    const dismissed = sessionStorage.getItem('popupDismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Show popup after 10 seconds of page view
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('popupDismissed', 'true');
  };

  const handleCTA = () => {
    handleClose();
    // WhatsApp link will be followed from the anchor tag
  };

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-slate-900 border-2 border-amber-500 rounded-2xl max-w-2xl w-full shadow-2xl relative animate-slideUp">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="p-8 md:p-12 text-center">
          <div className="text-6xl mb-4">🎯</div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Wait! Before You Leave...
          </h2>
          
          <p className="text-xl text-amber-400 font-semibold mb-6">
            Get a FREE 15-Minute Strategy Call
          </p>

          <div className="bg-slate-800/50 border border-amber-500/30 rounded-xl p-6 mb-6">
            <p className="text-white text-lg mb-4">
              I'll show you exactly how to:
            </p>
            <ul className="text-slate-300 space-y-2 text-left max-w-md mx-auto">
              <li className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Get <span className="text-white font-semibold">300%+ ROI</span> on your creative investment</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Build a <span className="text-white font-semibold">high-impact visual identity</span></span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Get a <span className="text-white font-semibold">custom project roadmap</span></span>
              </li>
            </ul>
          </div>

          <a
            href="https://wa.me/971523711530?text=Hi%20Kabangu!%20I%20want%20my%20FREE%2015-min%20strategy%20call!"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCTA}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-2xl mb-4"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Book My FREE Call Now
          </a>

          <p className="text-slate-400 text-sm">
            ⚡ Limited to <span className="text-amber-500 font-semibold">3 spots this month</span> • No commitment required
          </p>

          <button
            onClick={handleClose}
            className="text-slate-500 hover:text-slate-400 text-sm mt-4 underline"
          >
            No thanks, I'll explore the site first
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
