// 
// var a=20;
// var b=20;
// document.getElementById("para").innerHTML=a+b;


// document.getElementById("para").innerHTML="Hello Sanjai";



// if(true){
//     var x=100;
// }
// if(true){
//    let y=200;
//     document.getElementById("para2").innerHTML=y;
// }
//     document.getElementById("para1").innerHTML=x;
    // document.getElementById("para2").innerHTML=y;//can't access

// ................if else................

// var age=21;
// if(age>21){
//     document.getElementById("para1").innerHTML="he is eligible to marry";
// }
// else if(age<21){
//     document.getElementById("para1").innerHTML="he is not eligible to marry";
// }
// else{
//     document.getElementById("para1").innerHTML="he is eligible to marry";
// }


// .......................nested if...................

// var age=19;
// var weight=100;
// if(age>18 ){
//     if(weight<120){
//     document.getElementById("para1").innerHTML="He can jump";
// }
// else{
//      document.getElementById("para1").innerHTML="Extra rope will be added";
// }}

// else{
//     document.getElementById("para1").innerHTML="He cant jump";
// }


// ......................switch statement.............................

// var mn=4;
// switch(mn){
//     case 1:
//     document.getElementById("para1").innerHTML="Jan";
//     break;
//     case 2:
//     document.getElementById("para1").innerHTML="Feb";
//     break;
//     case 3:
//     document.getElementById("para1").innerHTML="Mar";
//     break;
//     default:
//     document.getElementById("para1").innerHTML="Apr";
//     break;
// }


// .....................for  loop.............................
// for(let i=1;i<10;i++){
//     document.getElementById("para1").innerHTML=i+" ";
// }

// .....................array.............................
// const Array=["Mahesh","Kavin","Sree","Hari"];
// document.getElementById('para1').innerHTML=Array[2];

// .....................function.............................
// function add(a,b){
//     return a+b;
// }
//     var a=10;
//     var b=20;
//     var c=add(a,b);
//     document.getElementById('para1').innerHTML=c;

// .....................calculator.............................
while(true){
var a=parseInt(prompt("Enter First Number"));
var b=parseInt(prompt("Enter Second Number"));
var op=prompt("Enter Operator");
var res;


if(op==='+'){
    res=a+b;
    document.getElementById('Output').innerHTML+='Output is '+res;
    break;

}
else if(op==='-'){
    res=a-b;
    document.getElementById('Output').innerHTML+='Output is '+res;
    break;
}
else if(op==='*'){
    res=a*b;
    document.getElementById('Output').innerHTML+='Output is '+res;
    break;
}
else if(op==='/'){
    res=a/b;
    document.getElementById('Output').innerHTML+='Output is '+res;
    break;
}
else if(op==='%'){
    res=a%b;
    document.getElementById('Output').innerHTML+='Output is '+res;
    break;
}
else{
    res="Invalid Operation"
    document.getElementById('Output').innerHTML+='Output is '+res;
    break;
}
}