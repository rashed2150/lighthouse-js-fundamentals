/* let x = 100
while(x <= 200){
    if (x % 3 === 0 && x % 4 === 0) {console.log("LoopyLighthouse")}
    else if(x % 3 === 0) {console.log ("Lopy")}
    else if(x % 5 === 0) {console.log("Lighthouse")}
    else {console.log(x)}
    x ++ 
} */

for (let y =100 ; y <= 200 ; y ++) {
    if(y % 3 === 0 && y%4 === 0){console.log("LoopyLighthouse")}
    else if(y%3 === 0) {console.log("Loopy")}
    else if(y%4 === 0) {console.log("Lighthouse")}
    else {console.log(y)}
}