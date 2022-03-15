import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPU0dC6JqWIcfMs2rnMfp2D4LHVpMSx9w",
  authDomain: "github-sign-in-76d9b.firebaseapp.com",
  projectId: "github-sign-in-76d9b",
  storageBucket: "github-sign-in-76d9b.appspot.com",
  messagingSenderId: "455653654629",
  appId: "1:455653654629:web:26b7f8e46517dc3832468c",
};
export const app = initializeApp(firebaseConfig);

export const authenticationService = getAuth(app);
