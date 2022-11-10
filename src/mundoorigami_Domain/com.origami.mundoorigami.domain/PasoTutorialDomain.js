  class PasoTutorialDomain {
  

    constructor (UUID,paso, descripcion, recurso ) {
      this.UUID = UUID;
      this.paso = paso;
      this.descripcion = descripcion;
      this.recurso = recurso;      
    }


    get getPaso(){
      return this.paso;
    }

    get gatDescripcion(){
      return this.descripcion;
    }

    get getRecurso(){
      return this.recurso;
    }


  }

  module.exports = PasoTutorialDomain

  
