var a = [24,53,78,91,12];
var b = 0;
for (var i = 0 ; i <= b ; i++){
    if(a[i] > b){
        b = a[i];
    }
}
document.write("Array items: " + a + "<br/>",
"The Largest number is " + b);