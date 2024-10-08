// useAuthService.ts
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { auth } from './firebaseConnection';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

import { useNavigate } from 'react-router-dom';

// Service de Autenticação de Usuário Utilizando Firebase

const useAuthService = () => {
  const { handleInfoUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const registerUser = async (email: string, password: string) => {
      await createUserWithEmailAndPassword(auth, email, password)
      .then(async (user) => {

        handleInfoUser({
          email: email,
          uid: user.user.uid,
        });

        navigate("/", {replace: true});
      })
      .catch((error) => {
        console.log(error);
      })
  };

  const signInUser = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password)
    .then((user) => {

      handleInfoUser({
        email: email,
        uid: user.user.uid,
      });

      navigate("/", {replace: true});
    })
    .catch((error) => {
      console.log(error);
    })
};

  const signOutUser = async () => {
    await signOut(auth)
  };

  return {
    registerUser,
    signInUser,
    signOutUser,
  };
};

export default useAuthService;
