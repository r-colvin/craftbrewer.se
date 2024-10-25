/**
 * Fetches all recipes from the Brewfather API and writes them to markdown files.
 * 
 */
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');   

const username = process.env.BREWFATHER_USERNAME; 
const password = process.env.BREWFATHER_PASSWORD; 

const encodedCredentials = Buffer.from(`${username}:${password}`).toString('base64');
const recipesUrl = 'https://api.brewfather.app/v2/recipes';

if (!username || !password) {   
    console.error('Please provide BREWFATHER_USERNAME and BREWFATHER_PASSWORD environment variables');
}else{
    getRecipes();
}

/**
 * Asynchronously fetches recipes, sanitizes their filenames, and writes them to markdown files.
 *
 * The function performs the following steps:
 * 1. Sanitizes the recipe filenames to ensure they are safe for file storage.
 * 2. Constructs the file path for each recipe markdown file.
 * 3. Writes the recipe data to markdown files.
 *
 * @async
 * @function getRecipes
 * @returns {Promise<void>} A promise that resolves when all recipes have been written to markdown files.
 */
async function getRecipes(){
    const sanitize = (filename) => filename.replace(/[^a-zA-Z0-9-_\.]/g, '_').trim();
    const filename = recipe => path.join(__dirname,`../docs/Homebrewing/Recipes/${sanitize(recipe.name)}.md`)
    
    const writeMarkdown = async (recipe) => fs.promises.writeFile(filename(recipe), markdown(recipe));    

    const ids = await fetchRecipes();
    const recipes = await Promise.all(ids.map(fetchRecipe));
    await Promise.all(recipes.map(writeMarkdown));
}

/**
 * Fetches a recipe by its ID from the specified URL.
 *
 * @async
 * @function fetchRecipe
 * @param {string} id - The ID of the recipe to fetch.
 * @returns {Promise<Object>} The fetched recipe object.
 * @throws Will throw an error if the fetch operation fails or the response is not ok.
 */
