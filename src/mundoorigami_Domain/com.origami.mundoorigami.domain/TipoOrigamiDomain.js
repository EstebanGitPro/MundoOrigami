class TipoOrigamiDomain {
    constructor (UUID, nombre) {
      this.UUID = UUID;
      this.nombre = nombre;
    }

    get getUUID(){
      return this.UUID;
    }

    get getNombre(){
      return this.nombre;
    }

   
}

module.exports = TipoOrigamiDomain;