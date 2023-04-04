document.getElementById("push").onclick = function addElement() {
  if (document.getElementById("elemento").value.length == 0) {
    alert("Inserisci un nome valido per l'elemento");
  } else {
    document.getElementById("container-elementi").classList.remove("hidden");
    let elem = document.getElementById("elemento").value;

    document.getElementById("lista").innerHTML += `
    <div class="flex justify-between w-1/2 m-auto mb-3 border shadow rounded-xl py-2 px-5 items-center">
        <li class="text-white font-semibold text-lg">${elem}</li>
        <button class="border rounded-md bg-mainAlt text-white px-2 py-1 deletebtn">Elimina</button>
    </div>
    `;

    let elementoAttuale = document.getElementsByClassName(".deletebtn");
    for (let i = 0; i < elementoAttuale.length; i++) {
      elementoAttuale[i].onclick = function deleteElement() {
        this.parentNode.remove();
        if (document.getElementById("lista").childElementCount == 0) {
          document.getElementById("container-elementi").classList.add("hidden");
        }
      };
    }
  }
};
