/* Variables */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Define an array of random stories
var stories = [
  "This is the first random story.",
  "Here is another random story for you.",
  "Let me tell you a different random story.",
];
var textToSpeak = stories[0]; // Initialize with the first story
var speakButton = document.querySelector('button');
var generateButton = document.querySelector('#generateButton');
var resetButton = document.querySelector('#resetButton');
var storyText = document.querySelector('.story-text');

/* Functions */
function speakNow(string) {
  // Create a new speech object, attaching the string of text to speak
  var utterThis = new SpeechSynthesisUtterance(string);
  // Actually speak the text
  synth.speak(utterThis);
}

function generateRandomStory() {
  // Generate a random index to select a story from the array
  var randomIndex = Math.floor(Math.random() * stories.length);
  // Set the textToSpeak variable to the randomly selected story
  textToSpeak = stories[randomIndex];
  // Output the random story in text format
  storyText.textContent = textToSpeak;
  // Speak the random story
  speakNow(textToSpeak);
}

function resetStory() {
  // Reset the textToSpeak variable to the first story
  textToSpeak = stories[0];
  // Output the first story in text format
  storyText.textContent = textToSpeak;
}

/* Event Listeners */
speakButton.onclick = function() {
  speakNow(textToSpeak);
};

generateButton.onclick = function() {
  generateRandomStory();
};

resetButton.onclick = function() {
  resetStory();
};
