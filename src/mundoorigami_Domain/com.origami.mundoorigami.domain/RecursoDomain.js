const { uuid } = require("../../mundoorigami_Crosscuting/com.origami.mundoorigami.crosscuting/UUID");

class RecursoDomain {
    constructor (UUID, multimedia, descripcion) {
      this.UUID = UUID;
      this.multimedia = multimedia;
      this.descripcion = descripcion;
    }
    get getUUID(){
      return this.UUID;
    }

    get getMultimedia(){
      return this.multimedia;
    }
   
    get gatDescripcion(){
      return this.descripcion;
    }

  }

  module.exports = RecursoDomain;