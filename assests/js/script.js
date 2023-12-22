// Define image data for each theme
const themeData = {
    'Theme Park': [
        { title: 'KRISHNA ART MUSEUM', imageUrl: './assests/images/Theme1.jpg' },
        { title: '5D THEATRE', imageUrl: './assests/images/Theme2.jpg' },
        { title: '3D SELFIE ZONE', imageUrl: './assests/images/Theme3.jpg' },
        { title: 'MIRROR MAZE', imageUrl: './assests/images/Theme4.jpg' },
        { title: 'HORROR THEME', imageUrl: './assests/images/Theme5.jpg' },
        { title: 'JUNGLE THEME', imageUrl: './assests/images/Theme6.jpg' },
        { title: 'KRISHNA GATHA', imageUrl: './assests/images/Theme7.jpg' },
    ],
    'Amusement Park': [
        { title: 'OCTOPUS', imageUrl: './assests/images/amusement1.jpg' },
        { title: 'BIG PENDULUM', imageUrl: './assests/images/amusement2.jpg' },
        { title: 'REPEAL FARE', imageUrl: './assests/images/amusement3.jpg' },
        { title: 'TOP SPRING', imageUrl: './assests/images/amusement4.jpg' },
        { title: 'FLYING CHAIR', imageUrl: './assests/images/amusement5.jpg' },
        { title: 'SURFER RIDE', imageUrl: './assests/images/amusement6.jpg' },
        { title: 'DRESSING CAR', imageUrl: './assests/images/amusement7.jpg' },
        { title: 'BOUNCY', imageUrl: './assests/images/amusement8.jpg' },
        { title: 'TRAMPOLINE - FIRST IN GUJARAT', imageUrl: './assests/images/amusement9.jpg' },
    ],
    'Resort': [
        { imageUrl: './assests/images/resort1.jpg' },
        { imageUrl: './assests/images/resort2.jpg' },
        { imageUrl: './assests/images/resort3.jpg' },
        { imageUrl: './assests/images/resort4.jpg' },
        { imageUrl: './assests/images/resort5.jpg' },
        { imageUrl: './assests/images/resort6.jpg' },
        { imageUrl: './assests/images/resort7.jpg' },
        { imageUrl: './assests/images/resort8.jpg' },
    ],
};

function openPopup(theme) {
    // Get the container for title and images
    const popupTitleContainer = document.getElementById("popupTitle");
    const popupImagesContainer = document.getElementById("popupImages");

    // Remove existing title and images
    popupTitleContainer.innerHTML = '';
    popupImagesContainer.innerHTML = '';

    // Set the title for the popup
    const popupTitle = document.createElement('h2');
    popupTitle.textContent = theme;
    popupTitleContainer.appendChild(popupTitle);

    // Create a grid container
    const gridContainer = document.createElement('div');
    gridContainer.className = 'image-grid';

    // Add images for the selected theme
    themeData[theme].forEach(data => {
        const imgElement = document.createElement('img');
        imgElement.src = data.imageUrl;
        imgElement.alt = data.title; // Set alt text as the title

        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        const caption = document.createElement('p');
        caption.textContent = data.title;
        gridItem.appendChild(imgElement);
        gridItem.appendChild(caption);
        gridContainer.appendChild(gridItem);
    });


    popupImagesContainer.appendChild(gridContainer);

    document.getElementById("popupContainer").style.display = "flex";
}

function closePopup() {
    document.getElementById("popupContainer").style.display = "none";
}
function sendMessage() {

    const phoneNumber = '+919427444848';
    const message = 'Hello! I would like to avail the 10% discount.';
    const apiEndpoint = ` https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(apiEndpoint, '_blank');
}
function callNumber() {

    window.location.href = 'tel:9427444848';
}
function showDirections() {
    var mapUrl = 'https://maps.app.goo.gl/1zRjS1sNAGnr3Cvd7';
    window.open(mapUrl, '_blank');
}
function sendEmail() {
    var emailAddress = 'jasminawpl@gmail.com';

    var mailtoLink = 'mailto:' + encodeURIComponent(emailAddress);

    window.location.href = mailtoLink;
}
function openFacebook() {
    var mapUrl = 'https://www.facebook.com/WorldOfAmazingFun/';
    window.open(mapUrl, '_blank');
}
function openInstagram() {
    var mapUrl = 'https://www.instagram.com/amazing_fun_world_dwarika/';
    window.open(mapUrl, '_blank');
}
function openYoutube() {
    var mapUrl = 'https://www.youtube.com/@AMAZINGFUNWORLDRESORT';
    window.open(mapUrl, '_blank');
}
function openfeedback() {
    var mapUrl = 'https://www.google.com.np/travel/entity/key/ChoIw_e53Y_cuoyZARoNL2cvMTFtaHhteWNfOBAE?hl=en&gl=np&ictx=1&sa=X&utm_campaign=sharing&utm_medium=link&utm_source=htls&ts=CAEaBAoCGgAqBAoAGgA&rp=OAFIAg&ap=MAA&ved=0CAAQ5JsGahcKEwiQkoae5aKDAxUAAAAAHQAAAAAQBA';
    window.open(mapUrl, '_blank');
}