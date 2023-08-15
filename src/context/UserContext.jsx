import React from 'react'

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [cartData, setCartData] = React.useState([]);
  const totalCart = cartData.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  return (
    <UserContext.Provider value={{ cartData, setCartData }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext