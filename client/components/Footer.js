import { Youtube, Github, ExternalLink, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 relative z-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl">
                <Youtube className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CleanTranscribe</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              The most trusted YouTube transcript tool for creators, researchers, and professionals. 
              Transform videos into clean, readable text in seconds.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" asChild className="border-slate-700 text-slate-300 hover:bg-slate-800">
                <a href="https://github.com/opcxder/youtube-timestamp-remover" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="https://github.com/opcxder/youtube-timestamp-remover" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <span>&copy; 2024 CleanTranscribe. All rights reserved.</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <span className="text-sm">Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span className="text-sm">for creators</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
  