const name ="Yogendra";  // never want to change then const 
let age1 = 20;            // want to change value then let
const hasHobbies = true;


//name = 'yog';  // if you try to assign value then leads errors

// short syntax
const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' + 
        userName+
        ', age is '+
        userAge+
        ' and the user has hobbies:'+
        userHasHobby
    );
}

// const add = (a,b)=> a+b;
const add = a => a+4;
// no arg method

const addRandom = () => 3+8;
console.log(add(1,2));
console.log(addRandom());


// or

// const summarizeUser = function (userName, userAge, userHasHobby)
// {
//     return (
//         'Name is ' + 
//         userName+
//         ', age is '+
//         userAge+
//         ' and the user has hobbies:'+
//         userHasHobby
//     );
// }




console.log(summarizeUser(name,age1,hasHobbies));


// Create Object

console.log("=================================");

const person = {
    mname : 'Yogi',
    age : 30,
    // refer global method 
    // greet:() => {
    //     console.log('Hi, I am '+ this.mname);
    // }

    greet(){
        console.log('Hi, I am '+ this.mname);
    }
}

person.greet();

console.log("=================================");

const hobbies = ['Sports' , 'Cooking'];

console.log(hobbies.map(hobby => 'HObby' + hobby));
console.log(hobbies);

console.log("================push element in array=================");
hobbies.push('programming');
console.log(hobbies);


console.log("======Important Operator: Spread operator, Rest Operator=======");

const copiedArray = [...hobbies];

console.log(copiedArray);

const copiedperson = {...person};

console.log(copiedperson);

const toArray = (arg1, arg2, arg3)=>{
    return [arg1, arg2,arg3];
}

const restArrary =  (...args) =>{
    return args;
}

console.log(restArrary(1,2,3,4,5,6));

console.log("====== Destructuring =======");

const printName = ({name})=>{
    console.log(name);
}

const { mname, age } = person; 
console.log(mname, age);

console.log("======Async & promises=======");