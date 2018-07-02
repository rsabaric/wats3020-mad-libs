// WATS 3020 Mad Libs Assignment
//
// For this assignment you must fill in the code below so that it functions
// to populate the text of the "Mad Libs" style story in the HTML.
//
// In order to achieve this goal, you will need to write prompt() statements
// to collect input from the user. The input you collect will be used to
// generate the story.
//
//
// Collecting data from user
let honorific = prompt('Please enter an honorific title (e.g. Mister or Colonel).');

let authorName = prompt('What is your full name?');

let adjective1 = prompt('Give a word used to describe something.');

let vehicle = prompt('What is a vehicle used for transporation (e.g. plane, boat, etc)?');

let vehiclePart = prompt('What is a part of the vehicle just named?');

let parking = prompt('What is a location where the named vehicle would be parked?');

let precious = prompt('Name a precious object.');

let noiseMaker = prompt('What is the name of something that makes a sound?');

let crowdBehavior = prompt('What is the name of something that people do together as a group?');

let adjective2 = prompt('What is the name of a word used to describe something?');

let adjective3 = prompt('What is another word use to describe something?');

let color = prompt('What is the name of a color?');

let familyMember = prompt('What is the name of a family relationship (e.g. sister, father, etc)?');

let organ = prompt('What is the name of a body organ (e.g. heart, liver, spleen, etc)?');

let bodyPart1 = prompt('What is the name of a body part?');

let bodyPart2 = prompt('What is the name of a different body part?');

let bodyPart3 = prompt('What is the name of a different body part?');

let thing = prompt('Name an object.');

let thing2 = prompt('Name an object that would be given to someone you love.');

let thing3 = prompt('Name an object that would be given to someone you like.');

let adjective4 = prompt('What is a word used to describe the vehicle?');

let adjective5 = prompt('What is another word used to describe the vehicle?');

////////////////////////////////////////////////////////////////////////
// Section Numbers
//
// The poem we are using has section numbers. Let's allow the user to
// generate their own.

// Prompt user for numbers.

let userNumber = prompt('What is your lucky number?');

let number2 = userNumber**4;

let number3 = userNumber / number2 + (number2/12);


// DO NOT EDIT BELOW THIS LINE /////////////////////////////////////////
//
// The code below his line handles variable replacement into the HTML file.
// Please do not edit this code unless you are attempting a stretch goal.

let titleText = `O ${honorific}! My ${honorific}! by <small>${authorName}</small>`;
let titleHeading = document.querySelector("#madlib-title");
titleHeading.innerHTML = titleText;

let storyText = `

    ${userNumber}
    O ${honorific}! my ${honorific}! our ${adjective1} trip is done;
    The ${vehicle} has weather'd every rack, the ${precious} we sought is won;
    The ${parking} is near, the ${noiseMaker} I hear, the people all ${crowdBehavior},
    While follow ${bodyPart1} the steady keel, the vessel ${adjective4} and ${adjective5}:
    But O ${organ}! ${organ}! ${organ}!
    O the bleeding drops of ${color},
    Where on the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.

    ${number2}
    O ${honorific}! my ${honorific}! rise up and hear the ${noiseMaker};
    Rise up-for you the ${thing} is flung-for you the bugle trills;
    For you ${thing2} and ribbon'd ${thing3}-for you the shores a-crowding;
    For you they ${crowdBehavior}, the swaying mass, their eager faces turning;
    Here ${honorific}! dear ${familyMember}!
    This ${bodyPart2} beneath your ${bodyPart3};
    It is some dream that on the ${vehiclePart},
    You've fallen ${adjective2} and ${adjective3}.

    ${number3}
    My ${honorific} does not answer, his lips are pale and still;
    My ${familyMember} does not feel my arm, he has no pulse nor will;
    The ${vehicle} is anchor'd safe and sound, its voyage closed and done;
    From fearful trip, the victor ${vehicle}, comes in with ${precious} won;
    Exult, O shores, and ring, O ${noiseMaker}!
    But I, with mournful tread,
    Walk the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.
`;
let storyParagraph = document.querySelector("#madlib-text");
storyParagraph.innerHTML = storyText;