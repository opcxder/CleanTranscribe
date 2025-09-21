"use client"
import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Youtube, Loader2, AlertCircle, CheckCircle, Download, FileText, Clock, Shield, Zap, Users, Star, ArrowRight, Play, Check, ExternalLink } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { isValidYouTubeUrl } from '@/lib/videoUtils'

export default function Home() {
  const [videoUrl, setVideoUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [isValidUrl, setIsValidUrl] = useState(false)
  const router = useRouter()

  const handleUrlChange = (e) => {
    const url = e.target.value
    setVideoUrl(url)
    setError('')
  }

  // Debounced validation effect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (videoUrl.trim()) {
        const isValid = isValidYouTubeUrl(videoUrl)
        setIsValidUrl(isValid)
        if (!isValid) {
          setError('Please enter a valid YouTube URL')
        }
      } else {
        setIsValidUrl(false)
      }
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [videoUrl])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    
    if (!videoUrl.trim()) {
      setError('Please enter a YouTube URL')
      return
    }

    if (!isValidUrl) {
      setError('Please enter a valid YouTube URL')
      return
    }

    setIsLoading(true)
    try {
      router.push(`/result?url=${encodeURIComponent(videoUrl)}`)
    } catch (error) {
      console.error('Navigation error:', error)
      setError('Failed to navigate to results page. Please try again.')
      setIsLoading(false)
    }
  }

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Get transcripts in seconds, not minutes"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "100% Free",
      description: "No hidden costs, no registration required"
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Multiple Formats",
      description: "Download as TXT, PDF, or DOCX"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "For Everyone",
      description: "Students, creators, researchers, professionals"
    }
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      content: "Finally found something that actually works! No more manual timestamp removal for me.",
      rating: 5
    },
    {
      name: "James Mitchell",
      content: "This saved me so much time on my thesis. Was spending hours transcribing lectures manually before this.",
      rating: 5
    },
    {
      name: "Ahmed Hassan",
      content: "Perfect for my YouTube channel. Need clean text for subtitles and this makes it super easy.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent via-background to-background"></div>
      
      {/* Floating Elements with Parallax */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        {/* Large Floating Shapes - More Visible */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-red-500/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-orange-500/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-red-500/20 to-blue-500/20 rounded-full blur-3xl animate-float-reverse"></div>
        
        {/* Medium Floating Elements - More Visible */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/50 to-indigo-400/50 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-400/50 to-pink-400/50 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-28 h-28 bg-gradient-to-br from-emerald-400/50 to-cyan-400/50 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute bottom-60 right-10 w-20 h-20 bg-gradient-to-br from-yellow-400/50 to-orange-400/50 rounded-full blur-2xl animate-float-reverse"></div>
        
        {/* Additional Floating Elements */}
        <div className="absolute top-60 left-1/3 w-16 h-16 bg-gradient-to-br from-cyan-400/40 to-blue-400/40 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-80 right-1/3 w-12 h-12 bg-gradient-to-br from-violet-400/40 to-purple-400/40 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute top-80 right-1/2 w-14 h-14 bg-gradient-to-br from-lime-400/40 to-emerald-400/40 rounded-full blur-xl animate-float-slow"></div>
        
        {/* Small Floating Dots - More Visible */}
        <div className="absolute top-32 left-1/4 w-4 h-4 bg-blue-500/60 rounded-full animate-pulse"></div>
        <div className="absolute top-48 right-1/3 w-3 h-3 bg-purple-500/70 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-64 left-1/3 w-3.5 h-3.5 bg-emerald-500/60 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/4 w-4 h-4 bg-pink-500/60 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-48 left-1/2 w-3 h-3 bg-yellow-500/70 rounded-full animate-pulse delay-1500"></div>
        <div className="absolute bottom-64 right-1/2 w-3.5 h-3.5 bg-teal-500/60 rounded-full animate-pulse delay-3000"></div>
        
        {/* Additional Small Dots */}
        <div className="absolute top-16 left-1/2 w-2 h-2 bg-indigo-500/60 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-16 right-1/2 w-2.5 h-2.5 bg-rose-500/60 rounded-full animate-pulse delay-1200"></div>
        <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-amber-500/60 rounded-full animate-pulse delay-1800"></div>
        <div className="absolute top-1/2 right-1/6 w-2.5 h-2.5 bg-sky-500/60 rounded-full animate-pulse delay-2200"></div>
      </div>
      
      {/* Enhanced Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '25px 25px'
        }}></div>
      </div>
      
      {/* Enhanced Animated Lines */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse delay-2000"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse delay-500"></div>
        <div className="absolute top-1/6 right-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse delay-1500"></div>
      </div>
      
      {/* Additional Geometric Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-32 h-32 border border-blue-300/30 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-purple-300/30 rounded-full animate-spin-reverse"></div>
        <div className="absolute top-2/3 left-1/2 w-16 h-16 border border-emerald-300/30 rounded-full animate-spin-slow"></div>
      </div>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center z-30">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 w-full">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 via-blue-500 to-orange-500 rounded-2xl mb-6 shadow-2xl p-0.5">
                <div className="w-full h-full bg-background/90 backdrop-blur-xl rounded-xl flex items-center justify-center">
                  <Youtube className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-blue-500 to-orange-500">
                CleanTranscribe
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
                Turn any YouTube video into clean text in seconds - no more messy timestamps!
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm sm:text-base mb-8">
                <span className="flex items-center gap-2 px-4 py-2 bg-accent/50 text-primary rounded-full border border-border/50 backdrop-blur-sm shadow-lg hover:bg-accent/70 transition-colors">
                  <Check className="h-4 w-4 sm:h-5 sm:w-5" />
                  Free Forever
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-accent/50 text-primary rounded-full border border-border/50 backdrop-blur-sm shadow-lg hover:bg-accent/70 transition-colors">
                  <Check className="h-4 w-4 sm:h-5 sm:w-5" />
                  No Registration
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-accent/50 text-primary rounded-full border border-border/50 backdrop-blur-sm shadow-lg hover:bg-accent/70 transition-colors">
                  <Check className="h-4 w-4 sm:h-5 sm:w-5" />
                  Multiple Formats
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-accent/50 text-primary rounded-full border border-border/50 backdrop-blur-sm shadow-lg hover:bg-accent/70 transition-colors">
                  <Check className="h-4 w-4 sm:h-5 sm:w-5" />
                  Instant Results
                </span>
              </div>
            </motion.div>

            {/* Main Input Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <Card className="relative group shadow-2xl border-0 bg-accent/30 backdrop-blur-xl border border-border/50 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-blue-500/10 to-orange-500/10 group-hover:opacity-75 transition-opacity duration-300"></div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-primary">
                    Ready to get started?
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">
                    Just paste a YouTube link and we'll do the rest
                  </CardDescription>
                </CardHeader>
                <CardContent className="pointer-events-auto relative z-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-blue-500 to-orange-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative bg-accent/50 backdrop-blur-xl rounded-lg p-0.5 shadow-2xl">
                        <div className="relative bg-background/50 backdrop-blur-sm rounded-lg">
                          <Input
                            type="text"
                            placeholder="https://www.youtube.com/watch?v=..."
                            value={videoUrl}
                            onChange={handleUrlChange}
                            className="border-none bg-transparent h-14 text-lg px-6 text-primary placeholder:text-muted-foreground/70 focus-visible:ring-0 focus-visible:ring-offset-0"
                            disabled={isLoading}
                            aria-label="YouTube video URL"
                            aria-describedby="url-help"
                          />
                        </div>
                      </div>
                    </div>
                    {error && (
                      <div className="flex items-center gap-2 text-red-500 text-sm pl-1">
                        <AlertCircle className="h-4 w-4" />
                        {error}
                      </div>
                    )}
                    {isValidUrl && !error && (
                      <div className="flex items-center gap-2 text-green-500 text-sm pl-1">
                        <CheckCircle className="h-4 w-4" />
                        Valid YouTube URL
                      </div>
                    )}
                    <Button 
                      type="submit" 
                      className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-red-500 via-blue-500 to-orange-500 hover:from-red-600 hover:via-blue-600 hover:to-orange-600 transition-all duration-300 shadow-xl relative z-20"
                      disabled={isLoading || !isValidUrl}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Extract Transcript
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-blue-500 to-orange-500">
              Why people love it
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple, fast, and actually works - no BS
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full mb-4 group-hover:bg-white/90 transition-all duration-300 shadow-lg group-hover:shadow-xl border border-white/40">
                  <div className="text-blue-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-300">
              Three simple steps to get your clean transcript
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Paste URL",
                description: "Copy and paste any YouTube video URL into the input field above"
              },
              {
                step: "2", 
                title: "Extract",
                description: "Click the extract button and we'll process the video transcript"
              },
              {
                step: "3",
                title: "Download",
                description: "Get your clean transcript and download in your preferred format"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-2xl font-bold mb-4 shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What people are saying
            </h2>
            <p className="text-xl text-gray-300">
              Real feedback from real users
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-200 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-16 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-background opacity-80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1),transparent_70%)]"></div>
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-accent/30 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-border/50"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl mb-4 shadow-lg">
              <Youtube className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-3">
              Ready to get started?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              A simple, free tool to extract clean transcripts from YouTube videos. No signup required.
            </p>
            
            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>No Registration</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Privacy First</span>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6 py-3 h-auto rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <Play className="mr-2 h-4 w-4" />
                Start Transcribing Now
              </Button>
            </div>
            
            {/* Stats */}
            <div className="mt-8 pt-6 border-t border-border/50">
              <div className="flex flex-wrap justify-center items-center gap-6 text-muted-foreground">
                <div className="text-center">
                  <div className="text-xl font-bold text-primary">1000+</div>
                  <div className="text-xs">Videos Processed</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-primary">50+</div>
                  <div className="text-xs">Happy Users</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-primary">99%</div>
                  <div className="text-xs">Success Rate</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

     
    </div>
  )
}