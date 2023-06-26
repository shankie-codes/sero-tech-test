import { FunctionComponent } from "react";
import { Box, Button, TextInput, createStyles } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useHistory } from "react-router-dom";
import { StringParam, useQueryParam } from "use-query-params";
import FieldWrapper from "./FieldWrapper";

type SearchType = {
  search: string;
};

const useStyles = createStyles((theme) => ({
  textInput: {
    marginBottom: "1em",
  },
}));

const Search: FunctionComponent = ({ children }) => {
  const history = useHistory();
  const [search] = useQueryParam("search", StringParam);
  const { classes } = useStyles();

  const form = useForm<SearchType>({
    initialValues: {
      search: search || "",
    },
  });

  return (
    <Box>
      <form
        onSubmit={form.onSubmit((values) =>
          history.push(`/recipes?search=${values.search}`)
        )}
      >
        <FieldWrapper>
          <TextInput
            label="Search"
            data-cy="search"
            className={classes.textInput}
            placeholder="Search by recipe name or ingredient 😋"
            {...form.getInputProps("search")}
          />
          <Button data-cy="search-submit" type="submit">
            Search
          </Button>
        </FieldWrapper>
      </form>
    </Box>
  );
};

export default Search;
