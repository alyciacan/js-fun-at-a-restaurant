

module.exports = {
  createRestaurant,
  addMenuItem,
  // removeMenuItem
}

function createRestaurant(name) {
  var restaurant = {
    name: name,
    menus: {
      breakfast:[],
      lunch:[],
      dinner:[]
    }
  }
  return restaurant;
}

function addMenuItem(pizzaRestaurant, menuItem) {
  if (menuItem.type === "lunch") {
    for (var i = 0; i < pizzaRestaurant.menus.lunch.length; i++) {
      if (menuItem == pizzaRestaurant.menus.lunch[i]) {
        return pizzaRestaurant
      } else {
        pizzaRestaurant.menus.lunch.push(menuItem);
        return pizzaRestaurant
      }
    }
} else if (menuItem.type === "breakfast") {
    for (var i = 0; i < pizzaRestaurant.menus.breakfast.length; i++) {
      if (menuItem == pizzaRestaurant.menus.breakfast[i]) {
        return pizzaRestaurant;
      } else { pizzaRestaurant.menus.breakfast.push(menuItem);
        return pizzaRestaurant;
      }
      }
  } else {
    for (var i = 0; i < pizzaRestaurant.menus.dinner.length; i++) {
      if (menuItem == pizzaRestaurant.menus.dinner[i]) {
        return pizzaRestaurant;
      } else {pizzaRestaurant.menus.dinner.push(menuItem);
      return pizzaRestaurant;
    }
      }
    }
  }
