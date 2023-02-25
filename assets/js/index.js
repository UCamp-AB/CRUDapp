document.addEventListener("DOMContentLoaded", () => {
  const saveBtn = document.getElementById("saveBtn");
  const comenzar = document.getElementById("comenzar");
  const changeThemeBtn = document.getElementById("changeThemeBtn");
  const FirstInput = document.getElementById("FirstInput");
  const SecondInput = document.getElementById("SecondInput");
  const FirstInput2 = document.getElementById("FirstInput2");
  const SecondInput2 = document.getElementById("SecondInput2");
  const tableBody = document.getElementById("tableBody");
  let tema = document.getElementById("Tema");

  function loadData() {
    document.getElementById("crud").style.display = "none"; //Carga información apenas inicializa
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
      <td>${element.FirstInput}</td>
      <td>${element.SecondInput}</td>
      <td class="text-center">
      <button type="button" class="btn-warning btn-edit" data-index="${index}">Editar</button>;
      <button type="button" class="btn-danger btn-delete" data-index="${index}">Eliminar</button>
      </td>`;
      tableBody.appendChild(tr);
    });
  }

  function clearForm() {
    FirstInput.value = "";
    SecondInput.value = "";
  }

  comenzar.addEventListener("click", () => {
    // Evento para seleccionar temática
    let Titulo = document.getElementById("Titulo");
    let titulo1 = document.getElementById("titulo1");
    let titulo2 = document.getElementById("titulo2");
    if (tema.value == "TO_DO") {
      document.getElementById("crud").style.display = "block";
      Titulo.innerText = "CRUD de TO DO List";
      FirstInput2.innerText = "Tarea";
      FirstInput.setAttribute("placeholder", "Ingresa Tarea");
      titulo1.innerText = "Tarea";
      SecondInput2.innerText = "Descripción";
      SecondInput.setAttribute("placeholder", "Ingresa Descripción");
      titulo2.innerText = "Descripción";
      saveBtn.className = "btn btn-primary mt-3";
    } else if (tema.value == "Biblioteca") {
        document.getElementById("crud").style.display = "block";
      Titulo.innerText = "CRUD de Biblioteca de Libros";
      FirstInput2.innerText = "Libro";
      FirstInput.setAttribute("placeholder", "Ingresa Libro");
      titulo1.innerText = "Libro";
      SecondInput2.innerText = "Editorial";
      SecondInput.setAttribute("placeholder", "Ingresa Editorial");
      titulo2.innerText = "Editorial";
      saveBtn.className = "btn btn-info mt-3";
    } else if (tema.value == "Inventario") {
        document.getElementById("crud").style.display = "block";
      Titulo.innerText = "CRUD de Inventario";
      FirstInput2.innerText = "Articulo";
      FirstInput.setAttribute("placeholder", "Ingresa Articulo");
      titulo1.innerText = "Articulo";
      SecondInput2.innerText = "Cantidad";
      SecondInput.setAttribute("placeholder", "Ingresa Cantidad");
      titulo2.innerText = "Cantidad";
      saveBtn.className = "btn btn-secondary mt-3";
    } else if (tema.value == "Agenda") {
        document.getElementById("crud").style.display = "block";
      Titulo.innerText = "CRUD de Agenda de Contactos";
      FirstInput2.innerText = "Nombre Completo";
      FirstInput.setAttribute("placeholder", "Ingresa Nombre");
      titulo1.innerText = "Nombre Completo";
      SecondInput2.innerText = "Número";
      SecondInput.setAttribute("placeholder", "Ingresa Número");
      titulo2.innerText = "Número";
      saveBtn.className = "btn btn-success mt-3";
    } else {
        document.getElementById("crud").style.display = 'none'
    }
  });

  saveBtn.addEventListener("click", () => {
    // Evento para guardar
    const primero = FirstInput.value;
    const segundo = SecondInput.value;
    if (!primero) {
      return;
    }
    let data = JSON.parse(localStorage.getItem("data")) || [];
    const index = saveBtn.getAttribute("data-index");
    if (index) {
      data[index] = { primero, segundo };
      saveBtn.removeAttribute("data-index");
      saveBtn.textContent = "Guardar";
    } else {
      data.push({
        FirstInput: primero,
        SecondInput: segundo,
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
      changeThemeBtn.textContent = "Dark Mode";
    }
  }

  changeThemeBtn.addEventListener("click", function () {
    let body = document.body;
    if (body.dataset.bsTheme == "dark") {
      body.dataset.bsTheme = "light";
      changeThemeBtn.textContent = "Dark Mode";
      localStorage.setItem("theme", "light");
    } else {
      body.dataset.bsTheme = "dark";
      changeThemeBtn.textContent = "Light Mode";
      localStorage.setItem("theme", "dark");
    }
  });

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
