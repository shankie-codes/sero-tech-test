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
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Layout>
        <QueryClientProvider client={queryClient}>
          <Router>
            <QueryParamProvider adapter={ReactRouter5Adapter}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/recipes" component={Recipes} />
              </Switch>
            </QueryParamProvider>
          </Router>
        </QueryClientProvider>
      </Layout>
    </MantineProvider>
  );
};

export default App;
