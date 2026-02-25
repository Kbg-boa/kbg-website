import { X, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export function EmailCapture() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Show popup after 45 seconds (longer delay - less intrusive)
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('emailPopupSeen');
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 45000); // 45 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In production, integrate with your email service
    // For now, open email client with the captured email
    const subject = "Quick Question from " + email;
    const body = "Hi Kabangu! I'd like to discuss a project opportunity.";
    window.location.href = `mailto:kbgmathieu@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}&reply-to=${email}`;
    
    setIsSubmitted(true);
    sessionStorage.setItem('emailPopupSeen', 'true');
    
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('emailPopupSeen', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[90] flex items-center justify-center p-4">
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-amber-500/50 rounded-2xl max-w-lg w-full shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {!isSubmitted ? (
          <div className="p-8 md:p-10">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center animate-pulse">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-3">
              Ready to Scale Your Brand?
            </h2>
            
            <p className="text-lg text-slate-300 text-center mb-6">
              Get a <span className="text-amber-400 font-semibold">FREE custom strategy</span> for your next project.
            </p>

            <div className="bg-slate-800/50 border border-amber-500/30 rounded-xl p-5 mb-6">
              <p className="text-white font-semibold mb-3 text-center">✅ What happens next:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>I'll send you a <strong className="text-white">custom project roadmap</strong></span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Get <strong className="text-white">exclusive case studies</strong> with real ROI data</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Priority response</strong> within 24 hours</span>
                </li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800 border border-amber-500/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
              
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 px-6 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-xl"
              >
                Get My Free Strategy
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <p className="text-slate-500 text-xs text-center mt-4">
              No spam. Just valuable insights. Unsubscribe anytime.
            </p>
          </div>
        ) : (
          <div className="p-8 md:p-10 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Check Your Email! 📧</h3>
            <p className="text-slate-300">
              I'll send you the strategy roadmap within <span className="text-green-400 font-semibold">24 hours</span>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
