

const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const ratingInput = document.querySelector('#rating');
const messageInput = document.querySelector('#message');
const feedbackList = document.querySelector('#feedback-list');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent form submission

  // get the values from the form inputs
  const name = nameInput.value;
  const email = emailInput.value;
  const rating = ratingInput.value;
  const message = messageInput.value;

  // create a new feedback item
  const feedbackItem = document.createElement('li');
  feedbackItem.innerHTML = `<strong>${name}</strong> (${email}) rated this ${rating} stars and said: ${message}`;

  // add the feedback item to the list
  feedbackList.appendChild(feedbackItem);

  // reset the form
  form.reset();
});