import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi'
import { projects } from '../../data/portfolio'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const [showAll, setShowAll] = useState(false)

  const displayedProjects = showAll ? projects : projects.filter(p => p.featured)

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-6">
            <span className="text-gray-900 dark:text-white">Featured</span> <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, demonstrating my skills in full-stack development, 
            problem-solving, and creating user-focused applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className={`grid gap-8 mb-12 ${displayedProjects.length === 1 ? 'justify-center' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden card-hover border border-gray-200 dark:border-gray-700 ${displayedProjects.length === 1 ? 'max-w-md mx-auto' : ''}`}
            >
              {/* Project Image */}
              <div className="h-48 relative overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="h-full bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center">
                    <FiFolder className="text-white text-6xl opacity-50" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                
                {/* Project Links Overlay */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                  >
                    <FiGithub size={20} />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                  >
                    <FiExternalLink size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="text-xs px-2 py-1 bg-accent text-white rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 text-center py-2 px-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                  >
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 text-center py-2 px-4 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-colors text-sm font-medium"
                  >
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && projects.length > projects.filter(p => p.featured).length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <motion.button
              onClick={() => setShowAll(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Show All Projects ({projects.length - projects.filter(p => p.featured).length} more)
            </motion.button>
          </motion.div>
        )}

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: projects.length, label: "Projects Built" },
            { number: "10+", label: "Technologies Used" },
            { number: "5+", label: "GitHub Repos" },
            { number: "100%", label: "Responsive Design" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold gradient-text">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
