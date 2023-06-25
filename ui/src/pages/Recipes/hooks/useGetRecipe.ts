import { useQuery } from "react-query";
import { Recipe } from "../../../types";
import { api } from "../../../util";

export const useGetRecipe = ({ id }: { id?: string }) => {
  const getRecipes = (): Promise<Recipe> =>
    api.get(`/recipes/${id}`).then((res) => res.data);
  const recipesInfo = useQuery(["recipes", { id }], getRecipes, {
    retry: 1,
  });

  return recipesInfo;
};
