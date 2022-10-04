let person = {
    firstName: 'Macey',
    lastName: 'Bell',
    height: 5,
    age: 27,
    favorites: {
        movie1: 'Spirited Away',
        movie2: 'Midsommer'
    },
    favFoods: ['rice','pizza','noodles']
}

console.log(person.firstName)
console.log(person.height)

// let {lastName} = person
// console.log(lastName)

let {lastName: last_name} = person

console.log(person)
console.log(last_name)
// console.log(lastName) this will not run while the global scope understands only last_name as a variable even with lastName as its value

console.log(person.favorites.movie1)
console.log(person['favFoods'][0])
console.log(person.favFoods[2])

//---------CLASS------------

class Dog {
    constructor(name, color, age) {
        this.name = name;
        this.color = color;
        this.age = age;
    }
    greeting() {
        console.log(`Hi, my name is ${this.name}, and I am ${this.age}`)
    }
}

let dog1 = new Dog('Walter', 'Blue', 4)
console.log(dog1)

dog1.greeting()

//a method is a function inside an object. greeting in the class dog is a method because it is a function inside of the class dog

//extended classes

class Puppy extends Dog {
    constructor(name, color, age, trainingLevel){
        super(name, color, age)
        this.trainingLevel = trainingLevel
    }

    levelUp(num) {
       return  this.trainingLevel +=num
    }
}

let puppy1 = new Puppy ('a', 'green', 4, 6)
console.log(puppy1)
puppy1.greeting()

console.log(puppy1.levelUp(3))

let food = {
    name: 'pizza',
    price: 10,
    introduction: () => {
        console.log('hi, I love pizza')
    }
}

food.introduction()
