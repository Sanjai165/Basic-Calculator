

while(true){
var a=parseInt(prompt("enter 1st number"));
var b=parseInt(prompt("enter 2nd number"));
var op=prompt("enter operater");
var res;
if(op==='+'){
    res=a+b;
    document.getElementById('para').innerHTML+="output is:"+res;
    break; 
}
else if(op==='-'){
    res=a-b;
    document.getElementById('para').innerHTML+="output is:"+res;
    break;
}
else if(op==='*'){
    res=a*b;
    document.getElementById('para').innerHTML+="output is:"+res;
    break;
}
else if(op==='/'){
    res=a/b;
     document.getElementById('para').innerHTML+="output is:"+res;
     break;
}
else{
    res='Invalid Operator';
    document.getElementById('para').innerHTML+="output:"+res;
    break;
}
}
