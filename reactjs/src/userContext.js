import React, { createContext, useState } from 'react';

// Create the UserContext
const UserContext = createContext();

// UserProvider component to provide the context value
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
