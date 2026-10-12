const onlyDigits = (value) => value.replace(/\D/g, '');

const masks = {
  cpf(value) {
    return onlyDigits(value)
      .slice(0, 11)
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  },
  telefone(value) {
    const digits = onlyDigits(value).slice(0, 11);
    if (digits.length <= 10) {
      return digits
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2');
    }
    return digits
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2');
  },
  cep(value) {
    return onlyDigits(value).slice(0, 8).replace(/(\d{5})(\d)/, '$1-$2');
  },
};

function isValidCpf(value) {
  const cpf = onlyDigits(value);
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  const digit = (base, factor) => {
    const total = base
      .split('')
      .reduce((sum, number) => sum + Number(number) * factor--, 0);
    const rest = (total * 10) % 11;
    return rest === 10 ? 0 : rest;
  };

  return (
    digit(cpf.slice(0, 9), 10) === Number(cpf[9]) &&
    digit(cpf.slice(0, 10), 11) === Number(cpf[10])
  );
}

const form = document.querySelector('#cadastro-form');
const cpf = document.querySelector('#cpf');
const telefone = document.querySelector('#telefone');
const cep = document.querySelector('#cep');
const cpfError = document.querySelector('#cpf-error');
const success = document.querySelector('#success');

cpf?.addEventListener('input', () => {
  cpf.value = masks.cpf(cpf.value);
  cpf.setCustomValidity('');
  cpfError.textContent = '';
});

telefone?.addEventListener('input', () => {
  telefone.value = masks.telefone(telefone.value);
});

cep?.addEventListener('input', () => {
  cep.value = masks.cep(cep.value);
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  success.hidden = true;

  if (!isValidCpf(cpf.value)) {
    cpf.setCustomValidity('Informe um CPF valido.');
    cpfError.textContent = 'Informe um CPF valido.';
    cpf.reportValidity();
    return;
  }

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  form.reset();
  success.hidden = false;
});
