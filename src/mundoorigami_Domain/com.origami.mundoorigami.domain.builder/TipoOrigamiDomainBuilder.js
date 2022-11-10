const { uuid } = require("../../mundoorigami_Crosscuting/com.origami.mundoorigami.crosscuting/UUID");
const TipoOrigamiDomain = require("../com.origami.mundoorigami.domain/TipoOrigamiDomain");

class TipoOrigamiDomainBuilder {
    constructor () {
      this.UUID = uuid.DEFAULT();
      this.nombre = '';
    }

    setUUID(){
      this.UUID = uuid.generarUuid();
      return this;
    }

  
    setNombre(nombre){
      this.nombre =nombre;
      return this;
    }

    build(){
      return new TipoOrigamiDomain(this.UUID, this.nombre);
    }

}

module.exports = TipoOrigamiDomainBuilder