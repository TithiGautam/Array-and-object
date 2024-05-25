const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);
let min = ages[0];
let max = ages[ages.length-1];
console.log(min);
console.log(max);
let len = ages.length/2;
if(len%2 != 0){
    console.log("median age is: " + (ages[len] + ages[len - 1])/2);

}else{
    console.log("median age is: " + ages[len]);
}
//Average age
let sum =0;
for(let i = 0;i<ages.length;i++){
    sum +=  ages[i];
}
let avg =  sum/ages.length;
console.log("Average is: " + avg);

let r = max - min;
console.log("range i : " + r);

let min_minus_average = Math.abs(min - avg);
let max_minus_average = Math.abs(max - avg);
console.log(min_minus_average);
console.log(max_minus_average);