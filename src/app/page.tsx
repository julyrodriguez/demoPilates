"use client";

import React from "react";
import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import {
  Sparkles,
  Calendar,
  Clock,
  BookmarkCheck,
  MessageCircle,
  Mail,
  CreditCard,
  Users,
  BarChart3,
  ShieldCheck,
  Zap,
  MousePointerClick,
  Smartphone,
  Bell,
  Repeat,
  CheckCircle2,
} from "lucide-react";

export default function PaginaInformativa() {
  return (
    <AppShell>
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 pb-16 pt-1 sm:pt-2">
        {/* ============================================================ */}
        {/* HERO BANNER PRINCIPAL: BIENVENIDA Y PROPUESTA DE VALOR */}
        {/* ============================================================ */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-5 sm:p-8 md:p-10 border border-indigo-900/60 shadow-xl">
          {/* Background Glows */}
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 -mb-10 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-3.5 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-indigo-300 shrink-0" />
              <span className="truncate">Demo Pilates • Panel Interactivo & Guía del Sistema</span>
            </div>

            <h1 className="text-xl sm:text-3xl md:text-5xl font-black tracking-tight leading-tight sm:leading-tight">
              Bienvenido a tu plataforma de gestión de turnos.
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-medium">
              Una plataforma integral, ágil y moderna diseñada para simplificar al 100% la administración de tu estudio de Pilates y brindar una experiencia de reserva impecable y autónoma a tus alumnas.
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECCIÓN 1: QUÉ PUEDE HACER EL ADMINISTRADOR */}
        {/* ============================================================ */}
        <section className="space-y-4">
          <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-slate-800">
            <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-xl font-black text-slate-900 dark:text-slate-100">
                Módulos y Capacidades del Sistema
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
                Todas las herramientas avanzadas integradas y disponibles para probar
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {/* 1. Calendario con Ticker Broker */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 sm:p-5 shadow-xs space-y-2 hover:border-indigo-300 dark:hover:border-indigo-800 transition-colors">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shadow-2xs">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-slate-100">
                1. Agenda Semanal & Ticker en Vivo
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Visualiza la semana completa, salas asignadas, barras de aforo y un ticker en vivo estilo broker en la cabecera que transmite las últimas reservas realizadas al instante.
              </p>
            </div>

            {/* 2. Reservas Fijas Recurrentes */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 sm:p-5 shadow-xs space-y-2 hover:border-indigo-300 dark:hover:border-indigo-800 transition-colors">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-2xs">
                <Repeat className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-slate-100">
                2. Reservas Fijas Recurrentes
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Asigna a una alumna sus turnos fijos (ej. Martes y Jueves a las 15:00 hs) para todo el mes con 1 clic. El sistema reserva sus lugares automáticamente y bloquea semanas pasadas.
              </p>
            </div>

            {/* 3. Control de Asistencia y Ausentes */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 sm:p-5 shadow-xs space-y-2 hover:border-indigo-300 dark:hover:border-indigo-800 transition-colors">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-2xs">
                <BookmarkCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-slate-100">
                3. Presentes y Ausentes Visuales
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Pasa lista en 1 toque. Marca quién asistió o quién faltó (con distintivo rojo en la grilla del calendario) para un control exacto de reposiciones y cupos.
              </p>
            </div>

            {/* 4. WhatsApp y Avisos de Clases Restantes */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 sm:p-5 shadow-xs space-y-2 hover:border-indigo-300 dark:hover:border-indigo-800 transition-colors">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-2xs">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-slate-100">
                4. WhatsApp: Recordatorios y Clases Restantes
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Envía recordatorios de asistencia y notificaciones a alumnas sobre cuántas clases les quedan en su plan mensual con un mensaje listo para enviar en 1 toque.
              </p>
            </div>

            {/* 5. Notificaciones en Tiempo Real */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 sm:p-5 shadow-xs space-y-2 hover:border-indigo-300 dark:hover:border-indigo-800 transition-colors">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shadow-2xs">
                <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-slate-100">
                5. Campanita & Notificaciones de Pantalla
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Banners animados, sonido configurable y campanita con contador en tiempo real cada vez que una alumna reserva o cancela su lugar en el estudio.
              </p>
            </div>

            {/* 6. Planes, Membresías y Pagos */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 sm:p-5 shadow-xs space-y-2 hover:border-indigo-300 dark:hover:border-indigo-800 transition-colors">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center shadow-2xs">
                <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-slate-100">
                6. Planes Mensuales & Semanales
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Control mensual unificado de abonos (1x, 2x, 3x por semana, pase libre), cómputo de consumos reales y conmutador de pago al día vs pendiente.
              </p>
            </div>

            {/* 7. CRM de Alumnos con Historial */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 sm:p-5 shadow-xs space-y-2 hover:border-indigo-300 dark:hover:border-indigo-800 transition-colors">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center shadow-2xs">
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-slate-100">
                7. Ficha y Directorio de Alumnos (CRM)
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Directorio completo con historial de clases mes a mes, turnos tomados, plan vigente, notas posturales y filtro por bajo consumo de abonos.
              </p>
            </div>

            {/* 8. Estadísticas & Finanzas */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 sm:p-5 shadow-xs space-y-2 hover:border-indigo-300 dark:hover:border-indigo-800 transition-colors">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shadow-2xs">
                <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-slate-100">
                8. Panel de Estadísticas & Facturación
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Métricas financieras del mes, proyección anual, arancel promedio por alumna, distribución de planes y ranking de disciplinas más demandadas.
              </p>
            </div>

            {/* 9. Simulador y Auditoría de Emails */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 sm:p-5 shadow-xs space-y-2 hover:border-indigo-300 dark:hover:border-indigo-800 transition-colors">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shadow-2xs">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-slate-100">
                9. Centro de Auditoría de Emails
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Consulta el historial exacto de cada email emitido a los alumnos, previsualiza el diseño renderizado y prueba los enlaces de cancelación con un clic.
              </p>
            </div>

            {/* 10. Generador de Imagen para Instagram */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 sm:p-5 shadow-xs space-y-2 hover:border-indigo-300 dark:hover:border-indigo-800 transition-colors">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-pink-50 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 flex items-center justify-center shadow-2xs">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-slate-100">
                10. Generador de Imagen para Instagram
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Exportación directa de cronogramas semanales en 4K con tema Lavender Aura, formatos stories/feed y personalización completa de colores y tipografía.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECCIÓN 2: PORTAL PÚBLICO DE RESERVAS (/reservar) */}
        {/* ============================================================ */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-8 shadow-xs space-y-5 sm:space-y-6">
          <div className="space-y-1 pb-3 sm:pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Experiencia Alumno</span>
            </div>
            <h2 className="text-base sm:text-2xl font-black text-slate-900 dark:text-slate-100">
              ¿Cómo funciona el Portal Público de Reservas?
            </h2>
            <p className="text-[11px] sm:text-xs md:text-sm text-slate-500 dark:text-slate-400">
              Diseñado para que cualquier alumna reserve en menos de 10 segundos desde su teléfono móvil
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {/* Beneficio 1 */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 space-y-1.5 sm:space-y-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 flex items-center justify-center font-bold text-xs">
                1
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
                Sin Login ni Contraseñas
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Las alumnas no necesitan recordar contraseñas ni registrarse previamente. Eligen el día en el carrusel interactivo (semana actual y siguiente), eligen la clase y reservan al instante.
              </p>
            </div>

            {/* Beneficio 2: Autocompletado */}
            <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/80 space-y-1.5 sm:space-y-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-2xs">
                2
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-indigo-950 dark:text-indigo-200 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span>Autocompletado Inteligente</span>
              </h4>
              <p className="text-[11px] sm:text-xs text-indigo-900/80 dark:text-indigo-300/80 leading-relaxed font-medium">
                Cuando una alumna ya reservó una vez, en sus próximas reservas con solo escribir su <strong>email o teléfono</strong>, el sistema <strong>autocompleta su nombre y datos automáticamente</strong> para que no tenga que escribirlos nunca más.
              </p>
            </div>

            {/* Beneficio 3: Autogestión */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 space-y-1.5 sm:space-y-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 flex items-center justify-center font-bold text-xs">
                3
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
                Autogestión & Cancelación Autónoma
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Cada email de confirmación incluye un enlace exclusivo (ej. <code className="font-mono text-[10px] text-indigo-600">/cancelar/CODIGO</code>) que le permite a la alumna modificar o cancelar su turno de forma 100% autónoma, liberando el lugar automáticamente en tu agenda.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECCIÓN 3: INVITACIÓN A PROBAR EL SISTEMA (Botones al final) */}
        {/* ============================================================ */}
        <section className="rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-5 sm:p-8 border border-indigo-900/60 shadow-lg space-y-4 sm:space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md shrink-0">
              <MousePointerClick className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-xl font-black">
                ¡Te invitamos a probar todo lo que quieras!
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5">
                Este entorno Demo está completamente operativo para que experimentes con total libertad
              </p>
            </div>
          </div>

          <p className="text-[11px] sm:text-xs md:text-sm text-slate-300 leading-relaxed">
            Puedes interactuar con todas las pantallas: crear clases nuevas, abrir el portal público en tu celular o en otra pestaña para reservar como si fueras una alumna, verificar la llegada de los correos en tiempo real, probar la cancelación autónoma y enviar recordatorios por WhatsApp.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1 sm:pt-2">
            <Link
              href="/calendario"
              className="p-3 sm:p-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 text-center text-xs font-bold flex items-center justify-center gap-2 transition-colors active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>Ver Agenda Semanal</span>
            </Link>

            <Link
              href="/reservar"
              target="_blank"
              className="p-3 sm:p-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-center text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-md shadow-indigo-600/30 active:scale-[0.98]"
            >
              <Smartphone className="w-4 h-4 text-white shrink-0" />
              <span>Probar Reserva como Alumno</span>
            </Link>

            <Link
              href="/turnos"
              className="p-3 sm:p-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 text-center text-xs font-bold flex items-center justify-center gap-2 transition-colors active:scale-[0.98]"
            >
              <Clock className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Gestionar Clases</span>
            </Link>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
