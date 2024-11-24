    var res= document.getElementById('num')
    let op=''
    let n1='0'
    let n2='0'
function calc(n){
    res.value+=n
} 
function limpa(){
res.value=''
}

function apagar(){
    res.value=res.value.slice(0,-1)
}
function opera(o){
    op=o
    n1= Number(res.value)
    res.value=''
}
function resul(){
n2= Number(res.value)  
 if(op=='-'){
    n1=n1-n2
    res.value=n1
 }
 else if(op=='+'){
    n1=n1+n2
    res.value=n1
}
 else if(op=='*'){
    n1=n1*n2
    res.value=n1
 }
 else if(op=='/'){
    n1=n1/n2
 res.value=n1
}
else if(op=='%'){
    n1=n2/100*n1
    res.value=n1

}
}