const OrigamiDomainBuilder = require("../../mundoorigami_Domain/com.origami.mundoorigami.domain.builder/OrigamiDomainBuilder");
const PasoTutorialDomainBuilder = require("../../mundoorigami_Domain/com.origami.mundoorigami.domain.builder/PasoTutorialDomainBuilder")


const Origamimodular = new OrigamiDomainBuilder()
.build()
setUUID()
.setNombre('Mariposa')
.setTipoOrigami('Modular')
.build()

//console.log(Origamimodular);


const CreateTipoOrigami = new PasoTutorialDomainBuilder()
.setUUID()
.setPaso(0)
.setDescripcion('descripcion')
.setRecurso('cartulina')
.build()

//console.log(CreateTipoOrigami);
