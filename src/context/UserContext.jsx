import React from 'react'

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [cartData, setCartData] = React.useState([])
  return (
    <UserContext.Provider value={{ cartData, setCartData }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext