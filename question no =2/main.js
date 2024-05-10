var personname = "nazia kashif";
console.log(personname.toUpperCase());
console.log(personname.toLowerCase());
console.log(personname.replace(/\b\w/g, (function (char) { return char.toUpperCase(); })));
