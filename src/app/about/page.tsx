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
              <Link href="/services" className="text-foreground hover:text-primary transition-colors">Services</Link>
              <Link href="/approach" className="text-foreground hover:text-primary transition-colors">Approach</Link>
              <Link href="/#contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with background image */}
      <section
        className="relative w-full"
        style={{ backgroundImage: "url('/images/Calia_Piega.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/busa_butterfly.jpg"
            alt="Clinic and movement background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>

        <div className="relative z-10 py-28 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-center md:text-left mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">Chi sono — Dott. Luca Mottaran</h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-3xl">
                Fisioterapista, Cinesiologo e ex atleta agonista
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Il mio percorso</h2>
              <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                <p>
                  Nato nel 1999, ho scoperto la mia passione per il movimento umano e la riabilitazione in giovane età.
                  Come nuotatore agonista specializzato nel dorso, ho sperimentato in prima persona l'importanza della corretta meccanica del corpo,
                  della prevenzione degli infortuni e dei protocolli di recupero.
                </p>
                <p>
                  Questo background sportivo ha orientato il mio percorso di studi, portandomi a conseguire titoli avanzati in
                  <strong className="text-foreground"> Fisioterapia</strong> e <strong className="text-foreground">Scienze del Movimento</strong>.
                  La mia formazione accademica, unita agli anni di esperienza agonistica, mi ha fornito una prospettiva unica
                  sulla biomeccanica della performance umana.
                </p>
                <p>
                  Oggi porto questa visione olistica in ogni paziente che tratto, sia che si tratti di recupero da infortunio,
                  gestione del dolore cronico o miglioramento della performance atletica.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                {/* Image placeholder - replace with /public/about-portrait.jpg or use next/image */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/johnny-sins.webp"
                    alt="About portrait"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Optionally a real Image component:
                  <Image src="/about-portrait.jpg" alt="About portrait" fill className="object-cover" />
                */}
              </div>
            </div>
          </div>

          {/* Athletic Background */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Background atletico</h2>
            <Card className="p-8 bg-gradient-to-br from-secondary/5 to-primary/5">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Carriera nel nuoto agonistico</h3>
                  <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                    In qualità di ex nuotatore agonista specializzato nel dorso, ho trascorso anni ad allenarmi ai massimi livelli.
                    Questa esperienza mi ha insegnato l'importanza della biomeccanica, della tecnica corretta e dell'equilibrio
                    tra spingere i limiti fisici e prevenire gli infortuni.
                  </p>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    Il tempo passato in vasca non era solo per vincere gare: era per comprendere la straordinaria capacità di adattamento del corpo umano
                    e la scienza dietro la performance ottimale. Questi insegnamenti continuano a guidare il mio approccio terapeutico.
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Esperienza professionale</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12" />

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Endurance Motorsports</h3>
              <p className="text-white/90 leading-relaxed">
                Fisioterapista per team di endurance motorsport, incluso lavoro con piloti impegnati nella prestigiosa
                <strong className="text-accent"> 24 Ore di Le Mans</strong>. Specializzato nella gestione delle richieste fisiche
                tipiche delle gare di lunga durata.
              </p>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Imola Nuoto</h3>
              <p className="text-white/90 leading-relaxed">
                Lavoro diretto con atleti olimpici <strong className="text-accent">Federico Poggio</strong> e
                <strong className="text-accent">Simone Cerasuolo</strong>.
              </p>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">International Imola</h3>
              <p className="text-white/90 leading-relaxed">
                Fisioterapista per la squadra di basket <strong className="text-accent">International Imola</strong>,
                offrendo servizi di prevenzione infortuni, riabilitazione e ottimizzazione della performance.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Holistic Approach */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">Approccio terapeutico olistico</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12" />

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xl text-foreground/80 leading-relaxed text-center mb-8">
              La mia filosofia si concentra sul trattamento della persona nella sua globalità, non solo sui sintomi isolati.
              Grazie al mio background in fisioterapia e scienze del movimento, considero come i modelli di movimento, i fattori dello stile di vita
              e il benessere psicologico si interconnettano e influenzino la salute fisica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 hover:border-primary transition-colors">
              <h3 className="text-2xl font-bold text-foreground mb-4">Valutazione personalizzata</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Ogni paziente riceve una valutazione completa che va oltre il sintomo principale. Analizzo i pattern di movimento,
                le abitudini posturali, i metodi di allenamento e i fattori dello stile di vita per comprendere il quadro nella sua interezza.
              </p>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Analisi biomeccanica</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Screening dei pattern di movimento</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Revisione dello stile di vita e dell'allenamento</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-2 hover:border-primary transition-colors">
              <h3 className="text-2xl font-bold text-foreground mb-4">Trattamento integrato</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                I piani di trattamento combinano terapia manuale, esercizi terapeutici ed educazione per affrontare sia i sintomi immediati
                sia le cause sottostanti, garantendo risultati duraturi.
              </p>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Tecniche basate sull'evidenza</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Protocolli di esercizio progressivi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Educazione e responsabilizzazione del paziente</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Collaborations Gallery */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">Collaborazioni e partner</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12" />

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
                  <p className="text-sm text-white font-medium">Sostituisci con:<br/>lemans-team.jpg</p>
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
                  <p className="text-sm text-white font-medium">Sostituisci con:<br/>imola-nuoto.jpg</p>
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
                  <p className="text-sm text-white font-medium">Sostituisci con:<br/>basketball-team.jpg</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-bold text-lg">International Imola</h3>
                <p className="text-white/80 text-sm">Basketball Team</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-foreground/60 text-sm mb-4">
              📸 Segnaposto immagini: carica le tue foto nella cartella <code className="bg-foreground/10 px-2 py-1 rounded">public/</code>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto a iniziare il tuo percorso di recupero?</h2>
          <p className="text-xl text-white/90 mb-8">
            Lavoriamo insieme per raggiungere i tuoi obiettivi di salute e performance
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
              Contatta su WhatsApp
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white/30 transition-all hover:scale-105"
            >
              Prenota un appuntamento
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white/60">
            <p>&copy; {new Date().getFullYear()} Dott. Luca Mottaran. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
