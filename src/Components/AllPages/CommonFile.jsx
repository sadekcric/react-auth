import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const CommonFile = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sing up
  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign Out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Gmail Login
  const googleProvider = new GoogleAuthProvider();
  const GmailLogin = () => {
    setLoading(true);

    return signInWithPopup(auth, googleProvider);
  };

  // Github Login
  const githubProvider = new GithubAuthProvider();
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // Twitter Login
  const twitterProvider = new TwitterAuthProvider();
  const twitterLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, twitterProvider);
  };

  // Auth Change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const info = {
    register,
    login,
    user,
    setUser,
    logOut,
    loading,
    GmailLogin,
    githubLogin,
    twitterLogin,
  };

  return (
    <AuthContext.Provider value={info}>
      <div>{children}</div>
    </AuthContext.Provider>
  );
};

export default CommonFile;

CommonFile.propTypes = {
  children: PropTypes.node,
};
