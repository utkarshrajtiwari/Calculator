// Get the display input element by its ID to interact with it
let display = document.getElementById("display-info");

// Function to append a value (number or operator) to the display
function appendToDisplay(value) {
  // Add the input value to the current display content
  display.value += value;
  // Example: If display is "5" and value is "+", display becomes "5+"
}

// Function to clear the entire display
function clearDisplay() {
  // Set the display value to an empty string to reset it
  display.value = "";
  // Example: If display is "5+3", it becomes ""
}

// Function to delete the last character from the display
function deleteLast() {
  // Remove the last character using slice (from start to second-to-last)
  display.value = display.value.slice(0, -1);
  // Example: If display is "5+3", it becomes "5+"
}

// Function to calculate the result of the expression in the display
function calculate() {
  try {
    // Evaluate the display's value as a JavaScript expression
    // eval() converts the string (e.g., "5+3") into a result (e.g., 8)
    display.value = eval(display.value);
  } catch (error) {
    // If an error occurs (e.g., "5/0" or invalid expression), show "Error"
    display.value = "Error";
  }
}
