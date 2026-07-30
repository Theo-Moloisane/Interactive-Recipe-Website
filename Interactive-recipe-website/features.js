document.addEventListener("DOMContentLoaded", () =>
{
    const recipes = [
        {
            title: "Spaghetti",
            ingredients: 
            [
                "A box of spaghetti",
                "A jar of marinara sauce",
                "1-2 pounds of ground beef or Italian sausage",
                "Two large pots, one for boiling the pasta and the other for making the sauce",
                "Serving untensils",
                "1 tsp baking powder",
                "Salt",
                "Water",
            ],
            steps: 
            [
                "Get Your Supplies. Before you can start making your spaghetti you will need to first get the proper supplies and materials.",
                "Cooking the Meat + Get the Water Boiling. Before you begin, add a handful of salt to a large saucepan of water. Place it on the stove and increase the heat to a boiling point. Cooking the meat is the next step. After removing all of the meat from its container, place it all in a large pan and turn the stove down to medium.",
                "The meat must next be broken up into smaller pieces. As soon as the meat is cut into small pieces, you must begin turning it over to ensure that it is thoroughly cooked and browned all over. It should take ten to fifteen minutes to cook. Add the sauce once the meat is cooked through and has turned brown.",
                "Mixing in the Sauce. The cooked meat and marinara sauce must then be combined. Pour the entire contents of your jar of marinara sauce over the cooked meat, stirring to combine everything. After that, reduce the heat to low and simmer it while you prepare the pasta.",
                "Cooking the Spaghetti. The pasta can be added after the water reaches a rolling boil. Just follow the instructions on the package and it should cook in about 7 to 11 minutes on average!",
                "To prevent it from sticking, be sure to stir it every few minutes.",
                "Serve Your Spaghetti.",
            ],
            image: "images2/spagh.jpg",
        },
        {
            title: "Chicken curry",
            ingredients: 
            [
                "3 tablespoons olive oil",
                "1 small onion, chopped",
                "2 cloves garlic, minced",
                "3 tablespoons curry powder",
                "1 teaspoon ground cinnamon",
                "1 teaspoon paprika",
                "½ teaspoon grated fresh ginger root",
                "½ teaspoon white sugar",
                "Salt to taste",
                "2 skinless, boneless chicken breast halves - cut into bite-size pieces",
                "1 tablespoon tomato paste",
                "1 cup plain yogurt",
                "¾ cup coconut milk",
                "½ lemon, juiced",
                "½ teaspoon cayenne pepper",
            ],
            steps: 
            [
                "Saute onions and garlic.",
                "Add spices and cook until fragrant.",
                "Add chicken and brown.",
                "Add tomatoes and simmer until chicken is cooked.",
                "Serve with rice.",
            ],
            image: "images2/chickencurry.jpg",
        },
        {
            title: "Pancakes",
            ingredients: 
            [
                "100g plain flour",
                "2 large eggs",
                "300ml milk",
                "1 tbsp sunflower or vegetable oil, plus a little extra for frying",
                "Lemon wedges, to serve (optional)",
                "Caster sugar, to serve (optional)",
            ],
            steps: 
            [
                "Whisk flour, baking powder, and salt into a large bowl.",
                "Whisk melted butter, milk, egg and vanilla into a separate bowl.",
                "Mix the wet and dry ingredients together to form a batter.",
                "Stir the batter until it thickens and gets bubbly.",
                "Cook on a medium heat pan.",
                "Cook the pancake batter on each side for 1 to 2 minutes.",
                "Serve with toppings of your choice and enjoy!",
            ],
            image: "images2/pancake.jpg",
        },
        {
            title: "Chocolate Cake",
            ingredients: 
            [
                "Plain / all-purpose flour",
                "Eggs",
                "Baking powder",
                "Milk, full fat",
                "Sugar",
                "Oil",
                "Vanilla extract",
            ],
            steps: 
            [
                "Mix the flour, cocoa, baking powder, and baking soda into a large bowl, and add both sugars and salt and blend well, pressing out any lumps of brown sugar.",
                "Mix eggs, oil, sour cream and vanilla into a bowl.",
                "Mix the wet and dry ingredients together to form a batter and mix until it becomes thick and somewhat dry.",
                "Add the hot coffee into the mixture slowly to avoid clumps forming and then stir until the batter is smooth.",
                "Add the batter evenly into between the prepared pans for 30 to 33 minutes.",
                "Insert a toothpick into the cake and if it comes out clean the cake is ready.",
                "Let the cake rest on a wire rack for 15 minutes to get to room temperature.",
                "Once cooled down, serve and enjoy!",
            ],
            image: "images2/cake.jpg",
        },
    ];

    const recipeList = document.getElementById('recipe-list');
    const recipeDetails = document.getElementById('recipeDetails');
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('search-item');

    function displayRecipes(recipesToDisplay) 
    {
        recipeList.innerHTML = '';
        recipesToDisplay.forEach(recipe => 
        {
            const card = document.createElement('div');
            card.className = 'card';

            const imgElement = document.createElement('img');
            imgElement.src = recipe.image;
            imgElement.alt = recipe.title;

            const content = document.createElement('div');
            content.className = 'content';

            const h3 = document.createElement('h3');
            h3.textContent = recipe.title;
            h3.className = 'recipe-title';
            h3.addEventListener('click', () => displayRecipeDetails(recipe));

            const description = document.createElement('p');
            description.textContent = `Ingredients: ${recipe.ingredients.length}, Steps: ${recipe.steps.length}`;

            content.appendChild(h3);
            content.appendChild(description);

            card.appendChild(imgElement);
            card.appendChild(content);

            recipeList.appendChild(card);
        });
    }

    function displayRecipeDetails(recipe) 
    {
        recipeDetails.innerHTML = `
            <h2>${recipe.title}</h2>
            <img src="${recipe.image}" alt="${recipe.title}" />
            <h3>Ingredients:</h3>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <h3>Steps:</h3>
            <ol>
                ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
            </ol>
            <button onclick="window.print()">Print Recipe</button>
        `;
        const ingredientItems = recipeDetails.querySelectorAll('ul li');
        ingredientItems.forEach(item => 
        {
            item.addEventListener('click', () =>
            {
                item.classList.toggle('purchased');
            });
        });
    }
    searchForm.addEventListener('submit', (event) => 
    {
        event.preventDefault();
        const query = searchInput.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(query)
        );
        displayRecipes(filteredRecipes);
    });
    displayRecipes(recipes);
});
