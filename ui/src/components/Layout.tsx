import { FunctionComponent } from "react";
import Header from "./Header";
import { createStyles, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    // subscribe to color scheme changes right in your styles
    // backgroundColor:
    //   theme.colorScheme === "dark"
    //     ? theme.colors.dark[5]
    //     : theme.colors.gray[1],
    maxWidth: rem(400),
    width: "100%",
    height: rem(180),
    display: "flex",
    alignItems: "left",
    justifyContent: "center",
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: theme.radius.sm,

    // Dynamic media queries, define breakpoints in theme, use anywhere
    // [theme.fn.smallerThan("sm")]: {
    //   // Child reference in nested selectors via ref
    //   [`& .${getStylesRef("child")}`]: {
    //     fontSize: theme.fontSizes.xs,
    //   },
    // },
  },
}));

const Layout: FunctionComponent = ({ children }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
