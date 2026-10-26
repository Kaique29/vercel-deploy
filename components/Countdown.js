"use client";

import { useEffect, useState } from "react";

function calcular(target) {
  const diff = Math.max(0, new Date(target).getTime() - Date.now());
  const totalSeg = Math.floor(diff / 1000);
  return {
    dias: Math.floor(totalSeg / 86400),
    horas: Math.floor((totalSeg % 86400) / 3600),
    minutos: Math.floor((totalSeg % 3600) / 60),
    segundos: totalSeg % 60,
    acabou: diff === 0,
  };
}

const pad = (n) => String(n).padStart(2, "0");

export default function Countdown({ target }) {
  // Começa nulo para evitar diferença entre servidor e cliente (hidratação).
  const [tempo, setTempo] = useState(null);

  useEffect(() => {
    setTempo(calcular(target));
    const id = setInterval(() => setTempo(calcular(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const blocos = [
    { rotulo: "Dias", valor: tempo ? String(tempo.dias).padStart(2, "0") : "--" },
    { rotulo: "Horas", valor: tempo ? pad(tempo.horas) : "--" },
    { rotulo: "Minutos", valor: tempo ? pad(tempo.minutos) : "--" },
    { rotulo: "Segundos", valor: tempo ? pad(tempo.segundos) : "--" },
  ];

  const dataFmt = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "America/Sao_Paulo",
  }).format(new Date(target));

  return (
    <div className="countdown" role="timer" aria-live="off">
      <div className="clock">
        {blocos.map((b, i) => (
          <div className="unit" key={b.rotulo}>
            <span className="digits">{b.valor}</span>
            <span className="label">{b.rotulo}</span>
            {i < blocos.length - 1 && <span className="sep">:</span>}
          </div>
        ))}
      </div>
      <p className="target">
        {tempo?.acabou ? "O semestre terminou! 🎉" : `Termina em ${dataFmt}`}
      </p>
    </div>
  );
}
