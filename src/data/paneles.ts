// ──────────────────────────────────────────────────────────────
// 📊 DATOS DE PANELES — Reemplaza este arreglo con tus datos
// ──────────────────────────────────────────────────────────────

export interface Panel {
  id: string;
  imagen: string;
  titulo: string;
  descripcion: string;
  pilar: string;
  ultima_actualizacion: string;
  frecuencia: string;
  link: string; // URL del panel real
}

export const PANELES_DATA: Panel[] = [
  {
    id: "panel-001",
    imagen: "/assets/panels/inspecciones_integradas.png",
    titulo: "Inspecciones Integradas",
    descripcion: "Monitoreo en tiempo real de inspecciones integradas",
    pilar: "Aseguramiento",
    ultima_actualizacion: "Una vez al día",
    frecuencia: "8:00 am",
    link: "https://app.powerbi.com/view?r=eyJrIjoiNDYyZjdhMGYtN2NmOC00YjNkLTk1MGItZDU5YzQ2MTI0MDg1IiwidCI6IjRmZDY0OGJjLWNjMWYtNDMwMi05ZjFiLThmZTlmODlmYTA5MiIsImMiOjR9"
  },
  {
    id: "panel-002",
    imagen: "/assets/panels/panel_salud.png",
    titulo: "Salud Ocupacional",
    descripcion: "Seguimiento de exámenes médicos",
    pilar: "Salud",
    ultima_actualizacion: "04/05/2026",
    frecuencia: "Mensual",
    link: "https://app.powerbi.com/view?r=eyJrIjoiM2QyNmNiNDUtOTg0MS00MzJlLWI4NGMtMjFkYTY4Y2Q4MjQyIiwidCI6IjRmZDY0OGJjLWNjMWYtNDMwMi05ZjFiLThmZTlmODlmYTA5MiIsImMiOjR9"
  },
  {
    id: "panel-003",
    imagen: "/assets/panels/panel_pplo.png",
    titulo: "Cuplimiento del PPLO",
    descripcion: "Métricas del Programa de Líderes Operacionales.",
    pilar: "Cultura",
    ultima_actualizacion: "Diaria",
    frecuencia: "Diaria: 8:00 am",
    link: "https://app.powerbi.com/view?r=eyJrIjoiMmRlNDY3ZTctOWVjNi00Y2M2LWI5OTAtMzU0MDE0MTRlZTRjIiwidCI6IjRmZDY0OGJjLWNjMWYtNDMwMi05ZjFiLThmZTlmODlmYTA5MiIsImMiOjR9"
  },
  {
    id: "panel-004",
    imagen: "/assets/panels/panel_grua.png",
    titulo: "Inspecciones de Grúas Horquilla",
    descripcion: "Inspecciones de seguridad de grúas horquilla.",
    pilar: "Aseguramiento",
    ultima_actualizacion: "Diaria",
    frecuencia: "Diaria: 8:00 am",
    link: "https://app.powerbi.com/view?r=eyJrIjoiY2U2MmRiYzgtN2EyOS00MGUxLWJhZDgtNDE1ZTA0NDEzY2MxIiwidCI6IjRmZDY0OGJjLWNjMWYtNDMwMi05ZjFiLThmZTlmODlmYTA5MiIsImMiOjR9"
  }
  ,
  {
    id: "panel-005",
    imagen: "/assets/panels/panel_miper.png",
    titulo: "Panel MIPER",
    descripcion: "Matriz de Identificación de Peligros y Evaluación de Riesgos",
    pilar: "Riesgos",
    ultima_actualizacion: "04/05/2026",
    frecuencia: "Semestral",
    link: "https://app.powerbi.com/view?r=eyJrIjoiZmJlYzY4YWUtYzAxYy00ZDJkLTkzYWEtNjQ0ODAzYzY1ODMzIiwidCI6IjRmZDY0OGJjLWNjMWYtNDMwMi05ZjFiLThmZTlmODlmYTA5MiIsImMiOjR9"
  }
];

// ──────────────────────────────────────────────────────────────
// Mapa de colores por pilar
// ──────────────────────────────────────────────────────────────
export const PILAR_COLORS: Record<string, { bg: string; text: string; dot: string; gradient: string }> = {
  Riesgos: {
    bg: "bg-rose-500/10",
    text: "text-rose-400",
    dot: "bg-rose-400",
    gradient: "from-rose-500/20 to-rose-500/0",
  },
  Salud: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    dot: "bg-emerald-400",
    gradient: "from-emerald-500/20 to-emerald-500/0",
  },
  Cultura: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    dot: "bg-blue-400",
    gradient: "from-blue-500/20 to-blue-500/0",
  },
  Aseguramiento: {
    bg: "bg-violet-500/10",
    text: "text-violet-400",
    dot: "bg-violet-400",
    gradient: "from-violet-500/20 to-violet-500/0",
  },
};

export const DEFAULT_PILAR_COLOR = {
  bg: "bg-gray-500/10",
  text: "text-gray-400",
  dot: "bg-gray-400",
  gradient: "from-gray-500/20 to-gray-500/0",
};