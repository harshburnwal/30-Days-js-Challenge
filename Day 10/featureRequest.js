// Feature Request:

// Click Event Script: Write a script that adds a click event listener to a button to change the text content of a paragraph.

document.querySelector('button').addEventListener('click', function() {
    document.querySelector('p').textContent = 'Paragraph text changed!';
});

// Mouse Events Script: Create a script that handles mouseover and mouseout events to change the background color of an element.

document.querySelector('.hover-element').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'yellow';
});
document.querySelector('.hover-element').addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});

// Keyboard Events Script: Write a script that logs key presses and displays input field values using keydown and keyup event listeners.

document.querySelector('input').addEventListener('keydown', function(event) {
    console.log(`Key pressed: ${event.key}`);
});
document.querySelector('input').addEventListener('keyup', function() {
    document.querySelector('p').textContent = this.value;
});

// Form Events Script: Create a script that handles form submission and change events on a select dropdown.

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    console.log([...formData.entries()]);
});
document.querySelector('select').addEventListener('change', function() {
    document.querySelector('p').textContent = this.value;
});

// Event Delegation Script: Write a script that demonstrates event delegation by handling events on dynamically added child elements.

document.querySelector('ul').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log(`Clicked list item text: ${event.target.textContent}`);
    }
});
document.querySelector('.parent').addEventListener('click', function(event) {
    if (event.target.classList.contains('child')) {
        console.log(`Event from dynamically added child: ${event.target.textContent}`);
    }
});
