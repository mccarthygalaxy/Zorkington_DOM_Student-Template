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
    desc: 'Welcome to the world of Zorkington Galaxy here are some quick rules & concepts...\nA thing isn\'t always a thing until it is activated or used. Explore your world. "To see the world, things dangerous to come to, to see behind walls, draw closer, to find each other, and to feel. That is the purpose of life."',
    author: 'Jake McCarthy',
    cohort: 'PTSDB-MAY-2023',
    startingRoomDescription: "You are in a grand foyer with a beautiful chandelier hanging from the ceiling. There is a living room to the north and a kitchen east of the living room.",
    playerCommands: [
        // replace these with your games commands as needed
        'look (or l)', 'inventory (or i)', 'take [item]', 'examine (or ex) [item]', 'drop [item]', 'north', 'south', 'east', 'west', 'help', 'quit'
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
    "You are in a grand foyer with a beautiful chandelier hanging from the ceiling. Briefly there is a feeling of static electricity in the air, then it is gone. There is a living room to the north and a kitchen east of the living room."
);

const livingRoom = new Room(
    "Living Room",
    "You are in a cozy sitting area with a fireplace and soft, comfortable chairs. There is a vague scent of pine and sandalwood here. To the south is the Foyer. To the east is the Kitchen."
);

const kitchen = new Room(
    "Kitchen",
    "You are in a spacious kitchen with somewhat dated appliances. The appliances have strange modifications to them including various metal coils, wires and glass tubes, without apparent purpose. To the east is the Conservatory. To the north is a Dim Hallway. To the west is the Living Room."
);

const conservatory = new Room(
    "Conservatory",
    "You are in a conservatory with lots of stained glass and pebbled windows. Light filters through, although you cannot discern what is directly outside. There are many plants, unusual flowers and even a few trees in huge pots. There is an earthy scent peppered with floral accents that is entirely pleasant. To the west is the Kitchen."
);

// Additional Rooms created:
const dimHallway = new Room(
    "Dim Hallway",
    "You are in long-ish dimly lit hallway. There is small gaslight lamp about halway down the hall, although it is too high up to reach. To the north is the Library. To the south is the Kitchen."
);

const library = new Room(
    "Library",
    "You are in a library with rows and rows of shelves with books, old and new. Many leather-bound volumes fill the top rows. Some have heavy brass bindings and others have what appear to be locks on them. There is dim lighting and a table with a brighter reading lamp in the center of the room. To the south is a Dim Hallway."
);

//* Connect the Rooms ----------------------------------------------->

foyer.north = livingRoom;   // adds to foyer this.north value A) north "exists" and B) livingRoom is north of foyer
livingRoom.south = foyer;   // adds to livingRoom this.south value A) south "exists" and B) foyer is south of livingRoom
livingRoom.east = kitchen;    // adds to livingRoom this.east value A) east "exists" and B) kitchen is east of livingRoom
kitchen.east = conservatory;  //  adds to kitchen this.east value A) east "exists" and B) conservatory is east of kitchen
kitchen.west = livingRoom;    //  adds to kitchen this.west value A) west "exists" and B)livingRoom is west of kitchen
conservatory.west = kitchen;  //  adds to conservatory this.west value A) west "exists" and B) kitchen is west of conservatory

// Additional Rooms Connect:
kitchen.north = dimHallway;
dimHallway.south = kitchen;
dimHallway.north = library;
library.south = dimHallway;

//! Create new instances of Items -------------------------------------------->

const silverKey = new Item(
    "Silver Key",
    "A shiny metal skeleton key. Closer examination of the silver key reveals the 'bow' of the key to be in the shape of a coat button with four small holes.",
    true
);

const screwdriver = new Item(
    "Screwdriver",
    "A tool with a flat head and a magnetic tip. But the tip also contains a curse. Handle with care.",
    false
);

const note = new Item(
    "Note",
    "A loose piece of paper with some writing on it: 'My stars shine darkly over me: the malignancy of my fate might perhaps distemper yours; decide your beginning.' A figure is scrawled below the writing that looks like a hastily drawn tree with a caption that reads, 'object_Object'",
    true
);

const brooch = new Item(
    "Brooch",
    "A delicate gold filigree brooch in the shape of a leaf with emerald green accents.",
    true
);

const mirror = new Item(
    "Mirror",
    "A small opalescent mirror with a large crack through it. The mirror has a hangtag on it, which reads: \"'Mirrors,' she said, 'are never to be trusted.'\"",
    false
);

const knife = new Item(
    "Knife",
    "A slightly rusty knife about 7 inches long with a worn, brown leather grip.",
    false
);

