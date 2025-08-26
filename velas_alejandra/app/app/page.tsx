
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Heart, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  MessageCircle, 
  Star, 
  Leaf, 
  Gift, 
  Sparkles,
  ArrowRight,
  Menu,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function VelasAlejandra() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const headerY = useTransform(scrollY, [0, 100], [0, -20])

  const products = [
    {
      id: 1,
      name: "Colección de Velas Decorativas",
      description: "Set de velas artesanales con formas únicas incluye diseño de cordero y figuras decorativas",
      image: "https://cdn.abacus.ai/images/4d2c8312-897c-4f10-8f7c-cc191c97ecaf.png"
    },
    {
      id: 2,
      name: "Vela Rosa Natural",
      description: "Hermosa vela en forma de rosa con acabado natural y delicado aroma",
      image: "https://cdn.abacus.ai/images/6690abf4-e438-4e3f-b364-bca527c671c9.png"
    },
    {
      id: 3,
      name: "Vela Rosa en Frasco",
      description: "Elegante vela rosa en frasco de cristal, perfecta para cualquier ocasión",
      image: "https://cdn.abacus.ai/images/3f272fe7-9a53-4e65-8cd1-9502549cb84a.png"
    },
    {
      id: 4,
      name: "Vela Jardín de Flores",
      description: "Vela decorativa con flores naturales integradas en base ovalada artesanal",
      image: "https://cdn.abacus.ai/images/c9b19609-596b-4997-9d33-4ed019735ce2.png"
    },
    {
      id: 5,
      name: "Vela Margarita Aromática",
      description: "Vela en frasco con hermosa forma de margarita, ideal para aromatizar espacios",
      image: "https://cdn.abacus.ai/images/58465bf1-ec69-46d6-b15e-cbc480b6c6f6.png"
    },
    {
      id: 6,
      name: "Vela Gourmet Decorada",
      description: "Vela temática con elementos decorativos estilo repostería y aromas dulces",
      image: "https://cdn.abacus.ai/images/7fb732cc-1b09-44a5-bf51-0e008572b062.png"
    },
    {
      id: 7,
      name: "Vela de Lavanda Artesanal",
      description: "Vela relajante con lavanda natural, perfecta para momentos de tranquilidad",
      image: "https://cdn.abacus.ai/images/a7202208-c48c-4dc7-8c6c-d674424479a9.png"
    },
    {
      id: 8,
      name: "Vela Floral Luminosa",
      description: "Vela decorativa con elementos florales, crea ambiente cálido y acogedor",
      image: "https://cdn.abacus.ai/images/2dc2cce0-45db-4adb-b022-ebd0bd9d4521.png"
    },
    {
      id: 9,
      name: "Velas Flores Regalo",
      description: "Par de velas decorativas con flores, presentación especial ideal para obsequiar",
      image: "https://cdn.abacus.ai/images/a0ad720a-e264-4412-8a70-6b2bf83ae3ba.png"
    },
    {
      id: 10,
      name: "Colección Moldes Variados",
      description: "Velas en diferentes moldes y formas, cada una con su diseño único y especial",
      image: "https://cdn.abacus.ai/images/217199dd-814f-4fc1-a54f-92b14c76a7e6.png"
    }
  ]

  const benefits = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "100% Naturales",
      description: "Elaboradas con cera de soja y abejas, sin químicos dañinos"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Personalizables",
      description: "Adapto cada vela a tus gustos: aromas, colores y formas"
    },
    {
      icon: <Gift className="h-8 w-8" />,
      title: "Ideales para Regalo",
      description: "Perfectas para ocasiones especiales y momentos únicos"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Hechas con Dedicación",
      description: "Cada vela es única, creada con amor y atención al detalle"
    }
  ]

  const testimonials = [
    {
      name: "María González",
      text: "Las velas de Alejandra transformaron mi hogar. El aroma es increíble y duran muchísimo.",
      rating: 5
    },
    {
      name: "Carlos Ruiz",
      text: "Perfectas para regalar. La calidad artesanal se nota en cada detalle. ¡Muy recomendables!",
      rating: 5
    },
    {
      name: "Ana Martínez",
      text: "Compré varias para mi spa. Mis clientes siempre preguntan dónde las conseguí. Excelente trabajo.",
      rating: 5
    }
  ]

  const handleWhatsAppContact = (message: string) => {
    const phoneNumber = "523332471667"
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
  }

  const handleProductOrder = (productName: string) => {
    const message = `¡Hola! Me interesa la ${productName} de Aromatia. ¿Podrían darme más información sobre disponibilidad, precios y formas de pago?`
    handleWhatsAppContact(message)
  }

  const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    const [ref, inView] = useInView({
      threshold: 0.1,
      triggerOnce: true
    })

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={className}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <motion.header 
        style={{ y: headerY }}
        className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm"
      >
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/aromatia-logo.jpg"
                  alt="Aromatia Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-playfair font-semibold text-2xl text-primary">Aromatia</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-primary font-medium hover:text-primary/80 transition-colors">Inicio</a>
              <a href="#sobre-mi" className="text-primary font-medium hover:text-primary/80 transition-colors">Sobre Mí</a>
              <a href="#catalogo" className="text-primary font-medium hover:text-primary/80 transition-colors">Catálogo</a>
              <a href="#beneficios" className="text-primary font-medium hover:text-primary/80 transition-colors">Beneficios</a>
              <a href="#testimonios" className="text-primary font-medium hover:text-primary/80 transition-colors">Testimonios</a>
              <a href="#contacto" className="text-primary font-medium hover:text-primary/80 transition-colors">Contacto</a>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.nav 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="md:hidden mt-4 py-4"
            >
              <div className="flex flex-col space-y-4">
                <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-primary font-medium hover:text-primary/80 transition-colors">Inicio</a>
                <a href="#sobre-mi" onClick={() => setIsMenuOpen(false)} className="text-primary font-medium hover:text-primary/80 transition-colors">Sobre Mí</a>
                <a href="#catalogo" onClick={() => setIsMenuOpen(false)} className="text-primary font-medium hover:text-primary/80 transition-colors">Catálogo</a>
                <a href="#beneficios" onClick={() => setIsMenuOpen(false)} className="text-primary font-medium hover:text-primary/80 transition-colors">Beneficios</a>
                <a href="#testimonios" onClick={() => setIsMenuOpen(false)} className="text-primary font-medium hover:text-primary/80 transition-colors">Testimonios</a>
                <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="text-primary font-medium hover:text-primary/80 transition-colors">Contacto</a>
              </div>
            </motion.nav>
          )}
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://cdn.abacus.ai/images/9b510138-395b-4a33-8379-6c422e2063ac.png"
            alt="Vela artesanal encendida"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-playfair font-bold text-5xl md:text-7xl mb-6 leading-tight">
              Velas artesanales<br />
              <span className="text-amber-200">hechas a mano</span><br />
              con amor
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-amber-100 max-w-2xl mx-auto leading-relaxed">
              Cada vela cuenta una historia única. Descubre la magia de lo artesanal con productos 100% naturales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="whatsapp-button text-white font-semibold px-8 py-4 text-lg"
                onClick={() => handleWhatsAppContact("¡Hola! Me interesan las velas artesanales de Aromatia. ¿Podrían contarme más sobre sus productos?")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Hacer Pedido por WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
                onClick={() => document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Catálogo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 warm-gradient">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-6">
                  Sobre Aromatia
                </h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  <strong>Aromatia</strong> nació del amor por lo artesanal y la pasión por crear algo único y especial, 
                  algo que pueda llenar los espacios de calidez y personalidad. Somos una empresa dedicada 
                  al mundo de las velas artesanales, donde cada creación cuenta una historia.
                </p>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  En Aromatia, cada vela es el resultado de un proceso cuidadoso y detallado. Utilizamos únicamente 
                  materiales naturales de la más alta calidad para asegurar que cada pieza sea verdaderamente única, 
                  reflejando la belleza de lo artesanal y el cuidado en cada detalle.
                </p>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  No hay dos velas iguales en nuestro taller. Cada una lleva consigo nuestra dedicación, 
                  pasión y atención al detalle. Creemos que las velas no solo iluminan espacios, 
                  sino que crean momentos mágicos y memorables que perduran en el tiempo.
                </p>
                <div className="flex gap-4">
                  <Button 
                    onClick={() => handleWhatsAppContact("Hola Alejandra, me encanta la propuesta de Aromatia. Me gustaría conocer más sobre su proceso artesanal.")}
                    className="bg-primary hover:bg-primary/90"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Contáctanos
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/aromatia-person.jpg"
                    alt="Artesana de Aromatia creando velas artesanales"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full animate-float"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/40 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalogo" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-4">
              Catálogo de Velas
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Descubre nuestra colección de velas artesanales. Cada pieza única, creada especialmente para ti.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <AnimatedSection key={product.id}>
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <div className="relative aspect-square overflow-hidden rounded-t-lg bg-muted">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl text-foreground mb-2">{product.name}</h3>
                    <p className="text-foreground/70 mb-6">{product.description}</p>
                    <div className="flex justify-center">
                      <Button 
                        onClick={() => handleProductOrder(product.name)}
                        className="whatsapp-button text-white w-full"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Consultar Disponibilidad
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 warm-gradient">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-4">
              ¿Por Qué Elegir Mis Velas?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Cada vela está diseñada pensando en la calidad, la naturaleza y la experiencia única que mereces.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index}>
                <Card className="text-center bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold text-xl mb-3">{benefit.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <div className="relative aspect-[16/9] max-w-4xl mx-auto rounded-2xl overflow-hidden">
              <Image
                src="https://cdn.abacus.ai/images/0acca835-ec4c-4598-9fdf-213b3bae609c.png"
                alt="Ambiente acogedor con velas artesanales"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="font-playfair font-semibold text-2xl mb-2">
                  Crea Momentos Únicos
                </h3>
                <p className="text-amber-100 max-w-md">
                  Mis velas transforman cualquier espacio en un refugio de paz y calidez.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-4">
              Lo Que Dicen Mis Clientes
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              La satisfacción de mis clientes es mi mayor recompensa. Estas son algunas de sus experiencias.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index}>
                <Card className="bg-white border-0 shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-4 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <Heart className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-semibold text-foreground">{testimonial.name}</span>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 warm-gradient">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-4">
              ¡Hablemos!
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              ¿Tienes alguna pregunta o quieres hacer un pedido personalizado? Me encantaría escucharte.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <AnimatedSection>
              <div className="space-y-6">
                <h3 className="font-playfair font-semibold text-2xl text-primary mb-6">
                  Información de Contacto
                </h3>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">WhatsApp</h4>
                    <p className="text-foreground/70">333 247 1667</p>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-primary"
                      onClick={() => handleWhatsAppContact("¡Hola! Me interesan las velas artesanales de Aromatia.")}
                    >
                      Enviar mensaje
                    </Button>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                    <Facebook className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Facebook</h4>
                    <Link 
                      href="http://facebook.com/alejandra.cardenas.gonzales.186876" 
                      target="_blank"
                      className="text-primary hover:underline"
                    >
                      alejandra.cardenas.gonzales.186876
                    </Link>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Instagram</h4>
                    <Link 
                      href="https://instagram.com/cardenasgonzalesa" 
                      target="_blank"
                      className="text-primary hover:underline"
                    >
                      @cardenasgonzalesa
                    </Link>
                  </div>
                </div>

                <div className="bg-white/50 rounded-lg p-6 mt-8">
                  <h4 className="font-semibold text-primary mb-3">💡 Consejo</h4>
                  <p className="text-foreground/80 text-sm">
                    Para pedidos personalizados, compárteme tus ideas de colores, aromas y ocasión. 
                    ¡Me encanta crear velas únicas para cada persona!
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Quick Contact Form */}
            <AnimatedSection>
              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-playfair font-semibold text-2xl text-primary mb-6">
                    Mensaje Rápido
                  </h3>
                  <form 
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault()
                      const formData = new FormData(e.currentTarget)
                      const name = formData.get('name') as string
                      const message = formData.get('message') as string
                      const whatsappMessage = `Hola, soy ${name} y me interesa Aromatia. ${message}`
                      handleWhatsAppContact(whatsappMessage)
                    }}
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Tu Nombre
                      </label>
                      <Input 
                        id="name"
                        name="name"
                        placeholder="¿Cómo te llamas?"
                        required 
                        className="border-border focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Tu Mensaje
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Cuéntame qué tipo de vela buscas o cualquier pregunta que tengas..."
                        rows={4}
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>

                    <Button type="submit" className="w-full whatsapp-button text-white">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Enviar por WhatsApp
                    </Button>
                  </form>
                  
                  <p className="text-xs text-foreground/60 text-center mt-4">
                    Este mensaje se abrirá en WhatsApp para que puedas enviarlo directamente.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative w-8 h-8 bg-white rounded-full p-1">
                  <Image
                    src="/aromatia-logo.jpg"
                    alt="Aromatia Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-playfair font-semibold text-xl">Aromatia</span>
              </div>
              <p className="text-white/80 leading-relaxed">
                Velas artesanales hechas a mano con amor. Cada pieza única, creada especialmente para ti.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Navegación</h4>
              <div className="space-y-2">
                <a href="#inicio" className="block text-white/80 hover:text-white transition-colors">Inicio</a>
                <a href="#sobre-mi" className="block text-white/80 hover:text-white transition-colors">Sobre Mí</a>
                <a href="#catalogo" className="block text-white/80 hover:text-white transition-colors">Catálogo</a>
                <a href="#contacto" className="block text-white/80 hover:text-white transition-colors">Contacto</a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Sígueme</h4>
              <div className="flex space-x-4">
                <Link 
                  href="https://wa.me/523332471667" 
                  target="_blank"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </Link>
                <Link 
                  href="http://facebook.com/alejandra.cardenas.gonzales.186876" 
                  target="_blank"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link 
                  href="https://instagram.com/cardenasgonzalesa" 
                  target="_blank"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60">
              © 2024 Aromatia - Alejandra Cárdenas González. Hecho con ❤️ y dedicación artesanal.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          size="lg"
          className="whatsapp-button text-white shadow-lg w-14 h-14 rounded-full p-0 animate-glow"
          onClick={() => handleWhatsAppContact("¡Hola! Me interesan las velas artesanales de Aromatia. ¿Podrían ayudarme?")}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </motion.div>
    </div>
  )
}
