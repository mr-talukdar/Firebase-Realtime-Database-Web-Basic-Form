const Name = document.getElementById('Name');
const address = document.getElementById('Address');
const landmark = document.getElementById('Landmark');
const pin = document.getElementById('Pincode');
const PhoneNo = document.getElementById('PhoneNo');
const addBtn = document.getElementById('addBtn');


//Reference to the Database 
const database = firebase.database();

//On Click Event Created for the Add button click on the Client Side i.e the button here submits the data and adds a snapshot to the Realtime DB 
addBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    alert("Your Order Has Been Succesfully Placed")
    database.ref('/users/'+ Name.value).set({
        address:address.value,
        landmark:landmark.value,
        pin:pin.value,
        phone:PhoneNo.value
    });

})