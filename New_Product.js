//Insert New Item
function addToCart(newItemName, newItemPrice) {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemIndex = cartData.findIndex(item => item.itemName === newItemName);
    if (cartItemIndex !== -1) {//if existing record is found
        cartData[cartItemIndex].itemQuantity += 1;//update quantity
        localStorage.removeItem("cart");
        localStorage.setItem("cart", JSON.stringify(cartData));
    } else {//if no record found, create a record
        const newItem={itemName: newItemName,
            itemPrice: newItemPrice,
            itemQuantity: 1
        }
        cartData.push(newItem);
        cartData.sort((a, b) => a.itemName - b.itemName);
        localStorage.removeItem("cart");
        localStorage.setItem("cart", JSON.stringify(cartData));
    }
    myFunction();
}

function myFunction() {
    alert("The item is added to cart");
    }

//Update Existing Item Quantity

//Delete Existing Item
function removeFromCart(oldItemName){
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemIndex = cartData.findIndex(item => item.itemName === oldItemName);
    if (cartItemIndex !== -1){
        cartData.splice(cartItemIndex, 1);
        localStorage.removeItem("cart");
        localStorage.setItem("cart", JSON.stringify(cartData));
    }
}
