const { uuid } = require("../../mundoorigami_Crosscuting/com.origami.mundoorigami.crosscuting/UUID");
const {origami} = require("../com.origami.mundoorigami.domain/OrigamiDomain");

class OrigamiDomainBuilder {


    constructor () {
      this.UUID = UUID;
      this.nombre = origami.setNombre(nombre);
      this.TipoOrigami = origami.setTipoOrigami(TipoOrigami);
      this.create = origami.build();
    }

    create(UUID){

      this.UUID = origami.setUUID(UUID);

    }
    
    
  
  }

  const llenarDomainOrigami = new OrigamiDomainBuilder();

  llenarDomainOrigami.UUID = uuid.generarUuid();
  llenarDomainOrigami.nombre = 'catillo';
  llenarDomainOrigami.TipoOrigami = 'modular';

  console.log(llenarDomainOrigami.UUID = uuid.generarUuid());
  
  //cambio para ver como le funciona a castillo en su git








