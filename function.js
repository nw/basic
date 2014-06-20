

console.log(add(1,2,3,4));

var arr = [1,2,3,4];

var a_list_of_numbers_to_add = arr;

var sum = 0;
arr.forEach(function(val){
    sum += val;
});
console.log(sum);


for(var index = 0; index < arr.length; index++){
    console.log(index, arr[index]);
}

var callback = function(val, idx){
    console.log(idx, val);
};

arr.forEach(callback);

forEach(arr, callback);

function forEach(arr, fn){
    for(var i = 0; i < arr.length; i++){
        fn(arr[i], i);
    }
}

function add(){
    var sum = 0;
    for(var i=0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}