import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../firebase/firebase.config";


export const UserContext = createContext(null);


const AuthProviders = ({ children }) => {

    // create user with email & password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    }

    // login with email & password
    const loginWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        createUser,
        loginWithEmailPassword,
    }

    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    )
};

export default AuthProviders;