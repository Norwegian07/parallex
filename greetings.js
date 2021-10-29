
var today = new Date();
var hourNow = today.getHours();
var greeting;

if(hourNow > 18){
    greeting = ' GOOD EVENING !';
}else if (hourNow > 12 ){
    greeting = 'GOOD AFTERNOON !';
}
else if(hourNow > 0 ) {
    greeting = 'GOOD MORNING !';
} else {
    greeting = 'WELCOME !';
}
 document.write('<h3>' + greeting + '</h3>');
console.log(today.getHours())
