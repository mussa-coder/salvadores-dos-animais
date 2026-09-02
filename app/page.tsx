import Link from 'next/link';
import { ArrowRight, HandHeart, Leaf, ShieldCheck, Users } from 'lucide-react';

const impactItems = [
  { value: '4.280', label: 'cestas e kits entregues' },
  { value: '860', label: 'familias acompanhadas' },
  { value: '320', label: 'voluntarios ativos' },
];

export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Rede Esperanca Viva</span>
            <h1>Conectando voluntarios, doacoes e projetos que chegam a quem precisa.</h1>
            <p>
              Uma organizacao sem fins lucrativos dedicada a fortalecer comunidades
              vulneraveis com alimentacao, educacao, cuidado ambiental e apoio humano.
            </p>
            <div className="hero-actions" aria-label="Acoes principais">
              <Link className="button primary" href="/cadastro">
                Quero colaborar
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <Link className="button secondary" href="/projetos">
                Ver projetos
              </Link>
            </div>
          </div>

          <aside className="impact-panel" aria-labelledby="impacto-title">
            <h2 id="impacto-title">Impacto em 2026</h2>
            <dl>
              {impactItems.map((item) => (
                <div key={item.label}>
                  <dt>{item.value}</dt>
                  <dd>{item.label}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <article>
            <span className="eyebrow">Sobre a iniciativa</span>
            <h2>Transparencia, presenca local e trabalho continuado.</h2>
            <p>
              A Rede Esperanca Viva organiza frentes de voluntariado com parceiros
              comunitarios, escolas, cozinhas solidarias e liderancas de bairro. Cada
              acao e planejada para gerar continuidade, nao apenas atendimento pontual.
            </p>
          </article>
          <div className="feature-list" aria-label="Principios da organizacao">
            <div>
              <ShieldCheck aria-hidden="true" />
              <h3>Credibilidade</h3>
              <p>Prestacao de contas clara e acompanhamento publico das campanhas.</p>
            </div>
            <div>
              <Users aria-hidden="true" />
              <h3>Engajamento</h3>
              <p>Cadastro cuidadoso para direcionar cada pessoa ao projeto adequado.</p>
            </div>
            <div>
              <Leaf aria-hidden="true" />
              <h3>Sustentabilidade</h3>
              <p>Projetos sociais que tambem cuidam do territorio onde acontecem.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container callout">
          <HandHeart aria-hidden="true" />
          <div>
            <h2>Seu tempo pode virar alimento, reforco escolar ou acolhimento.</h2>
            <p>
              Preencha o cadastro para participar como voluntario, apoiador recorrente
              ou articulador de doacoes na sua regiao.
            </p>
          </div>
          <Link className="button primary" href="/cadastro">
            Cadastrar agora
          </Link>
        </div>
      </section>
    </main>
  );
}
