let guestlist:string []=["fatima","ushna","ali","maria","moosa","farah"];
console.log("we havet found a big table for dinner just two person table arrange ");
while(guestlist.length >2) {let removeguest =guestlist.pop()
    console.log(` sorry ${removeguest} you are not invited for dinner `);
}
console.log("invitation for last two remainig guest");
guestlist.forEach (guest =>{console.log(`${guest} you are still invited for dinner`)});
guestlist.pop();
guestlist.pop();
console.log(guestlist ,"Empty guest list");