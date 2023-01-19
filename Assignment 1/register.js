let customer = [];

let inputNameFirst = document.getElementById("firstName");
let inputNameLast = document.getElementById("lastName");
let inputAge = document.getElementById("age");
let inputAddress = document.getElementById("address");
let inputEmail = document.getElementById("email");
let inputPhone = document.getElementById("phone");
let inputcolor = document.getElementById("color")
let inputPayment = document.getElementById("payment")


//constructor
let c=0;
function CreateCustomer(nameFirst,nameLast,age,address,email,phone,color,payment){
    this.nameFirst = nameFirst;
    this.nameLast = nameLast;
    this.age = age;
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.color = color;
    this.payment = payment;
}


function register(){
    let newCustomer = new CreateCustomer(inputNameFirst.value,inputNameLast.value,inputAge.value,inputAddress.value,inputEmail.value,inputPhone.value,inputcolor.value,inputPayment.value);

    customer.push(newCustomer);
    console.log(customer)

    clearForm();
}

function clearForm(){
    inputNameFirst.value = "";
    inputNameLast.value = "";
    inputAge.value = "";
    inputAddress.value = "";
    inputEmail.value = "";
    inputPhone.value = "";
    inputcolor.value = "";
    inputPayment.value = "";

}
