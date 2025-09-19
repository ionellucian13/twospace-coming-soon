import { Metadata } from 'next'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import CafeHero from '../../components/sections/cafe/CafeHero'
import MenuGrid from '../../components/sections/cafe/MenuGrid'
import EventsCalendar from '../../components/sections/cafe/EventsCalendar'
import SpaceInfo from '../../components/sections/cafe/SpaceInfo'
import CafeBooking from '../../components/sections/cafe/CafeBooking'

export const metadata: Metadata = {
  title: 'Coffee Space | Two Space - Cafea Premium și Evenimente Inspiraționale',
  description: 'Spațiu perfect pentru cafea, întâlniri business și evenimente. Meniu selectat, atmosferă creativă, facilități complete.',
  keywords: 'coffee shop, evenimente business, spațiu coworking, cafea specialty, întâlniri creative',
}

export default function CafePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-20">
        <CafeHero />
        <MenuGrid />
        <EventsCalendar />
        <SpaceInfo />
        <CafeBooking />
      </main>
      <Footer />
    </>
  )
}