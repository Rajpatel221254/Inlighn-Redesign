import './globals.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ContactSection from './Components/ContactSection'
import Cursor from './Components/Cursor'
import { AnimatePresence, motion } from 'framer-motion'
import Loader from './Components/Loader'
import PageWrapper from './Components/PageWrapper'
import FAQs from './Components/Faq'

export const metadata = {
  title: 'Inlighn Tech',
  description: 'Immersive Internship Programs',
  icons: {
    icon: "/favicon.ico", // ✅ path to your icon
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative scroll-smooth overflow-x-hidden bg-dark text-white font-sans">
        <Loader />
        <Navbar />
        <Cursor />
        <PageWrapper>
        {children}
        </PageWrapper>
        <FAQs />
        <ContactSection />
        <Footer />
      </body>
    </html>
  )
}
