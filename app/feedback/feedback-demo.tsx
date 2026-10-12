'use client';

import { useRef, useState } from 'react';
import { AlertTriangle, Bell, CheckCircle2, Info, PawPrint, X, XCircle } from 'lucide-react';

export function FeedbackDemo() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [toastVisible, setToastVisible] = useState(false);

  return (
    <section className="section feedback-section" aria-labelledby="feedback-title">
      <div className="container feedback-stack">
        <div>
          <span className="eyebrow">Estados semanticos</span>
          <h2 id="feedback-title">Componentes de feedback</h2>
          <p>Cada estado combina rotulo, mensagem e icone para nao depender apenas da cor.</p>
        </div>

        <section className="feedback-panel" aria-labelledby="badges-title">
          <h3 id="badges-title">Etiquetas de projetos</h3>
          <div className="badge-list">
            <span className="status-badge neutral">Em analise</span>
            <span className="status-badge info">Em tratamento</span>
            <span className="status-badge warning">Lar temporario</span>
            <span className="status-badge success">Disponivel para adocao</span>
          </div>
        </section>

        <section className="feedback-panel" aria-labelledby="alerts-title">
          <h3 id="alerts-title">Alertas do sistema</h3>
          <div className="alert-list">
            <output className="alert info">
              <Info aria-hidden="true" />
              <div><strong>Cadastro em revisao</strong><p>Os dados do voluntario estao sendo conferidos.</p></div>
            </output>
            <output className="alert success">
              <CheckCircle2 aria-hidden="true" />
              <div><strong>Cadastro confirmado</strong><p>A equipe entrara em contato para orientar os proximos passos.</p></div>
            </output>
            <div className="alert warning" role="alert">
              <AlertTriangle aria-hidden="true" />
              <div><strong>Informacao pendente</strong><p>Informe a disponibilidade antes de enviar o formulario.</p></div>
            </div>
            <div className="alert danger" role="alert">
              <XCircle aria-hidden="true" />
              <div><strong>Nao foi possivel enviar</strong><p>Revise os campos destacados e tente novamente.</p></div>
            </div>
          </div>
        </section>

        <section className="feedback-panel feedback-actions" aria-labelledby="actions-title">
          <div>
            <h3 id="actions-title">Mensagens contextuais</h3>
            <p>Abra o modal ou restaure a notificacao para testar os componentes.</p>
          </div>
          <div className="feedback-buttons">
            <button className="button secondary bordered" type="button" onClick={() => dialogRef.current?.showModal()}>
              <PawPrint aria-hidden="true" size={18} />
              Abrir modal
            </button>
            <button className="button primary" type="button" onClick={() => setToastVisible(true)}>
              <Bell aria-hidden="true" size={18} />
              Mostrar toast
            </button>
          </div>
        </section>
      </div>

      {toastVisible ? (
        <output className="toast" aria-live="polite">
          <CheckCircle2 aria-hidden="true" />
          <div><strong>Preferencias salvas</strong><span>Voce recebera novidades sobre adocao.</span></div>
          <button aria-label="Fechar notificacao" type="button" onClick={() => setToastVisible(false)}><X aria-hidden="true" /></button>
        </output>
      ) : null}

      <dialog className="feedback-dialog" ref={dialogRef} aria-labelledby="dialog-title">
        <button className="dialog-close" aria-label="Fechar modal" type="button" onClick={() => dialogRef.current?.close()}><X aria-hidden="true" /></button>
        <PawPrint className="dialog-icon" aria-hidden="true" />
        <h2 id="dialog-title">Confirmar interesse</h2>
        <p>Deseja receber informacoes sobre animais disponiveis para adocao responsavel?</p>
        <div className="dialog-actions">
          <button className="button secondary bordered" type="button" onClick={() => dialogRef.current?.close()}>Agora nao</button>
          <button className="button primary" type="button" onClick={() => { dialogRef.current?.close(); setToastVisible(true); }}>Confirmar</button>
        </div>
      </dialog>
    </section>
  );
}
