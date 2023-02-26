document.addEventListener("DOMContentLoaded", () => {
  const saveBtn = document.getElementById("saveBtn");
  const comenzar = document.getElementById("comenzar");
  const changeThemeBtn = document.getElementById("changeThemeBtn");
  const FirstInput = document.getElementById("FirstInput");
  const SecondInput = document.getElementById("SecondInput");
  const FirstInput2 = document.getElementById("FirstInput2");
  const SecondInput2 = document.getElementById("SecondInput2");
  const crud = document.getElementById("crud-form")
  const tableBody = document.getElementById("tableBody");
  let tema = document.getElementById("Tema");

//   crud.style.opacity = 0;
document.getElementById("crud").style.display = "none";
  //Carga información apenas inicializa
  comenzar.addEventListener("click", () => {
    // Evento para seleccionar temática
    loadData();
    let Titulo = document.getElementById("Titulo");
    let titulo1 = document.getElementById("titulo1");
    let titulo2 = document.getElementById("titulo2");
    if (tema.value == "TO_DO") {
      document.getElementById("crud").style.display = "block";
      Titulo.innerText = "CRUD de TO DO List";
      Titulo.className = "text-blue text-center";
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
      Titulo.className = "text-info text-center";
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
      Titulo.className = "text-secondary text-center";
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
      Titulo.className = "text-success text-center";
      FirstInput2.innerText = "Nombre Completo";
      FirstInput.setAttribute("placeholder", "Ingresa Nombre");
      titulo1.innerText = "Nombre Completo";
      SecondInput2.innerText = "Número";
      SecondInput.setAttribute("placeholder", "Ingresa Número");
      titulo2.innerText = "Número";
      saveBtn.className = "btn btn-success mt-3";
    } else {
      document.getElementById("crud").style.display = "none";
    }
  });

  function loadData() {
    loadTheme();
    if (tema.value == "TO_DO") {
      tableBody.innerHTML = `
        <tr id="noData">
        <td colspan="4" class="text-center">No hay datos</td>
        </tr>`;
      const data = JSON.parse(localStorage.getItem("data")) || [];
      if (data.length) {
        document.getElementById("noData").remove();
      }
      data.forEach((item, index) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td class="text-center">${index + 1}</td>
            <td class="text-center">${item.primero}</td>
            <td class="text-center">${item.segundo}</td>
            <td class="text-center">
            <button type="button" class="btn-warning btn-edit" data-index="${index}" style="font-size: 1.5rem;">🖊</button>
            <button type="button" class="btn-danger btn-delete" data-index="${index}" style="font-size: 1.5rem;">🗑</button>
            </td>`;
        tableBody.appendChild(tr);
      });
    } else if (tema.value == "Biblioteca") {
      tableBody.innerHTML = `
        <tr id="noData">
        <td colspan="4" class="text-center">No hay datos</td>
        </tr>`;
      const libro = JSON.parse(localStorage.getItem("libro")) || [];
      if (libro.length) {
        document.getElementById("noData").remove();
      }
      libro.forEach((item, index) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
        <td class="text-center">${index + 1}</td>
        <td class="text-center">${item.primero}</td>
        <td class="text-center">${item.segundo}</td>
            <td class="text-center">
            <button type="button" class="btn-warning btn-edit" data-index="${index}" style="font-size: 1.5rem;">🖊</button>
            <button type="button" class="btn-danger btn-delete" data-index="${index}" style="font-size: 1.5rem;">🗑</button>
            </td>`;
        tableBody.appendChild(tr);
      });
    } else if (tema.value == "Inventario") {
      tableBody.innerHTML = `
          <tr id="noData">
          <td colspan="4" class="text-center">No hay datos</td>
          </tr>`;
      const articulo = JSON.parse(localStorage.getItem("articulo")) || [];
      if (articulo.length) {
        document.getElementById("noData").remove();
      }
      articulo.forEach((item, index) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
        <td class="text-center">${index + 1}</td>
        <td class="text-center">${item.primero}</td>
        <td class="text-center">${item.segundo}</td>
              <td class="text-center">
              <button type="button" class="btn-warning btn-edit" data-index="${index}" style="font-size: 1.5rem;">🖊</button>
              <button type="button" class="btn-danger btn-delete" data-index="${index}" style="font-size: 1.5rem;">🗑</button>
              </td>`;
        tableBody.appendChild(tr);
      });
    } else if (tema.value == "Agenda") {
      tableBody.innerHTML = `
      <tr id="noData">
      <td colspan="4" class="text-center">No hay datos</td>
      </tr>`;
      const contacto = JSON.parse(localStorage.getItem("contacto")) || [];
      if (contacto.length) {
        document.getElementById("noData").remove();
      }
      contacto.forEach((item, index) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
        <td class="text-center">${index + 1}</td>
        <td class="text-center">${item.primero}</td>
        <td class="text-center">${item.segundo}</td>
          <td class="text-center">
          <button type="button" class="btn-warning btn-edit" data-index="${index}" style="font-size: 1.5rem;">🖊</button>
          <button type="button" class="btn-danger btn-delete" data-index="${index}" style="font-size: 1.5rem;">🗑</button>
          </td>`;
        tableBody.appendChild(tr);
      });
    }
  }

  function clearForm() {
    FirstInput.value = "";
    SecondInput.value = "";
  }

  saveBtn.addEventListener("click", () => {
    // Evento para guardar
    const primero = FirstInput.value;
    const segundo = SecondInput.value;
    if (!primero) {
      return;
    }
    if (tema.value === "TO_DO") {
      const data = JSON.parse(localStorage.getItem("data")) || [];
      const index = saveBtn.getAttribute("data-index");
      console.log(index, "index");
      if (index) {
        data[index] = { primero, segundo };
        saveBtn.removeAttribute("data-index");
        saveBtn.textContent = "Guardar";
      } else {
        data.push({
          primero: primero,
          segundo: segundo,
        });
      }
      localStorage.setItem("data", JSON.stringify(data));
      loadData();
      clearForm();
    } else if (tema.value == "Biblioteca") {
      const libro = JSON.parse(localStorage.getItem("libro")) || [];
      const index = saveBtn.getAttribute("data-index");
      console.log(index, "index");
      if (index) {
        libro[index] = { primero, segundo };
        saveBtn.removeAttribute("data-index");
        saveBtn.textContent = "Guardar";
      } else {
        libro.push({
          primero: primero,
          segundo: segundo,
        });
      }
      localStorage.setItem("libro", JSON.stringify(libro));
      loadData();
      clearForm();
    } else if (tema.value == "Inventario") {
      const articulo = JSON.parse(localStorage.getItem("articulo")) || [];
      const index = saveBtn.getAttribute("data-index");
      console.log(index, "index");
      if (index) {
        articulo[index] = { primero, segundo };
        saveBtn.removeAttribute("data-index");
        saveBtn.textContent = "Guardar";
      } else {
        articulo.push({
          primero: primero,
          segundo: segundo,
        });
      }
      localStorage.setItem("articulo", JSON.stringify(articulo));
      loadData();
      clearForm();
    } else if (tema.value == "Agenda") {
      const contacto = JSON.parse(localStorage.getItem("contacto")) || [];
      const index = saveBtn.getAttribute("data-index");
      console.log(index, "index");
      if (index) {
        contacto[index] = { primero, segundo };
        saveBtn.removeAttribute("data-index");
        saveBtn.textContent = "Guardar";
      } else {
        contacto.push({
          primero: primero,
          segundo: segundo,
        });
      }
      localStorage.setItem("contacto", JSON.stringify(contacto));
      loadData();
      clearForm();
    }
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
      if (tema.value == "TO_DO") {
        const data = JSON.parse(localStorage.getItem("data")) || [];
        const item = data[index];
        FirstInput.value = item.primero;
        SecondInput.value = item.segundo;
      } else if (tema.value == "Biblioteca") {
        const libro = JSON.parse(localStorage.getItem("libro")) || [];
        const item = libro[index];
        FirstInput.value = item.primero;
        SecondInput.value = item.segundo;
      } else if (tema.value == "Inventario") {
        const articulo = JSON.parse(localStorage.getItem("articulo")) || [];
        const item = articulo[index];
        FirstInput.value = item.primero;
        SecondInput.value = item.segundo;
      } else if (tema.value == "Agenda") {
        const contacto = JSON.parse(localStorage.getItem("contacto")) || [];
        const item = contacto[index];
        FirstInput.value = item.primero;
        SecondInput.value = item.segundo;
      }
      saveBtn.textContent = "Actualizar";
      saveBtn.setAttribute("data-index", index);
    } else if (e.target.classList.contains("btn-delete")) {
      const index = e.target.dataset.index;
      if (tema.value == "TO_DO") {
        const data = JSON.parse(localStorage.getItem("data")) || [];
        data.splice(index, 1);
        localStorage.setItem("data", JSON.stringify(data));
      } else if (tema.value == "Biblioteca") {
        const libro = JSON.parse(localStorage.getItem("libro")) || [];
        libro.splice(index, 1);
        localStorage.setItem("libro", JSON.stringify(libro));
      } else if (tema.value == "Inventario") {
        const articulo = JSON.parse(localStorage.getItem("articulo")) || [];
        articulo.splice(index, 1);
        localStorage.setItem("articulo", JSON.stringify(articulo));
      } else if (tema.value == "Agenda") {
        const contacto = JSON.parse(localStorage.getItem("contacto")) || [];
        contacto.splice(index, 1);
        localStorage.setItem("contacto", JSON.stringify(contacto));
      }

      loadData();
    }
  });

  loadData();
});
