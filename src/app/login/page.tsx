"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirigir de inmediato al panel principal
    const timer = setTimeout(() => {
      router.replace("/");
    }, 1200);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl text-center space-y-5">
        <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto shadow-sm">
          <Sparkles className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Acceso Libre • Sin Contraseñas</span>
          </div>
          <h1 className="text-xl font-black text-slate-900 dark:text-slate-100">
            Entorno Demo Pilates
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            En este entorno de demostración no requieres usuario ni contraseña. Ingresas con perfil de administrador activo para probar el sistema libremente.
          </p>
        </div>

        <Link
          href="/"
          className="w-full py-3 px-4 rounded-xl text-xs font-bold btn-primary flex items-center justify-center gap-2"
        >
          <span>Ir al Panel Principal</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
