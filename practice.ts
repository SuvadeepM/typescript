// let a = 12 // primitive data type
// let b = a
// b = b + 2 // pass by value
// console.log(a)
// console.log(b)

// let c = [1,3,4] // reference data type
// let d = c // pass by reference

// d[1] = 43

// console.log(c)
// console.log(d)


// basic types:
//             primitive type: number, string, boolean
//             Array
//             Tuples
//             Enums
//             Any, Unknown, Void, Null, Undefined, Never

// let array: [] = [] // here [] is working as a touple and it means empty array
// array.push(20) // that's why it is giving us error

// touples basically lets us to clearly mention how many items would be there and what will be the data type of all the items
// let array: [number, string] = [22, "Suvadeep"]
// array = [33, "Rana"] // it lets us do this because we have mentioned in the declaration the the first item 
                     // should be number and the second item should be a string. Not only that, it also mention that it can only
                     // contain two items
// array = [44, "kunal", "Tui"] // it will give us error as there are three items


// Enums: Enamurations: It lets us define a set of named constants. 
// enum User {
//     ADMIN = 'admin',
//     GUEST = 'guest'
// }
// User.ADMIN

// there are four types of Enums
// 1. Numaric Enum, 2. String Enums, 3. Heterogeneous Enums (mixed numeric and string), 4. const Enums

// enum StatesCode {
//     GOOD = '200 OK',
//     NOTFOUND = '404 Error',
//     OK = 201
// }


// 'any' lets us define any types, it can be anything from string to number to boolean to arrays to tuples. anything
// TypeScript wants us not to use 'any', it makes our code not type-safe. Then it's better you use JavaScript. The main purpose
// of TS is to type-check. if we are using 'any, then it's not type-safe anymore. Which is not good.

// 'unknown' is a data-type which is similer to 'any' which lets us define anything, but with a catch
// it let's us do operations only after narrowing. with 'any', we can perform any operations without narrowing which is not good

// 'void' means, well, void. Here no value is returned.
// 'undefined': is where value is declared but not initialized yet.
// 'never' is used to block infinite loops or during exhaustive checks


// let a; // here a is 'any' type
// console.log(a) // here it will show the result as 'undefined' as we have not defined any values

// let a: any
// a = 12
// console.log(a.toUpperCase()) // it doesn't show any error

// function abcd(): void {
//     // return 12; // returning a number type so it will be error
//     console.log("12") // this doesn't return any error as it's not returning anything, it's just doing some operations
// }


// let a = null // type of 'a' is 'any'
// let b = undefined // type of 'b' is 'any'
// let c = never // type of 'c' is any
// let d = void, // type of d is 'undefined'
// let e = unknown // type of 'e' is 'any'

// Type annotation and Type inference

// when we explicitly assign the type of a particular variable, it is called type-annotation
// let a: number = 12

// when we don't explicitly assign any type to the variable, TS automatically detects the type based on the assigned value
// let a = 12 // here TS infers the type of 'a' is number
// a = "suvadeep" will return error


// interfaces
// interface allows us to define the shape of an object. it defines what properties and methods the object should have
// two interfaces with the same name, merge and makes a single interface with all the properties we have defined in each of the 
//    interfaces

// interface User {
//     name: string,
//     email: string,
//     password: string,
//     gender?: string // optional
// }
// let user: User = {name: "suva", email: 'suva@test.com', password: "abcd"}
// let user2: object = {name: "hello"}

// // extending interfaces
// interface Admin extends User {
//     isAdmin: boolean
// }

// interface Teacher extends Admin {
//     isTeacher: boolean
// }

// type aliases
// type shobdo = string
// let username: shobdo = "suvadeep mandal"

// union and intersection type ( | and & )
// the names gives it away. union type is a or b. intersection type is a and b.

// type a = string
// type b = number

// let c: a | b
// let d: a & b // just for understanding purpose. by the way here 'd' returns 'never'

// interface and type : difference
// 1. we cannot merge types, but we can merge interfaces
// 2. we use types for intersection between numbers, booleans, string whereas we use interfaces for object and classes

// Classes and Object

class DigitalInstrument {
    constructor(public name: string, public model: string, public price: number, public year?: number){}
}

let d1 = new DigitalInstrument('samsung', 'g7', 18000)
let d2 = new DigitalInstrument('nokia', 'lumia', 21000)
let d3 = new DigitalInstrument('nothing', '2a', 15000, 2023)

// when we are using class, we are making an object. That's why we are using 'new' keyword

interface Color {
    color: string,
    hex: string,
}

let blue: Color = {color : 'blue', hex : 'h4g5g6'}

// when we are using an interface, we are not creating a new object. It's just an interface which tells what properties should
// be there. 

// constructor

// go to chatGPT and check why the below code is giving error. hint: this is about parameter order and defaults in your constructor
class Humanmaker {
    constructor(public name: string, public age: number = 0, public gender: 'male' | 'female') {}
}

let suvadeep = new Humanmaker('suvadeep', 'male') 


class Humanmaker {
    constructor(public name: string, public gender: 'male' | 'female', public age: number = 0) {}
}

let suvadeep = new Humanmaker('suvadeep', 'male')

console.log(suvadeep.age)

class songs {
    constructor(protected _name: string, public duration: number, public artist: string) {
    }

    get name () {
        return this._name
    }
    set name(value: string) {
        this._name = value
    }
}

class superhitSongs extends songs{
    constructor(public _name: string, public duration: number, public artist: string, public isSuperHit: boolean){
        super(_name, duration, artist)
        this.isSuperHit = isSuperHit
    }
}


let str = "my name is Suvadeep and there is so many things I want to do there"

function isThere(str: string, sub: string) {
    if (str.indexOf(sub) == -1){
        return false
    }
    else return true
}

function howMany(str: string, sub: string): number {
  let index = str.indexOf(sub);
  if (index === -1)  return 0; 
  return 1 + (howMany(str.slice(index + sub.length), sub));
}
