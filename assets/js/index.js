document.addEventListener("DOMContentLoaded", () => {
  const saveBtn = document.getElementById("saveBtn");
  const submitBtn = document.getElementById("submitBtn");
  const changeThemeBtn = document.getElementById("changeThemeBtn");
  const inputName = document.getElementById("inputName");
  const inputPuesto = document.getElementById("inputPuesto");
  const tableBody = document.getElementById("tableBody");
  let tema = document.getElementById("Tema");

  function loadData() {
    //Carga información apenas inicializa
    loadTheme();
    tableBody.innerHTML = `
    <tr id="noData">
        <td colspan="4" class="text-center">No hay datos</td>
    </tr>`;

    let data = JSON.parse(localStorage.getItem("data")) || [];
    if (data.length) {
      document.getElementById("noData").remove();
    }

    data.forEach((element, index) => {
      let tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${element.name}</td>
        <td>${element.puesto}</td>
        <td class="text-center">
            <button type="button" class="btn-warning btn-edit" data-index="${index}">Editar</button>;
            <button type="button" class="btn-danger btn-delete" data-index="${index}">Eliminar</button>
        </td>`;
      tableBody.appendChild(tr);
    });
  }

  function clearForm() {
    inputName.value = "";
    inputPuesto.value = "";
  }
  submitBtn.addEventListener("click", () => {
    // Evento para seleccionar temática
    alert(tema.value);
  });

  saveBtn.addEventListener("click", () => {
    // Evento para guardar
    const name = inputName.value;
    const puesto = inputPuesto.value;
    if (!name) {
      return;
    }

    let data = JSON.parse(localStorage.getItem("data")) || [];
    const index = saveBtn.getAttribute("data-index");
    if (index) {
      data[index] = { name, puesto };
      saveBtn.removeAttribute("data-index");
      saveBtn.textContent = "Guardar";
    } else {
      data.push({
        name: name,
        puesto: puesto,
      });
    }
    localStorage.setItem("data", JSON.stringify(data));
    loadData();
    clearForm();
  });

  function loadTheme() {
    const theme = localStorage.getItem("theme") || "light";
    document.body.dataset.bsTheme = theme;
    if (theme == "dark") {
        changeThemeBtn.textContent = "Light Mode";
    } else {
        changeThemeBtn.textContent = "Dark Mode"
    }
  }

  changeThemeBtn.addEventListener("click", function () {
    let body = document.body;
    if (body.dataset.bsTheme == "dark") {
        body.dataset.bsTheme = "light";
        changeThemeBtn.textContent ="Dark Mode";
        localStorage.setItem("theme","light");
    } else {
        body.dataset.bsTheme = "dark";
        changeThemeBtn.textContent ="Light Mode";
        localStorage.setItem("theme","dark");}
  })

  tableBody.addEventListener("click", function (e) {
    console.log(e.target.classList);
    if (e.target.classList.contains("btn-edit")) {
        const index = e.target.dataset.index;
        const data = JSON.parse(localStorage.getItem("data")) || [];
        const item = data[index];
        inputName.value = item.name;
        inputPuesto.value = item.puesto;
        saveBtn.textContent = "Actualizar";
        saveBtn.setAttribute("data-index", index);
    } else if (e.target.classList.contains("btn-delete")) {
        const index = e.target.dataset.index;
        const data = JSON.parse(localStorage.getItem("data")) || [];
        data.splice(index, 1);
        localStorage.setItem("data", JSON.stringify(data));
        loadData();
    }
});



  loadData();
});
