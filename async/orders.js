"use strict";

// Step 1 → callback → Step 2 → callback → Step 3
getUser(1, (user) => {
  console.log(`Got user: ${user.name}`);

  getOrders(user.id, (orders) => {
    console.log(`Got ${orders.length} orders`);

    getProduct(orders[0].productId, (product) => {
      console.log(`First product: ${product.name}`);
    });
  });
});
