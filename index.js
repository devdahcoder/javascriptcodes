const countBs = (letter, char) => {
    let count = 0;
    for (let i = 0; i < letter.length; i++) {
        if (letter[i] === char) {
            count += 1
        }
    }

    return count;
}


console.log(countBs("BBeBBBshvcysvejsBBBhBB", "B"));