import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCode, FiUsers, FiTrendingUp, FiHeart } from 'react-icons/fi'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const highlights = [
    {
      icon: FiCode,
      title: "Clean Code",
      description: "Writing maintainable and scalable code"
    },
    {
      icon: FiUsers,
      title: "Team Player",
      description: "Collaborative and communicative"
    },
    {
      icon: FiTrendingUp,
      title: "Growth Mindset",
      description: "Always learning and improving"
    },
    {
      icon: FiHeart,
      title: "Passionate",
      description: "Love what I do and do what I love"
    }
  ]

  const stats = [
    { number: "5+", label: "Projects Completed" },
    { number: "1", label: "Project Deployed" },
    { number: "11", label: "Technologies Mastered" },
    { number: "2+", label: "Years Learning" }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-6">
            <span className="text-gray-900 dark:text-white">About</span> <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a Computer Science undergraduate with a passion for creating innovative web solutions. 
            My journey in tech started with curiosity and has evolved into a deep love for building 
            applications that make a difference. I enjoy tackling complex problems and turning ideas 
            into reality through code.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              My Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Started my coding journey in college with Python and quickly fell in love with 
              web development. What began as simple HTML pages has evolved into building 
              full-stack applications with modern frameworks like React and Django.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm particularly drawn to the problem-solving aspect of programming and the 
              satisfaction of seeing an idea come to life through code. Whether it's 
              optimizing algorithms or creating intuitive user interfaces, I approach 
              every challenge with enthusiasm and determination.
            </p>
            
            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <highlight.icon className="text-accent text-2xl mb-2" />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-6">
              By the Numbers
            </h3>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md card-hover"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Personal Touch */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-r from-accent to-purple-600 p-6 rounded-lg text-white"
            >
              <h4 className="font-semibold mb-2">Currently Learning</h4>
              <p className="text-sm opacity-90">
                Diving deep into Django and backend development to strengthen my full-stack 
                capabilities. Also exploring Machine Learning algorithms on the side. 
                Always excited about the next challenge!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
