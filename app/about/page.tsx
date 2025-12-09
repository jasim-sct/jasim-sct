'use client'

import { motion } from 'framer-motion'
import { Code2, Target, Users, Sparkles, Cloud, Zap, Shield } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/framerVariants'
import { Card } from '@/components/ui/Card'
import { StructuredData } from '@/components/SEO/StructuredData'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <StructuredData type="person" />
      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-white dark:text-white text-gray-900">
                About Me — TypeScript MERN Stack Developer
              </h1>
              <div className="w-24 h-0.5 bg-white dark:bg-white bg-gray-900 mx-auto mb-8" />
              <p className="text-gray-400 dark:text-gray-400 text-gray-600 max-w-2xl mx-auto">
                Learn about my journey as a Full Stack Developer specializing in TypeScript, MERN stack, and cloud deployment.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-16">
              <div className="prose prose-invert max-w-none space-y-6 text-gray-300 dark:text-gray-300 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  I&apos;m a <strong>MERN Stack Developer</strong> with 1.5 years of intensive training and 1 year of industry experience building production-ready applications. Currently working as a <strong>Software Developer at SolutionsChamps Technologies</strong>, specializing in <strong>TypeScript-based MERN stack architectures</strong>.
                </p>
                <p>
                  I previously worked at <strong>AF Technologies</strong>, where I built ERP systems, e-commerce solutions, and cloud-deployed applications. Before that, I completed a 1-year internship at <strong>Brototype</strong> where I strengthened my fundamentals, backend development with <strong>Node.js + templating engines</strong>, and later moved to <strong>React</strong> for large-scale frontend systems.
                </p>
                <p>
                  I care deeply about <strong>type-safety</strong>, <strong>clean architecture</strong>, <strong>scalable APIs</strong>, <strong>cloud deployment</strong>, and building meaningful products. Every project I work on is approached with attention to performance, reliability, and user experience.
                </p>
              </div>
            </motion.div>

            {/* Internal Linking for SEO */}
            <motion.div variants={fadeInUp} className="mb-8 p-4 bg-gray-900 dark:bg-gray-900 bg-gray-50 border border-gray-800 dark:border-gray-800 border-gray-200 rounded-lg">
              <p className="text-sm text-gray-400 dark:text-gray-400 text-gray-600">
                Explore my <Link href="/skills" className="text-primary dark:text-primary hover:underline">technical skills</Link>, 
                {' '}<Link href="/experience" className="text-primary dark:text-primary hover:underline">professional experience</Link>, 
                {' '}and <Link href="/projects" className="text-primary dark:text-primary hover:underline">portfolio projects</Link>.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white dark:text-white text-gray-900">
                Work Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gray-800 dark:bg-gray-800 bg-gray-200 rounded-lg">
                      <Zap className="text-white dark:text-white text-gray-900" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-white dark:text-white text-gray-900">
                      Performance & Scalability
                    </h3>
                  </div>
                  <p className="text-gray-400 dark:text-gray-400 text-gray-600">
                    Building applications that perform well under load and scale seamlessly with growth.
                  </p>
                </Card>

                <Card>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gray-800 dark:bg-gray-800 bg-gray-200 rounded-lg">
                      <Code2 className="text-white dark:text-white text-gray-900" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-white dark:text-white text-gray-900">
                      Type-Safe Coding
                    </h3>
                  </div>
                  <p className="text-gray-400 dark:text-gray-400 text-gray-600">
                    Leveraging TypeScript to write more reliable, maintainable, and self-documenting code.
                  </p>
                </Card>

                <Card>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gray-800 dark:bg-gray-800 bg-gray-200 rounded-lg">
                      <Target className="text-white dark:text-white text-gray-900" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-white dark:text-white text-gray-900">
                      Clean Architecture
                    </h3>
                  </div>
                  <p className="text-gray-400 dark:text-gray-400 text-gray-600">
                    Designing modular, maintainable systems with clear separation of concerns.
                  </p>
                </Card>

                <Card>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gray-800 dark:bg-gray-800 bg-gray-200 rounded-lg">
                      <Shield className="text-white dark:text-white text-gray-900" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-white dark:text-white text-gray-900">
                      Reliable Deployments
                    </h3>
                  </div>
                  <p className="text-gray-400 dark:text-gray-400 text-gray-600">
                    Ensuring robust cloud deployments with proper CI/CD and monitoring.
                  </p>
                </Card>

                <Card>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gray-800 dark:bg-gray-800 bg-gray-200 rounded-lg">
                      <Sparkles className="text-white dark:text-white text-gray-900" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-white dark:text-white text-gray-900">
                      Continuous Learning
                    </h3>
                  </div>
                  <p className="text-gray-400 dark:text-gray-400 text-gray-600">
                    Staying updated with latest technologies and best practices in the industry.
                  </p>
                </Card>

                <Card>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gray-800 dark:bg-gray-800 bg-gray-200 rounded-lg">
                      <Users className="text-white dark:text-white text-gray-900" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-white dark:text-white text-gray-900">
                      Meaningful Products
                    </h3>
                  </div>
                  <p className="text-gray-400 dark:text-gray-400 text-gray-600">
                    Building solutions that solve real problems and create value for users.
                  </p>
                </Card>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
