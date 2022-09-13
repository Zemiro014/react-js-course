import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { }
})

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null);
    const history = useHistory()
    const userIsLoggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token)
    }
    const logoutHandler = () => {
        setToken(null)
        history.push('/')
    }

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    }

    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;