import { List } from "@mantine/core";
import { Fragment } from "react";

type Props = {
  method: string[];
};

const Method = ({ method }: Props) => {
  return (
    <Fragment>
      <h2>Method</h2>
      <List>
        {method.map((method, i) => (
          <List.Item key={i}>{method}</List.Item>
        ))}
      </List>
    </Fragment>
  );
};

export default Method;
