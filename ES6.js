//let,const,var
var age=20;
if(age>18){
    var name="Main Uddin"
    const name1="salman shah";
    let name2="SRK";
    console.log(name);
    console.log(name1);
    console.log(name2);

    
}
    // console.log(name);
    // console.log(name1);
   // console.log(name2);


//default parameter and template string

function fullName(firstName,LastName="Ahmed"){
    const fullName=`Full Name: ${firstName} ${LastName}`;
    return fullName
}
const Name=fullName("Safia");
console.log(Name);


//Arrow Function
 //1. with multiple parameter
const InstituteName=(shortName,FullName)=>{
    return  `${shortName}=${FullName}`;
}
const varsity=InstituteName("DIU","Daffodil International University");
console.log(varsity);
//with just  1 parameter
const ReturnNumFourTimes=number=>number*4; 
console.log(ReturnNumFourTimes(5));

const myName=()=>console.log( "Safia"); 
myName();



// spread operator

const array=[5,8,9,40];
console.log(array);
console.log(...array);//will return all value separately
const array2=[...array];//using third brackets again creating a array
//new address array with new value
console.log(array2);
const array3=array;
console.log(array3);// copy the referance that is address


//object destructuring 

const person={
    id:101,
    Studentname:"safia",
    age:22,
    bestFriend:{
        friendName:'Fatema',
        friendage:22
    }
}

const{Studentname,id}=person;
const{friendName,friendage}=person.bestFriend
console.log(Studentname,id);
console.log(friendName,friendage);

//array destructuring

const arr=[34,78,9];
const [num1,num2,num3]=arr;
console.log(num1);

//example

const people=[
    {personName:"ety",Pid:102},
    {personName:"fatema",Pid:103}
];
const[person1,person2]= people;
// console.log(person1.Pid);
// console.log(person2.personName);

const stuff=[
    {personName:"SAFIA",Pid:101},
    {personName:"ety",Pid:102},
    {personName:"fatema",Pid:103},
    {personName:"SADIA",Pid:105}
];

const person5=stuff.map(p=>{
    return p.personName;
})
console.log(...person5);