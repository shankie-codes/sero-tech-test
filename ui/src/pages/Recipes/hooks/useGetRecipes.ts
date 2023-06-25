import { useQuery } from "react-query";
import { Recipe } from "../../../types";
import { api } from "../../../util";

export const useGetRecipes = ({ search }: { search?: string }) => {
  const getRecipes = (): Promise<Recipe[]> =>
    api.get("recipes", { params: { search } }).then((res) => res.data);
  const recipesInfo = useQuery(["recipes", { search }], getRecipes, {
    retry: 1,
  });

  return recipesInfo;
};
