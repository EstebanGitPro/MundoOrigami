const { uuid } = require("../../mundoorigami_Crosscuting/com.origami.mundoorigami.crosscuting/UUID");
const RecursoDomain = require("../com.origami.mundoorigami.domain/RecursoDomain");

class RecursoDoaminBuilder {

    constructor () {
      this.UUID = uuid.DEFAULT();
      this.multimedia = '';
      this.descripcion = '';
    }

    setUUID(){
      this.UUID = uuid.generarUuid();
      return this;
    }

    setMultimedia(multimedia){
      this.multimedia = multimedia
      return this;
    }

    setDescripcion(descripcion){
      this.descripcion = descripcion;
      return this;
    }

    build(){
      return new RecursoDomain(this.UUID, this.multimedia,this.descripcion);
    }

  }

  module.exports = RecursoDoaminBuilder;

