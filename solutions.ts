//& Problem 1
const filterEvenNumbers = (arr: number[]) : number[] => {
  const evenArr : number[] = []
  arr.forEach(item => {
    if(item % 2 === 0 ){
      evenArr.push(item)
    }
  })
  return evenArr
}

const evenArr = filterEvenNumbers([1, 2, 3, 4, 5, 6])
console.log(evenArr)





//& Problem 2
const reverseString = (str: string) : string => {
  let reverse = str.split("").reverse().join("")
  return reverse
}
// console.log(reverseString("typescript"))






//& Problem 3
type StringOrNumber = string | number

const checkType = (item: StringOrNumber) : StringOrNumber => {
  if(typeof item === 'string'){
    return 'String'
  }else{
    return 'Number'
  }
}
// console.log(checkType("Hello"))
// console.log(checkType(42))





//& Problem 4
const user = {
  id: 1,
  name: "John Doe",
  age: 21
}

const getProperty = <T> (obj: T, key: keyof T) => {
  return obj[key]
}
// console.log(getProperty(user, 'name'))





//& Problem 5
interface Book {
  title: string
  author: string
  publishedYear: number
}

const myBook : Book = {
   title: "TypeScript Guide",
   author: "Jane Doe",
   publishedYear: 2024
};

const toggleReadStatus = (myBook: Book) => {
  return {
    ...myBook,
    isRead: true
  }
};

const newBook = toggleReadStatus(myBook)
// console.log(newBook)






//& Problem 6
class Person {
  name: string
  age: number

  constructor (name: string, age: number){
    this.name = name
    this.age = age
  }
}

class Student extends Person {
  grade: string

  constructor (name: string, age: number, grade: string){
    super(name, age)
    this.grade = grade
  }

  getDetails(){
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
  }
}

const student = new Student("Alice", 20, "A");
// console.log(student.getDetails())






//& Problem 7
const getIntersection = (arr1 : number[], arr2 : number[]) : number[] => {
  let commonArr : number[] = []
  const arr = new Set(arr1)
  arr2.forEach(item => {
    if(arr.has(item)){
      commonArr.push(item)
    }
  })
  return commonArr
}

const commonArr = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])
// console.log(commonArr)

