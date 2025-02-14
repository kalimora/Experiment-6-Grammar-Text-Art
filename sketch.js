let video;
let phrase = "I am human";
let alternatePhrase = "I am not";
let currentPhrase;
let index = 0;
let useAlternate = false; // Boolean flag to toggle between phrases

function setup() {
  createCanvas(520, 420);
  video = createCapture(VIDEO);
  video.size(520, 420);
  video.hide();
  textSize(32);
  noStroke();
  currentPhrase = phrase; // Start with the initial phrase
}

function draw() {
  background(0);

  // The size of each 'pixel' in the pixelated video, corresponding to one letter
  let pixelSize = 32; // Make sure this matches textSize for alignment

  for (let y = 0; y < video.height; y += pixelSize) {
    for (let x = 0; x < video.width; x += pixelSize) {
      // Get the color of the video at this pixel
      let col = video.get(x, y);
      fill(col);
      
      // Get the next letter from the current phrase and update index
      let letter = currentPhrase[index % currentPhrase.length];
      // Draw the letter at the current position
      text(letter, x, y + pixelSize);
    }
    index++;
  }
}

function mousePressed() {
  // Toggle the flag and switch the phrase when the canvas is clicked
  useAlternate = !useAlternate;
  if (useAlternate) {
    currentPhrase = alternatePhrase;
  } else {
    currentPhrase = phrase;
  }
  // Reset the index to restart the phrase from the beginning
  index = 0;
}
