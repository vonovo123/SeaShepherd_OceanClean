class TypeError extends Error {
  constructor(message, type, name) {
    super(message);
    this.message = message;
    this.type = type;
    this.name = name;
  }
}

export default TypeError;
