import { CadastroForm } from './cadastro-form';

export default function CadastroPage() {
  return (
    <main>
      <section className="page-hero compact">
        <div className="container">
          <span className="eyebrow">Cadastro de colaboradores</span>
          <h1>Informe seus dados para participar com seguranca.</h1>
          <p>
            Os campos usam validacoes nativas do navegador e mascaras de entrada para
            CPF, telefone e CEP.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container form-layout">
          <aside aria-labelledby="orientacoes-title">
            <h2 id="orientacoes-title">Antes de enviar</h2>
            <p>
              Revise os dados de contato. Nossa equipe usa essas informacoes apenas
              para confirmar disponibilidade e encaminhar oportunidades de voluntariado.
            </p>
            <ul>
              <li>CPF deve conter 11 digitos validos.</li>
              <li>Telefone aceita celular ou fixo com DDD.</li>
              <li>CEP deve seguir o formato 00000-000.</li>
            </ul>
          </aside>
          <CadastroForm />
        </div>
      </section>
    </main>
  );
}
