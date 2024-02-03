const ages=[];
const numbers=[12,23,34,45,56,67,78,89,100];
console.log(numbers)
numbers.push(44);
numbers.push(11,22,33,44,55,66,77);
console.log(numbers)
const friends=['balam','shanto', 'shanti','shanta'];
console.log(friends)
friends.push('Eva')
// friends.pop();
// friends.pop();
// friends.pop();
// friends.pop();
console.log(friends)
friends.shift();

console.log(friends)
friends.unshift('Sanower Hossen Shanto');
console.log(friends)
//-------------------------------------------------------

//-------------------------------------------------------


//------------------------------------------------------

console.log(friends.includes('shanto'))
console.log(friends.includes('Sanower'))
console.log(friends.includes('Sanower Hossen Shanto'))
if(friends.includes('Sanower Hossen Shanto')){
    console.log('I Love him')
}
else {
    console.log(" I will unmarried of my whole life")
}
if(friends.includes('Sanower')){
    console.log('I Love him')
}
else {
    console.log(" I will unmarried of my whole life")
}


