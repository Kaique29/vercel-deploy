// Data/hora do fim do semestre (fuso de Brasília, UTC-3).
// Altere aqui, ou defina NEXT_PUBLIC_SEMESTER_END na Vercel (ex.: 2026-12-18T23:59:59-03:00).
export const fimDoSemestre =
  process.env.NEXT_PUBLIC_SEMESTER_END || "2026-12-18T23:59:59-03:00";

// Timeline: edite os textos e troque as fotos em /public/semestres
// (basta colocar o arquivo lá e mudar o campo "foto").
export const semestres = [
  {
    semestre: 1,
    periodo: "2025.1",
    titulo: "Lógica de Programação e Páginas Web",
    descricao:
      "Primeiros algoritmos em Python e a primeira página pessoal em HTML e CSS, com foco em lógica e estrutura básica.",
    tecnologias: ["Python", "HTML", "CSS"],
    foto: "/semestres/semestre-1.svg",
  },
  {
    semestre: 2,
    periodo: "2025.2",
    titulo: "Interfaces Interativas",
    descricao:
      "Site responsivo com JavaScript, consumo de uma API pública e trabalho em equipe usando Git e GitHub.",
    tecnologias: ["JavaScript", "Git", "API REST"],
    foto: "/semestres/semestre-2.svg",
  },
  {
    semestre: 3,
    periodo: "2026.1",
    titulo: "Banco de Dados e Back-end",
    descricao:
      "Modelagem de dados, SQL e uma API com CRUD completo para um sistema de cadastro.",
    tecnologias: ["SQL", "Node.js", "Express"],
    foto: "/semestres/semestre-3.svg",
  },
  {
    semestre: 4,
    periodo: "2026.2",
    titulo: "Aplicação Full Stack com Next.js",
    descricao:
      "Projeto integrando front-end e back-end, com deploy na Vercel e o relógio de contagem regressiva desta página.",
    tecnologias: ["Next.js", "React", "Vercel"],
    foto: "/semestres/semestre-4.svg",
  },
];
