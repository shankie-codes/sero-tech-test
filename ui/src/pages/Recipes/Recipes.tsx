import { Fragment } from "react";
import { StringParam, useQueryParam } from "use-query-params";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import Search from "../../components/Search";
import RecipeList from "./components/RecipeList";
import Recipe from "./components/Recipe";
import AddRecipe from "./components/AddRecipe";

const Recipes = () => {
  const { path } = useRouteMatch();
  const [search] = useQueryParam("search", StringParam);
  return (
    <Fragment>
      <Search />
      <Switch>
        <Route exact path={path}>
          <RecipeList search={search} />
        </Route>
        <Route exact path={`${path}/add`}>
          <AddRecipe />
        </Route>
        <Route path={`${path}/:id`}>
          <h1>Recipe</h1>
          <Recipe />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default Recipes;
