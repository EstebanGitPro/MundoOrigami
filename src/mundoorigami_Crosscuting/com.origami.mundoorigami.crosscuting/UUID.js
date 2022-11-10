class UUID {

  constructor(UUID, Estado) {
    this.UUID = UUID;
    this.Estado = Estado;
  }

  generarUuid() {
    let ahora = new Date().getTime();
    let uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
      c
    ) {
      let aleatorio = (ahora + Math.random() * 16) % 16 | 0;
      ahora = Math.floor(ahora / 16);
      return (c == "x" ? aleatorio : (aleatorio & 0x3) | 0x8).toString(16);
    });
    return uuid;
  }

  DEFAULT() {
    let uuid = "00000000-0000-0000-0000-000000000000";

    return uuid;
  }
}

const uuid = new UUID()
module.exports = {uuid};
