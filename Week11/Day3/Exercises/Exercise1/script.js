function compareToTen(num) {
    return new Promise((resolve, reject) => {
        if (num <= 10) {
            resolve(`The number ${num} is less than or is equal to 10`);
        } else {
            reject(`The number ${num} is greater than 10`);
        }
    });
}

// Test

compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error)); // should reject

compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error)); // should resolve