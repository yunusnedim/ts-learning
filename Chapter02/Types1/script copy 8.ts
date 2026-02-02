interface IsSized {
  length: number;
}

class DataBox<T extends IsSized> {
  content: T;
  constructor(input: T) {
    this.content = input;
  }

  print() {
    console.log(this.content);
  }
}

const d1 = new DataBox("hello");
const d2 = new DataBox([12, 2, 5]);
// const d3 = new DataBox(5);
