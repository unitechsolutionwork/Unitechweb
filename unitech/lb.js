const firebaseConfig = {
    apiKey: "AIzaSyCInodaqP83zqPHTArL6mI_FhP8WWnSbZI",
    authDomain: "unitechform.firebaseapp.com",
    databaseURL: "https://unitechform-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "unitechform",
    storageBucket: "unitechform.appspot.com",
    messagingSenderId: "265592599229",
    appId: "1:265592599229:web:80824ee5a9b7b0e6d3bdd4"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var unitechFormDB = firebase.database().ref("unitechform");

document.getElementById("unitechform").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("unitechForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};