let guestlist :string[] =["nazia","maria","moosa"];
let cannotAttend :string ="nazia";
console.log(`${cannotAttend} is not joining us for dinner `);
let newguest:string ="ushna";
guestlist.splice(0 ,1 , `ushna`);
console.log(guestlist);
guestlist.forEach(guest =>{console.log(`${guest} you are invited for dinner today at pc hotel`)});