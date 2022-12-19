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
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
function addRoom() {
    room_name = document.getElementById("room_name").value;
    //firebase.database().ref("/").child(room_name).update({
      //  purpose: "adding room name"
    //});
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room name - " + room_name);
row = "<div class = 'room_name' id = " + room_name + "onclick = 'redirectToRoomName(this.id)' >#" + room_name + "</div><hr>"
document.getElementById("output").innerHTML = row;
//End code
});});}
getData();
function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html"
}
