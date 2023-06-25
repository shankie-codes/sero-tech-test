import { Grid, List } from "@mantine/core";
import { Ingredient } from "../../../types";
import { Fragment } from "react";

type Props = {
  ingredients: Ingredient[];
};

const Ingredients = ({ ingredients }: Props) => {
  return (
    <Fragment>
      <h2>Ingredients</h2>
      <List>
        {ingredients.map((ingredient, i) => (
          <List.Item key={i}>
            <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
              <Grid.Col span="content">{ingredient.quantity}</Grid.Col>
              <Grid.Col span="content">{ingredient.ingredient}</Grid.Col>
            </Grid>
          </List.Item>
        ))}
      </List>
    </Fragment>
  );
};

export default Ingredients;
