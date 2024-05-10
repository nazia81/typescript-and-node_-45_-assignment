let guestlist:string[] =["ushna","maria","moosa"];
console.log(`good new for us we found a bigger table for dinner`);
guestlist.unshift("fatima");
guestlist.splice(Math.floor(guestlist.length/2),0 ,`ali`);
guestlist.push("farah");
guestlist.forEach(guest =>{
    console.log(` ${guest}, you all are invited for dinner`)
})




