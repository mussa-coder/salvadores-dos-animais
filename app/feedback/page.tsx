import { FeedbackDemo } from './feedback-demo';

export default function FeedbackPage() {
  return (
    <main>
      <section className="page-hero compact feedback-hero">
        <div className="container">
          <span className="eyebrow">Biblioteca de interface</span>
          <h1>Feedback claro em cada etapa da jornada.</h1>
          <p>
            Etiquetas, alertas, toast e modal comunicam estados com texto, cor e
            icones, preservando a leitura por tecnologias assistivas.
          </p>
        </div>
      </section>

      <FeedbackDemo />
    </main>
  );
}
