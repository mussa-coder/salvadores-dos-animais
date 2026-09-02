'use client';

import { FormEvent, useMemo, useRef, useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';

type FormState = {
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  cep: string;
  interesse: string;
  disponibilidade: string;
  termos: boolean;
};

const initialState: FormState = {
  nome: '',
  email: '',
  cpf: '',
  telefone: '',
  cep: '',
  interesse: '',
  disponibilidade: '',
  termos: false,
};

const onlyDigits = (value: string) => value.replace(/\D/g, '');

function maskCpf(value: string) {
  return onlyDigits(value)
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

function maskPhone(value: string) {
  const digits = onlyDigits(value).slice(0, 11);
  if (digits.length <= 10) {
    return digits
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2');
  }
  return digits
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2');
}

function maskCep(value: string) {
  return onlyDigits(value).slice(0, 8).replace(/(\d{5})(\d)/, '$1-$2');
}

function isValidCpf(value: string) {
  const cpf = onlyDigits(value);
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  const calcDigit = (base: string, factor: number) => {
    const total = base
      .split('')
      .reduce((sum, digit) => sum + Number(digit) * factor--, 0);
    const rest = (total * 10) % 11;
    return rest === 10 ? 0 : rest;
  };

  return (
    calcDigit(cpf.slice(0, 9), 10) === Number(cpf[9]) &&
    calcDigit(cpf.slice(0, 10), 11) === Number(cpf[10])
  );
}

export function CadastroForm() {
  const [form, setForm] = useState(initialState);
  const [sent, setSent] = useState(false);
  const cpfInputRef = useRef<HTMLInputElement>(null);

  const cpfError = useMemo(
    () => form.cpf.length === 14 && !isValidCpf(form.cpf),
    [form.cpf],
  );

  function update<K extends keyof FormState>(field: K, value: FormState[K]) {
    setSent(false);
    if (field === 'cpf') cpfInputRef.current?.setCustomValidity('');
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
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
    setForm(initialState);
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
        {cpfError ? <small>Informe um CPF valido.</small> : null}
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
          <option value="alimentacao">Alimentacao</option>
          <option value="educacao">Educacao</option>
          <option value="acolhimento">Acolhimento</option>
          <option value="meio-ambiente">Meio ambiente</option>
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
        Autorizo o contato da Rede Esperanca Viva para fins de voluntariado.
      </label>

      <button className="button primary full" type="submit">
        <Send aria-hidden="true" size={18} />
        Enviar cadastro
      </button>

      {sent ? (
        <p className="success full" role="status">
          <CheckCircle2 aria-hidden="true" size={18} />
          Cadastro recebido. Obrigado por se aproximar da rede.
        </p>
      ) : null}
    </form>
  );
}
