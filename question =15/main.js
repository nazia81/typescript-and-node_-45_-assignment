var guestlist = ["nazia", "maria", "moosa"];
var cannotAttend = "nazia";
console.log("".concat(cannotAttend, " is not joining us for dinner "));
var newguest = "ushna";
guestlist.splice(0, 1, "ushna");
console.log(guestlist);
guestlist.forEach(function (guest) { console.log("".concat(guest, " you are invited for dinner today at pc hotel")); });
