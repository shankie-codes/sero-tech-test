import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter5Adapter } from "use-query-params/adapters/react-router-5";
import { QueryClient, QueryClientProvider } from "react-query";

import { Home } from "./pages/Home/Home";
import Layout from "./components/Layout";
import Recipes from "./pages/Recipes/Recipes";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
      },
    },
  });
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        globalStyles: (theme) => ({
          a: { textDecoration: "none", color: theme.colors.blue[9] },
        }),
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Router>
          <QueryParamProvider adapter={ReactRouter5Adapter}>
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/recipes" component={Recipes} />
              </Switch>
            </Layout>
          </QueryParamProvider>
        </Router>
      </QueryClientProvider>
    </MantineProvider>
  );
};

export default App;
