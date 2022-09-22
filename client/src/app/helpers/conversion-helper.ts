


export class ConversionHelper {

    /* public static jsonToRecipe(json:any) {
        let recipesData: Recipe[] = [];

        let recipesJson: RecipeJSON = {
            recipes: json.recipes
        }

        let recipes: any[] = [];
        if (recipesJson && recipesJson.recipes) {
            recipes = recipesJson.recipes;
        }

        recipes.forEach((recipe) => {
            let ingredients: IngredientItem[] = [];
            recipe.ingredients.forEach((ingredient: IngredientItemRaw) => {
                let quantityTypeEnum = QuantityType[ingredient.quantityType as keyof typeof QuantityType];
                let ingredientEnum = Ingredient[ingredient.ingredient as keyof typeof Ingredient];
                console.log(quantityTypeEnum);
                let newIngredient: IngredientItem = {
                    quantityType: quantityTypeEnum,
                    quantity: +ingredient.quantity!,
                    ingredient: ingredientEnum,
                }
                console.log(newIngredient)
                ingredients.push(newIngredient)
            });
            let recipeToAdd: Recipe = {
                title: recipe.title,
                description: (recipe.description ? recipe.description : undefined),
                ingredients: ingredients,
                href: recipe.href ? recipe.href : undefined,
                image: recipe.image? recipe.image : undefined,
                vegeratian: recipe.vegeratian
            };
            recipesData.push(recipeToAdd);

        })

        return recipesData
    } */
    
    
    
}
