function makeJuice(size) {
    const ingredients = [];

    function addIngredients(ig1, ig2, ig3) {
        ingredients.push(ig1, ig2, ig3);
    }

    function displayJuice() {
        const output = document.getElementById("juice");
        output.textContent = `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
    }

    addIngredients("apple", "banana", "orange");
    addIngredients("pinapple", "mango", "strawberry");

    displayJuice();
}

makeJuice("medium");