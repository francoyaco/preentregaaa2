confirm("Bienvenido al simulador de plazo fijo");

// Funcion constructora para generar mi usuario nuevo
const cliente = [];
class persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}

// Array con asesores zonales
const asesores = [
  { id: 1, nombre: "Hugo", zona: "Palermo" },
  { id: 2, nombre: "Jorge", zona: "Belgrano" },
  { id: 3, nombre: "Carolina", zona: "Villa Ortuzar" },
];

// creo mi funcion para asignar un asesor zonal

let asesorAsignado = "";
function selecZona() {
  let ingresaOpcion = parseInt(
    prompt(
      "Selecciona una zona \n 1 - Palermo \n 2 - Belgrano \n 3 - Villa Ortuzar"
    )
  );
  if (isNaN(ingresaOpcion)) {
    alert("No es una opcion valida");
    selecZona();
  } else {
    switch (ingresaOpcion) {
      case 1:
        asesorAsignado = asesores.find((el) => {
          return el.zona === "Palermo";
        });
        break;
      case 2:
        asesorAsignado = asesores.find((el) => {
          return el.zona === "Belgrano";
        });
        break;
      case 3:
        asesorAsignado = asesores.find((el) => {
          return el.zona === "Villa Ortuzar";
        });
        break;
      default:
        alert("No es una opcion valida");
        selecZona();
    }
  }
}

selecZona();

// Funcion que me devuleve un objeto en base a lo ingresado por el cliente
function bienvenida() {
  let nombre = prompt("Ingrese su nombre");
  let apellido = prompt("Ingrese su apellido");
  let usuarioNuevo = new persona(nombre, apellido);
  alert(
    `Bienvenido ${usuarioNuevo.nombre} te asignamos a ${asesorAsignado.nombre} como asesor de la zona ${asesorAsignado.zona}`
  );
  cliente.push(usuarioNuevo);
}
bienvenida();

// Revisamos el monto a cotizar
function interes() {
  let cotiArealizar = parseInt(
    prompt("¿Cuantas cotizaciones vas a necesitar realizar?")
  );
  if (isNaN(cotiArealizar)) {
    alert("No es una opcion valida");
    interes();
  } else {
    for (let index = 1; index <= cotiArealizar; index++) {
      // Pido los datos para obtener una cotizacion (Capital y dias)
      // Monto
      let monto = parseInt(
        prompt("Ingrese un monto a invertir hasta $1.000.000")
      );
      // Dias
      let dias = parseInt(prompt("Ingrese la cantidad de dias"));
      if (monto > 1000000 || dias > 365) {
        alert("Alguno de los datos ingresados no es valido");
      } else {
        // Con los datos obtenidos realizamos los calculos en base a la tasa anual estipulada.
        const tasa = 75 / 365;
        let parcial = (monto * (tasa * dias)) / 100;
        let resultado = parcial + monto;
        // devolvemos el resultado esperado..
        alert(`El interes sumado al capital sera de ${resultado}`);
      }
    }
  }
}
interes();
