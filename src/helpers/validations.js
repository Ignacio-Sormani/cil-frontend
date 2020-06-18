export const passwordValidation = password => {
  if (!password) {
    return 'Contraseña Requerida!';
  } else if (password.length < 5) {
    return 'Debe tener mas de 6 caracteres!';
  } else if (password.length > 10) {
    return 'Debe tener menos de 10 caracteres!';
  }
};

export const emailValidation = email => {
  if (!email) {
    return 'Email Requerido!';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    return 'Formato de email invalido!';
  }
}; // TO DO: check why the regex breaks the code. It works anyway

export const numberValidation = value => {
  if (!value) {
    return 'Este campo es requerido';
  } else if (!value.match(/^[0-9]+$/) || value == 0)
    return 'Este campo debe ser un numero entero!';
};

export const requiredValidation = value => {
  if (!value.length) {
    return 'Este campo es requerido';
  }
};

export const categoryValidation = category => {
  if (!category) {
    return 'Debe seleccionar una categoria';
  }
};
