const container = document.getElementById("container");
const input = document.getElementById("input");
const deleteInput = document.getElementById("deleteInput");
//1) TODO: crea una funcion que elimine de pantalla la columna que corresponda con el indice introducido en deleteInput
// si pongo un id que no existe debe mostrar un error
//Solution: added an eventlistener that executes when enter is pressed.
deleteInput.addEventListener("keyup", event => {
  if (event.keyCode === 13) {
    //Variable of the user input number
    let index = deleteInput.value;
    //If statement that evaluates if the input value is an index of the container childNodes array. If not, an error will appear.
    if (index < 0) {
      console.error("Indice negativo");
    } else if (
      index < container.childNodes.length &&
      container.childNodes.length > 0
    ) {
      container.removeChild(container.childNodes[index]);
    } else console.error("Indice no existe");
  }
});

document
  .querySelector("#myForm")
  .addEventListener("submit", ev => ev.preventDefault());

document.getElementById("button").addEventListener("click", () => {
  //crear el elemento
  let div = document.createElement("div");
  div.setAttribute("class", "col");

  //2) TODO: CREAR UN HN AL AZAR (H1-H2...H6)
  // Solution: generate a random number between 1 and 6
  let randomNum = Math.floor(Math.random() * 6) + 1;
  // Insert random number in HTML with string interpolation.
  div.innerHTML = `<h${randomNum}>${input.value.toUpperCase()}</h${randomNum}>`;
  container.appendChild(div);
});

document.getElementById("deleteButton").addEventListener("click", () => {
  //comprobar hijos
  if (container.childNodes.length > 0) {
    //eliminar el ultimo
    // 3) TODO: CREAR LA FUNCIONALIDAD PARA ELIMIANR EL ULTIMO NODO SIN QUE NUNCA DE ERROR
    // Solution: remove container's last child.
    let columnas = document.querySelectorAll("col");
    container.removeChild(container.lastChild);
  } else {
    console.log("No hay nadie a quien eliminar");
  }
});

//4) TODO: REFACTORIZAR
//Solution: changed the "for of" loop for a "forEach" and deleted console log.
input.addEventListener("keyup", ev => {
  if (ev.keyCode == 13) {
    container.childNodes.forEach(value => {
      value.innerHTML = `<h1>${input.value.toUpperCase()}</h1>`;
    });
  }
});
