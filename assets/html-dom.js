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


//Home work

/**
 * <main id="app">

    <header>
        <h1 id="first-heading">
            Học JS HTML DOM tại F8!
        </h1>
    </header>

    <div id="app-body">
        <h2 id="second-heading">
            Học qua video + làm bài tập!
        </h2>
    </div>

</main>

Get element có ID app và lưu vào biến appElement
Get element có ID first-heading lưu vào biến firstHeadingElement
Get element có ID app-body lưu vào biến appBodyElement
Get element có ID second-heading lưu vào biến secondHeadingElement
 */

 var appElement = document.getElementById('app');
 var firstHeadingElement = document.getElementById('first-heading');
 var appBodyElement = document.getElementById('app-body');
 var secondHeadingElement = document.getElementById('second-heading');

 


