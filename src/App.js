import './App.css';
import app from './firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider } from "firebase/auth";
import { useState } from 'react';



const auth = getAuth(app);
function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const googleSignInBTN = () => {
    signInWithPopup(auth
      , googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const githubSignInBTN = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user)
      })
      .then(error => {
        console.log(error)
      })
  }
  const handleSignOutBTN = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch(error => {
        setUser({})
      })
  }
  return (
    <div className="App">
      {
        user.email ? <button onClick={handleSignOutBTN}>Sign Out</button> : <>
          <button onClick={googleSignInBTN}>Google Sign In</button>
          <button onClick={githubSignInBTN}>Github Sign In</button>
        </>
      }
      <h2>{user.displayName}</h2>
      <p>{user.email}</p>
      <img src={user.photoURL} alt="" />

    </div>
  );
}

export default App;
