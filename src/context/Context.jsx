import { createContext, useContext, useState } from "react";
import { auth } from "../firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { useEffect } from "react";


const BikeyaContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

export const useBikeya = () => useContext(BikeyaContext);

export const BikeyaProvider = (props) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  // signup user
  const signupUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  // signin user
  const signinUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  //signin with google account
  const signinWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };

  const  logOut=()=> signOut(auth);


  let isLoggedIn = user ? true : false;
  return (
    <BikeyaContext.Provider
      value={{ signupUser, isLoggedIn, signinUser, signinWithGoogle, logOut, user}}
    >
      {props.children}
    </BikeyaContext.Provider>
  );
};
