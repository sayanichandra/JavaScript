// let fruit=prompt('which fruit you want');
// switch(fruit)
// {
//     case 'mango':
//         console.log('price 200');
//         break;
//         case 'banana':
//         console.log('price 300');
//         break;
//         case 'apple':
//         console.log('price 500');
//         break;
//         default:
//         console.log(`${fruit} not available now`);
// }
// for(var i=0;i<10;i++)
// {
//     console.log('HELLO WORLD');
// }
// for in
// objects
// let animal={
//     name:'location',
//     legs:4
// }
// for(let key in animal)
// {
//     console.log(key,animal[key]);
// }
// Array
// let array=['ahaan','sonu','ravi','soumi'];
// for(let ind in array)
// {
//      console.log(ind,array[ind]);
// }
// for(let ind of array)
//  {
//       console.log(ind);
//  }
// function cookmaggi(maggi,water,pot)
// {
//     console.log("YOUR MAGGI WILL BE READY IN "+ maggi*2 +" minites \n INGREDENTS ARE "+water+" CUP OF WATER "+maggi+" MAGGI USING "+pot+" pot");
// }
// cookmaggi(2,2,1);
// let maggi=prompt("enter the maggi no.");
// let water=prompt("enter the cup of water");
// let pot=prompt("enter the pot no.");
function cookmaggi(maggi,water,pot)
{
    let ready="YOUR MAGGI WILL BE READY IN "+ maggi*2 +" minites \n INGREDENTS ARE "+water+" CUP OF WATER "+maggi+" MAGGI USING "+pot+" pot";
    return ready;
}
let maggi=prompt("enter the maggi no.");
let water=prompt("enter the cup of water");
let pot=prompt("enter the pot no.");
// let ready1=cookmaggi(maggi,water,pot);
console.log(cookmaggi(maggi,water,pot));