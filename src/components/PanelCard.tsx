import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardFooter } from "@heroui/react";
import { Calendar, RefreshCw, Maximize2, X, ExternalLink } from "lucide-react";
import type { Panel } from "../data/paneles";
import { PILAR_COLORS, DEFAULT_PILAR_COLOR } from "../data/paneles";

interface PanelCardProps {
  panel: Panel;
  index: number;
}

export default function PanelCard({ panel, index }: PanelCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const pilarColor = PILAR_COLORS[panel.pilar] ?? DEFAULT_PILAR_COLOR;

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: index * 0.08,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <Card
          className="card-hover group overflow-hidden border border-[var(--color-border-subtle)] bg-[var(--color-surface-card)] rounded-2xl cursor-pointer relative"
          onClick={toggleExpand}
        >
          {/* ── Image Section ── */}
          <div className="relative overflow-hidden rounded-t-2xl aspect-[16/9]">
            <img
              src={panel.imagen}
              alt={panel.titulo}
              className="img-zoom w-full h-full object-cover"
              loading="lazy"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* Expand Icon on Hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                <Maximize2 size={20} />
              </div>
            </div>

            {/* Pilar badge */}
            <div className="absolute top-3 left-3">
              <span
                className={`pill-badge inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${pilarColor.bg} ${pilarColor.text} border border-white/5`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${pilarColor.dot}`} />
                {panel.pilar}
              </span>
            </div>

            {/* Frequency badge */}
            <div className="absolute top-3 right-3">
              <span className="pill-badge inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-medium bg-white/10 text-white/80 border border-white/10">
                <RefreshCw size={10} className="opacity-70" />
                {panel.frecuencia}
              </span>
            </div>
          </div>

          {/* ── Content ── */}
          <CardContent className="px-5 pt-4 pb-2">
            <h3 className="text-base font-semibold text-[var(--color-text-primary)] leading-snug mb-2 line-clamp-2 group-hover:text-white transition-colors duration-300">
              {panel.titulo}
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-2">
              {panel.descripcion}
            </p>
          </CardContent>

          {/* ── Footer ── */}
          <CardFooter className="px-5 pb-4 pt-1">
            <div className="flex items-center gap-1.5 text-[var(--color-text-muted)]">
              <Calendar size={12} />
              <span className="text-xs">{panel.ultima_actualizacion}</span>
            </div>
          </CardFooter>

          {/* ── Bottom gradient accent ── */}
          <div
            className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${pilarColor.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          />
        </Card>
      </motion.div>

      {/* ── Expanded View Modal ── */}
      <AnimatePresence>
        {isExpanded && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleExpand}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-[var(--color-surface-card)] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <button
                onClick={toggleExpand}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/10 hover:bg-white/20 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/3 aspect-video lg:aspect-auto overflow-hidden">
                  <img
                    src={panel.imagen}
                    alt={panel.titulo}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="lg:w-1/3 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${pilarColor.bg} ${pilarColor.text} border border-white/5 mb-4`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${pilarColor.dot}`} />
                      {panel.pilar}
                    </span>
                    
                    <h2 className="text-2xl font-bold text-white mb-4 leading-tight">
                      {panel.titulo}
                    </h2>
                    
                    <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                      {panel.descripcion}
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-sm text-[var(--color-text-muted)]">
                        <Calendar size={16} />
                        <span>Última actualización: {panel.ultima_actualizacion}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-[var(--color-text-muted)]">
                        <RefreshCw size={16} />
                        <span>Frecuencia: {panel.frecuencia}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <a
                      href={panel.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-300 shadow-lg shadow-blue-600/20 group"
                    >
                      <span>Abrir Panel Completo</span>
                      <ExternalLink size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
