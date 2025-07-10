import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { achievements } from '../../data/portfolio'

const Achievements = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  return (
    <section id="achievements" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-6">
            <span className="text-gray-900 dark:text-white">My</span> <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Milestones that reflect my dedication to continuous learning, problem-solving, 
            and contributing to the tech community.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-accent to-purple-600 h-full hidden md:block" />
          
          {/* Achievements */}
          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white dark:border-gray-900 z-10 hidden md:block" />
                
                {/* Achievement Card */}
                <div className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md card-hover border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full ${achievement.color} text-white text-xl shrink-0`}>
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {achievement.title}
                          </h3>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {achievement.date}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                          {achievement.description}
                        </p>
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-medium text-accent">
                            {achievement.stats}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievement Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-yellow-900/20 dark:to-orange-800/20 rounded-lg">
            <div className="text-3xl mb-4">🏆</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Competitions</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Hackathons, programming contests, and technical challenges
            </p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-100 dark:from-green-900/20 dark:to-teal-800/20 rounded-lg">
            <div className="text-3xl mb-4">💻</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Coding</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              LeetCode progress, algorithm mastery, and problem-solving
            </p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-800/20 rounded-lg md:col-span-2 lg:col-span-1">
            <div className="text-3xl mb-4">🌟</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Community</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Open source contributions and knowledge sharing
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-accent to-purple-600 p-8 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Ready for the Next Challenge</h3>
            <p className="text-lg opacity-90 mb-6">
              Always looking for opportunities to learn, grow, and contribute to innovative projects.
            </p>
            <motion.button
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-accent px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Let's Connect
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
