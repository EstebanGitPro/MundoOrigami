const { uuid } = require("../../mundoorigami_Crosscuting/com.origami.mundoorigami.crosscuting/UUID");

  export default class Origami {

    constructor (UUID, nombre,TipoOrigami) {
      this.UUID = uuid.generarUuid();
      this.nombre = nombre;
      this.TipoOrigami = TipoOrigami;
    }

 
    create() {
      return new {
        UUID: this.UUID,
        nombre: this.nombre,
        TipoOrigami: this.TipoOrigami,
      };
    }


    get getUUID(){
      return this.UUID;
    }

    set setUUID(uuid){
      this.UUID = uuid
    }

    get getNombre(){
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


    
  }