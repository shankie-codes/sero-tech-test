import React from "react";
import {
  ActionIcon,
  Box,
  Button,
  Group,
  Modal,
  Text,
  TextInput,
} from "@mantine/core";
import { useHistory } from "react-router-dom";
import { useForm } from "@mantine/form";
import { IconTrash } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import { useMutation } from "react-query";

import { api } from "../../../util";
import { Recipe } from "../../../types";
import FieldWrapper from "../../../components/FieldWrapper";

const AddRecipe = () => {
  const history = useHistory();
  const mutation = useMutation((data: Recipe) => api.post("/recipes", data), {
    onSuccess: (response) => {
      history.push(`/recipes/${response.data}`);
      notifications.show({
        message: "Recipe added!",
        color: "green",
      });
    },
  });

  const form = useForm<Recipe>({
    initialValues: {
      ingredients: [],
      method: [],
      name: "",
    },

    validate: {
      name: (value) => (value.length > 0 ? null : "Must have a name"),
      ingredients: (value) =>
        value.length > 0 ? null : "Must have at least one ingredient",
      method: (value) =>
        value.length > 0 ? null : "Must have at least one method",
    },
  });

  const handleError = (errors: typeof form.errors) => {
    if (errors.ingredients) {
      notifications.show({
        message: "Must have at least one ingredient",
        color: "red",
      });
    } else if (errors.method) {
      notifications.show({
        message: "Must have at least one method",
        color: "red",
      });
    }
  };

  const handleSubmit = (values: typeof form.values) => {
    mutation.mutate(form.values);
  };

  const methodFields = form.values.method.map((item, index) => (
    <Group key={index} mt="xs">
      <TextInput
        data-cy={`method[${index}]`}
        placeholder="Cooking method"
        withAsterisk
        sx={{ flex: 1 }}
        {...form.getInputProps(`method.${index}`)}
      />
      <ActionIcon
        color="red"
        onClick={() => form.removeListItem("method", index)}
      >
        <IconTrash size="1rem" />
      </ActionIcon>
    </Group>
  ));

  const ingredientsFields = form.values.ingredients.map((item, index) => (
    <Group key={index} mt="xs">
      <TextInput
        placeholder="Quantity"
        data-cy={`ingredients-quantity[${index}]`}
        withAsterisk
        sx={{ flex: 1 }}
        {...form.getInputProps(`ingredients.${index}.quantity`)}
      />
      <TextInput
        placeholder="Ingredient"
        data-cy={`ingredients-ingredient[${index}]`}
        withAsterisk
        sx={{ flex: 1 }}
        {...form.getInputProps(`ingredients.${index}.ingredient`)}
      />
      <ActionIcon
        color="red"
        onClick={() => form.removeListItem("ingredients", index)}
      >
        <IconTrash size="1rem" />
      </ActionIcon>
    </Group>
  ));

  return (
    <Modal
      opened={true}
      onClose={() => {
        history.push("/");
      }}
      title="Add Recipe"
    >
      <Box mx="auto">
        <form onSubmit={form.onSubmit(handleSubmit, handleError)}>
          <TextInput
            label="Name"
            data-cy="name"
            placeholder="Recipe name"
            {...form.getInputProps("name")}
          />
          <FieldWrapper title="Ingredients">
            <Box>
              {ingredientsFields.length > 0 ? (
                <Group mb="xs">
                  <Text weight={500} size="sm" sx={{ flex: 1 }}>
                    Quantity
                  </Text>
                  <Text weight={500} size="sm" pr={90}>
                    Ingredient
                  </Text>
                </Group>
              ) : (
                <Text color="dimmed" align="left">
                  No ingredients...
                </Text>
              )}

              {ingredientsFields}

              <Group mt="md">
                <Button
                  data-cy="add-ingredient"
                  onClick={() =>
                    form.insertListItem("ingredients", {
                      quantity: "",
                      ingredient: "",
                    })
                  }
                >
                  Add ingredient
                </Button>
              </Group>
            </Box>
          </FieldWrapper>
          <FieldWrapper title="Method">
            <Box>
              {methodFields.length > 0 ? (
                <Group mb="xs">
                  <Text weight={500} size="sm" sx={{ flex: 1 }}>
                    Name
                  </Text>
                </Group>
              ) : (
                <Text color="dimmed">No methods...</Text>
              )}

              {methodFields}

              <Group mt="md">
                <Button
                  data-cy="add-method"
                  onClick={() => form.insertListItem("method", "")}
                >
                  Add method
                </Button>
              </Group>
            </Box>
          </FieldWrapper>
          <Button data-cy="add-recipe" type="submit">
            Add recipe
          </Button>
        </form>
      </Box>
      {mutation.isLoading && <p>Submitting...</p>}
      {mutation.isSuccess && <p>Recipe added!</p>}
      {mutation.isError && (
        <p>
          An error occurred. I didn't get around to writing better error
          handling
        </p>
      )}
    </Modal>
  );
};

export default AddRecipe;
