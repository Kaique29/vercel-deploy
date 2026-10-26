// Data/hora do fim do semestre (fuso de Brasília, UTC-3).
// Altere aqui, ou defina NEXT_PUBLIC_SEMESTER_END na Vercel (ex.: 2026-12-18T23:59:59-03:00).
export const fimDoSemestre =
  process.env.NEXT_PUBLIC_SEMESTER_END || "2026-12-18T23:59:59-03:00";

// Timeline do curso de Análise e Desenvolvimento de Sistemas (ADS).
// Os projetos abaixo são exemplos: troque os textos e as fotos em /public/semestres
// (coloque o arquivo lá e mude o campo "foto").
export const semestres = [
  {
    semestre: 1,
    periodo: "2025.1",
    titulo: "Calculadora de IMC e Jogo de Adivinhação",
    descricao:
      "Primeiros programas em Python no terminal, usando lógica de programação, variáveis, condicionais e laços de repetição.",
    tecnologias: ["Python", "Algoritmos", "Lógica"],
    foto: "/semestres/semestre-1.svg",
  },
  {
    semestre: 2,
    periodo: "2025.2",
    titulo: "Sistema de Biblioteca",
    descricao:
      "Cadastro de livros e usuários com empréstimo e devolução, aplicando orientação a objetos, classes e herança, com diagramas UML.",
    tecnologias: ["Java", "POO", "UML"],
    foto: "/semestres/semestre-2.svg",
  },
  {
    semestre: 3,
    periodo: "2026.1",
    titulo: "Sistema de Controle de Estoque",
    descricao:
      "Modelagem do banco de dados (MER), consultas SQL e uma aplicação com CRUD completo de produtos e fornecedores.",
    tecnologias: ["MySQL", "SQL", "Modelagem de dados"],
    foto: "/semestres/semestre-3.svg",
  },
  {
    semestre: 4,
    periodo: "2026.2",
    titulo: "Site com Contagem Regressiva do Semestre",
    descricao:
      "Aplicação web em Next.js com relógio digital em tempo real e esta timeline, versionada no GitHub e publicada na Vercel.",
    tecnologias: ["Next.js", "React", "Git/GitHub", "Vercel"],
    foto: "/semestres/semestre-4.svg",
  },
];
