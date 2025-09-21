import { motion } from 'framer-motion'

export default function LoadingSkeleton() {
  return (
    <div className="space-y-6">
      {/* Video skeleton */}
      <div className="space-y-3">
        <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <div className="absolute top-0 left-0 w-full h-full bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
      </div>
      
      {/* Transcript skeleton */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="h-6 w-40 bg-gray-200 rounded animate-pulse"></div>
          <div className="flex gap-2">
            <div className="h-8 w-16 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
        
        <div className="space-y-2">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="h-4 bg-gray-200 rounded animate-pulse"
              style={{ width: `${Math.random() * 40 + 60}%` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            />
          ))}
        </div>
        
        <div className="h-3 w-24 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  )
}