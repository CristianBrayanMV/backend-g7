const RUTA_BACK = "http://127.0.0.1:5000";


const btn = document.querySelector("#ver");
const prod = document.querySelector("#productos");
let lista ='';

btn.addEventListener('click', () => {
    fetch(RUTA_BACK + "/devolver-productos", {
        method: "GET"        
      })
        .then((respuesta) => {
          return respuesta.json();
        })
        .then((productos) => {
          console.log(productos);
          for (let producto of productos.content) {
            lista += `<a href="#" class="list-group-item list-group-item-action">${producto.nombre}, S/. ${producto.precio}</a>`
          }

          if(!lista)
            lista = `<a href="#" class="list-group-item list-group-item-action">No hay productos para mostrar</a>`
          prod.innerHTML = lista
        })
        .catch((error) => {
          console.error(error);
        });
    
})


fetch(RUTA_BACK + "/producto", {
    method: "POST",
    body: JSON.stringify({
      nombre: "Cebolla",
      precio: 4.5,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });