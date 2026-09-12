"use client";

import React from "react";
import { Client } from "@/types";
import { ClientForm } from "./ClientForm";
import { UserCheck, X } from "lucide-react";

interface ClientFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  clientToEdit?: Client | null;
}

export function ClientFormModal({ isOpen, onClose, clientToEdit }: ClientFormModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs p-3 sm:p-4">
      <div className="min-h-full flex items-start sm:items-center justify-center pt-6 pb-6 sm:py-8">
        <div className="bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 rounded-3xl p-4 sm:p-6 max-w-md w-full shadow-2xl animate-modal max-h-[88dvh] sm:max-h-[90vh] flex flex-col ring-1 ring-black/10 my-auto sm:my-0">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-slate-800 shrink-0">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-xs shrink-0 font-black">
                <UserCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
                  {clientToEdit ? "Editar Ficha" : "Alta de Alumno"}
                </span>
                <h2 className="text-sm sm:text-base font-black text-slate-900 dark:text-slate-100 truncate">
                  {clientToEdit ? clientToEdit.name : "Nuevo Alumno"}
                </h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 shrink-0 touch-manipulation cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content with clean scrolling */}
          <div className="flex-1 overflow-y-auto pr-1 scrollbar-thin">
            <ClientForm
              initialClient={clientToEdit}
              onSuccess={onClose}
              onCancel={onClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
