// MyContext.js
import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [inview, setInview] = useState(true);

  return (
    <MyContext.Provider value={{ inview, setInview }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyProvider, MyContext };
