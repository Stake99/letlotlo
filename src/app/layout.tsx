import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RouteOptimizer from "@/components/providers/RouteOptimizer";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";
import { ErrorLoggerInitializer } from "@/components/providers/ErrorLoggerInitializer";
import { AnimationProvider } from "@/components/providers/AnimationProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#4f46e5" },
    { media: "(prefers-color-scheme: dark)", color: "#4f46e5" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Letlotlo International - Modern Digital Experiences",
    template: "%s | Letlotlo International",
  },
  description:
    "Creating engaging digital experiences with cartoon-styled 3D elements, parallax effects, and smooth animations. Modern web development with cutting-edge technology.",
  keywords: [
    "web development",
    "3D graphics",
    "animation",
    "cartoon design",
    "parallax effects",
    "modern design",
    "digital experiences",
    "React Three Fiber",
    "Framer Motion",
    "Letlotlo International",
  ],
  authors: [{ name: "Letlotlo International" }],
  creator: "Letlotlo International",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://letlotlo.com",
    title: "Letlotlo International - Modern Digital Experiences",
    description:
      "Creating engaging digital experiences with cartoon-styled 3D elements, parallax effects, and smooth animations.",
    siteName: "Letlotlo International",
  },
  twitter: {
    card: "summary_large_image",
    title: "Letlotlo International",
    description:
      "Creating engaging digital experiences with cartoon-styled 3D elements and modern web technology.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-background text-text-primary min-h-screen flex flex-col">
        <ErrorLoggerInitializer />
        <AnimationProvider>
          <RouteOptimizer />
          <ErrorBoundary>
            <Navbar />
          </ErrorBoundary>
          <main className="flex-1 pt-16">
            <ErrorBoundary>
              {children}
            </ErrorBoundary>
          </main>
          <ErrorBoundary>
            <Footer />
          </ErrorBoundary>
        </AnimationProvider>
      </body>
    </html>
  );
}
