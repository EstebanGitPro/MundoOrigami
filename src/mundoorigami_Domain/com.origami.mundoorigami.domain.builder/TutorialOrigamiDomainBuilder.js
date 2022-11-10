const { uuid } = require("../../mundoorigami_Crosscuting/com.origami.mundoorigami.crosscuting/UUID");
const TutorialOrigamiDomain = require("../com.origami.mundoorigami.domain/TutorialOrigamiDomain");

class TutorialOrigamiDomainBuilder {
    constructor () {
      this.UUID = uuid.DEFAULT();
      this.Origami = '';
      this.PasoTutorial = 0;
      this.descripcion = '';
    }

  
    setUUID(){
      this.UUID = uuid.generarUuid();
      return this;
    }
    setOrigami(origami){
      this.Origami = origami;
       return this;
    }

    setPasoTutorial(pasotutorial){
      this.PasoTutorial = pasotutorial;
      return this;
    }

    build(){
      return new TutorialOrigamiDomain(this.UUID, this.Origami , this.pasotutorial);
    }

}

module.exports = TutorialOrigamiDomainBuilder