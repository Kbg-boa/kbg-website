import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink } from 'lucide-react';

export function Portfolio() {
  const projects = [
    {
      title: 'KBG BOA - Drill Music & Beat Production',
      category: 'Music Production',
      image: 'https://images.unsplash.com/photo-1653361953232-cd154e54beff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y2VyJTIwYmVhdHMlMjBtaXhpbmclMjBzdHVkaW98ZW58MXx8fHwxNzcxNDUzMDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Original drill beats and music production as KBG BOA bringing African sound to global audience'
    },
    {
      title: 'Music Video Production',
      category: 'Video Production',
      image: 'https://images.unsplash.com/photo-1576714645198-7eebf227a483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHZpZGVvJTIwcHJvZHVjdGlvbiUyMGZpbG1pbmclMjBzZXR8ZW58MXx8fHwxNzcxNDU0MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'High-quality music video production for local and international artists'
    },
    {
      title: 'KBG BOA - Artist Development & Recording',
      category: 'Music Production',
      image: 'https://images.unsplash.com/photo-1617469859390-a3a579d11041?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y3Rpb24lMjBzdHVkaW8lMjByZWNvcmRpbmclMjBhcnRpc3R8ZW58MXx8fHwxNzcxNDUyOTMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Empowering local artists through MU3IC de la Rue record label founded by KBG BOA'
    },
    {
      title: 'Brand Identity & Logo Design',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1616205255812-c07c8102cc02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwbG9nbyUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NzE0NTQwNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Complete brand identity systems for startups and established businesses'
    },
    {
      title: 'Luxury Real Estate Portfolio - Dubai',
      category: 'Real Estate',
      image: 'https://images.unsplash.com/photo-1726003354242-4ff17c3515e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMGx1eHVyeSUyMHJlYWwlMjBlc3RhdGUlMjBwcm9wZXJ0eSUyMHNreXNjcmFwZXJ8ZW58MXx8fHwxNzcxNDUyNjM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Brokerage services for premium properties in Business Bay and Downtown Dubai'
    },
    {
      title: 'Social Media Content Creation',
      category: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1759392155103-730a8c4d71b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnQlMjBjcmVhdGlvbiUyMHBob25lfGVufDF8fHx8MTc3MTQ1NDA0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Engaging content creation for Instagram, TikTok, and other social platforms'
    },
    {
      title: 'Commercial Film Production',
      category: 'Video Production',
      image: 'https://images.unsplash.com/photo-1758390851386-79c99432120e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB2aWRlbyUyMHByb2R1Y3Rpb24lMjBjYW1lcmElMjBmaWxtbWFraW5nfGVufDF8fHx8MTc3MTQ1MjM4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'High-end commercial production for international brands'
    },
    {
      title: 'Documentary Film Production',
      category: 'Video Production',
      image: 'https://images.unsplash.com/photo-1632670467494-c7c6de897290?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudGFyeSUyMGZpbG0lMjBwcm9kdWN0aW9uJTIwY2FtZXJhfGVufDF8fHx8MTc3MTQ1NDA0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Compelling documentary storytelling capturing real stories and cultures'
    },
    {
      title: 'Advertising Campaigns',
      category: 'Creative Direction',
      image: 'https://images.unsplash.com/photo-1764429612824-76b4a677556a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlcnRpc2luZyUyMGNhbXBhaWduJTIwYmlsbGJvYXJkJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzcxNDU0MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Strategic advertising campaigns that drive results and brand awareness'
    },
    {
      title: 'Corporate Event Photography',
      category: 'Photography',
      image: 'https://images.unsplash.com/photo-1705544363562-cdf94dd458cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHBob3RvZ3JhcGh5JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzcxNDU0MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Professional coverage of corporate events, conferences, and business functions'
    },
    {
      title: 'Luxury Product Photography',
      category: 'Photography',
      image: 'https://images.unsplash.com/photo-1741288070480-914dfbc642e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9kdWN0JTIwcGhvdG9ncmFwaHklMjB3YXRjaCUyMGpld2Vscnl8ZW58MXx8fHwxNzcxNDU0MDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'High-end product photography for e-commerce and luxury brands'
    },
    {
      title: 'Motion Graphics & VFX',
      category: 'Motion Design',
      image: 'https://images.unsplash.com/photo-1769149068959-b11392164add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBncmFwaGljcyUyMGRlc2lnbiUyMGNvbXB1dGVyJTIwc2NyZWVufGVufDF8fHx8MTc3MTQ1MjM4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Dynamic motion graphics for digital platforms and broadcast'
    },
    {
      title: 'Website Design & Development',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1709455560403-79f98f108594?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwZGV2ZWxvcG1lbnQlMjBsYXB0b3AlMjBzY3JlZW58ZW58MXx8fHwxNzcxNDU0MDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Modern, responsive websites that convert visitors into customers'
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-amber-500">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of creative projects showcasing expertise across multiple disciplines
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-slate-900 border border-amber-500/20 hover:border-amber-500/50 transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="inline-block px-3 py-1 bg-amber-500 text-slate-950 text-xs font-semibold rounded-full mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
                <button className="mt-4 inline-flex items-center text-amber-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Project
                  <ExternalLink className="ml-2" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Interested in seeing more of my work or discussing a project?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-amber-500 text-slate-950 rounded-lg hover:bg-amber-400 transition-all hover:scale-105"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
