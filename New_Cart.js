const tbodyCart = document.querySelector(".tbodyCart");

function displayCartItemsToTable() {
    let indexNo = 1;
    let cartTotal = 0;
    const items = JSON.parse(localStorage.getItem("cart"));
    items.forEach((item) => {
        const cartItem = document.createElement("tr");
        // cartItem.className = "cartItem";
        cartItem.innerHTML = `
            <td class="noColumn">${indexNo}</td>
            <td>${item.itemName}</td>
            <td class="priceColumn">$${item.itemPrice}</td>
            <td class="quantityColumn">
                <button type=button" class="btn btn-success" onclick="increaseQuantity('${item.itemName}')">&#43</button>
                    <br>${item.itemQuantity}<br>
                <button type=button" class="btn btn-danger" onclick="decreaseQuantity('${item.itemName}')">&#8722</button>
            </td>
            <td class="totalColumn">$${item.itemPrice * item.itemQuantity}</td>
            <td class="deleteColumn">
                <button type="button" class="btn-close" onclick="removeFromCart('${item.itemName}')"></button> 
                </td>
            `;
        tbodyCart.appendChild(cartItem);
        cartTotal += item.itemPrice * item.itemQuantity;
        indexNo++;
    });
    //Total
    const cartTotalRow = document.createElement("tr");
    cartTotalRow.innerHTML = `<th colspan="4">Grand Total</th><th class="priceColumn">$${cartTotal}</td><th></th>`;
    tbodyCart.appendChild(cartTotalRow);
}

//Add Quantity In Existing Item
function increaseQuantity(oldItemName) {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemIndex = cartData.findIndex(item => item.itemName === oldItemName);
    if (cartItemIndex !== -1) {
        cartData[cartItemIndex].itemQuantity += 1;
        localStorage.removeItem("cart");
        localStorage.setItem("cart", JSON.stringify(cartData));
        location.reload();//Refresh page
    }
}

//Decrease Quantity In Existing Item
function decreaseQuantity(oldItemName) {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemIndex = cartData.findIndex(item => item.itemName === oldItemName);
    if (cartItemIndex !== -1) {
        cartData[cartItemIndex].itemQuantity -= 1;
        if (cartData[cartItemIndex].itemQuantity < 1) {
            cartData.splice(cartItemIndex, 1);
        }
        localStorage.removeItem("cart");
        localStorage.setItem("cart", JSON.stringify(cartData));
        location.reload();//Refresh page
    }
}

//Delete Existing Item
function removeFromCart(oldItemName) {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemIndex = cartData.findIndex(item => item.itemName === oldItemName);
    if (cartItemIndex !== -1) {
        cartData.splice(cartItemIndex, 1);
        localStorage.removeItem("cart");
        localStorage.setItem("cart", JSON.stringify(cartData));
        location.reload();//Refresh page
    }
}