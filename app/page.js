import Countdown from "../components/Countdown";
import Timeline from "../components/Timeline";
import { semestres, fimDoSemestre } from "../data/semestres";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">Contagem regressiva</p>
        <h1>Fim do semestre</h1>
        <Countdown target={fimDoSemestre} />
      </section>

      <section className="timeline-section">
        <p className="eyebrow">Minha jornada</p>
        <h2>Trabalhos desenvolvidos por semestre</h2>
        <Timeline items={semestres} />
      </section>

      <footer>vercel-deploy · Next.js</footer>
    </main>
  );
}
