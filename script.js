
let a = +prompt('вывести  1)четные  или  2) нечотные');

let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

if(a == 1) {
    console.log(' четные ');
    for(let i = 0; i < num.length; i++) {
        console.log(i);
        i = i + 1
    }
   
}else if (a == 2) {
    console.log(' нечетные ');
    for(let i = 1; i < num.length; i++) {
        console.log(i);
        i = i + 1
    }
 
}else {
    alert('введите цифру 1 или 2');
}


