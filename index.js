//Object syntax

const dog = {
  name: 'Freida',
  color: 'brown/black',
  hunger: 40,
  mood: 'feisty',
  age: 9,
};

//keys can be strings or not (name is a string but hunger is not

console.log(dog.name)
console.log(dog['name'])

let freidaAge = dog.age
console.log(freidaAge)


let {age} = dog
console.log(age)

let {name, color,} = dog
console.log(color)

let {hunger, mood: feeling} = dog
console.log(feeling)

for (let attribute in dog) {
  console.log(`The dog's ${attribute} is ${dog[attribute]}.`)
  console.log(attribute)
  console.log(dog[attribute])
}
// in a for loop dog.attribute will not work

dog.size= ('small')
console.log(dog)
delete dog.hunger
console.log(dog)

let dog1 = {
  'name': 'Frieda',
  'age' : 9,
  'color' : 'brown'
};

let dog2 = {
  'name' : 'Libby',
  'age' : 3,
'nickname' : 'Libbers'
}

class Dog {
  constructor(name, color){
    this.name = name;
    this.color = color;
  }


bark(){
console.log(`Arf! I am`, this.name, `the dog!`);
}
};

let dog3 = new Dog('Freida','brown');
let dog4 = new Dog('Sally','pink')

dog3.bark()
dog4.bark()

console.log(dog3)

//extending classes- making a new class based on existing class
//can add extra details or functionality to the extended class
//uses the extends keywork

// class Dog {
//   ...
// }

class Puppy extends Dog {
  constructor(name, color, trainingLevel){
      super(name, color)
      this.trainingLevel = trainingLevel
}    
  levelUp(num){
    this.trainingLevel += num
  }
}


