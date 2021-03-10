import React, { useState } from "react";

const AuthContext = React.createContext();

function Context(props) {
  const [auth, setAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { Context, AuthContext };