const horn = new Item(
    "Horn",
    "A conspicuously tiny, palm-sized representation of a tuba. Engraved on the tiny tuba is the phrase, \"In eodem flumine nemo bis vestigiat...\". Which, before your very eyes, transforms into English: \"No man ever steps in the same river twice...\"",
    true
);

const bottle = new Item(
    "Bottle",
    "An old glass bottle with a crystal stopper. The bottle contains a blue liquid.",
    false
);

const device = new Item(
    "Device",
    "A label reads: 'Illudium Pew-36 Explosive Space Modulator'; a red cylindrical device, clearly of Martian origin; it remains inert however. Probably not important.",
    true
);

// Additional new Items created: 
const compass = new Item(
    "Compass",
    "A gold plated compass. When opened, it has an ornate face with the eight compass points displayed in calligraphic script. The topmost letter is in red; however, instead of 'N', it displays an ornate five pointed star. The face of the compass seems to pulse with the tiniest of blue dots, that are barely perceptible, which shift position each time they appear.",
    false
);

const magnifyingGlass = new Item(
    "Magnifying Glass",
    "A large ornate magnifying glass. The handle is made of ivory and is carved with strange lettering in an unrecognizble language. The lens seems quite thick and heavy, and is absolutely perfect with no blemishes or scratches. The end of the handle is tipped with a small crystal orb.",
    true
);

const jadeIdol = new Item(
    "Jade Idol",
    "This is a small figurine, made of creamy jade, which seems to represent a tiny monster of some sort. The creature has a large mouth with pointy teeth, wide eyes, and claws on its feet and hands. The sculptor clearly has a vivid imagination, because surely nothing like this exists in the real world.",
    true
);

const spider = new Item(
    "Annoyed Spider",
    "This is a small, hairy spider. It looks at you warily. You get the distinct feeling if you leave it alone, it will leave you alone. However, it continues to stare at you from it's place on the floor.",
    false
);

//* Push Items To Rooms ------------------------------------------------------------>

foyer.addItem(note);
foyer.addItem(knife);
livingRoom.addItem(screwdriver);
livingRoom.addItem(horn);
kitchen.addItem(silverKey);
kitchen.addItem(bottle);
kitchen.addItem(device);
conservatory.addItem(brooch);
conservatory.addItem(mirror);

// Push new Items to Rooms
library.addItem(compass);
library.addItem(magnifyingGlass);
dimHallway.addItem(jadeIdol);
dimHallway.addItem(spider);


//? Assign & Reset Player basics -------------------------------------------------->

