import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const blogPosts = [
  {
    title: "How to Choose the Right Creative Director for Your Brand in 2026",
    excerpt: "Discover the key factors to consider when hiring a creative director who can transform your brand vision into reality and drive real business results.",
    category: "Creative Direction",
    date: "February 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1764690690771-b4522d66b433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRpcmVjdG9yJTIwd29ya2luZyUyMHN0cmF0ZWd5JTIwbWVldGluZ3xlbnwxfHx8fDE3NzE0NjczNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: true
  },
  {
    title: "Dubai Real Estate Market 2026: Investment Opportunities You Can't Miss",
    excerpt: "An insider's look at the hottest property investment opportunities in Dubai's luxury real estate market and why now is the perfect time to invest.",
    category: "Real Estate",
    date: "February 12, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1734456061630-87babdefd904?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMGx1eHVyeSUyMHNreXNjcmFwZXIlMjByZWFsJTIwZXN0YXRlfGVufDF8fHx8MTc3MTQ2NzM2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: true
  },
  {
    title: "The Rise of African Drill Music: KBG BOA's Journey from Kinshasa to Global Stages",
    excerpt: "How African artists are reshaping the drill music scene and bringing authentic Afro-drill sound to international audiences.",
    category: "Music",
    date: "February 10, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1763480847312-7f7e97ac21a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbXVzaWMlMjBhcnRpc3QlMjByZWNvcmRpbmclMjBzdHVkaW98ZW58MXx8fHwxNzcxNDY3MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: true
  },
  {
    title: "5 Video Production Mistakes That Are Costing Your Business Thousands",
    excerpt: "Learn the most common video production errors brands make and how to avoid them to maximize your ROI on video content.",
    category: "Video Production",
    date: "February 8, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1768483548395-0dca1de198f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB2aWRlbyUyMHByb2R1Y3Rpb24lMjBjYW1lcmElMjBmaWxtaW5nfGVufDF8fHx8MTc3MTQ2NzM2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Social Media Content Strategy That Actually Converts in 2026",
    excerpt: "The proven framework I use to create social media content that drives engagement, builds trust, and converts followers into paying customers.",
    category: "Digital Marketing",
    date: "February 5, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1693681866115-29dd5d52c910?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnQlMjBzbWFydHBob25lJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzcxNDY3MzY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Motion Design Trends Taking Over Brand Marketing This Year",
    excerpt: "Explore the cutting-edge motion design techniques that top brands are using to capture attention and stand out in crowded digital spaces.",
    category: "Motion Design",
    date: "February 1, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1676238560626-45d35b63b38f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBncmFwaGljcyUyMGRlc2lnbiUyMGFuaW1hdGlvbnxlbnwxfHx8fDE3NzE0NjczNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "How Much Should You REALLY Invest in Professional Photography?",
    excerpt: "A transparent breakdown of photography pricing and how to determine the right budget for your business needs without overpaying.",
    category: "Photography",
    date: "January 28, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1763089040164-7b6a26ff98da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoeSUyMGNhbWVyYSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzE0NjczNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Building a Personal Brand as a Multidisciplinary Creative: My Story",
    excerpt: "The lessons I learned building multiple income streams as a creative entrepreneur across video, music, real estate, and more.",
    category: "Entrepreneurship",
    date: "January 25, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1758876021212-a87517fc8954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXIlMjBjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGxhcHRvcHxlbnwxfHx8fDE3NzE0NjczNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "The Ultimate Guide to Music Video Production on Any Budget",
    excerpt: "From concept to final edit - everything you need to know about producing professional music videos whether you have $500 or $50,000.",
    category: "Music Production",
    date: "January 20, 2026",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1576948610124-18530bb99c39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHZpZGVvJTIwcHJvZHVjdGlvbiUyMGZpbG0lMjBzZXR8ZW58MXx8fHwxNzcxNDY3MzY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

const categories = [
  "All Posts",
  "Creative Direction",
  "Real Estate", 
  "Music",
  "Video Production",
  "Digital Marketing",
  "Photography",
  "Entrepreneurship"
];

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Blog & Insights
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Expert tips, industry insights, and behind-the-scenes stories from my creative journey across multiple disciplines.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                index === 0
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-amber-500">⭐</span> Featured Posts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <article
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <button className="inline-flex items-center gap-2 text-purple-400 font-semibold text-sm hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">All Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-48 h-48 sm:h-auto overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6 flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Tag className="w-4 h-4 text-purple-400" />
                      <span className="text-purple-400 text-sm font-semibold">{post.category}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-slate-400">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <button className="text-purple-400 text-sm font-semibold hover:underline">
                        Read →
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            📰 Never Miss a Post!
          </h3>
          <p className="text-slate-400 mb-6">
            Subscribe to get exclusive tips, industry insights, and special offers delivered to your inbox weekly.
          </p>
          <form className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Subscribe
            </button>
          </form>
          <p className="text-slate-500 text-sm mt-3">
            🎁 Get a FREE Price Guide when you subscribe!
          </p>
        </div>
      </div>
    </section>
  );
}
