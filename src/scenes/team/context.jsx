// import { createContext } from "react";

// export const TeamContext = createContext(() => {});
import { mockDataTeam } from "../../data/mockData";

import React, { createContext, useState } from 'react';

export const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  const [rows, setRows] = useState(mockDataTeam);

  return (
    <TeamContext.Provider value={{ rows, setRows }}>
      {children}
    </TeamContext.Provider>
  );
};
