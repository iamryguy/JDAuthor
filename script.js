const headings = [
    "Science fiction and fantasy author and aerospace engineer supporting NASA and commercial space in his day job...",
    "Author of the Star-Marked Trilogy, which tells the story of Darynn Mark struggling against an embargo that devastates the poor of his home planet...",
    "...joined by allies, as they fight cutthroat killers, mystical beasts, vampires, power-hungry priests and lords, and self-serving spies...",
    "...subscribe to Justin’s email list to get the latest info on his works, discounts and sales, and the latest and greatest updates on his stories."
];

let index = 0;
const headingElement = document.getElementById('changing-heading');

function changeHeading() {
    index = (index + 1) % headings.length; // Cycle through the array
    headingElement.textContent = headings[index];
}

// Change heading every 4 seconds
setInterval(changeHeading, 4000);