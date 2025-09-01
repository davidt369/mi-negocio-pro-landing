"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  BarChart3,
  Package,
  ShoppingCart,
  MessageCircle,
  Shield,
  Smartphone,
  Download,
  QrCode,
  Play,
  Clock,
  TrendingUp,
  Zap,
  Target,
} from "lucide-react"

import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  const [qrUrl, setQrUrl] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/5">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="/images/logo.png"
              alt="Mi Negocio Pro Logo"
              className="w-10 h-10 rounded-lg"
            />
            <h1 className="text-xl font-bold text-foreground">Mi Negocio Pro</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              Características
            </a>
            <a href="#screenshots" className="text-muted-foreground hover:text-primary transition-colors">
              Capturas
            </a>
            <a href="#video" className="text-muted-foreground hover:text-primary transition-colors">
              Demo
            </a>
            <a href="#download" className="text-muted-foreground hover:text-primary transition-colors">
              Descargar
            </a>
          </nav>
          <div className="text-center">
            <a
              href="/apk/mi-negocio-pro.apk" // nota: no poner /public
              download
              className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition"
            >
              <Download className="mr-2 h-5 w-5" />
              Descargar Gratis
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 animate-pulse">
            ✨ Nuevo: Asistente IA Integrado
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            La solución completa para tu negocio
          </h1>
          <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
            Mi Negocio Pro resuelve el problema principal de los pequeños empresarios: herramientas accesibles y fáciles
            de usar para gestionar inventario, ventas y contabilidad básica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {/* Botón Descargar APK */}
            <Button
              asChild
              className="flex items-center justify-center text-lg px-8 py-6 rounded-lg transition w-full sm:w-64"
            >
              <a
                href="/apk/mi-negocio-pro.apk"
                download
                className="flex items-center gap-2 w-full justify-center"
              >
                <Download className="h-5 w-5" />
                Descargar Gratis
              </a>
            </Button>

            {/* Botón Ver Demo */}
            <Button
              variant="outline"
              className="flex items-center justify-center text-lg px-8 py-6 rounded-lg transition w-full sm:w-64"
            >
              <Play className="mr-2 h-5 w-5" />
              Ver Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <div className="text-lg font-semibold text-primary mb-2">Ahorra Tiempo</div>
              <div className="text-muted-foreground text-sm">
                Automatiza tareas repetitivas y evita errores manuales
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <div className="text-lg font-semibold text-primary mb-2">Mejores Decisiones</div>
              <div className="text-muted-foreground text-sm">Reportes claros y consejos inteligentes para crecer</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <div className="text-lg font-semibold text-primary mb-2">Crece Escalable</div>
              <div className="text-muted-foreground text-sm">Se adapta a tus necesidades con futuras integraciones</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">¿Por qué elegir Mi Negocio Pro?</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Diseñada específicamente para emprendedores latinoamericanos que buscan simplicidad, control y crecimiento
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Registro en segundos</h3>
                  <p className="text-muted-foreground">
                    Registra ventas y productos sin conocimientos técnicos ni procesos complicados
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Control total del inventario</h3>
                  <p className="text-muted-foreground">
                    Alertas automáticas de bajo stock y visualización en tiempo real
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Chatbot inteligente</h3>
                  <p className="text-muted-foreground">
                    Responde preguntas como "¿Cuánto gané el mes pasado?" y da consejos personalizados
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Accesible en web y móvil</h3>
                  <p className="text-muted-foreground">
                    Usa la app desde cualquier dispositivo, sin infraestructura costosa
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Reportes simples y útiles</h3>
              <p className="text-muted-foreground mb-6">
                Obtén reportes visuales de ventas, productos más vendidos y proyecciones de ingresos para tomar
                decisiones informadas
              </p>
              <Button className="bg-primary hover:bg-primary/90">Ver ejemplo de reporte</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
              Todo lo que necesitas para hacer crecer tu negocio
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Herramientas profesionales sin complicaciones ni costos elevados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Gestión de Inventario</CardTitle>
                <CardDescription>
                  Controla tu stock, recibe alertas automáticas y evita quiebres de inventario
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Registro de Ventas</CardTitle>
                <CardDescription>
                  Registra ventas en segundos y mantén tu inventario siempre actualizado
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Reportes Visuales</CardTitle>
                <CardDescription>
                  Analiza tus ventas con gráficos interactivos y exporta tus datos fácilmente
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Asistente IA</CardTitle>
                <CardDescription>
                  Recibe consejos personalizados y respuestas instantáneas sobre tu negocio
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Datos Seguros</CardTitle>
                <CardDescription>Tus datos protegidos localmente con respaldo automático en la nube</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Funciona Offline</CardTitle>
                <CardDescription>Usa la app sin conexión a internet, perfecta para cualquier situación</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
              Diseñada para móviles, perfecta para tu negocio
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Interfaz intuitiva y moderna que hace que gestionar tu negocio sea simple y eficiente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dashboard */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-4 mb-4 aspect-[9/16] flex items-center justify-center">
                <Image
                  src="/images/dashboard.jpg"
                  alt="Dashboard Principal"
                  width={300}
                  height={600}
                  className="rounded-xl object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2">Dashboard Principal</h3>
              <p className="text-muted-foreground text-sm">
                Vista general de tu negocio con métricas clave
              </p>
            </div>

            {/* Inventario */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-4 mb-4 aspect-[9/16] flex items-center justify-center">
                <Image
                  src="/images/inventario.jpg"
                  alt="Gestión de Inventario"
                  width={300}
                  height={600}
                  className="rounded-xl object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2">Gestión de Inventario</h3>
              <p className="text-muted-foreground text-sm">
                Controla tu stock de manera visual e intuitiva
              </p>
            </div>

            {/* Reportes */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-4 mb-4 aspect-[9/16] flex items-center justify-center">
                <Image
                  src="/images/reports.jpg"
                  alt="Reportes y Análisis"
                  width={300}
                  height={600}
                  className="rounded-xl object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2">Reportes y Análisis</h3>
              <p className="text-muted-foreground text-sm">
                Gráficos detallados de tus ventas y ganancias
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section id="video" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Ve Mi Negocio Pro en acción</h2>
          <p className="text-xl text-muted-foreground text-pretty mb-12 max-w-2xl mx-auto">
            Descubre cómo nuestra app puede transformar la gestión de tu negocio en solo 2 minutos
          </p>

          <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 aspect-video flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto hover:bg-primary/90 transition-colors cursor-pointer">
                <Play className="h-8 w-8 text-white ml-1" />
              </div>
              <p className="text-muted-foreground">Haz clic para ver el video demo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Descarga Mi Negocio Pro ahora</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Disponible para iOS y Android. Comienza gratis y haz crecer tu negocio hoy mismo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Download Buttons */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* <Button size="lg" className="bg-primary hover:bg-primary/90 flex-1">
                  <Download className="mr-2 h-5 w-5" />
                  Descargar para iOS
                </Button> */}
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 flex-1">

                  <a
                    href="/apk/mi-negocio-pro.apk"
                    download
                    className="flex items-center gap-2 w-full justify-center"
                  >
                    <Download className="h-5 w-5" />
                    Descargar para Android
                  </a>
                </Button>

              </div>

              <div className="text-center text-muted-foreground">
                <p className="mb-4">O escanea el código QR para descargar:</p>
              </div>
            </div>

            {/* QR Code Section */}
            <Card className="p-6">
              <CardHeader className="text-center pb-4">
                <CardTitle className="flex items-center justify-center gap-2">
                  <QrCode className="h-5 w-5" />
                  Código QR de Descarga
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="qr-url">URL de descarga</Label>
                  <Input
                    id="qr-url"
                    placeholder="https://play.google.com/store/apps/..."
                    value={qrUrl}
                    onChange={(e) => setQrUrl(e.target.value)}
                  />
                </div>
                <div className="bg-muted rounded-lg p-8 flex items-center justify-center aspect-square">
                  {qrUrl ? (
                    <div className="text-center">
                      <QrCode className="h-24 w-24 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Código QR generado</p>
                    </div>
                  ) : (
                    <div className="text-center text-muted-foreground">
                      <QrCode className="h-16 w-16 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">Ingresa una URL para generar el QR</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">¿Por qué deberías usar Mi Negocio Pro?</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              La solución ideal para emprendedores que buscan simplicidad, control y crecimiento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-primary/20 p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Ahorra tiempo y dinero</h3>
                <p className="text-muted-foreground mb-4">
                  Automatiza tareas repetitivas y evita errores manuales. Dedica más tiempo a hacer crecer tu negocio en
                  lugar de perderlo en papeleo.
                </p>
                <div className="text-sm text-primary font-medium">
                  ✓ Registro automático de inventario
                  <br />✓ Cálculos precisos sin errores
                  <br />✓ Reportes instantáneos
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Toma mejores decisiones</h3>
                <p className="text-muted-foreground mb-4">
                  Con reportes claros y consejos inteligentes, sabrás exactamente qué hacer para crecer y maximizar tus
                  ganancias.
                </p>
                <div className="text-sm text-primary font-medium">
                  ✓ Productos más vendidos
                  <br />✓ Proyecciones de ingresos
                  <br />✓ Consejos personalizados de IA
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Crece con tu negocio</h3>
                <p className="text-muted-foreground mb-4">
                  La app está pensada para escalar y adaptarse a tus necesidades, con futuras integraciones a sistemas
                  de pago y contabilidad.
                </p>
                <div className="text-sm text-primary font-medium">
                  ✓ Escalable a cualquier tamaño
                  <br />✓ Integraciones futuras
                  <br />✓ Soporte continuo
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Apoyo local</h3>
                <p className="text-muted-foreground mb-4">
                  Fortalece el tejido empresarial de tu comunidad y accede a herramientas pensadas específicamente para
                  el mercado latinoamericano.
                </p>
                <div className="text-sm text-primary font-medium">
                  ✓ Diseñado para Latinoamérica
                  <br />✓ Modelo flexible de precios
                  <br />✓ Soporte en español
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/images/logo.png"
                  alt="Mi Negocio Pro Logo"
                  className="w-8 h-8 rounded-lg"
                />
                <h3 className="text-lg font-bold">Mi Negocio Pro</h3>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                La solución completa para emprendedores latinoamericanos. Gestiona tu negocio de forma profesional, sin
                complicaciones ni costos elevados.
              </p>
              <div className="flex space-x-4">
                {/* <Button size="sm" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  iOS
                </Button> */}
                <Button size="sm" variant="outline">
                  <a href="/apk/mi-negocio-pro.apk" download className="flex items-center gap-2">
                    <Download className="mr-2 h-4 w-4" />
                    Android
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Producto</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#features" className="hover:text-primary transition-colors">
                    Características
                  </a>
                </li>
                <li>
                  <a href="#screenshots" className="hover:text-primary transition-colors">
                    Capturas
                  </a>
                </li>
                <li>
                  <a href="#video" className="hover:text-primary transition-colors">
                    Demo
                  </a>
                </li>
                <li>
                  <a href="#download" className="hover:text-primary transition-colors">
                    Descargar
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Centro de Ayuda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Términos de Servicio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacidad
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Mi Negocio Pro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
