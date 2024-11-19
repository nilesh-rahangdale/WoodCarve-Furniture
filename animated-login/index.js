// const firebaseConfig = {
//   apiKey: "AIzaSyDAAhJ8gEJqf_IrGXu3XCB29lOb7OT1yw8",
//   authDomain: "kunal-59bf3.firebaseapp.com",
//   databaseURL: "https://niyora-auth-default-rtdb.firebaseio.com",
//   projectId: "kunal-59bf3",
//   storageBucket: "kunal-59bf3.appspot.com",
//   messagingSenderId: "371380172874",
//   appId: "1:371380172874:web:9ecf1bb1c54c12f5800eb3",
//   measurementId: "G-MJFB8S0PNZ"
// };
const firebaseConfig = {
  apiKey: "AIzaSyCRiFQ60U51xKM04A_ulgFHyAhRwNFd3V0",
  authDomain: "niyora-auth.firebaseapp.com",
  databaseURL: "https://niyora-auth-default-rtdb.firebaseio.com",
  projectId: "niyora-auth",
  storageBucket: "niyora-auth.firebasestorage.app",
  messagingSenderId: "512446739296",
  appId: "1:512446739296:web:e39036e796c2820bb5e405",
  measurementId: "G-7EE5GV6XE3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth();
const database = firebase.database();

// Set up our register function
function register() {
  // Get all our input fields
  const fullName = document.getElementById('signup_full_name').value;
  const email = document.getElementById('signup_email').value;
  const password = document.getElementById('signup_password').value;

  // Validate input fields
  if (!validateEmail(email) || !validatePassword(password)) {
      alert('Invalid email or password');
      return;
  }

  // Move on with Auth
  auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
          // Add this user to Firebase Database
          const user = auth.currentUser;
          const userRef = database.ref('users/' + user.uid);

          // Create User data
          const userData = {
              fullName: fullName,
              email: email,
              lastLogin: Date.now()
          };

          // Push to Firebase Database
          userRef.set(userData);

          // Done
          alert('User created successfully!');
      })
      .catch(error => {
          // Firebase will use this to alert of its errors
          console.error(error.message);
          alert(error.message);
      });
}

// Set up our login function
function login() {
  // Get all our input fields
  const email = document.getElementById('signin_email').value;
  const password = document.getElementById('signin_password').value;

  // Validate input fields
  if (!validateEmail(email) || !validatePassword(password)) {
      alert('Invalid email or password');
      return;
  }

  auth.signInWithEmailAndPassword(email, password)
      .then(() => {
          // Redirect to homepage
          window.location.href = '../index.html';
      })
      .catch(error => {
          // Firebase will use this to alert of its errors
          console.error(error.message);
          alert(error.message);
      });
}

// Validate Functions
function validateEmail(email) {
  const expression = /^[^@]+@\w+(\.\w+)+\w$/;
  return expression.test(String(email).toLowerCase());
}

function validatePassword(password) {
  return password.length >= 6;
}



// // my auth
// <script type="module">
//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyCRiFQ60U51xKM04A_ulgFHyAhRwNFd3V0",
//     authDomain: "niyora-auth.firebaseapp.com",
//     projectId: "niyora-auth",
//     storageBucket: "niyora-auth.firebasestorage.app",
//     messagingSenderId: "512446739296",
//     appId: "1:512446739296:web:e39036e796c2820bb5e405",
//     measurementId: "G-7EE5GV6XE3"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
// </script>