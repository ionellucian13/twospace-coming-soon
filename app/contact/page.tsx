import { Metadata } from 'next'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import ContactHero from '../../components/sections/contact/ContactHero'
import ContactForm from '../../components/sections/contact/ContactForm'
import ContactInfo from '../../components/sections/contact/ContactInfo'
import LocationMap from '../../components/sections/contact/LocationMap'

export const metadata: Metadata = {
  title: 'Contact | Two Space - Să Discutăm Despre Proiectul Tău',
  description: 'Contactează echipa Two Space pentru consultanță gratuită. Răspundem în 24h și oferim soluții personalizate pentru afacerea ta.',
  keywords: 'contact marketing, consultanță gratuită, echipa Two Space, întâlnire business',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-20">
        <ContactHero />
        <div className="grid lg:grid-cols-2 gap-0">
          <ContactForm />
          <div>
            <ContactInfo />
            <LocationMap />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}