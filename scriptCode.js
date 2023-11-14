
const ad = "Selma"
const soyad ="Berg"


var x = ad + soyad
console.log(x);


// concat ile de yapabiliriz, bu kodda arada bosluk birakarak yaptim
x= ad.concat(" ",soyad);

console.log(x);

/*
//while loops
//araya = koyarak 100 u de dahil ettim
let i = 1;
while (i <= 100) {
  console.log(i);
  i++;
}
*/

//for dongusu ile de 100 dahil yazdirmak istiyorum
for (let i = 1; i <= 100; i++) {
    console.log(i);
  }