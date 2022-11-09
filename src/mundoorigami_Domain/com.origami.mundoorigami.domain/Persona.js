const {} = require("UUID");
const { uuid } = require("../../mundoorigami_Crosscuting/com.origami.mundoorigami.crosscuting/UUID");


class Persona {

  UUID = uuid.generarUuid();
  nombre = "";
  correo = "";
  contraseña ="";



    constructor (UUID, nombre, correo, contraseña) {
      this.UUID = uuid.generarUuid();
      this.nombre = nombre;
      this.correo = correo;
      this.contraseña = contraseña;
    }
  }


  const idPerson = new Persona();
  console.log(idPerson.UUID);