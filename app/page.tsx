import { ArrowRight, HandHeart, Leaf, ShieldCheck, Users } from 'lucide-react';

const impactItems = [
  { value: '428', label: 'animais resgatados' },
  { value: '186', label: 'adocoes responsaveis' },
  { value: '72', label: 'voluntarios ativos' },
];

export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Salvadores dos Animais</span>
            <h1>Conectando voluntarios, doacoes e adotantes para salvar vidas.</h1>
            <p>
              Uma organizacao sem fins lucrativos dedicada ao resgate, tratamento,
              acolhimento e adocao responsavel de animais em situacao de risco.
            </p>
            <div className="hero-actions" aria-label="Acoes principais">
              <a className="button primary" href="/cadastro">
                Quero colaborar
                <ArrowRight aria-hidden="true" size={18} />
              </a>
              <a className="button secondary" href="/projetos">
                Ver projetos
              </a>
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
            <h2>Transparencia, cuidado responsavel e trabalho continuado.</h2>
            <p>
              A Salvadores dos Animais organiza frentes de voluntariado com protetores,
              clinicas veterinarias, lares temporarios e parceiros locais. Cada resgate
              recebe acompanhamento ate a recuperacao e a adocao responsavel.
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
              <p>Acoes de castracao, conscientizacao e adocao que previnem o abandono.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container callout">
          <HandHeart aria-hidden="true" />
          <div>
            <h2>Seu tempo pode virar resgate, tratamento ou um novo lar.</h2>
            <p>
              Preencha o cadastro para participar como voluntario, lar temporario,
              doador ou divulgador das campanhas de adocao.
            </p>
          </div>
          <a className="button primary" href="/cadastro">
            Cadastrar agora
          </a>
        </div>
      </section>
    </main>
  );
}
