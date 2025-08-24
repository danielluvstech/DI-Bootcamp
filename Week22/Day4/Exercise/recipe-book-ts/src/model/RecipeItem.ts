// src/model/RecipeItem.ts

export interface RecipeDTO {
  id: string;
  title: string;
  ingredients: string[];
  instructions: string;
  isFavorite: boolean;
}

/**
 * Represents a single recipe (data-only model).
 * Provides helpers for toggling favorite and (de)serialization.
 */
export class RecipeItem implements RecipeDTO {
  id: string;
  title: string;
  ingredients: string[];
  instructions: string;
  isFavorite: boolean;

  constructor(dto: RecipeDTO) {
    this.id = dto.id;
    this.title = dto.title.trim();
    this.ingredients = dto.ingredients.map((x) => x.trim()).filter(Boolean);
    this.instructions = dto.instructions.trim();
    this.isFavorite = dto.isFavorite;
  }

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
  }

  toJSON(): RecipeDTO {
    return {
      id: this.id,
      title: this.title,
      ingredients: [...this.ingredients],
      instructions: this.instructions,
      isFavorite: this.isFavorite,
    };
  }

  static fromJSON(raw: RecipeDTO): RecipeItem {
    return new RecipeItem(raw);
  }
}