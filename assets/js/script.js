contador = document.getElementById('contador')

function sumaralcarrito(){
    valor = contador.textContent
    contador.textContent = parseInt(valor) + 1
    alert("Se ha agregado un producto al carrito")
}