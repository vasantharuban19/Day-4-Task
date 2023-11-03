// 1.a print odd numbers in an array   anonymous & IIFE
var result = [];
(function (arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            result.push(arr[i]);
        }
    }
    console.log(result)
})([1,2,3,4,5,6,7,8,9,10])

// 2.a print odd numbers in an array  arrow functions
var result1 = [];
var odd = (arr1)=>{
    for(var i=0;i<arr1.length;i++){
        if(arr1[i]%2!==0){
            result1.push(arr1[i]);
        }
    }
    return result1;
}
odd([11,12,13,14,15,16,17,18,19,20]);
console.log(result1);

// 1.b Convert all the strings to title caps in a string array  anonymous & IIFE
var result2 = [];
(function (arr2){
    for(var i=0;i<arr2.length;i++){
        var word=arr2[i].toLowerCase().split(" ")
        for(var k=0;k<word.length;k++){
            word[k] = word[k].charAt(0).toUpperCase()+word[k].slice(1);
        }
        result2.push(word.join(" "));
    }
    console.log(result2)
})(["this","is","all","strings","to","title","caps"])

// 2.b Convert all the strings to title caps in a string array  arrow function
var result3 = ["this","is","all","strings","to","title","caps","in","arrow","function"];
var titleCaps = (str) => {
    var words = str.toLowerCase().split(" ");
    for(var i=0;i<words.length;i++){
        words[i] = words[i].charAt(0).toUpperCase()+words[i].slice(1);
    }
    return words.join(" ");
}
var a = result3.map(titleCaps);
console.log(a);

// 1.c Sum of all numbers in an array  anonymous function & IIFE
var array = [5,10,15,20];
(function (arr3) {
    var total = 0;
    for(var i=0;i<arr3.length;i++){
        total +=arr3[i];
    }
    console.log(total);
})(array)

// 2.c Sum of all numbers in an array  arrow function
const add = (...arr4) => {
    var total1 = 0;
    for(var i=0;i<arr4.length;i++){
        total1+=arr4[i];
    }
    return total1;
}
console.log(add(1,2,3,4,5))

// 1.d Return all the prime numbers in an array  annonymous & IIFE function
const result4 = (function(array1){
    return array1.filter(function(number){
        for(var i=2;i<=Math.sqrt(number);i++){
            if (number % i === 0)
            return false;
        }
        return true;
    })
}) ([2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])
console.log(result4);

//  2.d Return all the prime numbers in an array  in arrow functions
const array2 = [2,3,4,5,6,7,8,9,10,11,12,13];
const isprime = (num) => {
    for(var i=2;i<=Math.sqrt(num);i++){
        if(num % i === 0)
        return false;
    }
    return true;
}
const getprimes = (arr6) => {
    return arr6.filter(isprime);
}
const primes = getprimes(array2);
console.log(primes);

// 1.e Return al the palindromes in an array  anonymous function &IIFE
var answer = [];
(function (pallin){
    for(var i=0;i<pallin.length;i++){
        var data1 = pallin[i].split("").reverse().join("");
        if(data1 ===pallin[i]){
            answer.push(pallin[i]);
        }
    }
    console.log(answer);;
})(["pop","dataaa","dad","mom"])

// 2.e Return al the palindromes in an array  arrow function
var result5 = [];
var palindrome = arr5 =>{
    for(var i=0;i<arr5.length;i++){
        var data = arr5[i].split("").reverse().join("");
        if(data===arr5[i]){
            result5.push(arr5[i]);
        }
    }
    return result5;

}
console.log(palindrome(["mom","dataa","dad","pop"]));

// 1.f Return median of two sorted arrays of the same size. anonymous function & IIFE
const a1 = [1,3,5,7];
const b1 = [2,4,6,8];
const answer1 = (function (a1,b1) {
    let ar = [...a1,...b1]
    ar.sort((a,b)=>(a-b))
    let n = ar.length
    if(n%2===0){
        return((ar[n/2]+ar[n/2-1])/2)
    }
    else{
        return ar[Math.floor(n/2)]
    }

})(a1,b1)
console.log(answer1);

// 1.g. Remove duplicates from an array in anonymous function & IIFE
const array3 = [1,2,3,3,4,5,1,2,6,7,8,9,10];
const removeduplicates = function(arr7){
    var obj = {};
    for(var i=0;i<arr7.length;i++){
        if(!obj[arr7[i]]){
            obj[arr7[i]] = true;
        }
    }
    return Object.keys(obj);
}
console.log(removeduplicates(array3));

// 1.h. Rotate an array by k times  annonymous & IIEF function
(function(arr6,k){
    for(var i=0;i<k;i++){
        arr6.push(arr6[i])
     }
     for(var i=0;i<k;i++){
        arr6.shift()
     }
     console.log(arr6);

})([1,2,3,4,5],2);