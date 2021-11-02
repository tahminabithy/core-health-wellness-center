import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";
const authInitialization = () => {
    initializeApp(firebaseConfig);
}
export default authInitialization;