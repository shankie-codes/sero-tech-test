import { Fragment } from "react";
import { Button, Flex } from "@mantine/core";

import Search from "../../components/Search";

export const Home = () => {
  return (
    <Fragment>
      <Search />
      <Flex
        mih={50}
        gap="md"
        justify="flex-start"
        align="flex-start"
        direction="row"
        wrap="wrap"
      >
        <Button component="a" href="/recipes">
          View recipes
        </Button>
        <Button component="a" href="/recipes/add">
          Add recipe
        </Button>
      </Flex>
    </Fragment>
  );
};
