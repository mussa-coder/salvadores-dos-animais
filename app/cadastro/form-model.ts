export type FormState = {
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  cep: string;
  interesse: string;
  disponibilidade: string;
  termos: boolean;
};

export const initialFormState: FormState = {
  nome: '',
  email: '',
  cpf: '',
  telefone: '',
  cep: '',
  interesse: '',
  disponibilidade: '',
  termos: false,
};

export const validInterests = [
  'resgate',
  'lar-temporario',
  'transporte',
  'divulgacao',
];

export const validAvailability = ['semana', 'fim-de-semana'];

const onlyDigits = (value: string) => value.replace(/\D/g, '');

export function maskCpf(value: string) {
  return onlyDigits(value)
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

export function maskPhone(value: string) {
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

export function maskCep(value: string) {
  return onlyDigits(value).slice(0, 8).replace(/(\d{5})(\d)/, '$1-$2');
}

export function isValidCpf(value: string) {
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
