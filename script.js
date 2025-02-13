document.getElementById('yesButton').addEventListener('click', function() {
    showResponse("Yay! I knew you'd say yes! ❤️");
});

document.getElementById('noButton').addEventListener('click', function() {
    showResponse("Oh no! Maybe next time. 💔");
});

function showResponse(message) {
    var responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = message;
    responseMessage.classList.remove('hidden');
}