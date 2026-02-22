'use client'

import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">Dr. Luca Mottaran</h1>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#about" className="text-foreground hover:text-primary transition-colors">About</Link>
              <Link href="/#services" className="text-foreground hover:text-primary transition-colors">Services</Link>
              <Link href="/#approach" className="text-foreground hover:text-primary transition-colors">Approach</Link>
              <Link href="/#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</Link>
              <Link href="/#contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">About Dr. Luca Mottaran</h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Physiotherapist, Kinesiologist, and Former Competitive Athlete
            </p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">My Journey</h2>
              <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                <p>
                  Born in 1999, I discovered my passion for human movement and rehabilitation at an early age.
                  As a competitive backstroke swimmer, I experienced firsthand the importance of proper body mechanics,
                  injury prevention, and recovery protocols.
                </p>
                <p>
                  This athletic background shaped my educational path, leading me to pursue advanced degrees in both
                  <strong className="text-foreground"> Physiotherapy</strong> and <strong className="text-foreground">Motor Sciences</strong>.
                  My academic foundation, combined with years of competitive swimming, provided me with a unique perspective
                  on the biomechanics of human performance.
                </p>
                <p>
                  Today, I bring this holistic understanding to every patient I treat, whether they&apos;re recovering from
                  injury, managing chronic pain, or striving to reach peak athletic performance.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                {/* Placeholder image - Replace with: /public/about-portrait.jpg */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-sm text-foreground/60 font-medium">Replace with:<br/>about-portrait.jpg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Athletic Background */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Athletic Background</h2>
            <Card className="p-8 bg-gradient-to-br from-secondary/5 to-primary/5">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Competitive Swimming Career</h3>
                  <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                    As a former competitive backstroke swimmer, I spent years training at the highest levels of the sport.
                    This experience taught me the critical importance of biomechanics, proper technique, and the delicate
                    balance between pushing physical limits and preventing injury.
                  </p>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    My time in the pool wasn&apos;t just about winning races—it was about understanding the human body&apos;s
                    incredible capacity for adaptation and the science behind optimal performance. These lessons continue
                    to inform my therapeutic approach with every patient.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Professional Experience</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Motorsports */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Endurance Motorsports</h3>
              <p className="text-white/90 leading-relaxed">
                Physiotherapist for endurance motorsports teams, including work with drivers competing at the prestigious
                <strong className="text-accent"> 24 Hours of Le Mans</strong>. Specialized in managing the unique physical
                demands of long-distance racing.
              </p>
            </Card>

            {/* Swimming */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Imola Nuoto</h3>
              <p className="text-white/90 leading-relaxed">
                Official masseur and physiotherapist for <strong className="text-accent">Imola Nuoto</strong>, working
                directly with Olympic athletes <strong className="text-accent">Federico Poggio</strong> and
                <strong className="text-accent"> Simone Cerasuolo</strong>.
              </p>
            </Card>

            {/* Basketball */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">International Imola</h3>
              <p className="text-white/90 leading-relaxed">
                Team physiotherapist for <strong className="text-accent">International Imola</strong> basketball team,
                providing injury prevention, rehabilitation, and performance optimization services.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Holistic Approach */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">Holistic Therapy Approach</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xl text-foreground/80 leading-relaxed text-center mb-8">
              My philosophy centers on treating the whole person, not just isolated symptoms. Drawing from my
              background in both physiotherapy and motor sciences, I consider how movement patterns, lifestyle factors,
              and psychological well-being all interconnect to influence physical health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 hover:border-primary transition-colors">
              <h3 className="text-2xl font-bold text-foreground mb-4">Individualized Assessment</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Every patient receives a comprehensive evaluation that goes beyond the presenting complaint. I analyze
                movement patterns, postural habits, training methods, and lifestyle factors to understand the complete picture.
              </p>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Biomechanical analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Movement pattern screening</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Lifestyle and training review</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-2 hover:border-primary transition-colors">
              <h3 className="text-2xl font-bold text-foreground mb-4">Integrated Treatment</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Treatment plans combine manual therapy, therapeutic exercise, and education to address both immediate
                symptoms and underlying causes, ensuring lasting results.
              </p>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Evidence-based techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Progressive exercise protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Patient education and empowerment</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Collaborations Gallery */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">Collaborations & Partners</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Photo Placeholder 1 - Le Mans */}
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-primary/40 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-white font-medium">Replace with:<br/>lemans-team.jpg</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-bold text-lg">24h Le Mans</h3>
                <p className="text-white/80 text-sm">Motorsports Physiotherapy</p>
              </div>
            </div>

            {/* Photo Placeholder 2 - Swimming */}
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-primary/40 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-white font-medium">Replace with:<br/>imola-nuoto.jpg</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-bold text-lg">Imola Nuoto</h3>
                <p className="text-white/80 text-sm">Olympic Athletes Support</p>
              </div>
            </div>

            {/* Photo Placeholder 3 - Basketball */}
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-primary/40 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-white font-medium">Replace with:<br/>basketball-team.jpg</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-bold text-lg">International Imola</h3>
                <p className="text-white/80 text-sm">Basketball Team</p>
              </div>
            </div>

            {/* Photo Placeholder 4 - Athletes */}
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-primary/40 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-white font-medium">Replace with:<br/>athletes-1.jpg</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-bold text-lg">Elite Athletes</h3>
                <p className="text-white/80 text-sm">Training & Recovery</p>
              </div>
            </div>

            {/* Photo Placeholder 5 - Treatment */}
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-primary/40 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-white font-medium">Replace with:<br/>treatment-session.jpg</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-bold text-lg">Treatment Sessions</h3>
                <p className="text-white/80 text-sm">Hands-On Therapy</p>
              </div>
            </div>

            {/* Photo Placeholder 6 - Events */}
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-primary/40 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-white font-medium">Replace with:<br/>competition-support.jpg</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-bold text-lg">Competition Support</h3>
                <p className="text-white/80 text-sm">Event Coverage</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-foreground/60 text-sm mb-4">
              📸 Image Placeholders: Upload your photos to <code className="bg-foreground/10 px-2 py-1 rounded">public/</code> folder
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-xs text-foreground/50">
              <span>• about-portrait.jpg</span>
              <span>• lemans-team.jpg</span>
              <span>• imola-nuoto.jpg</span>
              <span>• basketball-team.jpg</span>
              <span>• athletes-1.jpg</span>
              <span>• treatment-session.jpg</span>
              <span>• competition-support.jpg</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Recovery Journey?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s work together to achieve your health and performance goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/393661459269"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Contact on WhatsApp
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white/30 transition-all hover:scale-105"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white/60">
            <p>&copy; {new Date().getFullYear()} Dr. Luca Mottaran. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
