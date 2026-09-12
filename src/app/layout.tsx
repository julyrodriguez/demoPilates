import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";
import { DataProvider } from "@/context/DataContext";
import { NotificationProvider } from "@/context/NotificationContext";
import { NotificationBanner } from "@/components/notifications/NotificationBanner";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://demopilates.jariel.com.ar";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Demo Pilates Studio | Sistema de Gestión y Reservas",
    template: "%s | Demo Pilates Studio",
  },
  description:
    "Entorno interactivo de demostración de Demo Pilates Studio. Explora la gestión de turnos, portal de reservas online, planes y control de asistencia con almacenamiento local.",
  keywords: [
    "Demo Pilates",
    "Pilates Reformer",
    "Gestión de turnos demo",
    "Reservar clases pilates",
    "Software para estudios de pilates",
  ],
  authors: [{ name: "Demo Pilates Studio" }],
  creator: "Demo Pilates",
  publisher: "Demo Pilates Studio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "Demo Pilates Studio",
    title: "Demo Pilates Studio | Sistema de Gestión y Reservas",
    description:
      "Entorno de demostración interactivo con almacenamiento local (LocalCache). Prueba reservas, cancelación autónoma y panel de administración.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Demo Pilates Studio | Sistema de Gestión y Reservas",
    description:
      "Entorno de demostración interactivo con almacenamiento local (LocalCache). Prueba reservas, cancelación autónoma y panel de administración.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased selection:bg-indigo-600 selection:text-white bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100">
        <ThemeProvider>
          <AuthProvider>
            <DataProvider>
              <NotificationProvider>
                <NotificationBanner />
                {children}
              </NotificationProvider>
            </DataProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
