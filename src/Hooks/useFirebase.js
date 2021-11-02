import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import authInitialization from "../firebase/firebase.init";
authInitialization();

const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('')
    //google sign in
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
    }


    const userSignUp = (email, password, displayName) => {
        createUserWithEmailAndPassword(auth, email, password, displayName)
            .then((result) => {
                const user = result.user;
                console.log(user)
                setUser(user);
                updateDisplayName(displayName);
            })
            .catch((error) => {

                const errorMessage = error.message;
                setError(errorMessage);
            });


    }


    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        // .then((result) => {
        //     const user = result.user;
        //     setUser(user)
        //     console.log(user)
        // })
    }

    //update user name 
    const updateDisplayName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
        })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({});
            }
            setIsLoading(false)

        })
    }, []);

    //sign out
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({});
        })
            .finally(() => setIsLoading(false));
    }
    return {
        user,
        userSignUp,
        userLogin,
        signInUsingGoogle,
        logOut,
        updateDisplayName,
        isLoading,
        setIsLoading,
        setUser,
        error,
        setError
    }

}
export default useFirebase;