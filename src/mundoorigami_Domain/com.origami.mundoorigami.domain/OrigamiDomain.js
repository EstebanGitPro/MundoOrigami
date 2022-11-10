//const { uuid } = require("../../mundoorigami_Crosscuting/com.origami.mundoorigami.crosscuting/UUID");

    class Origami {

    constructor (UUID, nombre,TipoOrigami) {
      this.UUID = UUID;
      this.nombre = nombre;
      this.TipoOrigami = TipoOrigami;
    }



    get getUUID(){
      return this.UUID;
      
    }

    set setUUID(uuid){
      this.UUID = uuid
    }

    getNombre(){
      return this.nombre;
    }

    set setNombre(nombre){
      return this.nombre =nombre;
    }

    get getTipoOrigami(){
      return this.TipoOrigami;
    }

    set setTipoOrigami(tipoorigami){
      this.TipoOrigami =  tipoorigami;
    }

    build() {
      return new {
        UUID: this.UUID,
        nombre: this.nombre,
        TipoOrigami: this.TipoOrigami,
      };
    }


    
  }



  const origami = new Origami()
  module.exports = {origami};

  console.log(origami.getNombre())

 