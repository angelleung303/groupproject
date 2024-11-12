function reloadDeliveryInformation() {
    const newDeliveryData = JSON.parse(localStorage.getItem("delivery")) || [];
    if (newDeliveryData.deliveryOption.value = "pickup") {
        document.getElementById("pickup").value = 'on';
        document.getElementById("mail").value = 'off';
    }
    if (newDeliveryData.deliveryOption.value = "mail") {
        document.getElementById("pickup").value = 'off';
        document.getElementById("mail").value = 'on';
    }
    document.getElementById("deliveryAddress").value = newDeliveryData.deliveryAddress;
}

function collectDeliveryInformation() {
    let deliveryOption='';
    let pickup=document.getElementById("pickup").value;
    let mail=document.getElementById("mail").value;
    if (pickup=='on'){
        deliveryOption = 'pickup';
    }
    if (mail=='on'){
        deliveryOption = 'mail';
    }

    const newDeliveryData = {
        // "deliveryOption": document.querySelector('input[name="deliveryOption"]:checked').value,
        "deliveryOption": deliveryOption,
        "deliveryAddress": document.getElementById("deliveryAddress").value
    }
    localStorage.removeItem("delivery");
    localStorage.setItem("delivery", JSON.stringify(newDeliveryData));
}

function moveToPayment() {
    collectDeliveryInformation();
    location.href = 'New_Payment.html';
}