import { Mail, Linkedin, Github, Globe } from "lucide-react"

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-900">Get in Touch</h2>
        <div className="flex flex-col items-center space-y-6">
          <a
            href="mailto:devtayyabsajjad@gmail.com"
            className="flex items-center text-blue-500 hover:text-blue-600 text-sm sm:text-base"
          >
            <Mail size={20} className="mr-2" />
            devtayyabsajjad@gmail.com
          </a>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/devtayyabsajjad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
              title="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/devtayyabsajjad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
              title="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://topmate.io/tayyabsajjad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
              title="Topmate"
            >
              <Globe size={24} />
            </a>
          </div>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg text-center w-full max-w-md">
            <p className="text-gray-700 mb-2 text-sm sm:text-base">Want to schedule a meeting?</p>
            <a
              href="https://topmate.io/tayyabsajjad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 sm:px-6 rounded-full transition-colors text-sm sm:text-base"
            >
              Book a Session on Topmate
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
