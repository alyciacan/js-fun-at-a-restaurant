function nameMenuItem(x) {
return `Delicious ${x}`
}

function createMenuItem(a,b,c) {
  var menuItem = {
    name: a,
    price: b,
    type: c
  }
return menuItem
}

function addIngredients(ingredient, ingredients) {
  if (ingredients.includes(ingredient)) {
    return ingredients;
  } else { var newIngredients = ingredients.push(ingredient);
  return newIngredients;
  }
}

function formatPrice(initialPrice) {
  var formattedPrice = "$" + initialPrice;
  return formattedPrice;
}

function decreasePrice(menuItemPrice) {
  var lowerPrice = (menuItemPrice - (menuItemPrice*.1))
  return lowerPrice;
}

function createRecipe(title, ingredients, menuItemType) {
 var recipe = {
   title:title,
   ingredients:ingredients,
   type:menuItemType
 };
 return recipe;
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
