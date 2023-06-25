import { FunctionComponent } from "react";
import Header from "./Header";
import { createStyles } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

const useStyles = createStyles((theme) => ({
  wrapper: {
    maxWidth: "25rem",
    width: "100%",
    // height: "100vh",
    display: "flex",
    alignItems: "left",
    justifyContent: "center",
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: theme.radius.sm,
  },
}));

const Layout: FunctionComponent = ({ children }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Notifications />
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
