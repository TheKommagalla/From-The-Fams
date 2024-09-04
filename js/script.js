 // Placeholder text array
 const placeholderTexts = [
    "Search for vegetables and more",
    "Search for fruits and more",
    "Search for groceries and more",
    "Search for dairy products and more"
];

let placeholderIndex = 0;
const searchInput = document.getElementById('search-input');

// Function to change placeholder text
function changePlaceholder() {
    placeholderIndex = (placeholderIndex + 1) % placeholderTexts.length;
    searchInput.setAttribute('placeholder', placeholderTexts[placeholderIndex]);
}

// Change placeholder every 3 seconds
setInterval(changePlaceholder, 3000);

// Modal open and close functionality
function openModal() {
    document.getElementById('locationModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('locationModal').style.display = 'none';
}

// Close modal when clicking outside the modal
window.onclick = function(event) {
    const modal = document.getElementById('locationModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
document.getElementById('detect-location-btn').addEventListener('click', function() {
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
} else {
    alert("Geolocation is not supported by this browser.");
}
});

function showPosition(position) {
const latitude = position.coords.latitude;
const longitude = position.coords.longitude;
let x= alert("Latitude: " + latitude + "\nLongitude: " + longitude);
console.log(`Latitude:${ latitude}`);
console.log(`Long:${longitude}`);
  // You can also display the location on the page or send it to the server
}

function showError(error) {
switch(error.code) {
    case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
    case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
    case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
    case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
}
}
// serach bar functionality
function searchItems() {
    const query = document.getElementById("search-input").value.toLowerCase();
    if(query) {
        alert("Searching for: " + query); // Simulate search result, replace with actual search logic
        // You can add AJAX or backend code to fetch and display results here.
    } else {
        alert("Please enter a search term.");
    }
}
