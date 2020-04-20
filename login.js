var database = firebase.database();


function writeuser() {
  //var reg = /^([A-Za-z0-9_-.])+@([A-Za-z0-9_-.])+.([A-Za-z]{2,4})$/;
  var name=document.getElementById("name").value;
      var email=document.getElementById("email").value;
  var mob=document.getElementById("mobile").value;

var sub1=document.getElementById("subject").value;
    var mssg=document.getElementById("message").value;

    console.log(name+" "+mssg);
//if (name==null || name==""){  
//  window.alert("Name can't be blank");  
//  return false;  
//}
//else if(email==null || email=="")
//{
//  window.alert("Email can't be Blank");
//  return false;
//}
//else if(mob.length!=10){  
//  window.alert("Please enter valid mobile no.");  
//  return false;  
//  }  
//  
 
var database = firebase.database();
console.log(database);

var data= firebase.database().ref('PRO/');
data.child(mob).set({
    Name:name,
    Email:email,
    Mobile:mob,
    Category:sub1,
    Requirements:mssg,
    });
    window.alert("DONE !!");
}
