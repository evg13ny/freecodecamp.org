function mutation(arr) {
    let temp1 = arr[0].toLowerCase().split('');
    let temp2 = arr[1].toLowerCase().split('');

    for (let i = 0; i < temp2.length; i++) {
        if (temp1.indexOf(temp2[i]) == -1) return false;
    }

    return true;
}

console.log(mutation(["hello", "hey"]));