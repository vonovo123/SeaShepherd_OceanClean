class TypeError extends Error {
  constructor(message, type, name) {
    super();
    this.message = message;
    this.type = type;
    this.name = name;
  }
}

export default TypeError;
