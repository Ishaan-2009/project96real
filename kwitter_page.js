var firebaseConfig = {
    apiKey: "AIzaSyAJdt2KGWP7pxw_wUhYvuosQLk_hwuQQc4",
    authDomain: "let-s-chat-443b3.firebaseapp.com",
    databaseURL: "https://let-s-chat-443b3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "let-s-chat-443b3",
    storageBucket: "let-s-chat-443b3.appspot.com",
    messagingSenderId: "647759617452",
    appId: "1:647759617452:web:5f1bad952a5c8ad4916e09"
  };

  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
  }
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}