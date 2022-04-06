# Getting Started with Create React App


### Steps to use firebase
- Create a project on console.firebase.google.com
- npm install firebase 
- Register Web app in firebase
- copy firebase init with config from firebase project settings into a file firebase.init.js
- export default app from firebase.init.js
- import getAuth from firebase/auth and create const auth = getAuth(app) in App.js
- import app firebase init.js into your app.js
- turn on google authentication (firebase >authentication> enable google sign in)
- create google provider
- use signInWithPopup and pass auth and provider
- handle .then (if successful) and catch error (if error) 