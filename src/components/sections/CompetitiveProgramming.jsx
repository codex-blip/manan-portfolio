import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { competitiveProgramming } from '../../data/portfolio'

const CompetitiveProgramming = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  return (
    <section id="competitive-programming" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-6">
            <span className="text-gray-900 dark:text-white">Competitive</span> <span className="gradient-text">Programming</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {competitiveProgramming.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Platform */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {competitiveProgramming.platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md card-hover border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{platform.icon}</div>
                  <div>
                    <a 
                      href={platform.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white hover:text-accent transition-colors">
                        {platform.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">@{platform.handle}</p>
                    </a>
                    <div className="flex items-center gap-3 mt-2">
                      <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${platform.color}`}>
                        {platform.rank}
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        Rating: <span className="font-bold text-gray-900 dark:text-white">{platform.rating}</span>
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    Consistently solving algorithmic problems and participating in contests 
                    to improve problem-solving skills and algorithmic thinking.
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-300">Progress to Specialist</span>
                      <span className="text-gray-600 dark:text-gray-300">{platform.rating}/1400</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${(platform.rating / 1400) * 100}%` } : {}}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className={`h-2 rounded-full ${platform.color}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-6">
              Statistics
            </h3>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-6">
              {competitiveProgramming.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center justify-between p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md card-hover border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                  <div className="text-2xl font-bold gradient-text">
                    {stat.value}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Goals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-r from-accent to-purple-600 p-6 rounded-lg text-white"
            >
              <h4 className="font-semibold mb-2">Current Goal</h4>
              <p className="text-sm opacity-90">
                Working towards Specialist rank (1400+ rating) by consistently 
                practicing and participating in Codeforces contests.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CompetitiveProgramming
