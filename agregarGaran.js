class Garantia{
  constructor(nombre,marca,modelo,patente,vehiculo,comentario,fecha){
  this.nombre = nombre
  this.marca = marca
  this.modelo = modelo
  this.patente = patente
  this.vehiculo = vehiculo
  this.comentario = comentario
  this.fecha = fecha
  }
}

const garantias = JSON.parse(localStorage.getItem("garantias")) || []

const crearGarantia = () =>{
  const formularioCrear =document.querySelector("#crearGarantia")
  formularioCrear.addEventListener("submit",(e)=>{
    e.preventDefault()
    const datos = e.target.children
    const garantia = new Garantia(datos["nombre"].value, datos["marca"].value, datos["modelo"].value, datos["patente"].value, datos["vehiculo"].value, datos["comentario"].value, datos["fecha"].value,)
    garantias.push(garantia)
    localStorage.setItem("garantias", JSON.stringify (garantias))
    formularioCrear.reset()
    swal({
      icon: "success",
      title: "Garantia cargada con exito!"
    });;
  })
}

crearGarantia()

