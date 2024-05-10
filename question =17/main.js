var guestlist = ["fatima", "ushna", "ali", "maria", "moosa", "farah"];
console.log("we havet found a big table for dinner just two person table arrange ");
while (guestlist.length > 2) {
    var removeguest = guestlist.pop();
    console.log(" sorry ".concat(removeguest, " you are not invited for dinner "));
}
console.log("invitation for last two remainig guest");
guestlist.forEach(function (guest) { console.log("".concat(guest, " you are still invited for dinner")); });
guestlist.pop();
guestlist.pop();
console.log(guestlist, "Empty guest list");
