import { Box, Button, List, Skeleton, createStyles } from "@mantine/core";
import { useGetRecipes } from "../hooks/useGetRecipes";
import { Recipe } from "../../../types";
import { Link, useRouteMatch } from "react-router-dom";

type Props = {
  search: string | null | undefined;
};

const useStyles = createStyles((theme) => ({
  list: {
    listStyleType: "none",
  },
  item: {
    margin: "0.5em",
  },
}));

const RecipesList = ({ search }: Props) => {
  const { url } = useRouteMatch();
  const recipesQuery = useGetRecipes({
    search: search || "",
  });
  const { classes } = useStyles();

  if (recipesQuery.isLoading || recipesQuery.isFetching)
    return <Skeleton height={200} width={400} />;
  if (recipesQuery.error) return <div>{`Error: ${recipesQuery.error}`}</div>;
  if (recipesQuery.isSuccess)
    return (
      <Box>
        <h2>Recipes</h2>
        <List className={classes.list}>
          {recipesQuery.data.map((recipe: Recipe) => (
            <List.Item className={classes.item} key={recipe._id}>
              <Link to={`${url}/${recipe._id}`}>
                <Button>{recipe.name}</Button>
              </Link>
            </List.Item>
          ))}
        </List>
      </Box>
    );
  return null;
};

export default RecipesList;
