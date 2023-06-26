import recipes from "../fixtures/recipes.json";

describe("Recipe tests", () => {
  it(`Given I have a new recipe
      When I add the new recipe name
      And ingredients
      And measurements
      And cooking method
      Then the new recipe is saved for later`, () => {
    cy.visit("http://localhost:3000");

    cy.contains("Add recipe").click();
    cy.url().should("include", "/recipes/add");

    cy.get('[data-cy="name"]').type(recipes.cabbageMasala.name);

    // const addIngredientButton = cy.get('[data-cy="add-ingredient"]');

    recipes.cabbageMasala.ingredients.forEach((ingredient, index) => {
      cy.get('[data-cy="add-ingredient"]').click();
      cy.get(`[data-cy="ingredients-quantity[${index}]"]`).type(
        ingredient.quantity
      );
      cy.get(`[data-cy="ingredients-ingredient[${index}]"]`).type(
        ingredient.ingredient
      );
    });

    recipes.cabbageMasala.method.forEach((method, index) => {
      cy.get('[data-cy="add-method"]').click();
      cy.get(`[data-cy="method[${index}]"]`).type(method);
    });

    cy.get('[data-cy="add-recipe"]').click();
    cy.contains("Recipe added!").should("be.visible");
  });

  it(`Given I want to look for a recipe
      When I search by the name of the recipe
      Then I find the recipe
      And I can see the ingredients
      And I can see the cooking methods`, () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="search"]').type("Ajit");

    cy.get('[data-cy="search-submit"]').click();

    cy.contains("Ajit's curry base").should("be.visible");
    cy.contains("Taz").should("not.exist");
  });

  it(`Given I want to look for a recipe by ingredients
      When I search by the ingredient of the recipe
      Then I find the recipe
      And I can see the ingredients
      And I can see the cooking methods`, () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="search"]').type("lentils");

    cy.get('[data-cy="search-submit"]').click();

    cy.contains("Taz's tarka dhal").should("be.visible");
    cy.contains("Ajit").should("not.exist");
  });
});
