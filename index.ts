let bigInt: bigint = 12344444n;
let user: { name: string; age: number } = {
  name: "Mahesh",
  age: 24,
};

let tuple: [number, string, boolean, object] = [1, "3", true, {}];
//enum
enum Colors {
  primary = "Red",
  secondary = "blue",
}
let anything: any = "Could be a string";

let notSure: unknown = 4;

if (typeof notSure === "string") {
  notSure.toUpperCase();
}

//Never
function infiniteLoop(): never {
  while (true) {}
}

let inferredNumber = 42;

type User = {
  name: string;
  age: number;
};

const Mahesh: User = {
  name: "Mahesh",
  age: 26,
};

type Vehicle = {
  maker: string;
  model: string;
};

type Car = Vehicle & {
  isElectric: boolean;
};

const myCar: Car = {
  maker: "Ford",
  model: "Mustang",
  isElectric: true,
};

let Person: string | object = "Mahesh";

interface Persons {
  name: string;
  age: number;
}

interface CarInterface extends Vehicle {
  isElectric: boolean;
}

//Type assertion
const route = {
  params: 2,
};

const params = route.params as number;

//regular functions
function add(a: number, b: number = 1): number {
  return a + b;
}

//Rest Parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

type Operations = (a: number, b: number) => number;

const add2: Operations = (a, b) => a + b;

class Person1 {
  public name: string;
  private adhaarNumber: string;
  protected address: string;
  readonly birthDate: Date;

  constructor(
    name: string,
    adhaarNumber: string,
    address: string,
    birthDate: Date
  ) {
    this.name = name;
    this.adhaarNumber = adhaarNumber;
    this.address = address;
    this.birthDate = birthDate;
  }

  //getter for age
  public getAdhaarNumber(): string {
    return this.adhaarNumber;
  }

  public getAddress(): string {
    return this.address;
  }
}

class Manager extends Person1 {
  private salary: number;
  constructor(
    name: string,
    adhaarNumber: string,
    address: string,
    salary: number,
    birthDate: Date
  ) {
    super(name, adhaarNumber, address, birthDate);
    this.salary = salary;
  }
}

const person1 = new Person1("Mahesh", "2333", "Rajkot", new Date("23-02-2000"));

console.log(person1.getAdhaarNumber());
console.log(person1.getAddress());

//Generics

//create components that can work with a variety of data types while still maintaining type information.
function identity<T>(arg: T) {
  return arg;
}

let numberIdentity = identity<number>(42);
let stringIdentity = identity<string>("Hello");

interface Pair<T, U> {
  first: T;
  second: U;
}

let numberStringPair: Pair<number, string> = {
  first: 23,
  second: "Mahesh",
};

let booleanStringPair: Pair<boolean, string> = {
  first: true,
  second: "Mahesh",
};

class Stack<T> {
  private items: T[] = [];
  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

const numberStack = new Stack<number>();

//Literal types in typescript
const a = 12;

//String literal types
type Greeting = "Hello" | "Hi" | "Hey";

function greet(greeting: Greeting): void {
  console.log(greeting);
}

type Action = "create" | "update" | "delete";

function performAction(action: Action): void {
  switch (action) {
    case "create":
      console.log("Creating...");
      break;
    case "update":
      console.log("Updating...");
      break;
    case "delete":
      console.log("Deleting...");
      break;
    default:
      console.log("Invalid action");
  }
}

//namespace
namespace registerValidation {
  export function validateName(name: string): boolean {
    return name.length > 2;
  }
}

const isValidName = registerValidation.validateName("Mahesh");
console.log(isValidName);

//type guards
//Type guards are used to narrow down the type of a variable within a conditional block.
function isString(value: any): value is string {
  return typeof value === "string";
}

function checking(value: string | number) {
  if (isString(value)) {
    console.log("yes it is string");
  } else {
    console.log("number");
  }
}

//index signatures
//allow you to define an object type with dynamic properties.
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Mahesh", "Rajkot", "India"];

let myStr: string = myArray[0];

//keyof operator
interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person;
let m: PersonKeys = "age";

//utility types
interface Animal {
  name?: string;
  sound?: string;
}

// type PartialAnimal = Partial<Animal>
// type RequiredAnimal = Required<Animal>
type ReadonlyAnimal = Readonly<Animal>;
type Records = Record<string, number>;

const dog: ReadonlyAnimal = {};

const record: Records = {
  name: 2,
};

type nameOnly = Pick<Animal, "name">;

let cat: nameOnly = {
  name: "cat",
};

type omitOnly = Omit<Animal, "name">;

let rabbit: omitOnly = {
  sound: "sound",
};

//modules
export function add3(a: number, b: number): number {
  return a + b;
}

export const PI: number = 3.14;

export class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }
}
