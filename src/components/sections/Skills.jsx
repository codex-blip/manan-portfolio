import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills } from '../../data/portfolio'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const getLevelColor = (level) => {
    switch (level) {
      case 'Advanced':
        return 'bg-green-500'
      case 'Intermediate':
        return 'bg-yellow-500'
      case 'Learning':
        return 'bg-blue-500'
      default:
        return 'bg-gray-500'
    }
  }

  const getLevelWidth = (level) => {
    switch (level) {
      case 'Advanced':
        return '90%'
      case 'Intermediate':
        return '70%'
      case 'Learning':
        return '40%'
      default:
        return '50%'
    }
  }

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-6">
            <span className="text-gray-900 dark:text-white">My</span> <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of technologies and frameworks I've mastered 
            through projects, coursework, and continuous learning.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md card-hover border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-2xl flex-shrink-0">{skill.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {skill.name}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded-full text-white ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: getLevelWidth(skill.level) } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className={`h-2 rounded-full ${getLevelColor(skill.level)}`}
                  />
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-purple-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Skill Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg">
            <div className="text-3xl mb-4">💻</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              React, JavaScript, HTML5, CSS3, Tailwind CSS
            </p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg">
            <div className="text-3xl mb-4">⚙️</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Backend</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Python, Django, Node.js, Next.js, MySQL
            </p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg">
            <div className="text-3xl mb-4">🛠️</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tools</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Git, VS Code, DataGrip
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
