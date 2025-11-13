// var show="back to the future";
// console.log(show.length);
// console.log(show[show.length-1]);
// console.log(show.indexOf("to"));
// console.log(show.slice(2,8));
// console.log(show.toUpperCase());
// console.log(show.toLowerCase());
// const list=document.querySelector('.output ul');
// list.innerHTML='';
// let cities=['mumbai','delhi','jaipur','goa'];
// for(let i=0;i<=cities.length;i++)
// {
//     let lowerCaseCity=cities[i].toLowerCase();
//     let firstLetter=lowerCaseCity.slice(0,1);
//     lowerCaseCity=lowerCaseCity.replace(firstLetter,firstLetter.toUpperCase());
//     let listItem= document.createElement('li');
//     listItem.textContent=lowerCaseCity;
//     list.appendChild(listItem);
// }
//object
// let animal={
//          name:"monkey",
//          legs:4
//      }
//      console.log(animal.name);
//      console.log(animal["legs"]);
//     let legsProb="legs";
//      console.log(animal[legsProb]);
// //arrays
// let books=["mistry world","nil armstrong","gopal bhar"];
// console.log(books[2]);
//factory function
// function creaTec(){
// const course={
//     title:'javascript',
//     notes:{
//         introduction:"welcome to js"
//     },
//     enroll(){
//         console.log("you are succesfully enroll")
//     }
// }
// return course;
// }
// const courrse=creaTec();
// courrse.enroll();
// const titlee="hello";
// titlee="hi";
//constructor function
function CreaTec(title){
    this.title=title,
    this.enroll=function(){
        console.log("you are succesfully enroll");
    }
 }
const courrse=new CreaTec('JAVASCRIPT');
// courrse.enroll();
delete courrse.title;
courrse.enroll();
console.log(courrse.constructor);
