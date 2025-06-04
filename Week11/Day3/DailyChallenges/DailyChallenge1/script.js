function makeAllCaps(words) {
    return new Promise ((resolve, reject) => {
        if (words.every(word => typeof word === "string")) {
          const uppercased = words.map(word => word.toUpperCase());
          resolve(uppercased);
        } else {
          reject("All elements must be strings.");
        }
    });
}

function sortWords(words) {
    return new Promise((resolve, reject) => {
        if (words.length > 4) {
          const sorted = words.sort();
          resolve(sorted);
        } else {
          reject("The array should contain atleast more than 4 elements.")
        }
    });
}

// Tests

// Should reject because not all elements are strings
makeAllCaps([1, "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log("Error:", error));

// Should reject because array has only 3 elements
makeAllCaps(["apple", "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log("Error:", error));

// Should resolve and log the sorted, uppercased array
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result)) // ["APPLE", "BANANA", "KIWI", "MELON", "PEAR"]
  .catch(error => console.log("Error:", error));