import { FunctionComponent } from "react";
import { Box, Button, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useHistory } from "react-router-dom";
import { StringParam, useQueryParam } from "use-query-params";

type SearchType = {
  search: string;
};

const Search: FunctionComponent = ({ children }) => {
  const history = useHistory();
  const [search] = useQueryParam("search", StringParam);

  const form = useForm<SearchType>({
    initialValues: {
      search: search || "",
    },
  });

  return (
    <Box maw={300} mx="auto">
      <form
        onSubmit={form.onSubmit((values) =>
          history.push(`/recipes?search=${values.search}`)
        )}
      >
        <TextInput
          label="Search"
          placeholder="Search by recipe name or ingredient 😋"
          {...form.getInputProps("search")}
        />
        <Group position="right" mt="md">
          <Button type="submit">Search</Button>
        </Group>
      </form>
    </Box>
  );
};

export default Search;
