let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma=0;
for (let n of numbers){
    soma=soma+n;
}
soma=soma/numbers.length;
console.log(soma);