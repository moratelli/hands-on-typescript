class Speaker {
  private message: string;
  constructor(private name: string) {}

  get Message() {
    if (!this.message.includes(this.name)) {
      throw Error("messa is missing speaker's name!");
    }

    return this.message;
  }

  set Message(val: string) {
    let tempMsg = val;

    if (!val.includes(this.name)) {
      tempMsg = `${this.name} ${val}`;
    }

    this.message = tempMsg;
  }
}

const speaker = new Speaker("john");
speaker.Message = "hello";
console.log(speaker.Message);
