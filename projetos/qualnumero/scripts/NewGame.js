import StartGame from "./StartGame.js";
import Vars from "./Vars.js";
export default function NewGame() {
  const { newGame, form, numberContent, input, sendButton, selectNumber } =
    Vars();
  newGame.addEventListener("click", () => {
    newGame.classList.remove("active");
    form.removeAttribute("disabled");
    numberContent.classList.remove("success");
    numberContent.classList.remove("error");
    selectNumber.innerText = "0";
    selectNumber.previousElementSibling.innerText = "";
    input.value = "";
    sendButton.removeAttribute("disabled");
    if (!!localStorage.getItem("endGame")) {
      localStorage.setItem("endGame", false);
    }
    sendButton.addEventListener("click", StartGame);
  });
}
