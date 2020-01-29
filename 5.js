var array = [3,'a','a','a',2,3,'a',3,'a',2,4,9,3];
var result = [];
var object = {};
for (var i = 0 ; i < array.length ; i++) {
    object[array[i]] = 0;
}
for (i in object){
    result.push(i);
}
document.write(array + "<br/>" ,
"After Removal of duplicates: " + result);