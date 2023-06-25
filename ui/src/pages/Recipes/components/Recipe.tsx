import React from "react";
import { Modal, Skeleton } from "@mantine/core";
import { useHistory, useParams } from "react-router-dom";
import { useGetRecipe } from "../hooks/useGetRecipe";
import Ingredients from "./Ingredients";
import Method from "./Method";

const Recipe = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const recipeQuery = useGetRecipe({
    id: id,
  });

  if (recipeQuery.isLoading || recipeQuery.isFetching)
    return <Skeleton height={200} width={400} />;
  if (recipeQuery.error) return <div>{`Error: ${recipeQuery.error}`}</div>;
  if (recipeQuery.isSuccess)
    return (
      <Modal
        opened={true}
        miw="15rem"
        onClose={() => {
          history.push("/recipes");
        }}
        title={recipeQuery.data.name}
      >
        <Ingredients ingredients={recipeQuery.data.ingredients} />
        <Method method={recipeQuery.data.method} />
      </Modal>
    );
  return null;
};

export default Recipe;
