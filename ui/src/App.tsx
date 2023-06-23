import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

import { Home } from "./pages/Home/Home";
import Layout from "./components/Layout";
import Recipes from "./pages/Recipes/Recipes";
import { QueryClient, QueryClientProvider } from "react-query";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Layout>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/recipes" component={Recipes} />
            </Switch>
          </Router>
        </QueryClientProvider>
      </Layout>
    </MantineProvider>
  );
};

export default App;
