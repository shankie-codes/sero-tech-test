import { Flex, Paper, createStyles } from "@mantine/core";
import { PropsWithChildren } from "react";

type Props = {
  title?: string;
};

const useStyles = createStyles((theme) => ({
  fieldWrapper: {
    padding: "1em",
    marginTop: "0.5em",
    marginBottom: "0.5em",
  },
  textInput: {
    marginBottom: "1em",
  },
}));

const FieldWrapper = ({ title, children }: PropsWithChildren<Props>) => {
  const { classes } = useStyles();
  return (
    <Paper shadow="xs" p="md" className={classes.fieldWrapper}>
      <Flex direction="column" align="left">
        {title && <label>{title}</label>}
        {children}
      </Flex>
    </Paper>
  );
};

export default FieldWrapper;
