export type Recipe = {
  name: string;
  ingredients: Ingredient[];
  method?: string[];
};

export type Ingredient = {
  quantity: string;
  ingredient: string;
};
