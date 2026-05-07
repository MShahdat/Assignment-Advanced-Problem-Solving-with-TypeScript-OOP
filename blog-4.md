# Mastering the Four Pillars of OOP in TypeScript

# Introduction

As TypeScript applications grow, managing code becomes increasingly difficult. Large-scale projects often contain thousands of lines of code, multiple developers, reusable modules, APIs, authentication systems, dashboards, and complex business logic.

Object-Oriented Programming (OOP) provides a blueprint for managing this chaos. By using TypeScript’s robust type system alongside the four pillars of OOP—


- Inheritance
- Encapsulation
- Abstraction
- Polymorphism

---

# Inheritance: Reusing Logic

Inheritance allows a class to derive features from another class. This promotes code reusability and establishes a natural hierarchy. In large projects, instead of rewriting common logic, you define it in a base class and extend it.

While composition is often preferred in modern dev, inheritance remains powerful for "is-a" relationships.

## Example of Inheritance

```ts
class Animal {
    name: string

    constructor(name: string) {
        this.name = name
    }

    makeSound() {
        console.log('Some generic sound')
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof Woof')
    }
}

const dog = new Dog('Tommy')

dog.makeSound()
dog.bark()
```

## Benefits of Inheritance

The Dog class automatically gets:

- name
- makeSound()

from the Animal class.

Without inheritance, we would repeatedly rewrite the same logic.

---

# Encapsulation: Protecting the Internal State

Encapsulation is the practice of bundling data (properties) and methods that operate on that data into a single unit (a class) while restricting direct access to some of the object's components.

In TypeScript, we use access modifiers like private, protected, and public to hide the internal state. This prevents external code from reaching into an object and changing its data in unexpected ways, which reduces side effects.

```ts
class BankAccount {
    private _balance: number = 0;

    public deposit(amount: number): void {
        if (amount > 0) {
            this._balance += amount;
        }
    }

    public get balance(): number {
        return this._balance;
    }
}

const account = new BankAccount();
account.deposit(100);
// account._balance = -500; // Error: Property '_balance' is private.
```

---

# Abstraction: Hiding Complexity

Abstraction involves hiding the complex implementation details and showing only the necessary features of an object. Think of it like a car dashboard: you see the steering wheel and pedals (the interface), but you don’t need to understand the internal combustion engine to drive.

In TypeScript, we achieve abstraction using Interfaces and Abstract Classes. This allows us to define what an object does without worrying about how it does it.

```ts
abstract class Car{
  abstract start(): void
  abstract pause(): void
  abstract stop(): void
}

class myCar extends Car {
  start(): void {
    console.log('car is starting...')
  }

  pause(): void {
    console.log('car is paused...')
  }

  stop(): void {
    console.log('car is stopped...')
  }

  play(){
    console.log('exta method..')
  }
}

const mycar = new myCar()
mycar.play()
```

---

# Polymorphism: Flexibility Through Interfaces

Polymorphism ("many shapes") allows different classes to be treated as instances of the same interface or parent class. This is the secret sauce for reducing if-else or switch statements in your logic.

By relying on a common interface, your code can interact with many different types of objects without knowing their specific underlying class.

```ts
class Shape {
  getArea (){
    return 0
  }
}

class Circle extends Shape{
  radius: number

  constructor (radius: number){
    super()
    this.radius = radius
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius
  }
}

class Rectengle extends Shape{
  height: number
  width: number

  constructor (height: number, width: number){
    super()
    this.height = height
    this.width = width
  }

  getArea(): number {
    return this.height * this.width
  }
}

const area = (param: Shape) =>{
  return param.getArea()
}

const shape = new Shape()
const circle = new Circle(3)
const rectengle = new Rectengle(3, 4)

console.log(area(circle))
```

---

# Conclusion

The four pillars of OOP—Encapsulation, Abstraction, Inheritance, and Polymorphism—help developers manage complexity in large-scale TypeScript projects by improving code organization, reusability, security, and flexibility. Together, these principles make applications easier to maintain, scale, and extend over time. By applying OOP effectively, developers can build cleaner, more structured, and more reliable TypeScript applications.