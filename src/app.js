const container = document.getElementById("container");
const input = document.getElementById("input");
const deleteInput = document.getElementById("deleteInput");

//Solution: If statement that evaluates if the input value is an index of the container childNodes array. If not, an error will appear.
deleteInput.addEventListener("keyup", event => {
  if (event.keyCode === 13) {
    //Variable of the user input number
    let index = deleteInput.value;
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
  let div = document.createElement("div");
  div.setAttribute("class", "col");

  
  // Solution: generate a random number between 1 and 6
  let randomNum = Math.floor(Math.random() * 6) + 1;
  let i = 0;
  while (i < 6) {
    Math.floor(Math.random() * 6) + 1;
  }

  // Insert random number in HTML with string interpolation.
  div.innerHTML = `<h${randomNum}>${input.value.toUpperCase()}</h${randomNum}>`;
  container.appendChild(div);
});

document.getElementById("deleteButton").addEventListener("click", () => {
  if (container.childNodes.length > 0) {

    // Solution: remove container's last child.
    let columnas = document.querySelectorAll("col");
    container.removeChild(container.lastChild);
  } else {
    console.log("No hay nadie a quien eliminar");
  }
});

//Solution: changed the "for of" loop for a "forEach" and deleted console log.
input.addEventListener("keyup", ev => {
  if (ev.keyCode == 13) {
    container.childNodes.forEach(value => {
      value.innerHTML = `<h1>${input.value.toUpperCase()}</h1>`;
    });
  }
});
