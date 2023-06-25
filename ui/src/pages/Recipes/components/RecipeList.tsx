import { List, Skeleton } from "@mantine/core";
import { useGetRecipes } from "../hooks/useGetRecipes";
import { Recipe } from "../../../types";

type Props = {
  search: string | null | undefined;
};

const RecipesList = ({ search }: Props) => {
  const recipesQuery = useGetRecipes({
    search: search || "",
  });

  if (recipesQuery.isLoading || recipesQuery.isFetching)
    return <Skeleton height={200} width={400} />;
  if (recipesQuery.error) return <div>{`Error: ${recipesQuery.error}`}</div>;
  if (recipesQuery.isSuccess)
    return (
      <List>
        {recipesQuery.data.map((recipe: Recipe) => (
          <List.Item key={recipe._id}>{recipe.name}</List.Item>
        ))}
      </List>
    );
  return null;
};

export default RecipesList;
