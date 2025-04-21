const Skills = () => {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: ["Python", "C++", "HTML5", "CSS", "JavaScript"],
    },
    {
      name: "Data Science & ML",
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "scikit-learn", "TensorFlow", "PyTorch", "Keras", "OpenCV"],
    },
    {
      name: "Large Language Models",
      skills: ["LLaMA", "Claude", "GPT-4", "OpenAI API", "Hugging Face Transformers"],
    },
    {
      name: "Design & Development Tools",
      skills: ["VS Code", "Cursor", "Android Studio", "Anaconda", "Jupyter Notebook", "Figma", "Canva"],
    },
    {
      name: "Technologies & Frameworks",
      skills: ["GitHub", "WordPress", "Elementor", "Flask", "Django", "Streamlit", "Gradio"],
    },
    {
      name: "LLMs & Conversational Agents",
      skills: [
        "Integration & optimization of large language models",
        "Prompt engineering & multi-turn dialogue design",
        "Natural language understanding & contextual awareness",
        "Voice assistant integration & chatbot automation",
      ],
    },
    {
      name: "Generative AI & Fine-Tuning",
      skills: [
        "Generative AI applications",
        "Fine-tuning techniques for custom solutions",
        "Retrieval-Augmented Generation (RAG)",
        "Model training, domain adaptation & performance evaluation",
      ],
    },
    {
      name: "Technical Writing",
      skills: [
        "In-depth articles on Data Science",
        "Machine Learning model explanations",
        "Generative AI tutorials",
        "Code-based walkthroughs",
        "SEO-optimized blog writing",
      ],
    },
    {
      name: "Soft Skills",
      skills: [
        "Communication",
        "Leadership",
        "Teamwork",
        "Adaptability",
        "Problem-Solving",
        "Time Management",
        "Creativity",
      ],
    },
  ]

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-900">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-blue-300 opacity-0 group-hover:opacity-75 transition-opacity duration-300 blur-xl rounded-3xl"></div>
              <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-lg relative z-10 transition-all duration-300 group-hover:shadow-2xl">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900">{category.name}</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
