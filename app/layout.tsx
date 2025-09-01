import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mi Negocio Pro - Asistente de Gestión para Pequeños Negocios",
  description:
    "La app más completa para emprendedores latinos. Gestiona inventario, registra ventas y recibe consejos inteligentes con IA.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/placeholder-logo.png" }, // clásico favicon
      { url: "/placeholder-logo.png", sizes: "192x192", type: "image/png" }, // Android/manifest
      { url: "/placeholder-logo.png", sizes: "512x512", type: "image/png" }, // PWA
    ],
    shortcut: "/placeholder-logo.png",
    apple: "/placeholder-logo.png", // iOS home screen
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
