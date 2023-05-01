function factorialize(num) {
    return num < 2 ? 1 : factorialize(num - 1) * num;
}

factorialize(5);