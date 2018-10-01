/*for (let i = 0; i < 10; i++){
    document.write(i);
    document.write('<br>')
}*/
/*for (let i = 10; i >= 0; i--){
   
    document.write(i);
}
*/
/*
for (let i = 10; i >= 10; i-2){
    document.write(i);
}*/

/*function prn(val)*/

/*let counter = 0;
while (counter <=10){
    prn(counter);
    counter++;
}*/

/*function prn(val){
    document.write(val);
}
let counter = 0;
do{
    prn(counter);
    counter++;
}
while (counter <=0)*/

let products = [];
products[0] = 'Tesla Model X';
products[1] = 'Ferrari F430';
products.push('Chevrolet Malibu');
products.push('Fiat Punto');
document.write(products.length);
document.write(products[3]);
/*products[100]='ZAZ Sens';
document.write(products.length);
document.write(products);*/
/*for (let i = 0; i < products.length; i++){
    if (products[i] !== undefined){
    document.write(products[i]);
}}*/
/*products.forEach(prn)*/

/*products.forEach(function(el){
    document.write(el);
});*/

/*products.forEach( el => document.write(el) )*/

let prices = [10, 15, 25, 100, 50];
prices.forEach(document.write());