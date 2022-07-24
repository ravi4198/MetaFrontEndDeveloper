// Capture Data

// The aim of this exercise is to access the content of an element, specifically to use a button click to replace text.

// Open the example.com website in your browser. Open the developer tools and focus on the Console tab.

// Open browser console and paste below code.

var h1 = document.querySelector('h1');
const arr = [
    'Example Domain',
    'First Click',
    'Second Click',
    'Third Click'
]

function handleClicks(){
    switch(h1.innerText){
        case arr[0]:
            h1.innerText = arr[1]
            break;
        case arr[1]:
            h1.innerText = arr[2];
            break;
        case arr[2]:
            h1.innerText = arr[3];
            break;
        default :
            h1.innerText =arr[0];
    }
}
h1.addEventListener('click', handleClicks);
    

