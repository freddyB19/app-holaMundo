function viewQuestionsGame(data = null) {
  const mount = document.querySelector("#games-questions");
  let messages = "";
  if(data) messages = `${data.value}`;
  else messages = `${"Error de entrada"}`

  mount.innerHTML = ` ${messages}`;
}

export default viewQuestionsGame;
