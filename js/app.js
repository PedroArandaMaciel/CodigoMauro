class Producto {
  constructor(nombre, precio, talle) {
    this.nombre = nombre;
    this.precio = precio;
    this.talle = talle;
  }
}
function pintarCarrito() {
  const tablaCarrito = document.getElementById("tablaCarrito")
  tablaCarrito.innerText = ""
  carrito.forEach(producto => {
      tablaCarrito.innerHTML += `
      <div class="direccionTextoTabla">${producto.nombre}</div>
      <div class="direccionTextoTabla">${producto.talle}</div>
      <div class="direccionTextoTabla">${producto.precio}</div>
      `
  })
}
//llamada al json para pintar en el dom
const contGrid = document.getElementById("contGrid")
fetch("./productos/productos.json")
.then(response => response.json())
.then(productos => {
  productos.forEach((producto, index) => {
    contGrid.innerHTML += `
    <div class="direccionTextoTabla">${producto.nombre}</div>
    <div class="direccionTextoTabla">${producto.precio}</div>
    <div class="direccionTextoTabla">${producto.talle}</div>
    <img class="tamañoImg" src="${producto.img}" alt="">
    <button id="btn${index}" value="${index}">Comprar</button>
    `
  });
})

/*
//llamar local storage para pintar en el dom
if(localStorage.getItem("reservasLS")){                             
    ultimasReservasStorage = JSON.parse(localStorage.getItem("reservasLS"))
    idReserva = ultimasReservasStorage.length + 1
    pintarNumeroCarrito(ultimasReservasStorage.length)
    ultimasReservasStorage.forEach((reserva) => {
        reservas.push(reserva)                                
        pintarEstructuraEntrada(reserva)
    })
}

//Funcion de pintar
function pintarEstructuraEntrada(reserva) {
    divEntradas.innerHTML += `
    <div class="card border-success mb-3">
    <div class="card-header bg-transparent border-success">Reserva numero ${reserva.Id}</div>
    <div class="card-body text-success">
      <h5 class="card-title">${reserva.Pelicula}</h5>
      <p class="card-text">Mayores: ${reserva.Mayores}</p>
      <p class="card-text">Menores: ${reserva.Menores}</p>
      <p class="card-text">Precio Total: $${reserva.PrecioTotal}</p>
    </div>
    <button class="btn btn-primary">Remover Seleccion</button>
    `
}




*/

































/*class Producto {
  constructor(nombre, precio, talle) {
    this.nombre = nombre;
    this.precio = precio;
    this.talle = talle;
  }
}

const contGrid = document.querySelector(".contGrid");
const tablaCarrito = document.querySelector(".tablaCarrito");
const comprarTodo = document.querySelector(".comprarTodo");

let carrito = [];

try {
  fetch("productos/productos.json")
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((datos) => {
      let contador = [0]; //no va un array [0]
      while (datos.length > contador) {
        let producto = document.createElement("div");

        let imgCont = document.createElement("div");
        let img = document.createElement("img");

        let contenido = document.createElement("div");

        let titulo = document.createElement("h2");
        let precio = document.createElement("p");
        let talle = document.createElement("h3");

        let agregarAlCarrito = document.createElement("button");
        let quitarCarrito = document.createElement("button");

        producto.setAttribute("class", "producto");

        imgCont.setAttribute("class", "imgCont");
        img.setAttribute("src", datos[contador].img);
        img.setAttribute("alt", "imagen de fondo");

        contenido.setAttribute("class", "contenido");

        titulo.setAttribute("class", "h2");
        talle.setAttribute("class", "talle");
        precio.setAttribute("class", "precio");

        titulo.innerHTML = datos[contador].nombre;
        precio.innerHTML = datos[contador].precio + "$";
        talle.innerHTML = datos[contador].talle;

        agregarAlCarrito.setAttribute("class", "btnAgregarAlCarrito");
        agregarAlCarrito.setAttribute("value", contador);
        agregarAlCarrito.innerHTML = "Agregar al carrito";

        quitarCarrito.setAttribute("class", "btnQuitarCarrito");
        quitarCarrito.innerHTML = "Quitar";

        producto.appendChild(imgCont);
        imgCont.appendChild(img);
        producto.appendChild(contenido);
        contenido.appendChild(titulo);
        contenido.appendChild(precio);
        contenido.appendChild(talle);
        contenido.appendChild(agregarAlCarrito);
        contGrid.appendChild(producto);
        contenido.appendChild(quitarCarrito)
//hasta aca se pinta el json
        agregarAlCarrito.addEventListener("click", () => {

          const productoCarrito = new Producto(
            localStorage.setItem(
              datos[agregarAlCarrito.value].nombre,
              datos[agregarAlCarrito.value].precio,
              datos[agregarAlCarrito.value].talle)
          );

          carrito.push(productoCarrito);

          const tdGeneral = document.querySelectorAll(".obtjst");
          const tr = document.createElement("tr");
          const tdUno = document.createElement("td");
          const tdDos = document.createElement("td");
          const tdTres = document.createElement("td");
          tdUno.setAttribute("class", "obtjst");
          tdDos.setAttribute("class", "obtjst");
          tdTres.setAttribute("class", "obtjst");
          tr.setAttribute("class", "trjs");
          tdUno.innerHTML = datos[agregarAlCarrito.value].nombre;
          tdDos.innerHTML = datos[agregarAlCarrito.value].talle;
          tdTres.innerHTML = datos[agregarAlCarrito.value].precio;

          if (tdGeneral.length == 0) {
            tr.appendChild(tdUno);
            tr.appendChild(tdDos);
            tr.appendChild(tdTres);
            tablaCarrito.appendChild(tr);
          }

          tdGeneral.forEach((elem, i) => {
            if (elem.innerHTML == datos[agregarAlCarrito.value].nombre) {
              Swal.fire({
                title: "Alerta",
                text: "Su producto ya ha sido agregado al carrito",
                icon: "warning",
                iconColor: "#FF8B00",
                confirmButtonText: "Aceptar",
              });
            } else {
              tr.appendChild(tdUno);
              tr.appendChild(tdDos);
              tr.appendChild(tdTres);
              tablaCarrito.appendChild(tr);
            }
          });
        });
        contador++;
      }
    });
} catch (e) {
  console.log(e);
}

comprarTodo.addEventListener("click", (e) => {
  console.log(precioTotalCarrito(carrito));

  const trjs = document.querySelectorAll(".trjs");

  if (trjs.length == 0) {
    Swal.fire('Error', 'Agregue un producto al carrito', 'error')
  } else {
    trjs.forEach((elem) => {
      elem.outerHTML = "";
    });
    Swal.fire('Gracias', 'Su compra ha sido exitosa', 'success')
  }
});

function precioTotalCarrito(array) {
  return array.reduce((total, producto) => (total += producto.precio), 0);
}


//ejemplo de valores, no obj ()
if(localStorage.getItem("Remera Diamond")){
  ultimasReservasStorage = localStorage.getItem("Remera Diamond")
  console.log(ultimasReservasStorage)
}

/*
se esta guardando en el local storage solo valores 
  del objeto y no el objeto completo 

En el agregado de producto falta un condicional IF que revise  
  si ya se encuentra el producto 
*/