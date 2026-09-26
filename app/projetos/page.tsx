import Link from 'next/link';
import { ArrowRight, HeartHandshake, House, PawPrint, Stethoscope } from 'lucide-react';

const projects = [
  {
    icon: PawPrint,
    title: 'Resgate Seguro',
    tag: 'Resgate animal',
    text: 'Atendimento de animais abandonados ou em situacao de risco, com transporte e avaliacao inicial.',
  },
  {
    icon: Stethoscope,
    title: 'Cuidado Veterinario',
    tag: 'Saude animal',
    text: 'Consultas, vacinacao, castracao e tratamento para os animais resgatados.',
  },
  {
    icon: House,
    title: 'Lar Temporario',
    tag: 'Acolhimento',
    text: 'Acolhimento familiar durante a recuperacao e a espera por uma adocao responsavel.',
  },
  {
    icon: HeartHandshake,
    title: 'Novo Lar',
    tag: 'Adocao responsavel',
    text: 'Divulgacao, triagem e acompanhamento de familias interessadas em adotar.',
  },
];

export default function ProjetosPage() {
  return (
    <main>
      <section className="page-hero compact">
        <div className="container">
          <span className="eyebrow">Iniciativas de protecao animal</span>
          <h1>Projetos que unem resgate, cuidado e adocao responsavel.</h1>
          <p>
            Cada frente recebe voluntarios de acordo com disponibilidade, experiencia
            e proximidade geografica.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container project-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article className="project-card" key={project.title}>
                <Icon aria-hidden="true" />
                <span>{project.tag}</span>
                <h2>{project.title}</h2>
                <p>{project.text}</p>
                <Link className="card-link" href="/cadastro">
                  Quero ajudar
                  <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section muted">
        <div className="container callout">
          <div>
            <h2>Encontrou uma causa para apoiar?</h2>
            <p>
              O cadastro ajuda nossa equipe a validar seus dados e indicar a melhor
              forma de participacao.
            </p>
          </div>
          <Link className="button primary" href="/cadastro">
            Iniciar cadastro
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
