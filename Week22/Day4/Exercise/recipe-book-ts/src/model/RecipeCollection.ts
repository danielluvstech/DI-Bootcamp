import { v4 as uuidv4 } from "uuid";
import { RecipeItem } from "./RecipeItem";
import type { RecipeDTO } from "./RecipeItem";

export type CollectionChangeHandler = (items: RecipeItem[]) => void;

const STORAGE_KEY = "recipe_book_ts_v1";

/**
 * Holds all recipes, handles persistence, and notifies listeners on change.
 */
export class RecipeCollection {
  private items: RecipeItem[] = [];
  private listeners: Set<CollectionChangeHandler> = new Set();

  constructor() {
    this.load();
  }

  /** Subscribe to changes (for UI re-render) */
  onChange(handler: CollectionChangeHandler): () => void {
    this.listeners.add(handler);
    // call immediately with current state
    handler(this.all());
    return () => this.listeners.delete(handler);
  }

  private emit() {
    const snapshot = this.all();
    for (const l of this.listeners) l(snapshot);
  }

  /** Immutable snapshot (sorted favorites first, then title) */
  all(): RecipeItem[] {
    return [...this.items].sort((a, b) => {
      if (a.isFavorite !== b.isFavorite) return a.isFavorite ? -1 : 1;
      return a.title.localeCompare(b.title, undefined, { sensitivity: "base" });
    });
  }

  add(title: string, ingredientsText: string, instructions: string): RecipeItem {
    const ingredients = ingredientsText
      .split("\n")
      .map((x) => x.trim())
      .filter(Boolean);

    const item = new RecipeItem({
      id: uuidv4(),
      title,
      ingredients,
      instructions,
      isFavorite: false,
    });

    this.items.push(item);
    this.save();
    this.emit();
    return item;
  }

  remove(id: string): void {
    const idx = this.items.findIndex((x) => x.id === id);
    if (idx >= 0) {
      this.items.splice(idx, 1);
      this.save();
      this.emit();
    }
  }

  toggleFavorite(id: string): void {
    const found = this.items.find((x) => x.id === id);
    if (found) {
      found.toggleFavorite();
      this.save();
      this.emit();
    }
  }

  clearAll(): void {
    this.items = [];
    this.save();
    this.emit();
  }

  private save(): void {
    const payload: RecipeDTO[] = this.items.map((x) => x.toJSON());
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }

  private load(): void {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const arr: RecipeDTO[] = JSON.parse(raw);
      this.items = arr.map((dto) => RecipeItem.fromJSON(dto));
    } catch {
      // invalid cache -> ignore & reset
      this.items = [];
      localStorage.removeItem(STORAGE_KEY);
    }
  }
}