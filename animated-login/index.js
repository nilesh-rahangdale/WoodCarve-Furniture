const firebaseConfig = {
  apiKey: "AIzaSyDAAhJ8gEJqf_IrGXu3XCB29lOb7OT1yw8",
  authDomain: "kunal-59bf3.firebaseapp.com",
  databaseURL: "https://kunal-59bf3-default-rtdb.firebaseio.com",
  projectId: "kunal-59bf3",
  storageBucket: "kunal-59bf3.appspot.com",
  messagingSenderId: "371380172874",
  appId: "1:371380172874:web:9ecf1bb1c54c12f5800eb3",
  measurementId: "G-MJFB8S0PNZ"
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
