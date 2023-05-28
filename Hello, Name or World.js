function hello(nama) {
  return nama === undefined || nama.trim() === ""
    ? `Hello, World`
    : `Hello, ${
        nama.trim().charAt(0).toUpperCase() + nama.trim().slice(1).toLowerCase()
      }`;
}

console.log(hello(""));
console.log(hello());
console.log(hello("Rifki"));
console.log(hello("                riFki             "));
console.log(hello("riFki roMaDhAn"));
console.log(hello("jAnCoK"));
console.log(hello("hITleR"));
