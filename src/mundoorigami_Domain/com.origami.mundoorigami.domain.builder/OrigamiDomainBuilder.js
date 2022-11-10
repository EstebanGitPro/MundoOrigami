const { uuid } = require("../../mundoorigami_Crosscuting/com.origami.mundoorigami.crosscuting/UUID");
const {origami} = require("../com.origami.mundoorigami.domain/OrigamiDomain");

class OrigamiDomainBuilder {


    /*constructor (UUID, nombre,TipoOrigami) {
      this.UUID = origami.setUUID(UUID);
      this.nombre = origami.setNombre(nombre);
      this.TipoOrigami = origami.setTipoOrigami(TipoOrigami);
      this.create = origami.build();
    }*/
    
    
  
  }

  const llenarDomainOrigami = new OrigamiDomainBuilder();

  llenarDomainOrigami.UUID = '6378453-45-6-56567-657'//uuid.generarUuid();
  llenarDomainOrigami.nombre = 'catillo';
  llenarDomainOrigami.TipoOrigami = 'modular';

  console.log('hola');









