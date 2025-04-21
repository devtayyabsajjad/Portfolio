const Experience = () => {
  const experiences = [
    {
      title: "Trainer & Moderator",
      company: "iCodeGuru",
      date: "November 2024 – Present",
      description: [
        "Delivered advanced Python programming sessions to over 40 students per session",
        "Conducted workshops on 'How to Start Your Data Science Journey' to guide students in entering the field",
        "Mentored students and provided personalized guidance to help them start their hackathon journeys",
        "Developed and delivered comprehensive course materials, ensuring high-quality learning experiences",
        "Created a supportive learning environment, helping to build a strong community of learners",
      ],
    },
    {
      title: "Technical Writer & Blogger",
      company: "Medium & Personal Blogging Website",
      date: "2022 – Present",
      description: [
        "Write in-depth articles on Data Science, Machine Learning models, and Generative AI",
        "Authored and published 50+ SEO-optimized blogs, attracting substantial organic traffic",
        "Blogs and articles are ranked on search engines for competitive keywords",
        "Maintain a regular publishing cadence to share tutorials, insights, and code-based walkthroughs",
      ],
    },
    {
      title: "International Hackathon Champion",
      company: "Various Platforms (lablabai, devpost)",
      date: "2024 – 2025",
      description: [
        "Led the 'Dr. Well' project to 1st Place nationally and 2nd Place globally",
        "Secured 1st place with the 'Period Care' project, solving real problems in menstrual health",
        "Led the team to 2nd place in Wordsprint Hackathon by building a plugin to solve a real-time problem",
        "Got 2nd place for the 'Human to Mars' project, focusing on innovative space exploration ideas",
        "Participated in 10+ international hackathons, gaining valuable experience in innovation",
      ],
    },
  ]

  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-900">Experience</h2>
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-blue-300 opacity-0 group-hover:opacity-75 transition-opacity duration-300 blur-xl rounded-3xl"></div>
              <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-lg relative z-10 transition-all duration-300 group-hover:shadow-2xl">
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-900">{exp.title}</h3>
                <p className="text-blue-500 mb-1 sm:mb-2 text-sm sm:text-base">{exp.company}</p>
                <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">{exp.date}</p>
                <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
