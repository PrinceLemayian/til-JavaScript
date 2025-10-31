let inventory = [];

function findProductIndex(name) {
  let productName = name.toLowerCase();

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === productName) {
      return i;
    }
  }
  return -1;
}

function addProduct(product) {
  const index = findProductIndex(product.name);

  if (index !== -1) {
    inventory[index].quantity += product.quantity;
    console.log(product.name.toLowerCase() + " quantity updated");
  } else {
    inventory.push({
      name: product.name.toLowerCase(),
      quantity: product.quantity,
    });
    console.log(product.name.toLowerCase() + " added to inventory");
  }
}

function removeProduct(name, quantity) {
  const index = findProductIndex(name);
  const productName = name.toLowerCase();

  if (index === -1) {
    console.log(productName + " not found");
    return;
  }

  const product = inventory[index];
  const newQuantity = product.quantity - quantity;

  if (newQuantity < 0) {
    console.log(
      "Not enough " +
        product.name +
        " available, remaining pieces: " +
        product.quantity
    );
  } else if (newQuantity === 0) {
    inventory.splice(index, 1);
  } else {
    product.quantity = newQuantity;
    console.log("Remaining " + product.name + " pieces: " + product.quantity);
  }
}

console.log(findProductIndex("flour"));
