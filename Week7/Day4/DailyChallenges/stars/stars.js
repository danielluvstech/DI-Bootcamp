// part 1: for loops

for (let i = 1; i <= 6; i++) {
    console.log("* ".repeat(i));
}

// part 2: nested loops

for (let i = 1; i <=6; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}