'use client'

import Link from "next/link"
import Image from 'next/image'
import { Card } from "@/components/ui/card"

export default function ServicesPage() {
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
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
              <Link href="/services" className="text-primary font-semibold">Services</Link>
              <Link href="/approach" className="text-foreground hover:text-primary transition-colors">Approach</Link>
              <Link href="/#contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative overflow-hidden pt-32 pb-16"
        style={{ backgroundImage: "url('/images/Calia_Piega.webp')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '40vh' }}
      >
        <div className="absolute inset-0 z-0">
          <Image src="/images/Calia_Piega.webp" alt="Services background - Calia Piega" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>
        <div className="relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Servizi Professionali</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Soluzioni terapeutiche complete e personalizzate per il tuo recupero e le tue performance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Orthopedic and Post-Traumatic Rehabilitation */}
            <Card className="p-8 hover:shadow-xl transition-all border-2 hover:border-primary">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Riabilitazione Ortopedica e Post-Traumatica</h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Programmi di recupero specializzati dopo interventi ortopedici o traumi. Dalla ricostruzione del legamento crociato
                al recupero da fratture, ti accompagniamo in ogni fase del percorso.
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Post-surgical rehabilitation protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Fracture and trauma recovery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Joint replacement rehabilitation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Progressive strengthening programs</span>
                </li>
              </ul>
            </Card>

            {/* Manual Therapy */}
            <Card className="p-8 hover:shadow-xl transition-all border-2 hover:border-primary">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Terapia Manuale</h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Tecniche manuali come mobilizzazioni articolari, manipolazione dei tessuti molli e rilascio miofasciale
                per ripristinare il movimento e ridurre il dolore.
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Joint mobilization and manipulation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Myofascial release techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Trigger point therapy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Muscle energy techniques</span>
                </li>
              </ul>
            </Card>

            {/* Sports Massage */}
            <Card className="p-8 hover:shadow-xl transition-all border-2 hover:border-primary">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Massaggio Sportivo</h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Tecniche di massaggio dedicate agli atleti per migliorare la performance, accelerare il recupero
                e prevenire gli infortuni. Protocollo pre-gara, post-gara e di mantenimento.
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Pre-competition preparation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Post-event recovery massage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Maintenance and performance optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Deep tissue and sports-specific techniques</span>
                </li>
              </ul>
            </Card>

            {/* Functional Postural Re-education */}
            <Card className="p-8 hover:shadow-xl transition-all border-2 hover:border-primary">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Rieducazione Posturale Funzionale</h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Correggiamo squilibri posturali e disfunzioni del movimento con esercizi mirati e training di consapevolezza
                per migliorare l'allineamento e ridurre il dolore cronico.
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Postural assessment and analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Corrective exercise programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Ergonomic guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Body awareness training</span>
                </li>
              </ul>
            </Card>

            {/* Kinesiology Consulting */}
            <Card className="p-8 hover:shadow-xl transition-all border-2 hover:border-primary">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Consulenza in Chinesiologia</h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Analisi avanzata del movimento e valutazioni biomeccaniche per ottimizzare la performance
                e identificare fattori di rischio per gli infortuni.
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
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
                  <span>Performance optimization strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Sport-specific movement coaching</span>
                </li>
              </ul>
            </Card>

            {/* Personal Training */}
            <Card className="p-8 hover:shadow-xl transition-all border-2 hover:border-primary">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Allenamento Personalizzato</h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Programmi di allenamento su misura per migliorare forza, resistenza, flessibilità e forma fisica,
                prevenendo gli infortuni e ottimizzando la qualità del movimento.
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Individualized training programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Strength and conditioning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Functional movement training</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Progress tracking and program adjustment</span>
                </li>
              </ul>
            </Card>

            {/* Injury Prevention */}
            <Card className="p-8 hover:shadow-xl transition-all border-2 hover:border-primary">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Prevenzione Infortuni</h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Programmi proattivi per identificare e correggere i fattori di rischio prima che si traducano in infortuni.
                Fondamentale per atleti e persone attive che vogliono mantenere la performance.
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Injury risk screening</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Preventive exercise programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Movement quality assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Sport-specific injury prevention strategies</span>
                </li>
              </ul>
            </Card>

            {/* Recovery Pathways */}
            <Card className="p-8 hover:shadow-xl transition-all border-2 hover:border-primary">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Percorsi di Recupero</h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Percorsi di recupero strutturati e basati sull'evidenza che ti guidano dall'infortunio acuto
                fino al ritorno all'attività, garantendo progressione sicura ed efficace.
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Phased rehabilitation protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Return-to-sport criteria</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Progressive loading strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Performance testing and monitoring</span>
                </li>
              </ul>
            </Card>

          </div>
        </div>
      </section>

      {/* Service Gallery */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">I servizi in azione</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-foreground/80">
              Ambienti di cura professionali e assistenza personalizzata
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Placeholder 1 */}
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-white font-medium">Sostituisci con:<br/>service-manual-therapy.jpg</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-bold text-xl">Sessione di Terapia Manuale</h3>
                <p className="text-white/80 text-sm">Tecniche di trattamento manuale</p>
              </div>
            </div>

            {/* Placeholder 2 */}
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-accent/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-white font-medium">Sostituisci con:<br/>service-rehabilitation.jpg</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-bold text-xl">Allenamento di Riabilitazione</h3>
                <p className="text-white/80 text-sm">Programmi di recupero progressivi</p>
              </div>
            </div>

            {/* Placeholder 3 */}
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-white font-medium">Sostituisci con:<br/>service-assessment.jpg</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-bold text-xl">Valutazione del Movimento</h3>
                <p className="text-white/80 text-sm">Analisi biomeccanica</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-foreground/60 text-sm">
              📸 Carica le immagini nella cartella <code className="bg-foreground/10 px-2 py-1 rounded">public/</code>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto a iniziare il tuo percorso di cura?</h2>
          <p className="text-xl text-white/90 mb-8">
            Contattami oggi per discutere quali servizi sono più adatti alle tue esigenze
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
