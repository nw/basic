// define variables
var names = ['Bob','Sally','John','Betty'];
var message = "Hello, ";
var TheName = '';

//concatenate a string using an array element
console.log(message + names[3]);

// loop over the array and log the name
names.forEach(
    function(theName) {
        console.log(theName);
        TheName = theName;
    }

);

// Log the big name
console.log(TheName);

// add Jane to the array
names.push('Jane');

// output the array
console.log(names);

//Jane doesn't play well with others.  She needs to go home.

names.pop();

// output the array
console.log(names);

// Everybody went home.  Empty the array.
names = [];
// See?  Nobody's here!
console.log(names);

// Maybe they're at the playground?
// what's at the playground?
var playground = {
    name: "Walt Disney World",
    location: "Orlando",
    rides: ['Splash Mountain','Big Thunder Mountain','It\'s a Small World After All'],
    cost: 'You don\'t want to know'
};

// Can we go to the playground?
console.log(playground.cost);

// Awww.
playground.cost = "Wow.";

console.log(playground.cost);





