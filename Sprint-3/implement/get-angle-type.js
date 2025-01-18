// Implement a function getAngleType

// Acceptance criteria:

// Given an angle in degrees,
// When the function getAngleType is called with this angle,
// Then it should:

// Identify Right Angles:
// When the angle is exactly 90 degrees,
// Then the function should return "Right angle"

// Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return " angle"

// Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"

// Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"

// Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"

function getAngleType(angel){
 if (angel === 90){
  return "Right angle";
 }else if (angel < 90){
  return "Acute angle";
 }else if(angel>90 && angel < 10){
  return "Obtuse angle";
}else if(angel === 180){
  return "Straight angle";
 }else if(angel>180 && angel<360){
  return "Reflex angle"
 }else{
  return "invalid angel";
 }
}
// Test cases
console.assert(getAngleType(45) === "Acute angle", "Failed: Expected Acute angle");
console.assert(getAngleType(90) === "Right angle", "Failed: Expected Right angle");
console.assert(getAngleType(135) === "Obtuse angle", "Failed: Expected Obtuse angle");
console.assert(getAngleType(180) === "Straight angle", "Failed: Expected Straight angle");
console.assert(getAngleType(-10) === "Invalid angle", "Failed: Expected Invalid angle");
console.assert(getAngleType(200) === "Invalid angle", "Failed: Expected Invalid angle");
