import './App.css';
import { auth } from './firebase.init'
import { signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { useState } from 'react';



function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
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

  const facebookSignInBTN = () => {
    signInWithPopup(auth, facebookProvider)
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
        user.email ? <button onClick={handleSignOutBTN}>Sign Out</button> : <div className='all-btn'>
          <button className='googleIcon' onClick={googleSignInBTN}> <img src="https://w7.pngwing.com/pngs/937/156/png-transparent-google-logo-google-search-google-account-redes-search-engine-optimization-text-service.png" alt="googleImage" /> <p>Google Sign In</p></button>
          <button className='facebookIcon' onClick={facebookSignInBTN}><img src="https://pnggrid.com/wp-content/uploads/2021/07/Facebook-Logo-Square-768x768.png" alt="" /> <p>Facebook Sign In</p></button>
          <button className='githubIcon' onClick={githubSignInBTN}><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" /> <p>Github Sign In</p></button>
        </div>
      }
      <h2>{user.displayName}</h2>
      <p>{user.email}</p>
      <img src={user.photoURL} alt="" />

    </div>
  );
}

export default App;
