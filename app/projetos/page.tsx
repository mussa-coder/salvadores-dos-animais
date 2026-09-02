import Link from 'next/link';
import { ArrowRight, BookOpen, CookingPot, HeartPulse, Sprout } from 'lucide-react';

const projects = [
  {
    icon: CookingPot,
    title: 'Mesa Aberta',
    tag: 'Seguranca alimentar',
    text: 'Distribuicao semanal de refeicoes, cestas basicas e kits de higiene com triagem comunitaria.',
  },
  {
    icon: BookOpen,
    title: 'Trilha do Saber',
    tag: 'Educacao',
    text: 'Reforco escolar, rodas de leitura e mentoria para adolescentes em escolas publicas parceiras.',
  },
  {
    icon: HeartPulse,
    title: 'Cuidado Presente',
    tag: 'Acolhimento',
    text: 'Escuta qualificada, orientacao social e encaminhamento para redes locais de saude e assistencia.',
  },
  {
    icon: Sprout,
    title: 'Horta de Bairro',
    tag: 'Meio ambiente',
    text: 'Hortas urbanas mantidas por moradores, voluntarios e escolas para promover autonomia alimentar.',
  },
];

export default function ProjetosPage() {
  return (
    <main>
      <section className="page-hero compact">
        <div className="container">
          <span className="eyebrow">Iniciativas solidarias</span>
          <h1>Projetos com metas claras, equipes locais e acompanhamento continuo.</h1>
          <p>
            Cada frente recebe voluntarios de acordo com disponibilidade, habilidades
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
