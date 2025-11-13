document.write("<b>HELLO WORLD</b><br/>");
// let return1="<br/>";
// document.write(return1 + "HELLO");
document.write("HELLO");
// <!--
// function sayHello()
// {
//  alert("Hello there\n");
// }
// //-->
// sayHello();
// function hypotenuse(a, b) {
//     function square(x) { return x*x; }
    
//     return Math.sqrt(square(a) + square(b));
//    }
//    function secondFunction(){
//     var result;
//     result = hypotenuse(2,3);
//     document.write ( result );
//    }
//    secondFunction();
   var func = new Function("x", "y", "return x*y;");
// function secondFunction(){
 var result;
 result = func(10,20);
 document.write ( result );
// }
// secondFunction();