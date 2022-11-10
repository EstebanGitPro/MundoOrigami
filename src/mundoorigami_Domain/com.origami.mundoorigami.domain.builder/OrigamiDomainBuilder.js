const {uuid} = require("../../mundoorigami_Crosscuting/com.origami.mundoorigami.crosscuting/UUID");
const OrigamiDomain = require('../com.origami.mundoorigami.domain/OrigamiDomain');  


class OrigamiDomainBuilder {
  constructor() {
    this.UUID = uuid.DEFAULT();
    this.nombre = "";
    this.TipoOrigami = "";
  }

  setUUID() {
    this.UUID = uuid.generarUuid();
    return this;
  }

  setNombre(nombre) {
    this.nombre = nombre;
    return this;
  }

  setTipoOrigami(tipoorigami) {
    this.TipoOrigami = tipoorigami;
    return this;
  }


  build(){
    return new OrigamiDomain(this.UUID, this.nombre, this.TipoOrigami);
  }
}

module.exports = OrigamiDomainBuilder;

