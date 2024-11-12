// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  let [hours, minutes] = time
  .split(':')
  .map(part => part.padStart(2, "0"))

  hours = Number(hours);

    if (hours > 12) {
    return `${hours - 12}:${minutes} pm`;
  }else if (hours === 0){
    return `${12}:${minutes} am`;
  }else if (hours === 12){
    return `${12}:${minutes} pm`;
  }else{
    return `${hours}:${minutes} am`;
  }
}

console.log(formatAs12HourClock("23:23"));

const currentOutput = formatAs12HourClock("00:00");
const targetOutput = "12:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);
