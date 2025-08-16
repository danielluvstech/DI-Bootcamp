function validateUnionType(value: any, allowedTypes: string[]): boolean {
    // Get the actual type of the value using typeof
    const valueType = typeof value;
    
    // Check if the value's type matches any of the allowed types
    return allowedTypes.includes(valueType);
}

// Test cases to demonstrate the function
console.log(validateUnionType(42, ["string", "number"])); // true, because 42 is a number
console.log(validateUnionType("hello", ["string", "number"])); // true, because "hello" is a string
console.log(validateUnionType(true, ["string", "number"])); // false, because true is a boolean
console.log(validateUnionType([1, 2, 3], ["object", "boolean"])); // true, because arrays are of type 'object'
console.log(validateUnionType(null, ["object", "number"])); // true, because null is considered an 'object' in JavaScript
console.log(validateUnionType(undefined, ["string", "number"])); // false, because undefined is not a string or number
