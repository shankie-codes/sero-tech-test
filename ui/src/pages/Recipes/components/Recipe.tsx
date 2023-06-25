import React from "react";
import { Modal } from "@mantine/core";

// type Props = {
//   id: string;
// };

const Recipe = () => {
  console.log("modal");
  return (
    <Modal
      opened={true}
      onClose={() => {
        console.log("closed");
      }}
      title="Recipe"
    >
      "blah"
    </Modal>
  );
  // const recipesQuery = useGetRecipes({
  //   search: search || "",
  // });

  // if (recipesQuery.isLoading || recipesQuery.isFetching)
  //   return <Skeleton height={200} width={400} />;
  // if (recipesQuery.error) return <div>{`Error: ${recipesQuery.error}`}</div>;
  // if (recipesQuery.isSuccess)
  //   return (
  //     <List>
  //       {recipesQuery.data.map((recipe: Recipe) => (
  //         <List.Item key={recipe._id}>{recipe.name}</List.Item>
  //       ))}
  //     </List>
  //   );
  // return null;
};

export default Recipe;
