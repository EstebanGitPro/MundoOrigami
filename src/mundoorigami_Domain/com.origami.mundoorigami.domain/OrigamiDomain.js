
  class OrigamiDomain {

    constructor (UUID, nombre,TipoOrigami) {
      this.UUID = UUID;
      this.nombre = nombre;
      this.TipoOrigami = TipoOrigami;
    }

    
    get getUUID(){
      return this.UUID;
      
    }
    get getNombre(){
      return this.nombre;
    }

    get getTipoOrigami(){
      return this.TipoOrigami;
    }

    
  
  }

  module.exports = OrigamiDomain






 