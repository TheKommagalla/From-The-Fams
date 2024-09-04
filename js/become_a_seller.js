function submitSeller() {
    // Get form values
    const storeName = document.getElementById('store-name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const address = document.getElementById('address').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const sellerError = document.getElementById('seller-error');

    // Simple validation
    if (storeName === "" || email === "" || phoneNumber === "" || address === "" || category === "") {
        sellerError.textContent = "Please fill in all the fields.";
    } else {
        sellerError.textContent = "";
        alert("Seller application submitted successfully!");
        // You can send the data to your server for further processing here
    }
}