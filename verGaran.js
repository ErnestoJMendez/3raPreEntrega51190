const garantias = JSON.parse(localStorage.getItem("garantias")) || []

const mostrarGarantias = document.querySelector("#garantias")
garantias.forEach(garantia => {
const garantiaIndividual = document.createElement("div")
garantiaIndividual.className = "garantia"
garantiaIndividual.innerHTML = `
    <p>Fecha: ${garantia.fecha}</p>
    <p>Nombre: ${garantia.nombre}</p>
    <p>Marca: ${garantia.marca}</p>
    <p>Modelo: ${garantia.modelo}</p>
    <p>Patente: ${garantia.patente}</p>
    <p>Vehiculo: ${garantia.vehiculo}</p>
    <p>Comentario: ${garantia.comentario}</p>`
mostrarGarantias.append(garantiaIndividual)
console.log(garantias)
})
