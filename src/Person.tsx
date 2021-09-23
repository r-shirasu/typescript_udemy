export class Person {
  name: string;

  constructor(initName: string) {
    this.name = initName;
  }

  // メソッドを追加する
  greeting() {
    console.log(`Hello! My name is ${this.name}`);
  }
}

const quill = new Person("Quill");
quill.greeting();
