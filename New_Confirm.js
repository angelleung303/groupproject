const tbodyCart = document.querySelector(".tbodyCart");

function displayCartItemsToTable() {
    let indexNo = 1;
    let cartTotal = 0;
    const items = JSON.parse(localStorage.getItem("cart"));
    items.forEach((item) => {
        const cartItem = document.createElement("tr");
        cartItem.innerHTML = `
            <td class="noColumn">${indexNo}</td>
            <td>${item.itemName}</td>
            <td class="priceColumn">$${item.itemPrice}</td>
            <td class="quantityColumn">${item.itemQuantity}</td>
            <td class="totalColumn">$${item.itemPrice * item.itemQuantity}</td>
            `;
        tbodyCart.appendChild(cartItem);
        cartTotal += item.itemPrice * item.itemQuantity;
        indexNo++;
    });
    //Total
    const cartTotalRow = document.createElement("tr");
    cartTotalRow.innerHTML = `<th colspan="4">Grand Total</th><th class="priceColumn">$${cartTotal}</td>`;
    tbodyCart.appendChild(cartTotalRow);
}

function loadContactInformation() {
    const contactData = JSON.parse(localStorage.getItem("contact")) || [];
    document.getElementById("firstName").innerText = contactData.firstName;
    document.getElementById("lastName").innerText = contactData.lastName;
}

function loadDeliveryInformation() {
    const deliveryData = JSON.parse(localStorage.getItem("delivery")) || [];
    document.getElementById("deliveryOption").innerText = deliveryData.deliveryOption;
    document.getElementById("deliveryAddress").innerText = deliveryData.deliveryAddress;
}

function loadPaymentInformation() {
    const paymentData = JSON.parse(localStorage.getItem("payment")) || [];
    document.getElementById("payerFirstName").innerText = paymentData.payerFirstName;
    document.getElementById("payerLastName").innerText = paymentData.payerLastName;
    document.getElementById("payerAddressLine1").innerText = paymentData.payerAddressLine1;
    document.getElementById("payerAddressLine2").innerText = paymentData.payerAddressLine2;
    document.getElementById("payerCountryName").innerText = paymentData.payerCountryName;
    document.getElementById("payerEmailAddress").innerText = paymentData.payerEmailAddress;
    let YesNoPayerSameAddress=""
    if(paymentData.payerSameAddress=="on"){
        YesNoPayerSameAddress="Yes"
    }
    else{
        YesNoPayerSameAddress="No"
    }
    document.getElementById("payerSameAddress").innerText = YesNoPayerSameAddress;
    let YesNoPayerSaveInformation=""
    if(paymentData.payerSaveInformation=="on"){
        YesNoPayerSaveInformation="Yes"
    }
    else{
        YesNoPayerSaveInformation="No"
    }
    document.getElementById("payerSaveInformation").innerText = YesNoPayerSaveInformation;
    document.getElementById("payerCreditCardName").innerText = paymentData.payerCreditCardName;
    document.getElementById("payerCreditCardNumber").innerText = paymentData.payerCreditCardNumber;
    document.getElementById("payerExpirationDate").innerText = paymentData.payerExpirationDate;
    document.getElementById("payerSecurityCode").innerText = paymentData.payerSecurityCode;
}