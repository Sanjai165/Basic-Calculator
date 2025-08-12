
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
