
import React, {useState, useContext, createContext} from 'react'
import { userAuthenticationService } from './../services/Authentication/UserAuthentication'
const authContext = createContext();

export const useProvideAuth = () => {
    const [user, setUser] = useState(null);

    const signin = cb => {
        // userAuthenticationService.signin should return promise
        // return userAuthenticationService.signin(() => {
        //     setUser("user");
        //     cb(); // action
        // });
        return userAuthenticationService.login(() => {
            debugger
            setUser("user");
            cb(); // action
        });

    };
  
    const signout = cb => {
      return userAuthenticationService.signout(() => {
        setUser(null);
        cb();
      });
    };
  
    return {
      user,
      signin,
      signout
    };
  }

export const useAuth = () => {
    return useContext(authContext);
}

const ProvideAuth = ({ children }) => {
    const auth = useProvideAuth();
    return (
      <authContext.Provider value={auth}>
        {children}
      </authContext.Provider>
    );
}

export default ProvideAuth