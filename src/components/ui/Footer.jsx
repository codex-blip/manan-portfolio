import { motion } from 'framer-motion'
import { FiHeart, FiArrowUp } from 'react-icons/fi'
import { personalInfo } from '../../data/portfolio'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="container-max">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-heading">
              <span className="gradient-text">Manan Kumar</span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Aspiring Full-Stack Developer passionate about creating innovative web solutions 
              and contributing to the tech community.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Achievements', href: '#achievements' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.href)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  whileHover={{ x: 5 }}
                  className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">
                <span className="font-medium">Email:</span>{' '}
                <a
                  href={personalInfo.social.email}
                  className="hover:text-accent transition-colors"
                >
                  {personalInfo.email}
                </a>
              </p>
              <p className="text-gray-300">
                <span className="font-medium">Location:</span> {personalInfo.location}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>© {currentYear} Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-red-500"
              >
                <FiHeart size={16} fill="currentColor" />
              </motion.div>
              <span>by {personalInfo.name}</span>
            </div>

            {/* Tech Stack */}
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Built with</span>
              <span className="text-accent font-medium">React</span>
              <span>&</span>
              <span className="text-accent font-medium">Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-3 bg-accent text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FiArrowUp size={20} />
      </motion.button>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-accent via-purple-600 to-pink-600" />
      </div>
    </footer>
  )
}

export default Footer
