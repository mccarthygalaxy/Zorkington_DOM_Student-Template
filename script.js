/* 
    TODO for students
        General Setup:
            - This object is framed for you to fill out the values to help customize your game.
            - This will alter the browser to display your game title. The "Quick Notes" modal will also detail your information along with the description (desc) of what your game is about. It is important to highlight key commands that you want the player to use.
            - The startingRoomDescription will display what the player sees upon coming to your project.

        Do NOT alter the name of this object.

        Both exports are required in order for this project to run.

        - index.html should be running in your browser through the build process.
            - use your browsers console throughout testing.
*/

export const gameDetails = {
    title: 'Zorkington Galaxy',
    desc: 'Welcome to the world of... here are some quick rules & concepts...',
    author: 'Jake McCarthy',
    cohort: 'PTSDB-MAY-2023',
    startingRoomDescription: "You are in a grand foyer with a beautiful chandelier hanging from the ceiling. There is a living room to the north and a kitchen east of the living room.",
    playerCommands: [
        // replace these with your games commands as needed
        'look (or l)', 'inventory (or i)', 'take', 'drop', 'examine', 'north', 'south', 'east', 'west', 'help', 'quit'
    ]
    // Commands are basic things that a player can do throughout the game besides possibly moving to another room. This line will populate on the footer of your game for players to reference. 
    // This shouldn't be more than 6-8 different commands.
}

// Your code here

let textReply = "";

//! CLASS Declarations ------------------------------------------------------>

//? ROOM ------------------------------------------------------>

class Room {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.inventory = [];
        this.north = null;
        this.south = null;
        this.east = null;
        this.west = null;
    }

    addItem(item) {
        this.inventory.push(item); // pushes item to room inventory
    }

    removeItem(item) {
        const index = this.inventory.indexOf(item); // gets index of item from room inventory
        if (index > -1) {   // as long as room inventory array is not empty
            this.inventory.splice(index, 1); // splices the item from the this.inventory array starting with the item's index, then 1 item
        }
    }
}

//? ITEM ------------------------------------------------------>

class Item {
    constructor(name, description, takeable) {
        this.name = name;
        this.description = description;
        this.takeable = takeable;
    }
}

//! Create new instances of ROOM ------------------------------------------>

const foyer = new Room(
    "Foyer",
    "You are in a grand foyer with a beautiful chandelier hanging from the ceiling. There is a living room to the north and a kitchen east of the living room."
);

const livingRoom = new Room(
    "Living Room",
    "You are in a cozy living room with a fireplace and comfortable chairs. To the south is the Foyer. To the east is the Kitchen."
);

const kitchen = new Room(
    "Kitchen",
    "You are in a spacious kitchen with modern appliances and granite countertops. To the east is the Conservatory. To the west is the Living Room."
);

const conservatory = new Room(
    "Conservatory",
    "You are in a conservatory with lots of stained glass and pebbled windows. There are many plants, flowers, and even a few trees in huge pots. To the west is the kitchen."
);

//* Connect the Rooms ----------------------------------------------->

foyer.north = livingRoom;   // adds to foyer this.north value A) north exists and B) livingRoom is north of foyer
livingRoom.south = foyer;   // adds to livingRoom this.south value A) south exists and B) foyer is south of livingRoom
livingRoom.east = kitchen;    // adds to livingRoom this.east value A) east exists and B) kitchen is east of livingRoom
kitchen.east = conservatory;  //  adds to kitchen this.east value A) east exists and B) conservatory is east of kitchen
kitchen.west = livingRoom;    //  adds to kitchen this.west value A) west exists and B)livingRoom is west of kitchen
conservatory.west = kitchen;  //  adds to conservatory this.west value A) west exists and B) kitchen is west of conservatory

//! Create new instances of Items -------------------------------------------->

const silverKey = new Item(
    "Silver Key",
    "A shiny metal skeleton key.",
    true
);

const screwdriver = new Item(
    "Screwdriver",
    "A tool with a flat head and a magnetic tip.",
    true
);

const note = new Item(
    "Note",
    "A loose piece of paper with some writing on it.",
    true
);

const brooch = new Item(
    "Brooch",
    "A delicate gold filigree brooch in the shape of a leaf with green accents.",
    true
);

const mirror = new Item(
    "Mirror",
    "A small opalescent mirror with a large crack through it.",
    false
);

const knife = new Item(
    "Knife",
    "A slightly rusty knife about 7 inches long with a worn, brown leather grip.",
    false
);

const horn = new Item(
    "Horn",
    "A conspicuously tiny palm-sized representation of a tuba.",
    false
);

const bottle = new Item(
    "Bottle",
    "An old glass bottle with a crystal stopper. The bottle contains a blue liquid.",
    false
);

