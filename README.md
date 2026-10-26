# vercel-deploy

Relógio digital em Next.js com contagem regressiva (dias, horas, minutos e segundos) para o fim do semestre, mais uma timeline com os trabalhos de cada semestre do curso.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Personalizar

- **Data do fim do semestre:** `data/semestres.js` (`fimDoSemestre`) ou a variável de ambiente `NEXT_PUBLIC_SEMESTER_END` (ex.: `2026-12-18T23:59:59-03:00`).
- **Timeline:** edite a lista `semestres` em `data/semestres.js`.
- **Fotos:** coloque as imagens em `public/semestres/` e atualize o campo `foto`.

## Deploy na Vercel

1. Envie o repositório para o GitHub.
2. Em https://vercel.com/new, importe o repositório `vercel-deploy`.
3. Mantenha as configurações padrão (Next.js é detectado automaticamente) e clique em **Deploy**.
