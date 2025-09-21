'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import axios from 'axios'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, RefreshCw, AlertCircle, CheckCircle, Clock, Download, Share2, Copy, ExternalLink } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TranscriptDisplay from '@/components/TranscriptDisplay'
import LoadingSkeleton from '@/components/LoadingSkeleton'

export default function Result() {
  const [transcript, setTranscript] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [retryCount, setRetryCount] = useState(0)
  const [processingTime, setProcessingTime] = useState(0)
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const url = searchParams.get('url')

  useEffect(() => {
    if (url) {
      fetchTranscript(url)
    } else {
      setError('No video URL provided. Please go back and enter a valid YouTube URL.')
      setLoading(false)
    }
    
    return () => {
      setLoading(false)
    }
  }, [url])

  const fetchTranscript = async (videoUrl) => {
    const startTime = Date.now()
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/api/remove-timestamps`, 
        { videoUrl },
        { timeout: 30000 }
      );
      setTranscript(response.data.transcript);
      setProcessingTime(Math.round((Date.now() - startTime) / 1000))
      setLoading(false);
    } 
    catch (error) {
      console.error('Error fetching transcript:', error);
      
      let errorMessage = 'An unexpected error occurred';
      
      if (error.response) {
        const status = error.response.status;
        const data = error.response.data;
        
        switch (status) {
          case 400:
            errorMessage = data.error || 'Invalid video URL. Please check the URL and try again.';
            break;
          case 404:
            errorMessage = 'Video not found or transcript not available. Please try a different video.';
            break;
          case 429:
            errorMessage = 'Too many requests. Please wait a moment and try again.';
            break;
          case 500:
            errorMessage = 'Server error. Please try again in a few moments.';
            break;
          default:
            errorMessage = data.error || `Server error (${status}). Please try again.`;
        }
      } else if (error.code === 'ECONNABORTED') {
        errorMessage = 'Request timed out. The video might be too long or the server is busy.';
      } else if (error.message.includes('Network Error')) {
        errorMessage = 'Network error. Please check your internet connection and try again.';
      }
      
      setError(errorMessage);
      setLoading(false);
    }
  }

  const handleRetry = () => {
    setError('')
    setLoading(true)
    setRetryCount(prev => prev + 1)
    fetchTranscript(url)
  }

  const handleGoBack = () => {
    router.push('/')
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'CleanTranscribe - YouTube Transcript',
          text: 'Check out this clean transcript I extracted!',
          url: window.location.href
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      // Fallback: copy URL to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href)
        // You could add a toast notification here
      } catch (err) {
        console.log('Error copying to clipboard:', err)
      }
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.15),transparent_70%)]"></div>
        
        <Navbar />
        <main className="container mx-auto px-4 py-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-2xl mb-4 shadow-lg">
                  <RefreshCw className="h-8 w-8 text-white animate-spin" />
                </div>
                <h1 className="text-4xl font-bold text-white mb-2">
                  Processing Your Video
                </h1>
                <p className="text-xl text-gray-300">
                  Extracting transcript and removing timestamps...
                </p>
              </div>
              
              <LoadingSkeleton />
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.15),transparent_70%)]"></div>
        
        <Navbar />
        <main className="container mx-auto px-4 py-8 relative z-10">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl mb-4 shadow-lg">
                  <AlertCircle className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl font-bold text-white mb-2">
                  Oops! Something went wrong
                </h1>
                <p className="text-xl text-gray-300">
                  We couldn't extract the transcript from this video
                </p>
              </div>
              
              <Card className="bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-red-400">Error Details</CardTitle>
                  <CardDescription className="text-gray-300">
                    Here's what happened and how to fix it
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert className="bg-white/5 border-white/20 text-white">
                    <AlertCircle className="h-4 w-4 text-red-400" />
                    <AlertDescription>
                      {error}
                    </AlertDescription>
                  </Alert>
                  
                  <div className="space-y-3">
                    <h3 className="font-semibold text-white">Common Solutions:</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Make sure the video is public and has captions available</li>
                      <li>• Check that the URL is a valid YouTube link</li>
                      <li>• Try a different video or wait a few minutes</li>
                      <li>• Ensure your internet connection is stable</li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button 
                      onClick={handleRetry} 
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                      disabled={retryCount >= 3}
                    >
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Try Again {retryCount > 0 && `(${retryCount}/3)`}
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={handleGoBack}
                      className="flex-1 border-white/20 text-white hover:bg-white/10"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Try Different Video
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.15),transparent_70%)]"></div>
      
      <Navbar />
      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Success Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-4 shadow-lg">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Transcript Ready!
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                Your clean transcript has been extracted successfully
              </p>
              
              {/* Processing Stats */}
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-6">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  Processed in {processingTime}s
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4" />
                  Timestamps removed
                </span>
                <span className="flex items-center gap-1">
                  <Download className="h-4 w-4" />
                  Ready to download
                </span>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  variant="outline" 
                  onClick={handleGoBack}
                  className="flex items-center gap-2 border-white/20 text-white hover:bg-white/10"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Extract Another Video
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleShare}
                  className="flex items-center gap-2 border-white/20 text-white hover:bg-white/10"
                >
                  <Share2 className="h-4 w-4" />
                  Share Result
                </Button>
              </div>
            </div>
            
            {/* Transcript Display */}
            <TranscriptDisplay 
              videoUrl={url} 
              transcript={transcript}
            />
            
            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12"
            >
              <Card className="bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      🔒 Your Privacy is Protected
                    </h3>
                    <p className="text-sm text-gray-300 mb-4">
                      We don't store your transcripts or video data. Everything is processed securely and deleted immediately.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
                      <span>✓ No data storage</span>
                      <span>✓ No registration required</span>
                      <span>✓ 100% free</span>
                      <span>✓ Secure processing</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}