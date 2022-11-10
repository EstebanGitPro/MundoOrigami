
class TutorialOrigamiDomain {
    constructor (UUID, Origami, PasoTutorial, descripcion) {
      this.UUID = UUID;
      this.Origami = Origami;
      this.PasoTutorial = PasoTutorial;
      this.descripcion = descripcion;
    }

    get getUUID(){
      return this.UUID;
    }

  
    get getOrigami(){
      return this.Origami;
    }

    get getPasoTutorial(){
      return this.PasoTutorial;
    }


}

module.exports = TutorialOrigamiDomain;