function vendingMachine(numberOfProduct) {
    switch (numberOfProduct) {
        case 1:
            console.log("isded");
            return 1;
            break;
        case 2:
            console.log("nutrifood");
            return 2;
            break;
        case 3:
            console.log("dr thank");
            return 3;
            break;
        case 4:
            console.log("0 do");
            return 4;
            break;
        case 5:
            console.log("revive");
            return 5;
            break;
        case 6:
            console.log("cccl");
            return 6;
            break;
        default:
            return 0;
            break;
    }

}

// let total = +prompt("Insert value: ")
// if (isNaN(total)) {
//     console.log(error);
// } else if (!isNaN(total) && total > 0 && parseInt(total) === total) {
//     while (total > 0) {
//         let num = +prompt("Insert number: ")
//         total = vendingMachine(total, num);
//     }
// }
// console.log(total);

let total = +prompt("Insert value: ")
if (isNaN(total) || total <= 0) {
    console.log("error");
} else if (!isNaN(total) && total > 0 && parseInt(total) === total) {
    while (total > 0) {
        let num = +prompt("Insert number: ")
        let cost = vendingMachine(num);
        if (cost > total) {
            console.log("Insufficient funds!");
            console.log(total);
            break;
        } else if (cost <= total) {
            total -= cost;
            console.log(total);
        }
    }
}