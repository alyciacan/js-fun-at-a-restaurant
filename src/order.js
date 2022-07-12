
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}

function takeOrder(newOrder, deliveryOrders) {
  if (deliveryOrders.length < 3) {
  deliveryOrders.push(newOrder)
  return deliveryOrders
}
}

function refundOrder(orderNumber, deliveryOrders) {
 for (i = 0; i < deliveryOrders.length; i++) {
   if (deliveryOrders[i].orderNumber === orderNumber) {
     deliveryOrders.splice(i, 1)
   }
 }
}

// function listItems(deliveryOrders) {
// var items = []
//   for (i = 0; i < deliveryOrders.length; i++) {
//     items.push(deliveryOrders[i].item)
//   }
//   return items
// }

function listItems(deliveryOrders) {
  var items = ""
  for (i = 0; i < (deliveryOrders.length -1); i++) {
    items += deliveryOrders[i].item + ", ";
  } items += deliveryOrders[deliveryOrders.length - 1].item
  return items;
}

function searchOrder(deliveryOrders, objectItem) {
  for (i = 0; i < deliveryOrders.length; i ++) {
    if (deliveryOrders[i].item == objectItem) {
      return true
    }
  } return false

}
// This last one was interesting. I tried to create an else condition that returned false if the objectItem didn't match the item in deliveryOrders, but then it always evaluated to false. My rock helped me but can't explain why that was happening.
