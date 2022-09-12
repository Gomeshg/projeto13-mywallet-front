import { useContext, useState, createContext, useEffect } from "react";

export const AuthContext = createContext({});

export function AuthProvider(props) {
  const [session, setSession] = useState({});
  // const [updateID, setUpdateID] = useState(null);
  const [updateCash, setUpdateCash] = useState(null);
  const [updateDescription, setUpdateDescription] = useState(null);
  const [updateID, setUpdateID] = useState(null);

  useEffect(() => {
    const userStorage = localStorage.getItem("session");
    if (userStorage) {
      setSession(JSON.parse(userStorage));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        session,
        setSession,
        updateCash,
        setUpdateCash,
        updateDescription,
        setUpdateDescription,
        updateID,
        setUpdateID,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export const useSession = () => useContext(AuthContext);
