import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { LayoutGrid, Search, Sparkles, X } from "lucide-react";
import PanelCard from "./components/PanelCard";
import { PANELES_DATA, PILAR_COLORS, DEFAULT_PILAR_COLOR } from "./data/paneles";

// ── Unique pilars from data ──
const ALL_PILARES = ["Todos", ...Array.from(new Set(PANELES_DATA.map((p) => p.pilar)))];

export default function App() {
  const [selectedPilar, setSelectedPilar] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPaneles = useMemo(() => {
    return PANELES_DATA.filter((panel) => {
      const matchesPilar = selectedPilar === "Todos" || panel.pilar === selectedPilar;
      const matchesSearch =
        searchQuery === "" ||
        panel.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        panel.descripcion.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesPilar && matchesSearch;
    });
  }, [selectedPilar, searchQuery]);

  return (
    <div className="noise-bg min-h-screen">
      {/* ── Ambient Gradient Orbs ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600/[0.03] rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-violet-600/[0.04] rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-600/[0.02] rounded-full blur-[140px]" />
      </div>

      {/* ── Header ── */}
      <header className="relative z-10 border-b border-[var(--color-border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-violet-500/20">
                <LayoutGrid size={20} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
                  Consolidado de Paneles
                </h1>
                <p className="text-sm text-[var(--color-text-secondary)] mt-0.5">
                  Dashboard de visualización · {PANELES_DATA.length} paneles disponibles
                </p>
              </div>
            </div>

            {/* ── Search ── */}
            <div className="relative w-full sm:w-72">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] pointer-events-none" />
              <input
                type="text"
                placeholder="Buscar paneles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-9 pr-9 rounded-xl text-sm bg-[var(--color-surface-elevated)] border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-blue-500/50 hover:border-[var(--color-border-hover)] transition-colors duration-200"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors cursor-pointer"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </header>

      {/* ── Main Content ── */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* ── Filter Pills ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {ALL_PILARES.map((pilar) => {
            const isActive = selectedPilar === pilar;
            const pilarStyle = pilar !== "Todos" ? (PILAR_COLORS[pilar] ?? DEFAULT_PILAR_COLOR) : null;

            return (
              <button
                key={pilar}
                onClick={() => setSelectedPilar(pilar)}
                className={`
                  inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium
                  transition-all duration-300 cursor-pointer border
                  ${
                    isActive
                      ? "bg-white/10 border-white/15 text-white shadow-lg shadow-white/5"
                      : "bg-[var(--color-surface-elevated)] border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-hover)]"
                  }
                `}
              >
                {pilarStyle && (
                  <span
                    className={`w-2 h-2 rounded-full ${pilarStyle.dot} ${
                      isActive ? "animate-pulse" : ""
                    }`}
                  />
                )}
                {pilar === "Todos" && <Sparkles size={14} className={isActive ? "text-violet-400" : ""} />}
                {pilar}
              </button>
            );
          })}
        </motion.div>

        {/* ── Results Counter ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xs text-[var(--color-text-muted)] mb-6 tracking-wide uppercase"
        >
          {filteredPaneles.length} {filteredPaneles.length === 1 ? "panel encontrado" : "paneles encontrados"}
        </motion.p>

        {/* ── Grid ── */}
        {filteredPaneles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredPaneles.map((panel, index) => (
              <PanelCard key={panel.id} panel={panel} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-20"
          >
            <div className="w-16 h-16 rounded-2xl bg-[var(--color-surface-elevated)] flex items-center justify-center mb-4 border border-[var(--color-border-subtle)]">
              <Search size={24} className="text-[var(--color-text-muted)]" />
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm">No se encontraron paneles</p>
            <p className="text-[var(--color-text-muted)] text-xs mt-1">
              Intenta con otro filtro o término de búsqueda
            </p>
          </motion.div>
        )}
      </main>
    </div>
  );
}
