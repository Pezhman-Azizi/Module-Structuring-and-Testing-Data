function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(
    remainingSeconds
  )}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
    // ANSWER: Pad will be called three times (once for totalHours, once for remainingMinutes, and once for remainingSeconds).

// Call formatTimeDisplay with an input of 61, now answer the following:
  
// b) What is the value assigned to num when pad is called for the first time?
    // ANSWER: num will be 0 (the value of totalHours).

// c) What is the return value of pad is called for the first time?
    // ANSWER: The return value is "00" (since pad(0) results in "00").

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
    // ANSWER: num will be 1 (the value of remainingSeconds). This is the last call to pad in the formatTimeDisplay function.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
    // ANSWER: The return value is "01". Since pad(1) pads the string "1" to a length of 2 with a leading "0", it returns "01".