//* Push Items To Rooms ------------------------------------------------------------>

foyer.addItem(note);
foyer.addItem(knife);
livingRoom.addItem(screwdriver);
livingRoom.addItem(horn);
kitchen.addItem(silverKey);
kitchen.addItem(bottle);
conservatory.addItem(brooch);
conservatory.addItem(mirror);

//? Assign & Reset Player basics -------------------------------------------------->

let playerInventory = [];
let currentRoom = foyer; // Game start - Assigns currentRoom variable and sets to foyer (instance of Room class)

//! DOM DISPLAY FUNCTIONALITY ------------------------------------------------------>

export const domDisplay = (playerInput) => {
    /* 
        TODO: for students
        - This function must return a string. 
        - This will be the information that is displayed within the browsers game interface above the users input field.

        - This function name cannot be altered. 
        - "playerInput" is whatever text the user is typing within the input field in the browser after hitting the ENTER key.
            - test this out with a console log.

        What your player should be able to do (checklist):
            - move between rooms
            - view current room
            - pickup moveable items
                - there should be at least 2 items that cannot be moved.
            - view player inventory
        
        Stretch Goals:
            - drop items in "current room" (if a player picks up an item in one room and moves to another, they should be able to remove it from their inventory)
            - create win/lose conditions.
                - this could be a puzzle that may require an item to be within the players inventory to move forward, etc.

        HINTS:
            - consider the various methods that are available to use.
            - arrays are a great way to hold "lists".
            - You are not limited to just the exported function. Build additional functions and don't forget to hold the return within a variable.
            - Review notes!
                - Have them open as you build.
                - break down each problem into small chunks
                    - What is the process of picking up an item exactly? ex: Look. Pick from a list of items. Put into players list of items... 
    */

    // Your code here


    //! Game Input ------------------------------------------------------>


    //? Input Parser ------------------------------------------------------>

    playerInput = playerInput.toLowerCase().trim();
    let inputArr = playerInput.split(" "); //* creates ARRAY `inputArr`

    let action = inputArr[0];   //* deconstructs ARRAY `inputArr`
    let target = inputArr.slice(1).join(" ");   //* deconstructs ARRAY `inputArr`

    console.log(inputArr);
    console.log(`parsed 'Action: "${action}"`);
    console.log(`parsed 'Target: "${target}"`);

    //! Game Play ------------------------------------------------------>

    console.log(`${currentRoom.name.toUpperCase()}\n${currentRoom.description}`); //  gets .description from instance of Room class
    console.log(`Directions: ${getValidDirections(currentRoom).join(", ").toUpperCase()}`); // calls f using (currentRoom), tells which ways you can move
    // joins these [from an obj/array] separated by ", "

    if (action === "quit" || action === "exit") {                // begin examination of ACTION
        console.log("Thanks for playing!");
        textReply = "Thanks for playing!";
        return textReply;


    } else if (action === "look" || action === "l") {
        console.log(currentRoom.name.toUpperCase());
        console.log(currentRoom.description);
        console.log(`Directions: ${getValidDirections(currentRoom) // Show exits from currentRoom using array from getValidDirections function
            .join(", ").toUpperCase()}`);                                           // concatenating with ", " into a string. 
        console.log(
            `The room contains a: ${currentRoom.inventory
                .map((i) => i.name) // map iterates arrow function that gets .name value of every `i` argument
                .join(", ")}`
        ); // Show items here

        textReply = `${currentRoom.name.toUpperCase()}\n
                ${currentRoom.description}\n
                Directions: ${getValidDirections(currentRoom) // Show exits from currentRoom using array from getValidDirections function
                .join(", ").toUpperCase()}\n
                The room contains a: ${currentRoom.inventory
                .map((i) => i.name) // map iterates arrow function that gets .name value of every `i` argument
                .join(", ")}.`
        return textReply;


        //FIXME:  ^^ NEED LOGIC: IF ROOM INVENTORY IS EMPTY, DON'T LIST THE 'CONTAINS' STATEMENT. ^^ //



function getValidDirections(room) {
    let validDirections = []; // resets obj every time, then fills with updated valid directions
    if (room.north) {         // if room.north has a valid value (other than null, undefined, 0, NaN) then: 
        validDirections.push("north");
    }
    if (room.south) {         // if room.south has a valid value (other than null, undefined, 0, NaN) then:
        validDirections.push("south");
    }
    if (room.east) {          // if room.east has a valid value (other than null, undefined, 0, NaN) then:
        validDirections.push("east");
    }
    if (room.west) {          // if room.west has a valid value (other than null, undefined, 0, NaN) then:
        validDirections.push("west");
    }
    return validDirections;   // returns an array with all possible exits from current room
}
