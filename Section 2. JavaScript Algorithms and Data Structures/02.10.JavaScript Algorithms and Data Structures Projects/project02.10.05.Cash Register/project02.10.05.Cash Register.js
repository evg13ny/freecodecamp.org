function checkCashRegister(price, cash, cid) {
    let currencyUnit = {
        'PENNY'      : 0.01,
        'NICKEL'     : 0.05,
        'DIME'       : 0.10,
        'QUARTER'    : 0.25,
        'ONE'        : 1.00,
        'FIVE'       : 5.00,
        'TEN'        : 10.00,
        'TWENTY'     : 20.00,
        'ONE HUNDRED': 100.00
    }

    let changeToGive = cash - price;
    let changeArr = [];

    let totalCID = 0;
    for (let elem of cid) {
        totalCID += elem[1];
    }
    totalCID = totalCID.toFixed(2);

    if (changeToGive > totalCID) {
        return { status: "INSUFFICIENT_FUNDS", change: changeArr };
    } else if (changeToGive.toFixed(2) == totalCID) {
        return { status: "CLOSED", change: cid };
    } else {
        cid = cid.reverse();

        for (let elem of cid) {
            let temp = [elem[0], 0];

            while (changeToGive >= currencyUnit[elem[0]] && elem[1] > 0) {
                temp[1] += currencyUnit[elem[0]];
                elem[1] -= currencyUnit[elem[0]];
                changeToGive -= currencyUnit[elem[0]];
                changeToGive = changeToGive.toFixed(2);
            }

            if (temp[1] > 0) {
                changeArr.push(temp);
            }
        }
    }

    if (changeToGive > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change: changeArr };
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));