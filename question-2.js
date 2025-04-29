function findProductPrice(products, name) {
   // Your code here เริ่มด้วยการแบ่งครึ่ง array หากเป็นเศษให้ปัดขึ้น
   let numberArray = products.length;
   let numberSearch = Math.floor(numberArray / 2);
   for (let i = numberSearch; i < products.length && i > 0; i++) {
      console.log(products[i].name);

      if (name === products[i].name) {
         return products[i].price;
      } else if (name > products[i].name) {
         numberSearch = numberSearch + Math.floor(numberArray / 2);
      } else if (name < products[i].name) {
         numberSearch = numberSearch - Math.floor(numberArray / 2);
      }
      if (numberSearch <= 0 || numberSearch >= products.length) {
         return -1;
      }
   }
}

// Test case
const products = [
   { name: 'Apple', price: 1.2 },
   { name: 'Banana', price: 0.8 },
   { name: 'Cherry', price: 2.5 },
];

console.log(findProductPrice(products, 'Banana')); // Output: 0.8
console.log(findProductPrice(products, 'Durian')); // Output: -1
