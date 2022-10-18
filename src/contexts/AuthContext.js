import React, { useContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,
    updateProfile, signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged} from "firebase/auth";
import "../firebase";

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}){
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();

    useEffect(()=>{
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    },[]);


    //signup function
    async function signup(email, password, userName){

        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);

        //update profile
        await updateProfile(auth.currentUser,{displayName:userName})

        const user = auth.currentUser;
        setCurrentUser({
            ...user
        });
    }

    //login function
    function login(email, password){
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password);
    }

    //logout function
    function logout(){
        const auth = getAuth();
        return signOut();

    }

    const value ={
        currentUser,
        signup,
        login,
        logout
    };

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider >
    )

}