'use client'
import { motion } from 'framer-motion'
import { Shield, Eye, Lock, Database, User, Cookie } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  const lastUpdated = "December 1, 2024"

  const sections = [
    {
      icon: <Eye className="h-6 w-6 text-blue-600" />,
      title: "Information We Collect",
      content: [
        "YouTube URLs you submit for transcript extraction",
        "Basic usage analytics (page views, button clicks)",
        "Technical information (browser type, device type)",
        "No personal identification information is collected"
      ]
    },
    {
      icon: <Lock className="h-6 w-6 text-green-600" />,
      title: "How We Use Your Information",
      content: [
        "To extract and process YouTube transcripts",
        "To improve our service and user experience",
        "To monitor and analyze usage patterns",
        "To ensure technical functionality and security"
      ]
    },
    {
      icon: <Database className="h-6 w-6 text-purple-600" />,
      title: "Data Storage & Security",
      content: [
        "Transcripts are processed temporarily and not stored permanently",
        "We use industry-standard security measures",
        "No data is sold to third parties",
        "Regular security audits and updates"
      ]
    },
    {
      icon: <User className="h-6 w-6 text-orange-600" />,
      title: "Your Rights",
      content: [
        "Right to access information about data collection",
        "Right to request data deletion (where applicable)",
        "Right to opt-out of non-essential data collection",
        "Right to know how your data is being used"
      ]
    },
    {
      icon: <Cookie className="h-6 w-6 text-pink-600" />,
      title: "Cookies & Tracking",
      content: [
        "We use minimal cookies for basic functionality",
        "No third-party advertising cookies",
        "Essential cookies only for service operation",
        "You can disable cookies in your browser settings"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Shield className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl opacity-90 mb-2">Your privacy is our priority</p>
            <p className="text-sm opacity-75">Last updated: {lastUpdated}</p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          {/* Introduction */}
          <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to CleanTranscribe (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring the security of your information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our YouTube transcript extraction service.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our service, you agree to the collection and use of information in accordance with this policy. We operate under the principle of data minimization - we only collect what is necessary to provide our service.
            </p>
          </div>

          {/* Key Principles */}
          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Privacy Principles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Transparency", desc: "We clearly explain what data we collect and why" },
                { title: "Security", desc: "We implement strong security measures to protect your data" },
                { title: "Minimalism", desc: "We collect only the data necessary for our service" },
                { title: "Control", desc: "You have control over your data and privacy settings" }
              ].map((principle, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{principle.title}</h3>
                    <p className="text-gray-600 text-sm">{principle.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Sections */}
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-lg p-8 shadow-lg mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                {section.icon}
                <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
              </div>
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Third-Party Services */}
          <div className="bg-yellow-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use YouTube's public API to extract transcripts. This process is subject to YouTube's own privacy policies and terms of service. We do not share your data with any other third-party services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We may use basic analytics tools to understand usage patterns, but these do not collect personally identifiable information.
            </p>
          </div>

          {/* Data Retention */}
          <div className="bg-red-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Transcript data is processed temporarily and is not stored permanently on our servers. Once the transcript is generated and delivered to you, the data is typically removed from our systems within a reasonable timeframe.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Usage analytics data may be retained for service improvement purposes, but this data is anonymized and cannot be linked to individual users.
            </p>
          </div>

          {/* Changes to This Policy */}
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date at the top.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this policy are effective when they are posted on this page.
            </p>
          </div>

          {/* Contact Us */}
          <div className="bg-green-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> privacy@cleantranscribe.com</p>
              <p><strong>Website:</strong> <Link href="/" className="text-blue-600 hover:underline">https://cleantranscribe.com</Link></p>
            </div>
            <p className="text-gray-700 leading-relaxed mt-4">
              We are committed to addressing any privacy concerns you may have and will respond to inquiries promptly.
            </p>
          </div>
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}