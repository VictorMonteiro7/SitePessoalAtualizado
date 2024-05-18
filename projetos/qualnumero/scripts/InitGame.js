import EndGame from "./EndGame.js";
import FetchApi from "./FetchApi.js";
import Vars from "./Vars.js";
export default async function InitGame(input, number, form) {
  if ((input, number, form)) {
    const min = 1;
    const max = 300;
    const url = `https://us-central1-ss-devops.cloudfunctions.net/rand?min=${min}&max=${max}`;
    const dados = await FetchApi(url);
    const { selectNumber, numberContent, msg } = Vars();
    input.value = "";
    selectNumber.innerText = dados.value;
    if (dados.StatusCode) {
      numberContent.classList.add("error");
      selectNumber.innerText = dados.StatusCode;
      msg.innerText = "Erro";
      EndGame(input, form);
      if (dados.Error) throw new Error(dados.Error);
    } else if (number > dados.value) {
      msg.innerText = "É menor";
    } else if (number < dados.value) {
      msg.innerText = "É maior";
    } else {
      msg.innerText = "Você acertou!!!";
      numberContent.classList.add("success");
      EndGame(input, form);
    }
  } else {
    throw new Error("Está faltando parâmetros");
  }
}
