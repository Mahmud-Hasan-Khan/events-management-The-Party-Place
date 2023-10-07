import { createContext } from "react";

const UserContext = createContext(null);

const AuthProviders = ({ children }) => {


    const authInfo = {

    }

    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    )
};

export default AuthProviders;