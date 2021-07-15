import firebase from "firebase";
import { ref } from "vue";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoF5N5ZmRakX12oUfspLLtavmzkLsTi54",
  authDomain: "uiseven.firebaseapp.com",
  databaseURL: "https://uiseven-default-rtdb.firebaseio.com",
  projectId: "uiseven",
  storageBucket: "uiseven.appspot.com",
  messagingSenderId: "101729539499",
  appId: "1:101729539499:web:c30a5f77c78dfaab28aeee",
  measurementId: "G-37EVHM3DQ7"
};

export const user = ref(null);
export const initialised = ref(false);

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

auth.onAuthStateChanged((u) => {
  user.value = u;
  initialised.value = true;
});

export async function logout() {
  console.log("logout 01");
  await auth.signOut();
  console.log("logout 02");
}

export async function google() {
  await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
}

export function useSignup() {
  console.log("Register 01");
  const email = ref("");
  const password = ref("");

  async function signup() {
    if (email.value == "" || password.value == "") return;

    const creds = await auth.createUserWithEmailAndPassword(
      email.value,
      password.value
    );
    console.log("Register 02");
    if (!creds.user) throw Error("Signup failed");

    user.value = creds.user;
  }

  return {
    email,
    password,
    signup,
  };
}

export function useLogin() {
  console.log("Login 01");
  const email = ref("");
  const password = ref("");

  function login() {
    console.log("Login 02");
    const resp = auth.signInWithEmailAndPassword(
      email.value,
      password.value
    );
    console.log("Login 03");
    if (!resp.user) throw Error("No user");
    console.log("Login 04" + ' - ' + user.value);
    user.value = resp.user;
  }

  return {
    email,
    password,
    login,
  };
}