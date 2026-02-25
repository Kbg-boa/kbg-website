import { MessageCircle, X, Send, User } from 'lucide-react';
import { useState } from 'react';

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "👋 Hi! I'm here to help! How can I assist you today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickReplies = [
    "💰 What are your prices?",
    "📅 Book a consultation",
    "📧 Send me an email",
    "💬 Chat on WhatsApp"
  ];

  const handleSendMessage = (message?: string) => {
    const messageText = message || inputMessage.trim();
    if (!messageText) return;

    // Add user message
    const newMessage = {
      type: 'user',
      text: messageText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([...messages, newMessage]);
    setInputMessage('');

    // Auto-reply based on message
    setTimeout(() => {
      let botReply = '';
      
      if (messageText.toLowerCase().includes('price') || messageText.includes('💰')) {
        botReply = "Great! Check out my Pricing section above for detailed packages. Or download the FREE Price Guide for complete details! 📄";
      } else if (messageText.toLowerCase().includes('book') || messageText.toLowerCase().includes('consultation') || messageText.includes('📅')) {
        botReply = "Perfect! Click the 'Book My FREE Consultation' button in the Booking section above! 📅 Or contact me directly via WhatsApp: +971 52 371 1530";
      } else if (messageText.toLowerCase().includes('email') || messageText.includes('📧')) {
        botReply = "Email me at: kbgmathieu@gmail.com - I typically respond within 24 hours! ✉️";
      } else if (messageText.toLowerCase().includes('whatsapp') || messageText.includes('💬')) {
        botReply = "Let's chat on WhatsApp! Click here: wa.me/971523711530 💬";
      } else {
        botReply = "Thanks for your message! For the fastest response, please:\n\n✉️ Email: kbgmathieu@gmail.com\n💬 WhatsApp: +971 52 371 1530\n📅 Or book a FREE consultation above!\n\nI'll get back to you within 24 hours! 🚀";
      }

      const botMessage = {
        type: 'bot',
        text: botReply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-24 right-6 z-50 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 ${
          isOpen ? 'rotate-0' : ''
        }`}
        aria-label="Open Live Chat"
      >
        {isOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <MessageCircle className="w-7 h-7" />
        )}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-950 animate-pulse"></span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-40 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[500px] bg-slate-900 border border-purple-500/50 rounded-2xl shadow-2xl shadow-purple-500/20 flex flex-col animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-t-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-2xl">
              👨‍💼
            </div>
            <div className="flex-1">
              <p className="text-white font-bold">Kabangu Mathieu</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <p className="text-white/90 text-sm">Online • Replies within 24h</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-slate-800 text-slate-200'
                  } rounded-2xl px-4 py-3`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.type === 'user' ? 'text-white/70' : 'text-slate-400'}`}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          {messages.length <= 2 && (
            <div className="px-4 pb-2">
              <p className="text-slate-400 text-xs mb-2">Quick actions:</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(reply)}
                    className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-2 rounded-lg transition-colors border border-slate-700 hover:border-purple-500"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-4 border-t border-slate-800"
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 text-sm"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-2 rounded-lg transition-all hover:scale-105"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-slate-500 text-xs mt-2 text-center">
              💬 For instant replies, chat on <a href="https://wa.me/971523711530" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">WhatsApp</a>
            </p>
          </form>
        </div>
      )}
    </>
  );
}
