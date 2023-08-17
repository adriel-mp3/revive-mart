import React from 'react'

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [cartData, setCartData] = React.useState([]);

  const handleIncrement = (itemId) => {
    const updatedCartItems = cartData.map(item => {
      if (item.id === itemId) {
        return {...item, quantity: item.quantity + 1};  
      }
      return item
    })

    setCartData(updatedCartItems);
  }

  const handleDecrement = (itemId) => {
    const updatedCartItems = cartData.map(item => {
      if (item.id === itemId && item.quantity > 1) {
        return {...item, quantity: item.quantity - 1};  
      }
      return item
    })

    setCartData(updatedCartItems);
  }

  function addItemToCart(product) {
    const existingProduct = cartData.find((item) => item.id === product.id);
    
    if (existingProduct) {
      return setCartData((cartData) => cartData.map((item) =>
        item.id === existingProduct.id ? { ...item, quantity: item.quantity + 1 } : item))
    }
    
    setCartData((cartData) => [...cartData, {
      id: product.id,
      title: product.title,
      price: product.price,
      imgUrl: product.image,
      category: product.category,
      quantity: 1,
    }])
  }

  const removeItemFromCart = (itemId) => {
    const updatedCartItems = cartData.filter(item => item.id !== itemId);
    setCartData(updatedCartItems);
  };

  return (
    <UserContext.Provider value={{ cartData, setCartData, handleIncrement, handleDecrement, addItemToCart, removeItemFromCart}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext