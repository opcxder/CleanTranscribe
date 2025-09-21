import { Inter } from "next/font/google";
import "./globals.css";
import ErrorBoundary from "@/components/ErrorBoundary";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CleanTranscribe - YouTube Transcript Extractor | Clean, Fast & Free",
  description:
    "Extract clean transcripts from YouTube videos instantly. Remove timestamps, download in multiple formats (TXT, PDF, DOCX). Free online tool for content creators, researchers, and students.",
  keywords:
    "youtube transcript, transcript extractor, youtube captions, transcript download, clean transcript, youtube subtitle, video transcription, content creator tools, free transcript, youtube to text",
  authors: [{ name: "CleanTranscribe Team" }],
  creator: "CleanTranscribe",
  publisher: "CleanTranscribe",
  robots: "index, follow",
  metadataBase: new URL("https://cleantranscribe.com"),
  openGraph: {
    title: "CleanTranscribe - YouTube Transcript Extractor",
    description:
      "Extract clean transcripts from YouTube videos instantly. Free online tool for content creators.",
    url: "https://cleantranscribe.com",
    siteName: "CleanTranscribe",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "CleanTranscribe - YouTube Transcript Extractor",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CleanTranscribe - YouTube Transcript Extractor",
    description:
      "Extract clean transcripts from YouTube videos instantly. Free online tool.",
    images: ["/image.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#007bff",
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "CleanTranscribe",
    description:
      "Extract clean transcripts from YouTube videos instantly. Remove timestamps, download in multiple formats.",
    url: "https://cleantranscribe.com",
    applicationCategory: "WebApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    creator: {
      "@type": "Organization",
      name: "CleanTranscribe Team",
    },
    featureList: [
      "YouTube transcript extraction",
      "Timestamp removal",
      "Multiple export formats",
      "Copy to clipboard",
      "Video preview",
      "Real-time validation",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        <PerformanceOptimizer />
        <ErrorBoundary>{children}</ErrorBoundary>
      </body>
    </html>
  );
}
