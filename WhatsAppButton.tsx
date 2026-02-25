import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function WhatsAppButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const whatsappNumber = "+971523711530"; // Dubai number
  const message = "Hi Kabangu! I want to discuss a high-impact project with you.";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Main WhatsApp Button - LARGER & MORE VISIBLE */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group flex items-center"
        style={{
          padding: isExpanded ? '16px 24px 16px 16px' : '16px',
        }}
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-8 h-8 animate-pulse" />
        <span 
          className="ml-3 font-bold text-lg whitespace-nowrap overflow-hidden transition-all duration-300"
          style={{
            width: isExpanded ? '180px' : '0px',
            opacity: isExpanded ? 1 : 0,
          }}
        >
          Message Me Now
        </span>
        
        {/* Notification Badge */}
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
          1
        </span>
      </a>

      {/* Mobile-Optimized Alternative - Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-green-500 to-green-600 p-4 shadow-2xl border-t-4 border-green-400">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 text-white font-bold text-lg"
        >
          <MessageCircle className="w-6 h-6 animate-pulse" />
          <span>WhatsApp Me — Get Response in 24h</span>
        </a>
      </div>
    </>
  );
}
