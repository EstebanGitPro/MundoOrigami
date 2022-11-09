const { uuid } = require("../../mundoorigami_Crosscuting/com.origami.mundoorigami.crosscuting/UUID");

class TutorialOrigami {
    constructor (UUID, Origami, PasoTutorial, descripcion) {
      this.UUID = UUID;
      this.Origami = Origami;
      this.PasoTutorial = PasoTutorial;
      this.descripcion = descripcion;
    }

    get getUUID(){
      return this.UUID;
    }

    set setUUID(uuid){
      this.UUID = uuid
    }

    get getOrigami(){
      return this.Origami;
    }

    set setOrigami(origami){
      this.Origami = origami;
    }


    get getPasoTutorial(){
      return this.PasoTutorial;
    }

    set setPasoTutorial(pasotutorial){
      this.PasoTutorial = pasotutorial;
    }

  }