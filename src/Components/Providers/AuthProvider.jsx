  import { createContext, useEffect, useState } from "react";
  import PropTypes from "prop-types";
  import useAxiosPublic from "../../Hooks/useAxiosPublic";
  
  export const AuthContext = createContext();

  
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();
  
    
    // ! User Observer
    useEffect(() => {
      setLoading(true);
      const currentUser = true;
        const userInfo = { currentUser };
        setUser(currentUser);
  
        // create Jwt token
        if (currentUser) {
          axiosPublic.post("/jwt", userInfo).then((res) => {
            if (res.data.token) {
              localStorage.setItem("access_token", res.data.token);
              setLoading(false);
            }
          });
        } else {
          localStorage.removeItem("access_token");
          setLoading(false);
        }

    }, []);
  
    const authInfo = {
      user,
      loading,

    };
  
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
  };
  
  AuthProvider.propTypes = {
    children: PropTypes.node,
  };
  
  export default AuthProvider;
  