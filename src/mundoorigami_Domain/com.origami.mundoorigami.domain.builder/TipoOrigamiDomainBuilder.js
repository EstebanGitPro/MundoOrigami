const { uuid } = require("../../mundoorigami_Crosscuting/com.origami.mundoorigami.crosscuting/UUID");

class TipoOrigamiDomainBuilder {
    constructor (UUID, nombre) {
      this.UUID = UUID;
      this.nombre = nombre;
    }

    get getUUID(){
      return this.UUID;
    }

    set setUUID(uuid){
      this.UUID = uuid
    }

    get getNombre(){
      return this.nombre;
    }

    set setNombre(nombre){
      return this.nombre =nombre;
    }
}