async function fetchRecipe(id) {
    try {
        const response = await fetch(`${recipesUrl}/${id}`, {headers: {'Authorization': `Basic ${encodedCredentials}`}});

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const recipe = await response.json();
        console.log(recipe.name);
        return recipe;
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
}

/**
 * Fetches recipes from the specified URL with authorization headers.
 *
 * @async
 * @function fetchRecipes
 * @returns {Promise<Array<string>>} A promise that resolves to an array of recipe IDs.
 * @throws {Error} Throws an error if the HTTP request fails.
 */
async function fetchRecipes() {

    try {
        const response = await fetch(`${recipesUrl}`, {headers: {'Authorization': `Basic ${encodedCredentials}`}});

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const recipes = await response.json();
        return recipes.map(recipe => recipe._id);
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
}

/**
 * Generates HTML markup for a hop entry.
 *
 * @param {Object} hop - The hop object.
 * @param {number} hop.amount - The amount of hops in grams.
 * @param {string} hop.name - The name of the hop.
 * @param {number} hop.alpha - The alpha acid percentage of the hop.
 * @param {number} hop.time - The time in minutes the hop is boiled.
 * @returns {string} The HTML markup for the hop entry.
 */
function hopMarkup(hop){
    return `
        <div class="row hops-list">
            <div class="col col--3 hops-amt">${hop.amount} g</div>
            <div class="col col--6 hops-name">${hop.name} ${hop.alpha}%</div>
            <div class="col col--3 hops-percent">${hop.time} min</div>
        </div>`;
}

/**
 * Generates HTML markup for a fermentable ingredient.
 *
 * @param {Object} fermentable - The fermentable ingredient object.
 * @param {number} fermentable.amount - The amount of the fermentable in kilograms.
 * @param {number} fermentable.percentage - The percentage of the fermentable in the recipe.
 * @returns {string} The HTML markup for the fermentable ingredient.
 */
function fermentableMarkup(fermentable){
    return `
          <div class="row fermentables-list">
            <div class="col col--3 ferm-amt">${fermentable.amount} Kg</div>
            <div class="col col--7 ferm-name">${fermentable.amount}</div>
            <div class="col col--2 ferm-percent">${fermentable.percentage}%</div>
          </div>`;
}

/**
 * Sums the amounts from an array of objects and returns the total as a string with two decimal places.
 *
 * @param {Array<{amount: number}>} amounts - An array of objects, each containing an `amount` property.
 * @returns {string} The total sum of the amounts, formatted to two decimal places.
 */
const sum = (amounts) => amounts.reduce((acc, curr) => acc + curr.amount, 0).toFixed(2);

/**
 * Generates a markdown representation of a recipe.
 *
 * @param {Object} recipe - The recipe object.
 * @param {string} recipe.name - The name of the recipe.
 * @param {string} recipe.abv - The alcohol by volume percentage of the recipe.
 * @param {string} recipe.author - The author of the recipe.
 * @param {string} recipe.type - The type of the recipe.
 * @param {Object} recipe.equipment - The equipment details.
 * @param {string} recipe.equipment.name - The name of the equipment.
 * @param {number} recipe.equipment.boilTime - The boil time in minutes.
 * @param {number} recipe.equipment.boilSize - The pre-boil volume in liters.
 * @param {number} recipe.equipment.fermenterTopUp - The fermenter top-up volume in liters.
 * @param {number} recipe.equipment.efficiency - The brewhouse efficiency percentage.
 * @param {number} recipe.equipment.mashEfficiency - The mash efficiency percentage.
 * @param {Object} recipe.style - The style details.
 * @param {string} recipe.style.categoryNumber - The category number of the style.
 * @param {string} recipe.style.styleLetter - The style letter.
 * @param {string} recipe.style.name - The name of the style.
 * @param {number} recipe.og - The original gravity of the recipe.
 * @param {number} recipe.fg - The final gravity of the recipe.
 * @param {number} recipe.ibu - The International Bitterness Units of the recipe.
 * @param {number} recipe.buGuRatio - The bitterness to gravity ratio.
 * @param {Array<Object>} recipe.fermentables - The list of fermentables.
 * @param {Array<Object>} recipe.hops - The list of hops.
 * @returns {string} The markdown representation of the recipe.
 */
function markdown(recipe) {
    return `---
  hide_table_of_contents: true
  hide_title: true
  title: ${recipe.name}
---
  
import '/docs/Homebrewing/Recipes/recipes.styles.css';

<div class="bf-recipe-viewer">
<div class="container">
    <div class="row title-bar">
    <div class="col col--6 title-name">
        ${recipe.name} - ${recipe.abv}%
    </div>
    <div class="col col--6 title-icons"></div>
    </div>
    <div class="row overview">
    <div class="col col--1 overview-image">
        <div class="brew-image"></div>
    </div>
    <div class="col col-3 overview-details">
        <div class="row">
        <div class="col col--6 text-key">Name:</div>
        <div class="col col--6">${recipe.name}</div>
        </div>
        <div class="row">
        <div class="col col--6 text-key">Author:</div>
        <div class="col col--6">${recipe.author}</div>
        </div>
        <div class="row">
        <div class="col col--6 text-key">Type:</div>
        <div class="col col--6">${recipe.type}</div>
        </div>
    </div>
    <div class="col col-3 overview-process">
        <div class="row equipment-title">
        <div class="col col--12"><b>Equipment: </b>${recipe.equipment.name}</div>
        </div>
        <div class="row">
        <div class="col col--6 text-key">batch volume</div>
        <div class="col col--6 align-right">${recipe.batchSize} L</div>
        </div>
        <div class="row">
        <div class="col col--6 text-key">Boil Time</div>
        <div class="col col--6 align-right">${recipe.equipment.boilTime} min</div>
        </div>
        <div class="row">
        <div class="col col--6 text-key">Pre-Boil Volume</div>
        <div class="col col--6 align-right">${recipe.equipment.boilSize} L</div>
        </div>
        <div class="row">
        <div class="col col--6 text-key">Fermenter Top-Up</div>
        <div class="col col--6 align-right">${recipe.equipment.fermenterTopUp} L</div>
        </div>
        <div class="row">
        <div class="col col--6 text-key">Brewhouse Efficiency</div>
        <div class="col col--6 align-right">${recipe.equipment.efficiency}%</div>
        </div>
        <div class="row">
        <div class="col col--6 text-key">Mash Efficiency</div>
        <div class="col col--6 align-right">${recipe.equipment.mashEfficiency}%</div>
        </div>
    </div>
    <div class="col col-4 overview-stats">
        <div class="row overview-title">
        <div class="col col--12"><b>Style: </b>${recipe.style.categoryNumber}${recipe.style.styleLetter} - ${recipe.style.name}</div>
        </div>
        <div class="row">
        <div class="col col--6 text-key">ABV</div>
        <div class="col col--6 align-right">${recipe.abv}%</div>
        </div>
        <div class="row">
        <div class="col col--6 text-key">OG</div>
        <div class="col col--6 align-right">${recipe.og}</div>
        </div>
        <div class="row">
        <div class="col col--6 text-key">FG</div>
        <div class="col col--6 align-right">${recipe.fg}</div>
        </div>
        <div class="row">
        <div class="col col--6 text-key">SRM</div>
        <div class="col col--6 align-right">11.8</div>
        </div>
        <div class="row">
        <div class="col col--6 text-key">IBU</div>
        <div class="col col--6 align-right">${recipe.ibu}</div>
        </div>
        <div class="row">
        <div class="col col--6 text-key">BU/GU</div>
        <div class="col col--6 align-right">${recipe.buGuRatio}</div>
        </div>
    </div>
    </div>
    <div class="row ferm-hops">
    <div class="col col--6 fermentables">
        <div class="row fermentables-title"><b>Fermentables (${sum(recipe.fermentables)} kg)</b></div>
        ${recipe.fermentables.map(fermentableMarkup).join('')}
        <div class="row">
        <div class="fermentables-summary"></div>
        </div>
    </div>
    <div class="col col--6 hops">
        <div class="row hops-title"><b>Hops (${sum(recipe.hops)} g)</b></div>
        ${recipe.hops.map(hopMarkup).join('')}
        <div class="row">
        <div class="hops-summary"></div>
        </div>
    </div>
    </div>
</div>
</div>`;  
}



