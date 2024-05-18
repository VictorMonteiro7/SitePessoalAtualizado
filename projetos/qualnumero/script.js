import StartGame from "./scripts/StartGame.js";
import NewGame from "./scripts/NewGame.js";
import Vars from "./scripts/Vars.js";
if (localStorage.getItem("endGame") === "true") {
  Vars().form.removeEventListener("submit", StartGame);
}
Vars().form.addEventListener("submit", StartGame);
NewGame();

/*
A lógica consiste em:
 antes de iniciar o game, o sistema verifica se houve algum jogo terminado,
 mediante a verificação do localStorage, se houve, o sistema remove o evento de submit do formulário, seta o 
 valor no localStorage para false e chama a função StarGame, que inicia um novo jogo.
 -------
Então, ao inserir um valor na caixa de input e clicar no botão, primeiro o sistema verifica
se o valor inserido é realmente um número ou não, se for, ele continua, se não, ele retorna
um alerta dizendo que só aceita números (ele também não aceita números negativos) e não deixa o usuário continuar
até que ele insira um número válido.
-------
Inserido um número válido, o sistema verifica se a função initGame tem todos os parâmetros necessários,
se tiver, ele continua, senão, ele exibe uma mensagem de erro no console e não deixa o usuário continuar.
-------
Se todos os parâmetros estiverem presentes, ele irá tentar fazer uma requisição para a API,
e, se houver algum erro na url (tanto na escrita, quanto nos parâmetros da url), ele irá retornar uma mensagem 
de erro no console e não deixará o usuário continuar.
-------
Caso tudo esteja OK, ele irá verificar se o número inserido é maior, menor ou igual ao número sorteado.
Em todos os 3 casos, ele irá retornar um feedback pro usuário, com o número sorteado e com a mensagem correspondente,
e, caso contenha erro na requisição nesta parte, ele irá aparecer o StatusCode na tela do usuário, seguido de 
"Erro" acima do StatusCode.
------
Caso o usuário acerte o número sorteado, ou haja algum erro na API na parte citada anteriormente, 
o jogo irá finalizar, bloqueando assim o input e o botão de ENVIAR e
aparecerá o botão de nova partida (nesta parte, o sistema salva no localStorage o valor true).
e todo o processo lógico se repetirá.
*/
