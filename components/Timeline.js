export default function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((s) => (
        <li className="tl-item" key={s.semestre}>
          <span className="tl-dot" aria-hidden="true" />
          <article className="card">
            <img src={s.foto} alt={`Foto do ${s.semestre}º semestre`} loading="lazy" />
            <div className="card-body">
              <span className="badge">
                {s.semestre}º semestre · {s.periodo}
              </span>
              <h3>{s.titulo}</h3>
              <p>{s.descricao}</p>
              <ul className="tags">
                {s.tecnologias.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </article>
        </li>
      ))}
    </ol>
  );
}
