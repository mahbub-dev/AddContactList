/*
        Dom Selection
        addEventListener
        Basic validation
        Creating Element
        Append
 */
const Name = document.getElementById('Name');
const Mobile = document.getElementById('Mobile');
const Address = document.getElementById('Address');
const btn = document.getElementById('btn');
const AddressList = document.getElementById('Addresslist');
const print = document.getElementById('print')
const content = document.getElementById('content')
const form = document.getElementById('form');
let counter = 0;

btn.addEventListener('click', function(d){
        d.preventDefault();

        let namecheck = (Name.value + '').replace(/\s+/g, '').trim();
        let mobileCheck = (Mobile.value + '').replace(/\s+/g, '').trim();
        let addressCheck = (Address.value + '').replace(/\s+/g, '').trim(); 
        

        if (namecheck == "" && mobileCheck == "" && addressCheck == "") {
                alert("Please give the following information")
        }else if(namecheck != '' && mobileCheck == '' && addressCheck == "") {
                alert('Please enter Mobile and Address');
        }else if ((namecheck != '' || namecheck == '') && mobileCheck != '' && addressCheck == "") {
                alert('Please fill all the input')
        }else if ((namecheck != '' || namecheck == '') && mobileCheck == '' && addressCheck != "") {
                alert('Please fill all the input');
        } else{
               const newRow = document.createElement('tr') ;

        //creating new title 

                const newSerial = document.createElement('th');
                newSerial.innerHTML = counter += 1;
                newRow.appendChild(newSerial);
                
                const newTitle = document.createElement('td');
                newTitle.innerHTML = Name.value;
                newRow.appendChild(newTitle);

                const newAuthor = document.createElement('td');
                newAuthor.innerHTML = Mobile.value;
                newRow.appendChild(newAuthor);

                const newYear = document.createElement('td');
                newYear.innerHTML = Address.value;
                newRow.appendChild(newYear);

                AddressList.appendChild(newRow);
        }
        Name.value = '';
        Mobile.value = '';
        Address.value = '';
})
print.addEventListener('click', (e) => {
        e.preventDefault()
        form.style.display ="none";
        alert('Do you want to print?');
        window.print();
        
        
})


