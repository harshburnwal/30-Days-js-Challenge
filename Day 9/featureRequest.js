// Feature Request:

// Text Content Manipulation Script: Write a script that selects an HTML element by its ID and changes its text content.

document.getElementById('text-element').textContent = 'Updated text content';

// Element Creation Script: Create a script that demonstrates creating a new div element and appending it to the body.

const newDiv = document.createElement('div');
newDiv.textContent = 'Hello, this is a new div!';
document.body.appendChild(newDiv);

// Element Removal Script: Write a script that selects an HTML element and removes it from the DOM.

const element = document.getElementById('element-to-remove');
element.parentNode.removeChild(element);

// Attribute Modification Script: Create a script that changes the attributes of an HTML element.

const image = document.querySelector('img');
image.setAttribute('alt', 'New alt text');

// Event Handling Script: Write a script that adds event listeners to HTML elements to change their content or style based on user interactions.

const button = document.querySelector('button');
button.addEventListener('click', function() {
    alert('Button clicked!');
});