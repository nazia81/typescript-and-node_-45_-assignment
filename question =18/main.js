var placetovisit = ["london", "amarica", "paris", "australia", "italy"];
console.log("original order", placetovisit);
console.log("alphabetical order", placetovisit.slice().sort());
//array is still in original order
console.log("original order", placetovisit);
//reverse alphabetical order
console.log("reverse alphabetical order", placetovisit.slice().sort().reverse());
//still in original order
console.log("original order", placetovisit);
//reverse the order of your original list
console.log("reverse the order of your original list", placetovisit.slice().reverse());
//reverse the order again
console.log("reverse the order again of your original list", placetovisit.slice().reverse().reverse());
//sort your array so its store in alphabetical order
console.log("sort your array so its store in alphabetical order", placetovisit.slice().sort());
//Sort to change your array so it’s stored in reverse alphabetical order.
console.log("Sort to change your array so it’s stored in reverse alphabetical order.", placetovisit.slice().sort().reverse());
