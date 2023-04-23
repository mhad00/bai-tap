// Tính bình phương
let x = [1, 12 ,4 ,6 ,78, 34 ,2 ,7, 8, 9, 10]
for (let a = 0; a < x.length; a++) {
    let y = x[a] **2
    console.log("Số bình phương: ", y);    
}

// let x1 = [1, 12 ,4 ,6 ,78, 34 ,2 ,7, 8, 9, 10]
// let y1 = []
// for (let a1 = 0; a1 < x1.length; a1++) {
//     y1.push ( x1[a1] **2 );
// }
// console.log("Số bình phương: ", y1);    


// tìm số nguyên tố

let x2 = [1, 2, 3, 4, 5, 6, 7, 8, 31, 97, 9, 10, 11, 12];
let primes = [];

for (let a2 = 0; a2 <= x2.length; a2++) {
  let b2 = 1;

  for (let j = 2; j < x2[a2]; j++) {
    if (x2[a2] % j === 0) {
      b2 = 0;
      break;
    }
  }

  if (b2 == 1 && x2[a2] > 1) {
    primes.push(x2[a2]);
  }
}

console.log(primes); 


// giỏ hàng
let red = {
    stt: 1,
    name: "red",
    price: 1,
    expDate: "1/1",
    distributor: {
        dName: "red name",
        dAddress: "red address",
    },
};
let green = {
    stt: 2,
    name: "green",
    price: 2,
    expDate: "2/2",
    distributor: {
        dName: "green name",
        dAddress: "green address",
    },
};
let fruit = [red, green];
for (n = 0; n < 2; n++){
console.log("stt: ", fruit[n].stt);
console.log("name: ", fruit[n].name);
console.log("price: ", fruit[n].price);
console.log("exp date: ", fruit[n].expDate);
console.log("distributor: ", fruit[n].distributor.dName, "-", fruit[n].distributor.dAddress);
}

let index = prompt("STT fruit");
for (let i = 0; i < fruit.length; i++){
    if (i == index - 1 ){
        let newExpDate = prompt("Expdate: ");
        console.log(`New expdate của ${fruit[i].name}: `, newExpDate);
    }
}

