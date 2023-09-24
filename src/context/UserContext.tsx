import React from 'react'

export const UserContext = React.createContext(null);

export const UserStorage = ({ children }) => {
  const [cartProducts, setCartProducts] = React.useState([]);

  const handleIncrement = (product) => {
    const updatedProducts = cartProducts.map(cartProduct => {
      if (cartProduct.id === product.id) {
        return { ...cartProduct, quantity: cartProduct.quantity + 1 };
      }
      return product
    })

    setCartProducts(updatedProducts);
  }

  const handleDecrement = (product) => {
    const updatedCart = cartProducts.map(cartProduct => {
      if (cartProduct.id === product.id && cartProduct.quantity > 1) {
        return { ...cartProduct, quantity: cartProduct.quantity - 1 };
      }
      return cartProduct
    })

    setCartProducts(updatedCart);
  }

  const addProductToCart = (product) => {
    const existingProduct = isExistingProduct(product);

    if (existingProduct) {
      return setCartProducts((cartProducts) => cartProducts.map((cartProduct) =>
        existingProduct?.id ? { ...cartProduct, quantity: cartProduct.quantity++ } : cartProduct))
    }

    setCartProducts((cartProducts) => [...cartProducts, {
      id: product.id,
      title: product.title,
      price: product.price,
      imgUrl: product.image,
      category: product.category,
      quantity: 1,
    }])
  }

  const isExistingProduct = (product) => {
    const existingProduct = cartProducts.find((cartProduct) => cartProduct.id === product.id)
    return existingProduct || null;
  }

  const removeProductCart = (product) => {
    const updatedCartItems = cartProducts.filter(item => item.id !== product.id);
    setCartProducts(updatedCartItems);
  };

  return (
    <UserContext.Provider value={{ cartProducts, setCartProducts, handleIncrement, handleDecrement, addProductToCart, removeProductCart }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext