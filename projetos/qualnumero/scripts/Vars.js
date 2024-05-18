export default function Vars(nome) {
  const $ = (e) => document.querySelector(e);
  const numberContent = $(".numberContent");
  const selectNumber = $(".number");
  const input = $("form input");
  const sendButton = $("form .btn");
  const form = $("form");
  const newGame = $(".btn.newGame");
  const msg = $(".msg");
  const regexNumber = /^[0-9]+$/;
  return Object.freeze({
    numberContent,
    selectNumber,
    input,
    sendButton,
    form,
    newGame,
    regexNumber,
    msg,
  });
}
