// Assuming there is an HTML element with the id 'myInput'
const inputElement = document.getElementById("myInput") as HTMLInputElement;

// Check if the element exists
if (inputElement) {
    // Manipulate the input element's properties
    inputElement.value = "Hello, TypeScript!";
    console.log("Input Value Set:", inputElement.value);
}
