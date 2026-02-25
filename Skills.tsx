export function Skills() {
  const skillCategories = [
    {
      title: 'Music Production & Audio',
      skills: [
        { name: 'FL Studio / Ableton Live', level: 95 },
        { name: 'Beat Production & Mixing', level: 93 },
        { name: 'Audio Engineering', level: 90 },
        { name: 'Drill Music Production', level: 95 }
      ]
    },
    {
      title: 'Video & Motion Design',
      skills: [
        { name: 'Adobe After Effects', level: 95 },
        { name: 'Adobe Premiere Pro', level: 98 },
        { name: 'DaVinci Resolve', level: 90 },
        { name: 'Final Cut Pro', level: 85 }
      ]
    },
    {
      title: 'Graphic & Visual Design',
      skills: [
        { name: 'Adobe Photoshop', level: 95 },
        { name: 'Adobe Illustrator', level: 90 },
        { name: 'Canva', level: 92 },
        { name: 'Figma', level: 88 }
      ]
    },
    {
      title: 'Photography & Retouching',
      skills: [
        { name: 'Adobe Lightroom', level: 93 },
        { name: 'Capture One', level: 87 },
        { name: 'Professional Photography', level: 95 }
      ]
    },
    {
      title: 'IT & Productivity Tools',
      skills: [
        { name: 'Microsoft Office Suite', level: 90 },
        { name: 'Google Workspace', level: 92 },
        { name: 'WordPress / WIX', level: 85 },
        { name: 'Social Media Management Tools', level: 88 }
      ]
    }
  ];

  const softSkills = [
    'Creative Direction',
    'Music Production',
    'Artist Development',
    'Project Management',
    'Team Leadership',
    'Client Relations',
    'Strategic Planning',
    'Brand Development',
    'Content Strategy',
    'Cross-cultural Communication',
    'Budget Management',
    'Problem Solving'
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-amber-500">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technical proficiency and creative expertise across multiple platforms
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-900/50 p-8 rounded-xl border border-amber-500/20"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-amber-500 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-amber-500 to-amber-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900/50 p-8 rounded-xl border border-amber-500/20">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Professional Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-800 text-gray-300 rounded-full border border-amber-500/30 hover:border-amber-500 hover:text-amber-500 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 p-6 rounded-xl border border-amber-500/30 text-center">
            <div className="text-4xl font-bold text-amber-500 mb-2">10+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 p-6 rounded-xl border border-amber-500/30 text-center">
            <div className="text-4xl font-bold text-amber-500 mb-2">500+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 p-6 rounded-xl border border-amber-500/30 text-center">
            <div className="text-4xl font-bold text-amber-500 mb-2">100+</div>
            <div className="text-gray-300">Satisfied Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
}
