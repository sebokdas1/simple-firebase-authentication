import './App.css';
import app from './firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";



const auth = getAuth(app);
function App() {
  const provider = new GoogleAuthProvider();
  const handleSignInBTN = () => {
    signInWithPopup(auth
      , provider)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <div className="App">
      <button onClick={handleSignInBTN}>sign in</button>
    </div>
  );
}

export default App;
