'use client';

import { type SyntheticEvent, useEffect, useMemo, useRef, useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import {
  type FormState,
  initialFormState,
  isValidCpf,
  maskCep,
  maskCpf,
  maskPhone,
} from './form-model';
import {
  loadFormWithStoredPreferences,
  saveVolunteerPreferences,
} from './preferences-storage';

export function CadastroForm() {
  const [form, setForm] = useState(initialFormState);
  const [sent, setSent] = useState(false);
  const [storageReady, setStorageReady] = useState(false);
  const cpfInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const loadTimer = window.setTimeout(() => {
      setForm(loadFormWithStoredPreferences());
      setStorageReady(true);
    }, 0);

    return () => window.clearTimeout(loadTimer);
  }, []);

  useEffect(() => {
    if (!storageReady) return;

    const preferences = {
      interesse: form.interesse,
      disponibilidade: form.disponibilidade,
    };
    saveVolunteerPreferences(preferences);
  }, [form.disponibilidade, form.interesse, storageReady]);

  const cpfError = useMemo(
    () => form.cpf.length === 14 && !isValidCpf(form.cpf),
    [form.cpf],
  );

  function update<K extends keyof FormState>(field: K, value: FormState[K]) {
    setSent(false);
    if (field === 'cpf') cpfInputRef.current?.setCustomValidity('');
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;

    if (!isValidCpf(form.cpf)) {
      cpfInputRef.current?.setCustomValidity('Informe um CPF valido.');
    }

    if (!formElement.checkValidity()) {
      formElement.reportValidity();
      return;
    }

    setSent(true);
    setForm({
      ...initialFormState,
      interesse: form.interesse,
      disponibilidade: form.disponibilidade,
    });
  }

  return (
    <form className="volunteer-form" onSubmit={handleSubmit}>
      <div className="field full">
        <label htmlFor="nome">Nome completo</label>
        <input
          id="nome"
          name="nome"
          minLength={3}
          placeholder="Maria Oliveira"
          required
          type="text"
          value={form.nome}
          onChange={(event) => update('nome', event.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          placeholder="maria@email.com"
          required
          type="email"
          value={form.email}
          onChange={(event) => update('email', event.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="cpf">CPF</label>
        <input
          aria-describedby={cpfError ? 'cpf-error' : undefined}
          aria-invalid={cpfError}
          id="cpf"
          inputMode="numeric"
          name="cpf"
          pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
          placeholder="000.000.000-00"
          ref={cpfInputRef}
          required
          type="text"
          value={form.cpf}
          onChange={(event) => update('cpf', maskCpf(event.target.value))}
        />
        {cpfError ? <small id="cpf-error">Informe um CPF valido.</small> : null}
      </div>

      <div className="field">
        <label htmlFor="telefone">Telefone</label>
        <input
          id="telefone"
          inputMode="tel"
          name="telefone"
          pattern="\(\d{2}\) \d{4,5}-\d{4}"
          placeholder="(11) 90000-0000"
          required
          type="tel"
          value={form.telefone}
          onChange={(event) => update('telefone', maskPhone(event.target.value))}
        />
      </div>

      <div className="field">
        <label htmlFor="cep">CEP</label>
        <input
          id="cep"
          inputMode="numeric"
          name="cep"
          pattern="\d{5}-\d{3}"
          placeholder="00000-000"
          required
          type="text"
          value={form.cep}
          onChange={(event) => update('cep', maskCep(event.target.value))}
        />
      </div>

      <div className="field">
        <label htmlFor="interesse">Area de interesse</label>
        <select
          id="interesse"
          name="interesse"
          required
          value={form.interesse}
          onChange={(event) => update('interesse', event.target.value)}
        >
          <option value="">Selecione</option>
          <option value="resgate">Resgate animal</option>
          <option value="lar-temporario">Lar temporario</option>
          <option value="transporte">Transporte de animais</option>
          <option value="divulgacao">Divulgacao e adocao</option>
        </select>
      </div>

      <fieldset className="field">
        <legend>Disponibilidade</legend>
        <label className="option">
          <input
            checked={form.disponibilidade === 'semana'}
            name="disponibilidade"
            required
            type="radio"
            value="semana"
            onChange={(event) => update('disponibilidade', event.target.value)}
          />
          Dias de semana
        </label>
        <label className="option">
          <input
            checked={form.disponibilidade === 'fim-de-semana'}
            name="disponibilidade"
            required
            type="radio"
            value="fim-de-semana"
            onChange={(event) => update('disponibilidade', event.target.value)}
          />
          Fins de semana
        </label>
      </fieldset>

      <label className="terms full">
        <input
          checked={form.termos}
          required
          type="checkbox"
          onChange={(event) => update('termos', event.target.checked)}
        />
        Autorizo o contato da Salvadores dos Animais para fins de voluntariado.
      </label>

      <button className="button primary full" type="submit">
        <Send aria-hidden="true" size={18} />
        Enviar cadastro
      </button>

      {sent ? (
        <output className="success full">
          <CheckCircle2 aria-hidden="true" size={18} />
          Cadastro recebido. Obrigado por apoiar a protecao animal.
        </output>
      ) : null}
    </form>
  );
}
