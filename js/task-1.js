/**check if products will fit in the container
 *
 * @param {object} products
 * @param {number} containerSize
 * @returns {boolean}
 */
function isEnoughCapacity(products, containerSize) {
  let totalSize = 0;
  for (const key in products) {
    if (products[key]) totalSize += products[key];
    if (totalSize > containerSize) return false;
  }
  return true;
}

console.log('Task 1');
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
