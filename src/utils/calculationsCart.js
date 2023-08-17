export const calculateTotalPrice = (cartItems) => {
  const totalOnCart = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  return totalOnCart.toFixed(2);
}

export const calculateItemsQuantity = (cartItems) => {
  const itemsOnCart = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  return itemsOnCart;
}

export const calculateItemByQuantity = (quantity, price) => {
  const totalItem = quantity * price;
  return totalItem.toFixed(2);
}
