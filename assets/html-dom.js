// HTML DOM - DOCUMENT OBJECT MODEL

/**
 * Có 3 thành phần
 * 
 * 1. Element
 * 2. Attribute
 * 3. Text 
 */

// Document object

document.write('Javascript Basic');


console.log('=======================');
// Get element methods
// Element: ID, class, tag, CSS selector, HMTL collection



var headingNode = document.getElementById('heading');

console.log(headingNode);
console.log({
    element: headingNode
});

console.log('=======================');

var headingNodes = document.getElementsByClassName('heading');
console.log(headingNodes);
for (i = 0; i < headingNodes.length; i++) {
    console.log(headingNodes[i]);
}

console.log('=======================');

var heading1 = document.querySelector('.heading');
console.log(heading1);

console.log('=======================');

var heading2 = document.querySelectorAll('.heading');
console.log(heading2); // => nodelist

console.log('=======================');

console.log(document.forms);

console.log('=======================');

console.log(document.anchors);

console.log(document.images);
