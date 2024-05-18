import Vars from "./Vars.js";
export default function EndGame() {
  const { numberContent, form, newGame, input, sendButton } = Vars();
  numberContent.classList.add(".disabled");
  form.setAttribute("disabled", true);
  newGame.classList.add("active");
  input.blur();
  sendButton.setAttribute("disabled", true);
  localStorage.setItem("endGame", true);
}
