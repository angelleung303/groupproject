function reloadContactInformation() {
    const contactData = JSON.parse(localStorage.getItem("contact")) || [];
    document.getElementById("firstName").value = contactData.firstName;
    document.getElementById("lastName").value = contactData.lastName;
    document.getElementById("phoneNumber").value = contactData.phoneNumber;
    document.getElementById("emailAddress").value = contactData.emailAddress;
}

function collectContactInformation() {
    const newContactData = {
        "firstName": document.getElementById("firstName").value,
        "lastName": document.getElementById("lastName").value,
        "phoneNumber": document.getElementById("phoneNumber").value,
        "emailAddress": document.getElementById("emailAddress").value
    };
    localStorage.removeItem("contact");
    localStorage.setItem("contact", JSON.stringify(newContactData));
}

function moveToDelivery() {
    collectContactInformation();
    location.href='New_Delivery.html';
}