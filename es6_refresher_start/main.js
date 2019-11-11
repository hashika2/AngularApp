// CONST & LET

// const persons={
//     name:"hashika",
//     age:23
// }

// persons.name="kamal"
// console.log(persons);

// const array=[1,2,3,4]

// array.push(5);
// console.log(array);

// ARROW FUNCTIONS

// const say=name=>console.log(`hello ${name}`);

// say('hashika');
// const fruits=['orange','appe','mango'];

// // FOREACH

// fruits.forEach((fruit,index)=>console.log(fruit+index));



// MAP
// const getFruits=fruits.map((fruit)=>fruit.slice(0,-1));
// console.log(getFruits);

// FILTER

// const peope=[
//     {id:'1',name:'hashika'},
//     {id:'2',name:'hashika'},
//     {id:'3',name:'hashika'},

// ];

// const peope2 =peope.filter(person=>person.id !==2);
// console.log(peope2);

// SPREAD

const array= [1,2,3,4];
const array1=[...array,5];
console.log(array1);

const peope ={
    name:'hashika',
    age:"12"
}

const peope2 ={
    ...peope,
    email:'email@gmail.com'
}

console.log(peope2);

// DESTRUCTURING

const profile={
    name:'hashika',
    adrees:{
        street:'40 city',
        city:'kurunaga'
    },

}

const {name} =profile;

const { street} =profile.adrees;
//console.log(street);


// CLASSES

class Person{

    constructor(name,age){
        console.log('print')
    }
    add(){
        return "hashika";
    }

}

const person1=new Person();
console.log(person1.add());


// SUBCLASSES

class Customer extends Person{
    constructor(name,age,ballance){
        super(name,age);
        this.ballance=ballance;

    }
    gett(){
        return `${this.ballance}`
    }
}
const customer = new Customer("hashika","12",1200);

console.log(customer.gett());

// MODULES