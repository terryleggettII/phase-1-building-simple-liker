// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const errorModal = document.getElementById('modal');
errorModal.classList.add('hidden');

function handleHeartClick(event) {
  const heart = event.target;

  mimicServerCall()
    .then(function() {
      if (heart.textContent === EMPTY_HEART) {
        heart.textContent = FULL_HEART;
        heart.classList.add('activated-heart');
      } else {
        heart.textContent = EMPTY_HEART;
        heart.classList.remove('activated-heart');
      }
    })
    .catch(function(error) {
      errorModal.classList.remove('hidden');
      const modalMessage = document.getElementById('modal-message');
      modalMessage.textContent = error;
      setTimeout(function() {
        errorModal.classList.add('hidden');
      }, 3000);
    });
}

const hearts = document.querySelectorAll('.like-glyph');
hearts.forEach(function(heart) {
  heart.addEventListener('click', handleHeartClick);
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
