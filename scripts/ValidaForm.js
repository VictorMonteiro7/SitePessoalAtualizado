let emailIV = false;
let primeiraTentativa;
const inputEmail = document.querySelector('[placeholder="Email_"]');
export function validaForm(e) {
  e.preventDefault();
  localStorage.setItem('ft', true);
  primeiraTentativa = localStorage.ft;
  const inputName = document.querySelector('[placeholder="Nome_"]');
  const inputMsg = document.querySelector('[placeholder^="Breve"]');
  if (validaEmail(inputEmail.value) && inputName.value && inputMsg.value.length >= 10) {
    localStorage.setItem('ft', false);
    const mensagem = `*Nome:* ${inputName.value}\n *Email:* ${inputEmail.value}\n *Mensagem:* ${inputMsg.value}`;
    const mensagemConvertida = window.encodeURIComponent(mensagem);
    setTimeout(() => {
      window.location.replace(
        `https://api.whatsapp.com/send?phone=+5527998475858&text=${mensagemConvertida}`,
      );
    }, 300);
  } else {
    const campos = document.querySelectorAll('[type="text"]');
    for (let campo of campos) {
      if (!campo.value) {
        showError(campo.nextElementSibling);
        setTimeout(() => {
          closeError(campo.nextElementSibling);
        }, 3000);
      } else if (
        campo.getAttribute('placeholder') === 'Email_' &&
        !validaEmail(campo.value)
      ) {
        showError(campo.nextElementSibling, 'Email inválido');
      }
    }
  }
}

export function ValidaCampo(campo = null, email = false) {
  primeiraTentativa = localStorage.ft;
  if (primeiraTentativa == 'true') {
    campo.addEventListener('keyup', () => {
      let rx = /^Breve/;
      if (campo) {
        if (!campo.value && campo !== inputEmail) {
          showError(campo.nextElementSibling);
          return false;
        } else if (campo.value.length < 10 && rx.test(campo.getAttribute('placeholder')) && campo !== inputEmail) {
          showError(campo.nextElementSibling,"Campo não pode ter menos de 10 caracteres");
          return false;
        }else if (campo.value && campo !== inputEmail) {
          closeError(campo.nextElementSibling);
          return true;
        } else if (
          campo === inputEmail &&
          !validaEmail(inputEmail.value) &&
          inputEmail.value !== ''
        ) {
          showError(campo.nextElementSibling, 'Email inválido');
          return false;
        } else if (
          campo === inputEmail &&
          !validaEmail(inputEmail.value) &&
          !inputEmail.value
        ) {
          showError(campo.nextElementSibling);
          return false;
        } else if (validaEmail(inputEmail.value)) {
          closeError(campo.nextElementSibling);
          emailIV = false;
          return true;
        }
      } else {
        return null;
      }
    });
  } else {
    return null;
  }
}

function validaEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function showError(target, msg = 'O campo não pode estar vazio') {
  target.innerText = msg;
  target.style.display = 'block';
  target.style.animationName = 'showError';
}

function closeError(target) {
  target.style.animationName = 'closeError';
  setTimeout(() => {
    target.style.display = 'none';
  }, 500);
}
