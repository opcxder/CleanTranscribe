'use client'
import { motion } from 'framer-motion'
import { FileText, CheckCircle, AlertCircle, Users, Shield, Clock } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
  const lastUpdated = "December 1, 2024"

  const sections = [
    {
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using CleanTranscribe, you accept and agree to be bound by these Terms and Conditions.",
        "If you do not agree to these terms, please do not use our service.",
        "These terms apply to all visitors, users, and others who access or use the service.",
        "We reserve the right to modify these terms at any time without prior notice."
      ]
    },
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: "Use of Service",
      content: [
        "You may use our service only in compliance with these Terms and all applicable laws and regulations.",
        "You are responsible for ensuring that your use of the service does not violate any laws in your jurisdiction.",
        "You agree not to use the service for any illegal or unauthorized purpose.",
        "You must not transmit any worms, viruses, or any code of a destructive nature."
      ]
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-600" />,
      title: "Intellectual Property",
      content: [
        "The service and its original content, features, and functionality are owned by CleanTranscribe.",
        "Our service is protected by copyright, trademark, and other laws of both the United States and foreign countries.",
        "You may not reproduce, distribute, modify, or create derivative works without our express written permission.",
        "Our trademarks and trade dress may not be used in connection with any product or service without our consent."
      ]
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-orange-600" />,
      title: "User Responsibilities",
      content: [
        "You are responsible for any content you submit to our service.",
        "You must have the right to use any YouTube URLs you submit for transcript extraction.",
        "You agree not to submit copyrighted material without proper authorization.",
        "You are responsible for maintaining the confidentiality of your account information if applicable."
      ]
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-pink-600" />,
      title: "Service Limitations",
      content: [
        "Our service is dependent on YouTube's API and availability.",
        "We do not guarantee 100% accuracy of transcript extraction.",
        "Service availability may be affected by maintenance, updates, or external factors.",
        "We reserve the right to limit or restrict access to the service at our discretion."
      ]
    }
  ]

  const importantPoints = [
    {
      title: "No Warranty",
      content: "The service is provided &apos;as is&apos; without any warranty of any kind, express or implied."
    },
    {
      title: "Limitation of Liability",
      content: "We shall not be liable for any indirect, incidental, special, consequential, or punitive damages."
    },
    {
      title: "Indemnification",
      content: "You agree to indemnify and hold us harmless from any claims arising from your use of the service."
    },
    {
      title: "Governing Law",
      content: "These terms shall be governed by the laws of the United States and your local jurisdiction."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <FileText className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-xl opacity-90 mb-2">Legal terms for using our service</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to CleanTranscribe</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms and Conditions (&quot;Terms&quot;, &quot;Terms and Conditions&quot;) govern your relationship with CleanTranscribe (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;) and your use of our YouTube transcript extraction service.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Please read these Terms carefully before using our service. By accessing or using CleanTranscribe, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
            </p>
          </div>

          {/* Key Terms */}
          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Terms</h2>
            <div className="space-y-4">
              {[
                { term: "Service", definition: "The YouTube transcript extraction service provided by CleanTranscribe" },
                { term: "User", definition: "Any person who accesses or uses our service" },
                { term: "Content", definition: "Any text, data, or information processed through our service" },
                { term: "YouTube Content", definition: "Any video content, transcripts, or metadata from YouTube" }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-24 flex-shrink-0">
                    <span className="font-semibold text-blue-700">{item.term}:</span>
                  </div>
                  <div className="text-gray-700">{item.definition}</div>
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

          {/* Important Legal Points */}
          <div className="bg-red-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Legal Points</h2>
            <div className="grid gap-6">
              {importantPoints.map((point, index) => (
                <div key={index} className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{point.title}</h3>
                  <p className="text-gray-700">{point.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* YouTube API Terms */}
          <div className="bg-yellow-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">YouTube API Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our service uses YouTube&apos;s API to extract transcripts. By using our service, you also agree to be bound by YouTube&apos;s Terms of Service and API terms. You acknowledge that:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>YouTube content is subject to YouTube&apos;s terms and policies</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Transcript availability depends on YouTube&apos;s API and video settings</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>We comply with all YouTube API requirements and limitations</span>
              </li>
            </ul>
          </div>

          {/* Termination */}
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Upon termination, your right to use the service will immediately cease. All provisions of the Terms which by their nature should survive termination shall survive termination, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
          </div>

          {/* Changes to Terms */}
          <div className="bg-green-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to These Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days&apos; notice prior to any new terms taking effect.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the service.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> legal@cleantranscribe.com</p>
              <p><strong>Website:</strong> <Link href="/" className="text-blue-600 hover:underline">https://cleantranscribe.com</Link></p>
              <p><strong>Address:</strong> CleanTranscribe Legal Department</p>
            </div>
            <p className="text-gray-700 leading-relaxed mt-4">
              By using CleanTranscribe, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}