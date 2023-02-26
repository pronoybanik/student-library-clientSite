
import { getAuth, createUserWithEmailAndPassword ,onAuthStateChanged,signInWithEmailAndPassword} from 'firebase/auth'
import { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    // const [user, setUser] = useState(null)
    const user ={name:'emon'}
    const [loading, setLoading] = useState(true)

    const createNewuser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }



    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, currentUsers => {
            // setUser(currentUsers)
            setLoading(false)
        })

        return () => Unsubscribe()

    }, [])
 
     
const authInfo={
        user,
        loading,
        login,
     createNewuser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;