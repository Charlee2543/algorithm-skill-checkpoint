function sortProductsByPrice(products) {
   // Your code here
   for (let i = 0; i < products.length; i++) {
      for (let l = 0; l < products.length - i - 1; l++) {
         //  console.log('products[l]: ', products[l]);
         if (products[l].price > products[l + 1].price) {
            const moreProduct = products[l];
            products[l] = products[l + 1];
            products[l + 1] = moreProduct;
         }
      }
   }
   return products;
}

// Test case
const products = [
   { name: 'Apple', price: 1.2 },
   { name: 'Banana', price: 0.8 },
   { name: 'Cherry', price: 2.5 },
   { name: 'Date', price: 1.5 },
];
console.log(sortProductsByPrice(products));

// Output: [
//   { name: 'Banana', price: 0.8 },
//   { name: 'Apple', price: 1.2 },
//   { name: 'Date', price: 1.5 },
//   { name: 'Cherry', price: 2.5 }
// ]
