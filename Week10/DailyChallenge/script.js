function isAnagram(str1, str2) {
  // Remove whitespace and convert to lowercase
  const rightStr1 = str1.replace(/\s+/g, '').toLowerCase();
  const rightStr2 = str2.replace(/\s+/g, '').toLowerCase();

  return rightStr1.split('').sort().join('') === rightStr2.split('').sort().join('');
}

console.log(isAnagram("Astronomer", "Moon starer"));       // true
console.log(isAnagram("School master", "The classroom"));  // true
console.log(isAnagram("Hello", "Olelh"));                  // true
console.log(isAnagram("Test", "Taste"));                   // false