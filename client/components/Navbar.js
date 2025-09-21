import Link from 'next/link'
import { Youtube, Github, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  return (
    <nav className="bg-background/40 backdrop-blur-xl border-b border-border/50 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-3 text-xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            <div className="p-2 bg-accent rounded-lg shadow-inner glow">
              <Youtube className="h-5 w-5 text-primary" />
            </div>
            CleanTranscribe
          </Link>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="bg-accent/50 hover:bg-accent text-primary hover:text-primary/80 backdrop-blur-md shadow-md" 
              asChild
            >
              <a 
                href="https://github.com/opcxder/youtube-timestamp-remover" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                GitHub
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
