import { createContext, useState, useEffect } from "react";

import jwt_decode from "jwt-decode";

import requestFaker from "../services/api";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState();

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storagedToken = localStorage.getItem('[@auth-token]')
    const storagedUser = localStorage.getItem('[@auth-user]')

    if (storagedToken && storagedUser) {
      return true
    }
    return false
  });

  useEffect(() => {
    const storagedUser = localStorage.getItem('[@auth-user]')

    if (storagedUser) {
      setUser(JSON.parse(storagedUser));
    }
  }, []);

  const signIn = async (username, password) => {
    try {

      const response = await requestFaker('POST', `oauth`, { username, password });

      if (response.status === 200) {
        const params = await response.json();

        const { access_token } = params;

        const user = jwt_decode(access_token);

        setUser(user.conta);

        localStorage.setItem('[@auth-token]', access_token);
        localStorage.setItem('[@auth-user]', JSON.stringify(user.conta));

        setIsAuthenticated(true);

        return true;
      }
      return false;
    } catch (error) {
      return false
    }
  }

  const signOut = () => {
    localStorage.clear();
    window.location.href = '/login';
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;