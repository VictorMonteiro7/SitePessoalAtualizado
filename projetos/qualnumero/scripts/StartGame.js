import InitGame from "./InitGame.js";
import Vars from "./Vars.js";
export default function StartGame(e) {
  e.preventDefault();
  if (!!localStorage.getItem("endGame")) {
    localStorage.setItem("endGame", false);
  }
  const number = Vars().input.value;
  Vars().regexNumber.test(number)
    ? InitGame(Vars().input, number, Vars().form)
    : alert("Por favor, digite somente números");
}
