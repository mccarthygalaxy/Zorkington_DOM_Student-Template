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
        'inventory', 'take', 'drop', 'examine'
    ]
    // Commands are basic things that a player can do throughout the game besides possibly moving to another room. This line will populate on the footer of your game for players to reference. 
    // This shouldn't be more than 6-8 different commands.
}

// Your code here
let textReply = "";

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



    class Room {
        constructor(name, description) {
            this.name = name;
            this.description = description;
            this.inventory = [];
            this.locked = null;
            this.north = null;
            this.south= null;
            this.east= null;
            this.west= null;
            this.destroyed = null;
        }

        addItem(item) {

        }

        removeItem () {

        }

    }


//! Rooms List

const foyer = new Room(
    "Foyer",
    "You are in a grand foyer with a beautiful chandelier hanging from the ceiling. There is a living room to the north and a kitchen east of the living room."
)

const livingRoom = new Room(
    "Living Room",
    "You are in a cozy sitting area with a fireplace and comfortable chairs. To the south is the Foyer. To the east is the Kitchen. There is a vague scent of pine and sandalwood here."
)

const kitchen = new Room(
    "Kitchen",
    "You are in a spacious kitchen with somewhat dated appliances. The appliances have strange modifications to them including various metal coils, wires and glass tubes, without apparent purpose. To the east is the Conservatory. To the west is the Living Room."
)

const conservatory = new Room(
    "Conservatory",
    "You are in a conservatory with lots of stained glass and pebbled windows. Light filters through, although you cannot discern what is directly outside. There are many plants, unusual flowers and even a few trees in huge pots. To the west is the Kitchen."
)


//* State Machine for Locations

const availableExits = {
    'foyer': ['living room'],
    'living room': ['foyer', 'kitchen'],
    'kitchen': ['living room', 'conservatory'],
    'conservatory': ['kitchen']
}

//! Items Construction

class Item {
    constructor(name, description, takeable) {
        this.name = name;
        this.description = description;
        this.takeable = takeable;
        // this.activated = null;
    }
}

//! Items List

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


//! Game Play

let startRoom = foyer;
let currentRoom = startRoom;
playerInput = playerInput.toLowerCase();

    if(playerInput == "test") {
        textReply = `You typed '${playerInput.toUpperCase()}'.`
        console.log(textReply);
        return textReply;
    } else if (playerInput === "look") {
        // console.log(currentRoom.inventory);
        console.log(currentRoom.availableExits);
        textReply = `You are in the ${currentRoom.name}. ${currentRoom.description} Available exits: ${availableExits[currentRoom.name.toLowerCase()]}`
        console.log(textReply);
        return textReply;
    } else if (playerInput === "north" || playerInput === "living room") {
        textReply = `You typed ${playerInput}.`
        console.log(textReply);
        return textReply;
    } else {
        textReply = `You typed '${playerInput.toUpperCase()}'. This is not a valid command. Try rephrasing this.`
        console.log(textReply);
        return textReply;
    }

    // console.log(`Typed Input: ${playerInput}`);


} 
