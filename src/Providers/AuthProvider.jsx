import { createContext, useEffect, useState } from "react";
import app from '../Firebase/Firebase.init'
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut, signInWithEmailAndPassword,} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider )
    }

    const logout = () => {
        return signOut(auth)
    }

  useEffect(  () => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('ovserb by onAuth state chnage', currentUser)
        setUser(currentUser)
        
    })
    return () => {unSubscribe()}
  }, [])

    const authInfo = {
        user,
        createUser,
        googleSignIn,
        login,
        logout,
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;