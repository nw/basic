

var array = [1,2,3];

var array_string = "1,2,3";

var arr = array_string.split(",");

var items = [];
arr.forEach(function(item, idx){
    items[idx] = parseFloat(item);
});

//    arr.map(function(str){
//        return parseFloat(str);
//    });

console.log(arr)

console.log(array);
console.log(array.toString());
console.log(array.join(","));
console.log(join(array, "--"));

function join(arr, str){
    var output = "";
    arr.forEach(function(item, idx){
        output += item;
        if(idx < arr.length-1) output += str;
    })
    return output;
}
