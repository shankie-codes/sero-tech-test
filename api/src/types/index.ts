export type Recipe = {
  _id?: string;
  name: string;
  ingredients: Ingredient[];
  method?: string[];
};

export type Ingredient = {
  quantity: string;
  ingredient: string;
};
