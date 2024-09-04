const cartItems = document.querySelectorAll('.cart-item');
const totalAmount = document.querySelector('.total-amount');

cartItems.forEach(item => {
    const decreaseButton = item.querySelector('.decrease');
    const increaseButton = item.querySelector('.increase');
    const quantityInput = item.querySelector('.quantity');
    const itemTotal = item.querySelector('.item-total');
    const removeButton = item.querySelector('.remove-item');

    const price = parseFloat(item.querySelector('p').innerText.replace('₹', '').replace(',', ''));

    decreaseButton.addEventListener('click', () => {
        if (quantityInput.value > 1) {
            quantityInput.value--;
            updateItemTotal();
        }
    });

    increaseButton.addEventListener('click', () => {
        quantityInput.value++;
        updateItemTotal();
    });

    quantityInput.addEventListener('input', updateItemTotal);

    removeButton.addEventListener('click', () => {
        item.remove();
        updateTotalAmount();
    });

    function updateItemTotal() {
        const quantity = quantityInput.value;
        const total = price * quantity;
        itemTotal.innerText = `₹${total.toFixed(2)}`;
        updateTotalAmount();
    }

    function updateTotalAmount() {
        let total = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            const itemTotal = parseFloat(item.querySelector('.item-total').innerText.replace('₹', '').replace(',', ''));
            total += itemTotal;
        });
        totalAmount.innerText = `Total: ₹${total.toFixed(2)}`;
    }
});

updateTotalAmount();
document.addEventListener('DOMContentLoaded', () => {
    const checkoutButton = document.getElementById('checkout-btn');
    const cartItems = document.querySelectorAll('.cart-item');
    const totalAmount = document.querySelector('.total-amount');

    checkoutButton.addEventListener('click', () => {
        if (cartItems.length === 0) {
            alert('Your cart is empty. Add items to the cart before proceeding.');
            return;
        }

        // You can also add more validations here if needed (e.g., validate quantities)

        // Redirect to the checkout page
        window.location.href = 'checkout.html';
    });
});
