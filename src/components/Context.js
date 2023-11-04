import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import { auth } from "../firebase";

export const userAuthContext = createContext()

export function UserAuthContextProvider({ children }) {
    const navigate=useNavigate();
    const CreateUser = (email, password, username) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((data) => {
                updateProfile(data.user, {
                    displayName: username
                })
                navigate("/login")
            });
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password).then(data=>{navigate("/pomodoro")})
    }
    const logOut = () => {
        reactLocalStorage.setObject('user',null);
        return signOut(auth).then(data=> navigate("/"))
    }
    useEffect(() => {
       const subscriber= onAuthStateChanged(auth,currentUser=>{
        if(currentUser){
            const {displayName,email}=currentUser;
            reactLocalStorage.setObject('user',{displayName,email})
        }else{
            reactLocalStorage.setObject('user',null)
        }
       })
        return subscriber;
    })
    return <userAuthContext.Provider value={{ login, CreateUser, logOut }}>{children}</userAuthContext.Provider>
}

export function useUserAuth() {
    return useContext(userAuthContext);
}

