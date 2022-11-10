const { uuid } = require("../../mundoorigami_Crosscuting/com.origami.mundoorigami.crosscuting/UUID");
const PasoTutorialDomain = require("../com.origami.mundoorigami.domain/PasoTutorialDomain");

class PasoTutorialDomainBuilder {
  

    constructor () {
      this.UUID = uuid.DEFAULT();
      this.paso = 0;
      this.descripcion = '';
      this.recurso = '';      
    }

 
    setUUID(){
      this.UUID = uuid.generarUuid();
      return this;
    }

   

    setPaso(paso){
      this.paso = paso;
      return this;
    }

    setDescripcion(descripcion){
      this.descripcion = descripcion;
      return this;
    }



    setRecurso(recurso){
      this.recurso = recurso;
      return this;
    }

    build(){
      return new PasoTutorialDomain(this.UUID, this.paso, this.descripcion, this.recurso);
    }


  }

  module.exports = PasoTutorialDomainBuilder;

 
