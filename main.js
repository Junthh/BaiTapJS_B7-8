let arrNum = [];

document.getElementById("subMit_1").onclick = function () {
    listNum = document.getElementById("number_1").value * 1;

    arrNum.push(listNum);

    document.getElementById("show_1").innerHTML = arrNum;
}


// 1.
document.getElementById("subMit_2").onclick = function () {
    let tongSoDuong = 0;

    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > 0) {
            tongSoDuong += arrNum[i];
        }
    }
    document.getElementById("show_2").innerHTML = tongSoDuong;
}

// 2.
document.getElementById("subMit_3").onclick = function () {
    let soDuong = 0;

    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > 0) {
            soDuong++;
        }
    }
    document.getElementById("show_3").innerHTML = soDuong;
}

// 3.
document.getElementById("subMit_4").onclick = function () {
    let min = arrNum[0];

    for (let i = 0; i < arrNum.length; i++) {
        if (min > arrNum[i]) {
            min = arrNum[i]
        }
    }
    document.getElementById("show_4").innerHTML = min;
}

// 4.
document.getElementById("subMit_5").onclick = function () {
    let arrDuong = [];
    let minDuong = arrNum[0];

    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > 0) {
            arrDuong.push(arrNum[i]);
        }
    }

    for(let i = 0; i < arrDuong.length; i++){
        if(minDuong > arrDuong[i]){
            minDuong = arrDuong[i];
        }
    }
    document.getElementById("show_5").innerHTML = minDuong;
}

// 5.
document.getElementById("subMit_6").onclick = function () {
    lastEvenNum = 0;

    for(let i = 0; i < arrNum.length; i++){
        if(arrNum[i] % 2 == 0){
            lastEvenNum = arrNum[i];
        }
    }
    document.getElementById("show_6").innerHTML = lastEvenNum;
}

// 6.
document.getElementById("subMit_7").onclick = function () {
    change = [];

    let changeNum1 = document.getElementById("number_2").value * 1;
    let changeNum2 = document.getElementById("number_3").value * 1;

    change = arrNum[changeNum1];
    arrNum[changeNum1] = arrNum[changeNum2];
    arrNum[changeNum2] = change;

    document.getElementById("show_7").innerHTML = arrNum;
}

// 7.
document.getElementById("subMit_8").onclick = function () {
    for(let i = 0; i < arrNum.length - 1; i++){
        for(let j = i + 1; j < arrNum.length; j++){
            if(arrNum[i] > arrNum[j]){
                let temp = arrNum[i];
                arrNum[i] = arrNum[j];
                arrNum[j] = temp;
            }
        }
    }
    document.getElementById("show_8").innerHTML = arrNum;

}

// 8.
document.getElementById("subMit_9").onclick = function () {
    let content = "";

    function isPrime(n) {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    let found = false;
    for (let i = 0; i < arrNum.length; i++) {
        if (isPrime(arrNum[i])) {
            content = `Số nguyên tố đầu tiên là: ${arrNum[i]}`;
            found = true;
            break;
        }
    }

    if (!found) {
        content = "Không có số nguyên tố nào trong mảng.";
    }

    document.getElementById("show_9").innerHTML = content;
}

// 9.
let arrNumInt = [];

document.getElementById("subMit_10").onclick = function () {
    let numInt = document.getElementById("number_4").value * 1;

    arrNumInt.push(numInt);
    document.getElementById("show_10").innerHTML = arrNumInt;
}

document.getElementById("subMit_11").onclick = function () {
    let sumInt = 0;
    for(let i = 0; i < arrNumInt.length; i++){
        if(Number.isInteger(arrNumInt[i]) == true){
            sumInt++
        }
    }
    document.getElementById("show_11").innerHTML = sumInt;
}

// 10.
document.getElementById("subMit_12").onclick = function () {
    let poNumber = 0;
    let neNumber = 0;
    let content = "";
    
    for(let i = 0; i < arrNum.length; i++){
        if(arrNum[i] > 0){
            poNumber++
        } else{
            neNumber ++
        }
    }

    if(poNumber > neNumber){
        content += `Số dương > Số âm`
    } else if(poNumber < neNumber){
        content += `Số dương < Số âm`
    } else{
        content += `Số dương = Số âm`
    }

    document.getElementById("show_12").innerHTML = content;
}