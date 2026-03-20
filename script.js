// Grab the elements we need to interact with
const laptop = document.getElementById('laptop-trigger');
const osModal = document.getElementById('os-modal');
const closeBtn = document.getElementById('close-btn');
const roomScene = document.getElementById('room-scene');

// When the laptop is clicked, show the OS window
laptop.addEventListener('click', () => {
    osModal.classList.add('active');
    roomScene.style.transform = 'scale(0.95)'; // pushes the room back slightly
    roomScene.style.opacity = '0.5';
});

// When the red dot is clicked, hide the OS window
closeBtn.addEventListener('click', () => {
    osModal.classList.remove('active');
    roomScene.style.transform = 'scale(1)';
    roomScene.style.opacity = '1';
});
