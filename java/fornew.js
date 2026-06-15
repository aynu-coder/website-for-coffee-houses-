
// function add(x,y,z){
// console.log(x+y*z);

// }
// add(10,12,14);

// function div(x,y,){
//     console.log(x/y)
       
// }

// div(10,11);

// function mult(x,y,z){
//     console.log(x*y)
// }
// mult(12,12);





// function doo(){
//      let X=document.getElementsByName("num1")[0].value;
//      let Y=document.getElementsByName("num2")[0].value;
//     if (X > Y){
//          console.log(X + ' IS GERETER THAN '+ Y)

//     }else if (X < Y) {
//         console.log(X + " IS LESS THAN " + Y)
        
//     } else {
//         console.log(X + " IS EQUAL TO " + Y)
//     }
// }

// function at(){
//    let X = document.getElementsByName('result')[0].value;
//    let fullname = document.getElementsByName('fullname')[0].value;
//    let subject = document.getElementsByName('subject')[0].value;
//    let doc="";
// //    let Y = document.getElementsByName('number2')[0].value;
//   if (X >90){
//         //   document.write("A+")
//          document.getElementById('grade').innerHTML ="congrat"   +  fullname  +  "you get"  +   "<span>A+</span>"  +   "in"   +   subject ;
        
//     }else if (X >85 ) {
//         //  document.write("A")
//         doc=`Congrats ${fullname}, you got <span>B+</span> in ${subject}.`;

        
//     }
//     else if (X >80 ) {
//         //  document.write("B+")
//          doc=`congrat${fullname}, you got <span> B</span> in${subject}.`;


        
//     }
//     else if (X >75 ) {
//         //  document.write("B")
//          document.getElementsByName('grade').innerHTML = "congrat"   +  fullname  +  "you get"  +   "<span>B</span>"  +   "in"   +   subject ;


        
//     }
//     else if (X >70 ) {
//         // document.write("B-")
//          document.getElementsByName('result').innerHTML = "congrat"   +  fullname  +  "you get"  +   "<span>B-</span>"  +   "in"   +   subject ;


        
//     }
//     else if (X >65 ) {
//         //  document.write("C+")
//          document.getElementsByName('result').innerHTML = "congrat"   +  fullname  +  "you get"  +   "<span>C+</span>"  +   "in"   +   subject ;


        
//     }
//     else if (X >60 ) {
//         //  document.write("C")
//          document.getElementsByName('result').innerHTML = "congrat"   +  fullname  +  "you get"  +   "<span>C</span>"  +   "in"   +   subject ;


        
//     }
//     else  {
//         //  document.write("D")
//          document.getElementById('result').innerHTML = "congrat"   +  fullname  +  "you get"  +   "<span>D</span>"  +   "in"   +   subject ;


//     }
//     document.getElementById("docm").innerHTML=doc;
    
    
// }
// function temp(){
//     let X=document.getElementsByName('tempratur')[0].value;

//     if(X>25){
//         document.getElementById('tec').innerHTML= X + "it is hot out side";
//         document.getElementById('tec').classList.add('ttt')
//     }
//     else(
//         document.getElementById("tec").innerHTML= X + "it is not too hot"
//     )
    
// }

// function number(){
//     let x =document .getElementById('num');
//     for (let x = 20; x >0; x--) {
//   document.getElementById('num').innerHTML= x + "<b > it is number from 0 to 9</b>";

  
//    console.log(x)
//       document.write(x)
        
//     }
// }
// // number();
// var x = 10;
// switch (x) {
//     case 10:  add()
//         break;

//     case 11: min()
//         break;

//     default: 
//         break;
// }



// function calculator(){
//     let num1= ducument.getElementsByName("num1")[0].value;
//     let num2 = document.getElementsByName('num2')[0].value;
   
//    return ducument.getElementsById('call').innerHTML=result;
//      }

// calculator()
//  if(add () ){
//          document.getElementsByName('call').innerHTML=num1+num2;
//     }
//     if (mul()) {
//         num1*num2
        
//     } 
//     if (min()) {
//         num1-num2
//     }  
//      if (div()) {
//         num1/num2
        
//      } else {
//         "no result"
// function amm(){
//     let X=document.getElementById('num')
//     for (let i = 0; i < 20 ; i++ ){
//         X.innerHTML= i + "this is number 1 up to 20";
//         console.log(i);
//     }
// }
// amm()

// function ayy(){
//    let X = Number(document.getElementsByName("num")[0].value);
//    let sum = 0 ;
// for (let i = 0; i < X; i++){
//    if(i % 2 == 0){
//       sum = sum + i;
//    }
// }
// document.getElementById("sum").innerHTML= sum
// }
// ayy()

function riger(){

   let email=document.getElementsByName("email")[0].value;
  
   let name=document.getElementsByName("fullname")[0].value;
   let age=document.getElementsByName("age").value;
   let gender=document.getElementsByName("gender").value;
   let female=document.getElementsByName("female").value;
   let country=document.getElementsByName("country").value;
   let phonenumber =document.getElementsByName("phonenumber").value;
    let regester=document.getElementById("regester");
    let name2=document.getElementById("name2")
    let age2 =document.getElementById("age2")
    let gender2=document.getElementById("gender");
    let phonenumber2=document.getElementById("phonenumber2");

   let regex1  =/^[\w._]+@[\w._]+\.\w+$/;
   let regex2 = /^[A-Za-z]+$/;
   let regex3=/[1-9]/
   let regex4=/female|male/
   let regex5=/^[+125][1-9]/
      if (!regex1.test(email)) {
          document.getElementById("emailerror").classList.remove('corr');
          document.getElementById("emailerror").classList.add("error");
      }
      
      if (!regex2.test(name)) {
          document.getElementById("nameerror").classList.remove('corr');
          document.getElementById("nameerror").classList.add("error");
      }
      if (!regex3.test(age)) {
         age2.innerHTML="ivaild age"
      }
      if (!regex4.test(gender)) {
         gender2.innerHTML="invaid gender"
      }
      if (!regex5.test(phonenumber)) {
         phonenumber2.innerHTML="vaild phone number";
      }

}