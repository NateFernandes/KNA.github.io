let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

let countItem = items.length;
let itemActive = 0;
let refreshInterval = setInterval(() => {
    next.click();
}, 5000); // Initialize auto-switching when the page loads

function showSlider() {
    // Remove active class from currently active item and thumbnail
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    if (itemActiveOld) itemActiveOld.classList.remove('active');
    if (thumbnailActiveOld) thumbnailActiveOld.classList.remove('active');

    // Activate new item and corresponding thumbnail
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
}

// Event for next button click
next.onclick = function() {
    itemActive = (itemActive + 1) % countItem; // Cycle to next item
    showSlider();
}

// Event for previous button click
prev.onclick = function() {
    itemActive = (itemActive - 1 + countItem) % countItem; // Cycle to previous item
    showSlider();
}

// Function to stop auto-switching
function stopAutoSwitch() {
    clearInterval(refreshInterval); // Clear the interval to stop auto-switching
}

// Event listener for thumbnail clicks
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index; // Update active item index
        showSlider();
        stopAutoSwitch(); // Stop auto-switching when a thumbnail is clicked
    });
});
