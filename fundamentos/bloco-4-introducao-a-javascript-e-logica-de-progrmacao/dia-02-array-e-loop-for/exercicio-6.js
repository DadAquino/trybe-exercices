let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let n=0;
for(let i=0;i<numbers.length;i+=1){
    
    if(numbers[i]%2!==0){
        n+=1;
    }
}
if(n>0){
console.log(n);
}else{
    console.log("nenhum valor impar encontrado");
}