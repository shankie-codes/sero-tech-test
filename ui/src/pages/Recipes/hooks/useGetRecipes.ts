import { useQuery } from "react-query";
import { Recipe } from "../../../types";
import { api } from "../../../util";

export function useGetRecipes() {
  const getUsers = (): Promise<Recipe[]> =>
    api.get("recipes").then((res) => res.data);
  const usersInfo = useQuery("users", getUsers, {
    retry: 1,
  });

  return usersInfo;
}
