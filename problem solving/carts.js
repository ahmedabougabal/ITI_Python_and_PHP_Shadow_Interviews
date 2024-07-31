/**
 * Given two arrays (cart1, cart2) each array of them represent a shopping cart for a different customer
 * Each array of them is an array of objects, each object represents a product that the customer bought.
 * the product object has three properties like the following:
 * {
 *  id: 'string', 
 *  name: 'string',
 *  count: 'number',
 * }
 * Write a function to check if the two customers bouth the same products with the same quantities.
 * function singature: 
 *  function checkCarts(cart1, cart2)
 *  it shall return true if the carts are the same, otherwise it shall return false
 */

function checkCarts(cart1, cart2){

}

const cart1 = [
  {
    id: '123',
    name: 'Journey to the Center of the Earth',
    count: 2
  },
  {
    id: '456', 
    name: 'Oliver Twist',
    count: 1
  },
  {
    id: '123',
    name: 'Journey to the Center of the Earth',
    count: 3
  },
];

const cart2 = [
  {
    id: '123',
    name: 'Journey to the Center of the Earth',
    count: 4
  },
  {
    id: '456', 
    name: 'Oliver Twist',
    count: 1
  },
  {
    id: '123',
    name: 'Journey to the Center of the Earth',
    count: 1
  },
];

const result = checkCarts(cart1, cart2);
console.log(result);
//The function shall return true if called with these two carts, as they are identical