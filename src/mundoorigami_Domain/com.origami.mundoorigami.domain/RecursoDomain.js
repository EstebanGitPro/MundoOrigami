const { uuid } = require("../../mundoorigami_Crosscuting/com.origami.mundoorigami.crosscuting/UUID");

class Recurso {
    constructor (UUID, multimedia, descripcion) {
      this.UUID = UUID;
      this.multimedia = multimedia;
      this.descripcion = descripcion;
    }

    get getUUID(){
      return this.UUID;
    }

    set setUUID(uuid){
      this.UUID = uuid
    }

    get getMultimedia(){
      return this.multimedia;
    }

    set setMultimedia(multimedia){
      this.multimedia = multimedia
    }

    get gatDescripcion(){
      return this.descripcion;
    }


    set setDescripcion(descripcion){

      this.descripcion = descripcion;
    }

  }