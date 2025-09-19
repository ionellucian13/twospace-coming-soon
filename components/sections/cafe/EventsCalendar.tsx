'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { events } from '../../../lib/data'
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card'
import { Button } from '../../ui/button'
import { Calendar, Clock, MapPin, Users, ArrowRight, Star } from 'lucide-react'

export default function EventsCalendar() {
  const upcomingEvents = events.slice(0, 4)

  return (
    <section id="events" className="py-20 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-ink mb-6">
            Evenimente & Workshop-uri
          </h2>
          <p className="text-xl text-ink/70 max-w-3xl mx-auto">
            Participă la evenimente exclusive, workshopuri inspiraționale și sesiuni 
            de networking într-un cadru relaxat și creativ.
          </p>
        </motion.div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.22,1,0.36,1]
              }}
              whileHover={{ y: -6 }}
            >
              <Card className="h-full border-stone hover:shadow-soft transition-all duration-300 bg-white hover:border-accent/30 overflow-hidden">
                {/* Event Badge */}
                <div className="relative">
                  <div className="bg-gradient-to-r from-accent to-accent-alt p-4">
                    <div className="flex items-center justify-between text-white">
                      <div className="text-sm font-medium opacity-90">
                        {new Date(event.date).toLocaleDateString('ro-RO', { 
                          month: 'short',
                          day: 'numeric'
                        }).toUpperCase()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={14} />
                        <span className="text-sm">Featured</span>
                      </div>
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-heading text-ink mb-3">
                    {event.title}
                  </CardTitle>
                  <p className="text-ink/70 leading-relaxed">
                    {event.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  {/* Event Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-ink/80">
                      <Calendar size={16} className="text-accent" />
                      <span className="text-sm">
                        {new Date(event.date).toLocaleDateString('ro-RO', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-ink/80">
                      <Clock size={16} className="text-accent" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-ink/80">
                      <MapPin size={16} className="text-accent" />
                      <span className="text-sm">Two Space Coffee</span>
                    </div>
                    <div className="flex items-center gap-3 text-ink/80">
                      <Users size={16} className="text-accent" />
                      <span className="text-sm">Max {event.maxAttendees || 25} participanți</span>
                    </div>
                  </div>

                  {/* Event Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Networking',
                        'Workshop',
                        'Materiale incluse',
                        'Cafea & snacks'
                      ].slice(0, 3).map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-stone">
                    <div>
                      <div className="text-sm text-ink/60">Preț</div>
                      <div className="font-bold text-accent text-xl">{event.price}</div>
                    </div>
                    <Button asChild className="bg-accent hover:bg-accent/90 text-white">
                      <Link href={`/cafe/events/${index + 1}`}>
                        Rezervă loc
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Event Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 lg:p-12 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-heading text-ink mb-4">
              Tipuri de evenimente
            </h3>
            <p className="text-ink/70 text-lg max-w-2xl mx-auto">
              Oferim o varietate de evenimente pentru toate nivelurile și interesele, 
              de la începători până la experți.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Business Workshops',
                description: 'Sesiuni practice pentru dezvoltarea afacerii',
                topics: ['Marketing Digital', 'Branding', 'Sales Strategy', 'Leadership'],
                frequency: 'Săptămânal'
              },
              {
                title: 'Creative Sessions',
                description: 'Workshop-uri pentru creativi și designeri',
                topics: ['UI/UX Design', 'Photography', 'Content Creation', 'Art Direction'],
                frequency: 'Bi-săptămânal'
              },
              {
                title: 'Networking Events',
                description: 'Întâlniri pentru conectare și colaborare',
                topics: ['Coffee & Connect', 'Pitch Night', 'Industry Meetups', 'Startup Stories'],
                frequency: 'Lunar'
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.5 + index * 0.1 
                }}
              >
                <h4 className="font-bold text-ink mb-3">{category.title}</h4>
                <p className="text-ink/70 mb-4 leading-relaxed">{category.description}</p>
                <div className="space-y-2 mb-4">
                  {category.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center text-sm text-ink/80">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                      {topic}
                    </div>
                  ))}
                </div>
                <div className="text-accent text-sm font-medium">{category.frequency}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold font-heading text-ink mb-4">
            Vrei să organizezi propriul eveniment?
          </h3>
          <p className="text-ink/70 mb-8 max-w-2xl mx-auto">
            Two Space este locația perfectă pentru workshopuri private, team building-uri 
            și evenimente corporate. Contactează-ne pentru o ofertă personalizată.
          </p>
          <Button asChild size="lg" className="bg-ink hover:bg-ink/90 text-white">
            <Link href="/contact" className="flex items-center gap-2">
              Organizează un eveniment <ArrowRight size={16} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}