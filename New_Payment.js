function reloadPaymentInformation() {
    const paymentData = JSON.parse(localStorage.getItem("payment")) || [];
    document.getElementById("payerFirstName").value = paymentData.payerFirstName;
    document.getElementById("payerLastName").value = paymentData.payerLastName;
    document.getElementById("payerAddressLine1").value = paymentData.payerAddressLine1;
    document.getElementById("payerAddressLine2").value = paymentData.payerAddressLine2;
    document.getElementById("payerCountryName").value = paymentData.payerCountryName;
    document.getElementById("payerEmailAddress").value = paymentData.payerEmailAddress;
    document.getElementById("payerSameAddress").value = paymentData.payerSameAddress;
    document.getElementById("payerSaveInformation").value = paymentData.payerSaveInformation;
    document.getElementById("payerCreditCardName").value = paymentData.payerCreditCardName;
    document.getElementById("payerCreditCardNumber").value = paymentData.payerCreditCardNumber;
    document.getElementById("payerExpirationDate").value = paymentData.payerExpirationDate;
    document.getElementById("payerSecurityCode").value = paymentData.payerSecurityCode;
}

function collectPaymentInformation() {
    const newPaymentData = {
        "payerFirstName": document.getElementById("payerFirstName").value,
        "payerLastName": document.getElementById("payerLastName").value,        
        "payerAddressLine1": document.getElementById("payerAddressLine1").value,
        "payerAddressLine2": document.getElementById("payerAddressLine2").value,
        "payerCountryName": document.getElementById("payerCountryName").value,
        "payerEmailAddress": document.getElementById("payerEmailAddress").value,
        "payerSameAddress": document.getElementById("payerSameAddress").value,//value: 'on'
        "payerSaveInformation": document.getElementById("payerSaveInformation").value,//value: 'on'
        "payerCreditCardName": document.getElementById("payerCreditCardName").value,
        "payerCreditCardNumber": document.getElementById("payerCreditCardNumber").value,
        "payerExpirationDate": document.getElementById("payerExpirationDate").value,//YYYY-MM e.g. '2024-12'
        "payerSecurityCode": document.getElementById("payerSecurityCode").value
    };
    localStorage.removeItem("payment");
    localStorage.setItem("payment", JSON.stringify(newPaymentData));
}

function moveToConfirm() {
    collectPaymentInformation();
    location.href = 'New_Confirm.html';
}