import { getApps, initializeApp } from "firebase/app";
import {
  browserSessionPersistence,
  getAuth,
  setPersistence,
} from "firebase/auth";

// Configuração pública do aplicativo; a autorização depende das regras e do token.
const app =
  getApps()[0] ??
  initializeApp({
    projectId: "homephysio-virtualter",
    appId: "1:103403442423:web:3ca980868a72dd620203f2",
    apiKey: "AIzaSyDS3mn_hGEaOnqm8SXwmNpF67UTN5HBgBE",
    authDomain: "homephysio-virtualter.firebaseapp.com",
  });
export const auth = getAuth(app);
// Localiza os e-mails de verificação e recuperação enviados por este cliente.
auth.languageCode = "pt-BR";

export const persistenceReady = setPersistence(auth, browserSessionPersistence);

export {
  createUserWithEmailAndPassword,
  onIdTokenChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
