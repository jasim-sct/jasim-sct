'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Send, Github, Linkedin, Mail, Phone, Globe, MessageSquare, MapPin } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/framerVariants'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import Link from 'next/link'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'mjasimmc@gmail.com', href: 'mailto:mjasimmc@gmail.com' },
  { icon: Phone, label: 'Mobile', value: '+91 9778218906', href: 'tel:+919778218906' },
  { icon: Globe, label: 'Portfolio', value: 'mjasimmc.github.io/personal-website', href: 'https://mjasimmc.github.io/personal-website' },
  { icon: MapPin, label: 'Location', value: 'Kozhikode, Kerala → Coimbatore, Tamil Nadu', href: null },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/mjasimmc', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:mjasimmc@gmail.com', label: 'Email' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
      alert('Thank you for your message! I\'ll get back to you soon.')
    }, 1000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-white dark:text-white text-gray-900">
              Contact — Get In Touch with a TypeScript MERN Stack Developer
            </h1>
            <div className="w-24 h-0.5 bg-white dark:bg-white bg-gray-900 mx-auto mb-6" />
            <p className="text-gray-400 dark:text-gray-400 text-gray-600 max-w-2xl mx-auto">
              Looking for a Full Stack Developer for your next project? Let&apos;s discuss how I can help build scalable, type-safe applications with MERN stack and TypeScript.
            </p>
          </motion.div>

          {/* Internal Linking for SEO */}
          <motion.div variants={fadeInUp} className="mb-8 p-4 bg-gray-900 dark:bg-gray-900 bg-gray-50 border border-gray-800 dark:border-gray-800 border-gray-200 rounded-lg">
            <p className="text-sm text-gray-400 dark:text-gray-400 text-gray-600">
              Learn more about my <Link href="/about" className="text-primary dark:text-primary hover:underline">background</Link>, 
              {' '}<Link href="/skills" className="text-primary dark:text-primary hover:underline">technical expertise</Link>, and 
              {' '}<Link href="/projects" className="text-primary dark:text-primary hover:underline">portfolio projects</Link>.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <Card>
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-white dark:text-white text-gray-900 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      className="w-full px-4 py-3 bg-gray-800 dark:bg-gray-800 bg-gray-100 border border-gray-700 dark:border-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-white dark:focus:ring-white focus:ring-gray-900 focus:border-transparent transition-all outline-none text-white dark:text-white text-gray-900 placeholder-gray-500 dark:placeholder-gray-500 placeholder-gray-400"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-white dark:text-white text-gray-900 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      className="w-full px-4 py-3 bg-gray-800 dark:bg-gray-800 bg-gray-100 border border-gray-700 dark:border-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-white dark:focus:ring-white focus:ring-gray-900 focus:border-transparent transition-all outline-none text-white dark:text-white text-gray-900 placeholder-gray-500 dark:placeholder-gray-500 placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-white dark:text-white text-gray-900 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800 dark:bg-gray-800 bg-gray-100 border border-gray-700 dark:border-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-white dark:focus:ring-white focus:ring-gray-900 focus:border-transparent transition-all outline-none resize-none text-white dark:text-white text-gray-900 placeholder-gray-500 dark:placeholder-gray-500 placeholder-gray-400"
                      placeholder="Your message..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="primary"
                    className="w-full"
                    aria-label="Send message"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-black dark:border-black border-white border-t-transparent rounded-full mr-2"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div variants={fadeInUp} className="flex flex-col justify-center space-y-8">
              <Card>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gray-800 dark:bg-gray-800 bg-gray-200 rounded-lg">
                    <MessageSquare className="text-white dark:text-white text-gray-900" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white dark:text-white text-gray-900">
                    Contact Information
                  </h3>
                </div>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    const Component = info.href ? motion.a : motion.div
                    return (
                      <Component
                        key={index}
                        href={info.href || undefined}
                        target={info.href ? '_blank' : undefined}
                        rel={info.href ? 'noopener noreferrer' : undefined}
                        whileHover={info.href ? { x: 4 } : undefined}
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-800 hover:bg-gray-200 transition-colors"
                      >
                        <div className="p-2 bg-gray-800 dark:bg-gray-800 bg-gray-200 rounded-lg">
                          <Icon className="text-white dark:text-white text-gray-900" size={18} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-500 text-gray-600 uppercase tracking-wide">
                            {info.label}
                          </p>
                          <p className="text-white dark:text-white text-gray-900 font-medium">
                            {info.value}
                          </p>
                        </div>
                      </Component>
                    )
                  })}
                </div>
              </Card>

              <Card>
                <h4 className="text-lg font-semibold mb-6 text-white dark:text-white text-gray-900 uppercase tracking-wide">
                  Follow Me
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-3 p-4 bg-gray-800 dark:bg-gray-800 bg-gray-200 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-700 hover:bg-gray-300 transition-colors"
                        aria-label={`Visit ${social.label} profile`}
                      >
                        <Icon className="text-white dark:text-white text-gray-900" size={20} />
                        <span className="text-white dark:text-white text-gray-900 text-sm font-medium">
                          {social.label}
                        </span>
                      </motion.a>
                    )
                  })}
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
