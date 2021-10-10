var firebaseConfig = {
apiKey: "AIzaSyALcoCk_CLqLdxI0pfHX1_6tLl5Rua3j_s",
authDomain: "kwitter-d2028.firebaseapp.com",
databaseURL: "https://kwitter-d2028-default-rtdb.firebaseio.com",
projectId: "kwitter-d2028",
storageBucket: "kwitter-d2028.appspot.com",
messagingSenderId: "430237860811",
appId: "1:430237860811:web:aef721603e8fb486096c4e",
measurementId: "G-EZ0VMTPQKJ"
};  
firebase.initializeApp(firebaseConfig);
function addRoom()
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
});
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}
function getData()
{firebase.database().ref("/").on('value', function(snapshot)
{document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot)
{childKey  = childSnapshot.key;
Room_names = childKey;
console.log("Room Name-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
});});}
getData();
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}
function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="kwitter.html"
}