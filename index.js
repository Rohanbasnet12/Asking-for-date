let yesBtn = $('#yesBtn');
let noBtn = $('#noBtn');

let gifContainer = $('#gif');
let titleContainer = $('#title');

yesBtn.on('click', () => {
    gifContainer.html(`<iframe src="https://giphy.com/embed/3oEjI4sFlp73fvEYgw" width="480" height="269" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`)
    titleContainer.html(`<h1 class="text-2xl font-bold text-center text-gray-100 pb-4">Let me Know When we're leaving </h1>`)
})

noBtn.on('click', () => {
    gifContainer.html(`<iframe src="https://giphy.com/embed/9J1zU4zNFijo4iLjl5" width="480" height="269" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`)
    titleContainer.html(`<h1 class="text-2xl font-bold text-center text-gray-100 pb-4">Please Please......</h1>`)

    // Get window dimensions
    let windowWidth = $(window).width();
    let windowHeight = $(window).height();

    // Get button dimensions and position
    let btnWidth = noBtn.outerWidth();
    let btnHeight = noBtn.outerHeight();
    let btnOffset = noBtn.offset();

    // Calculate the max allowed translation
    let maxX = windowWidth - btnWidth; // Max X position within the window
    let maxY = windowHeight - btnHeight; // Max Y position within the window

    // Generate random values while ensuring the button stays within the boundaries
    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);

    // Apply the translation, preventing the button from going outside the viewable area
    noBtn.css({
        position: 'absolute',  // Ensure the button is positioned relative to the window
        left: `${randomX}px`,
        top: `${randomY}px`
    });
});
