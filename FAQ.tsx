import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Timelines vary by service: Logo/Design (3-5 days), Photography (2-3 days after session), Music Video (1-2 weeks), Motion Design (5-7 days). For urgent projects, I offer express service with an additional fee."
  },
  {
    question: "Do you work remotely or only locally?",
    answer: "I work both locally (Dubai/DRC) AND remotely with clients worldwide! Most of my services (design, editing, motion) can be done 100% online. For photo/video shoots, I travel within Dubai or we can arrange based on your location."
  },
  {
    question: "What payment methods do you accept?",
    answer: "I accept: International bank transfer, PayPal, Wise, Western Union, Mobile Money (Africa), and Crypto (BTC/USDT). For large projects: 50% deposit to start, 50% upon final delivery."
  },
  {
    question: "How many revisions are included?",
    answer: "Starter Package: 2 revisions | Pro Package: 5 revisions | Premium Package: unlimited revisions. One revision = modifications to the existing project. A complete concept change counts as a new project."
  },
  {
    question: "What happens if I'm not satisfied with the result?",
    answer: "Your satisfaction is my absolute priority! If the result doesn't match the initial brief, I'll continue revisions until you're satisfied. If the project really doesn't work out, I offer partial or full refund depending on the situation."
  },
  {
    question: "Can I see examples of your work before ordering?",
    answer: "Absolutely! Check out my Portfolio section above with 13 diverse projects. I can also send you specific examples based on your area of interest. Don't hesitate to contact me to see more work."
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes! I offer a free 15-30 minute consultation to discuss your project, understand your needs, and propose the best solution. Contact me via WhatsApp or email to schedule a call."
  },
  {
    question: "Do you work with formal contracts?",
    answer: "Yes, for all projects >$500, I provide a simple contract detailing: project scope, timelines, pricing, included revisions, and usage rights. This protects both parties and ensures clear collaboration."
  },
  {
    question: "How does your real estate brokerage service work?",
    answer: "For Dubai real estate: I help you find/sell properties, manage negotiations and paperwork. Standard commission: 2% (buyer) or 2% (seller). I have access to an extensive network and 5 months intensive experience in Dubai's market."
  },
  {
    question: "Do you offer monthly packages for social media?",
    answer: "Yes! Monthly packages available for regular content creation: Basic ($800/month - 8 posts), Standard ($1,500/month - 20 posts + stories), Premium ($3,000/month - unlimited content + full management). Perfect for brands wanting consistent presence."
  },
  {
    question: "Do you keep rights to the creations or can I use them freely?",
    answer: "Once full payment is received, you get complete commercial usage rights for your project. I keep the right to use the work in my portfolio. For complete exclusive rights (I can't show the project), a 30% surcharge applies."
  },
  {
    question: "Can I hire you for a full-time position?",
    answer: "I'm open to long-term collaborations and full-time freelance positions! For companies interested in my services on a permanent basis, contact me to discuss a customized monthly or annual arrangement."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-4">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions (FAQ)
          </h2>
          <p className="text-xl text-slate-400">
            All the answers to your questions. Need more info? Contact me!
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-800/80 transition-colors duration-200"
              >
                <span className="text-white font-semibold pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-purple-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-slate-300 leading-relaxed border-t border-slate-700 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-8">
          <p className="text-white text-lg font-semibold mb-2">
            Can't find the answer to your question?
          </p>
          <p className="text-slate-400 mb-4">
            Contact me directly and I'll respond within 24 hours!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/971523711530"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              💬 WhatsApp
            </a>
            <a
              href="mailto:amouripatrickdiego@gmail.com"
              className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              ✉️ Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
