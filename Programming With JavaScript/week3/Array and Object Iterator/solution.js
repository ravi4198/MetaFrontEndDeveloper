// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
    for (const item of dairy) {
    console.log(item);
}
}

logDairy()

// Task 2
const animal = {
    canJump: true
};

const bird = Object.create(animal)

bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    // only objects own property can loop over using for-of loop
    // for of loop will not loop over prototype properties
    for (const key of Object.keys(bird)) {
        console.log(key+": "+bird[key]);
    }
}

birdCan()
// Task 3

function animalCan() {
    // for in loop used to loop over all the properties in both bird object and its prototype - the animal object
    for (const key in  bird) {
        console.log(key+": "+bird[key]);
        }
    }

animalCan()
