//Reference Code:https://editor.p5js.org/codingtrain/sketches/Y6SvoMcyH

// An array of lines from a text file
let lines;
// The Markov Generator object
let markov;
// An output element
let output;

// Preload some seed data
function preload() {
  lines = loadStrings("text1-1.txt");
}

function setup() {
  // Join everything together in one long string
  // Keep carriage returns so these will show up in the markov generator
  let text = lines.join("\n");

  // N-gram length and maximum length
  markov = new MarkovGenerator(2, 80);
  markov.feed(text);

  // Make the button
  let button = createButton("generate");
  button.mousePressed(generate);

  noCanvas();
}

function generate() {
  // Generate some text
  let result = markov.generate() + "\n";
  // Put in HTML line breaks wherever there was a carriage return
  result = result.replace("\n", "<br/><br/>");
  createP(result);
}
