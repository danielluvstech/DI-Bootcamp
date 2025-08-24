import { RecipeCollection } from "../model/RecipeCollection";
import { RecipeItem } from "../model/RecipeItem";

/**
 * Manages DOM rendering and UI events.
 */
export class RecipeTemplate {
  private collection: RecipeCollection;
  private container: HTMLElement;

  constructor(collection: RecipeCollection, container: HTMLElement) {
    this.collection = collection;
    this.container = container;

    // subscribe to data changes
    this.collection.onChange((items) => this.render(items));

    // event delegation for buttons in cards
    this.container.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // toggle expand when clicking title
      if (target.classList.contains("recipe-title")) {
        const wrapper = target.closest(".recipe-card");
        if (!wrapper) return;
        const body = wrapper.querySelector<HTMLElement>(".recipe-body");
        if (body) body.classList.toggle("open");
      }

      // favorite button
      if (target.closest("[data-action='fav']")) {
        const card = target.closest<HTMLElement>(".recipe-card");
        const id = card?.dataset.id;
        if (id) this.collection.toggleFavorite(id);
      }

      // delete button
      if (target.closest("[data-action='delete']")) {
        const card = target.closest<HTMLElement>(".recipe-card");
        const id = card?.dataset.id;
        if (id && confirm("Delete this recipe?")) this.collection.remove(id);
      }
    });
  }

  private render(items: RecipeItem[]) {
    if (items.length === 0) {
      this.container.innerHTML = `
        <div class="recipe-card">
          <p>No recipes yet. Add your first one above! 🎉</p>
        </div>
      `;
      return;
    }

    const html = items
      .map(
        (item) => `
      <article class="recipe-card" data-id="${item.id}">
        <div class="recipe-head">
          <h3 class="recipe-title" title="Click to show/hide details">${this.escape(
            item.title
          )}</h3>
          <div class="meta">
            ${
              item.isFavorite
                ? `<span class="badge" title="Favorited">★ Favorite</span>`
                : ``
            }
            <div class="recipe-actions">
              <button data-action="fav" class="${
                item.isFavorite ? "recipe-fav" : ""
              }" title="Toggle favorite">
                ${item.isFavorite ? "Unfavorite" : "Favorite"}
              </button>
              <button data-action="delete" title="Delete recipe">Delete</button>
            </div>
          </div>
        </div>

        <div class="recipe-body">
          <h4>Ingredients</h4>
          <ul>
            ${item.ingredients.map((i) => `<li>${this.escape(i)}</li>`).join("")}
          </ul>
          <h4>Instructions</h4>
          <p>${this.escape(item.instructions).replace(/\n/g, "<br/>")}</p>
        </div>
      </article>
    `
      )
      .join("");

    this.container.innerHTML = html;
  }

  private escape(str: string): string {
    return str
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }
}