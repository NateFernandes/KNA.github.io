let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');


let countItem = items.length;
let itemActive = 0;
let refreshInterval = setInterval(() => {
    next.click();
}, 7000); // Initialize auto-switching when the page loads

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
    stopAutoSwitch(); // Stops the auto-run slideshow
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


document.getElementById('menu-icon').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});



/*----------------- Popup confirmation for form ----------------------*/ 

let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    form.reset();   /*--------Resets the form fields ---------*/ 
    popup.classList.remove("open-popup");
}


function validateAndSubmitForm() {
    const fullName = form['Full Name'].value;
    const emailAddress = form['Email Address'].value;
    const mobileNumber = form['Mobile Number'].value;
    const subject = form['Subject'].value;
    const message = form['Your Message'].value;

    // Perform validation checks here
    if (fullName.trim() === '' || emailAddress.trim() === '' || mobileNumber.trim() === '' || subject.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Validate email format using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailAddress)) {
        alert("Please enter a valid email address.");
        return;
    }

    // If all checks passed, reset form fields and open the popup
    openPopup();
}


form.addEventListener('submit', e => {
    e.preventDefault();
    // Call the merged validation and submission function
    validateAndSubmitForm();
});
