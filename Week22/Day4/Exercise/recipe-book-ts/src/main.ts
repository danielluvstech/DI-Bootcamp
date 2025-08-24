import { RecipeCollection } from "./model/RecipeCollection";
import { RecipeTemplate } from "./templates/RecipeTemplate";

function getEl<T extends HTMLElement>(selector: string): T {
  const el = document.querySelector(selector);
  if (!el) throw new Error(`Missing element: ${selector}`);
  return el as T;
}

const collection = new RecipeCollection();

const form = getEl<HTMLFormElement>("#recipeEntryForm");
const titleInput = getEl<HTMLInputElement>("#recipeTitle");
const ingredientsInput = getEl<HTMLTextAreaElement>("#ingredients");
const instructionsInput = getEl<HTMLTextAreaElement>("#instructions");
const container = getEl<HTMLDivElement>("#recipeContainer");
const clearBtn = getEl<HTMLButtonElement>("#clearRecipesButton");

// bootstrap template
new RecipeTemplate(collection, container);

// handle form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = titleInput.value.trim();
  const ingredientsText = ingredientsInput.value;
  const instructions = instructionsInput.value;

  if (!title || !ingredientsText.trim() || !instructions.trim()) {
    alert("Please fill in title, ingredients, and instructions.");
    return;
  }

  collection.add(title, ingredientsText, instructions);

  // reset form
  titleInput.value = "";
  ingredientsInput.value = "";
  instructionsInput.value = "";
  titleInput.focus();
});

// clear all
clearBtn.addEventListener("click", () => {
  if (
    confirm(
      "This will remove ALL recipes from your device (localStorage). Continue?"
    )
  ) {
    collection.clearAll();
  }
});