let playerInventory = [];
let currentRoom = foyer;

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

    //SECTION Game Play ------------------------------------------------------>

    if (action === "quit" || action === "exit") {   // begin examination of ACTION

        textReply = "Thanks for playing!";
        return textReply;


    } else if (action === "look" || action === "l") {

        textReply = `${currentRoom.name.toUpperCase()}\n
                ${currentRoom.description}\n
                Directions: ${getValidDirections(currentRoom) // Show exits from currentRoom using array from getValidDirections function
                .join(", ").toUpperCase()}\n
                The room contains a: ${currentRoom.inventory
                .map((i) => i.name) // map iterates arrow function that gets .name value of every `i` argument
                .join(", ")}.`
        return textReply;

        //FIXME:  ^^ NEED LOGIC: IF ROOM INVENTORY IS EMPTY, DON'T LIST THE 'CONTAINS' STATEMENT. ^^ //


    } else if (action === "take" || action === "get") {   //* could also use: `if (["take", "get"].includes(action)) {`
        const foundItem = currentRoom.inventory.find(    // compares item if in currentRoom.inventory using FIND method
            (i) => i.name.toLowerCase() === target
        );
        if (foundItem && foundItem.takeable) {  // if foundItem exists && foundItem has a .takeable truthy value

            currentRoom.removeItem(foundItem); // removeItem method of Room to avoid case sensitivity in user input
            playerInventory.push(foundItem); // pushes item to playerInventory (not a declared method)

            textReply = `You picked up the ${foundItem.name}.\n`
            return textReply;
        } else {
            textReply = `You can't take the ${target}. Perhaps it is cursed?`;
            return textReply;
        }

    } else if (action === "examine" || action === "ex") {
        const itemTBE = currentRoom.inventory.find( // Item ToBeExamined
            (i) => i.name.toLowerCase() === target
        );
        const itemTBEinI = playerInventory.find(    // Item ToBeExaminedinInventory
            (i) => i.name.toLowerCase() === target
        );

        if (itemTBE) {
            textReply = `Examination of the ${itemTBE.name} reveals: ${itemTBE.description}`
            return textReply;
        } else if (itemTBEinI) {
            textReply = `Examination of the ${itemTBEinI.name} reveals: ${itemTBEinI.description}`
            return textReply;
        } else {
            textReply = `You can't examine the ${target}. I don't see one here.`;
            return textReply;
        };

    } else if (action === "inventory" || action === "i") {
        if (playerInventory.length > 0) {

            textReply = `Inventory: ${playerInventory.map((things) => things.name).join(", ")}` // map() over playerInventory; map returns a new array of .name (s) -- Concatenates the playerInventory arr into a stringwith ", " separators
            return textReply;
        } else {
            textReply = `Inventory: Empty (It seems you are not very materialistic.)`
            return textReply;
        }
    } else if (action === "drop") {
        const itemTBDr = playerInventory.find(
            (i) => i.name.toLowerCase() === target
        );
        if (itemTBDr) { // in this case, checks if `item` exists i.e. is not falsey: "if `item` exists {then..."
            currentRoom.addItem(itemTBDr);
            playerInventory = playerInventory.filter((i) => i !== itemTBDr); // .filter on playerInventory, weeding out values that === the item
            textReply = `You dropped ${itemTBDr.name}.`
            return textReply;
        } else {
            console.log(`You don't have ${target} in your inventory.`);
            textReply = `You don't have ${target} in your inventory.`;
            return textReply;
        }

    } else if (action === "help") { // HELP Menu gives list of all commands and how to use them. //

        textReply = "You can use the following commands: \n- 'LOOK': to look around the room\n- 'EXAMINE' [item]: to look at the description of an item\n- 'TAKE' [item]: to pick up an item\n- 'DROP' [item]: to drop an item\n- 'INVENTORY': to see your inventory\n - 'NORTH' / 'SOUTH' / 'EAST' / 'WEST': to move in that direction\n- 'HELP': to display this help message\n- 'QUIT': to quit the game.";
        return textReply;

    } else if (action === "north" && currentRoom.north || action === "n" && currentRoom.north) { // if action is `north` and currentRoom.north (exists) then {}
        currentRoom = currentRoom.north; // assign the value inside currentRoom.north to currentRoom 

        textReply = `${currentRoom.name.toUpperCase()}\n
                ${currentRoom.description}\n
                Directions: ${getValidDirections(currentRoom).join(", ").toUpperCase()}`;
        return textReply;

    } else if (action === "south" && currentRoom.south || action === "s" && currentRoom.south) {
        currentRoom = currentRoom.south;

        textReply = `${currentRoom.name.toUpperCase()}\n
                ${currentRoom.description}\n
                Directions: ${getValidDirections(currentRoom).join(", ").toUpperCase()}`;
        return textReply;

    } else if (action === "east" && currentRoom.east || action === "e" && currentRoom.east) {
        currentRoom = currentRoom.east;

        textReply = `${currentRoom.name.toUpperCase()}\n
                ${currentRoom.description}\n
                Directions: ${getValidDirections(currentRoom).join(", ").toUpperCase()}`;
        return textReply;

    } else if (action === "west" && currentRoom.west || action === "w" && currentRoom.west) {
        currentRoom = currentRoom.west;

        textReply = `${currentRoom.name.toUpperCase()}\n
                ${currentRoom.description}\n
                Directions: ${getValidDirections(currentRoom).join(", ").toUpperCase()}`;
        return textReply;


        //* Specific error message for invalid direction/move:
    } else if (action === "north" && !currentRoom.north || action === "n" && !currentRoom.north ||
        action === "south" && !currentRoom.south || action === "s" && !currentRoom.south ||
        action === "east" && !currentRoom.east || action === "e" && !currentRoom.east ||
        action === "west" && !currentRoom.west || action === "w" && !currentRoom.west) {

        textReply = "Invalid DIRECTION, try looking for another direction.";
        return textReply;

    } else {

        textReply = "Invalid command, type 'help' for a list of commands.";
        return textReply;
    }
    //SECTION End Game Play --------------------------------------------------^

};

//! END DOM DISPLAY FUNCTIONALITY --------------------------------------------------^

function getValidDirections(room) {
    let validDirections = []; // resets array every time, then fills with updated valid directions

    if (room.north) {         // if room.north has a valid value (other than null, undefined, 0, NaN) then: 
        validDirections.push("north");
    }
    if (room.south) {         // if room.south has a valid value then:
        validDirections.push("south");
    }
    if (room.east) {          // if room.east has a valid value then:
        validDirections.push("east");
    }
    if (room.west) {          // if room.west has a valid value then:
        validDirections.push("west");
    }
    return validDirections;   // returns an array with all possible exits from current room
}
