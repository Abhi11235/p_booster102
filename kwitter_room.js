
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBEIZ4Y48cEjNIgbpY4-h035G2L3y9V-d8",
      authDomain: "practice-3b5ce.firebaseapp.com",
      databaseURL: "https://practice-3b5ce-default-rtdb.firebaseio.com",
      projectId: "practice-3b5ce",
      storageBucket: "practice-3b5ce.appspot.com",
      messagingSenderId: "448167839265",
      appId: "1:448167839265:web:418be4b4ade9f1fb630560"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   user_name = localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome " + user_name +"!";

function addRoom()
{
 room_name=document.getElementById("room_name").value;

 firebase.database().ref("/").child(room_name).update({
      pupose:"adding room name"
 });

 localStorage.setItem("room_name",room_name);
 
 window.location="kwitter_page.html";
}






function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row="<div class'room_name' id="+Room_names+"onclick='redirectToRoomNamme(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
}});});}
getData();

function logout() {    
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}



