const { uuid } = require("../../mundoorigami_Crosscuting/com.origami.mundoorigami.crosscuting/UUID");

const UUID = uuid.generarUuid();

class PasoTutorial {
  

    constructor (UUID,paso, descripcion, recurso ) {
      this.UUID = UUID;
      this.paso = paso;
      this.descripcion = descripcion;
      this.recurso = recurso;      
    }

    get getUUID(){
      return this.UUID;
    }

    set setUUID(uuid){
      this.UUID = uuid;
    }

    get getPaso(){
      return this.paso;
    }

    set setPaso(paso){

      this.paso = paso;
    }

    get gatDescripcion(){
      return this.descripcion;
    }


    set setDescripcion(descripcion){

      this.descripcion = descripcion;
    }

    get getRecurso(){
      return this.recurso;
    }

    set setRecurso(recurso){
      this.recurso = recurso;
    }


  }

  const uuidPasotutorial = new  PasoTutorial(UUID);

  console.log(uuidPasotutorial);
