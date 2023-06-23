import { FunctionComponent } from "react";
import { createStyles, List, rem, Skeleton } from "@mantine/core";
import { useGetRecipes } from "./hooks/useGetRecipes";
import { Recipe } from "../../types";

const useStyles = createStyles((theme) => ({}));

const Recipes: FunctionComponent = () => {
  const { classes } = useStyles();
  const recipesQuery = useGetRecipes();

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

export default Recipes;
