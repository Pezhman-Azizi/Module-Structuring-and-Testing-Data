// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue

// You need to write assertions for your function to check it works in different cases

// Acceptance criteria:

// Given a card string in the format "A♠" (representing a card in blackjack - the last character
// will always be an emoji for a suit, and all characters before will be a number 2-10, or one letter of J, Q, K, A),
// When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value

// Handle Number Cards (2-10):
// Given a card with a rank between "2" and "9",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).

// Handle Face Cards (J, Q, K):
// Given a card with a rank of "10," "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each in blackjack.

// Handle Ace (A):
// Given a card with a rank of "A",
// When the function is called with an Ace,
// Then it should, by default, assume the Ace is worth 11 points, which is a common rule in blackjack.

// Handle Invalid Cards:
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank."
function getCardValue(card) {
  const cardRank = card.slice(0, -1); // Extracts the rank (e.g., "K" from "K♠")
  const cardSuit = card.slice(-1);   // Extracts the suit (e.g., "♠" from "K♠")
  const validRanks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const validSuits = ["♠", "♥", "♦", "♣"];

  if (!validRanks.includes(cardRank) || !validSuits.includes(cardSuit)) {
    return "Invalid card rank.";
  }

  switch (cardRank) {
    case "A": return 1;
    case "2": return 2;
    case "3": return 3;
    case "4": return 4;
    case "5": return 5;
    case "6": return 6;
    case "7": return 7;
    case "8": return 8;
    case "9": return 9;
    case "10": return 10;
    case "J": return 11;
    case "Q": return 12;
    case "K": return 13;
    default: return "Invalid card rank.";
  }
}

// Test cases
console.assert(getCardValue("K♠") === 13, "Failed: Expected 13");
console.assert(getCardValue("Q♣") === 12, "Failed: Expected 12");
console.assert(getCardValue("A♦") === 1, "Failed: Expected 1");
console.assert(getCardValue("10♥") === 10, "Failed: Expected 10");
console.assert(getCardValue("0Q♠") === "Invalid card rank.", "Failed: Expected Invalid card rank.");
console.assert(getCardValue("010♠") === "Invalid card rank.", "Failed: Expected Invalid card rank.");
console.assert(getCardValue("02♠") === "Invalid card rank.", "Failed: Expected Invalid card rank.");
console.assert(getCardValue("0x02♠") === "Invalid card rank.", "Failed: Expected Invalid card rank.");
console.assert(getCardValue("2.1♠") === "Invalid card rank.", "Failed: Expected Invalid card rank.");
