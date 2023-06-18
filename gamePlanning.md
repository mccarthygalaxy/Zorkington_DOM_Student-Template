
# Zorkington Game Planning

## Variables
### Items
* name
* description
* takeable? (T/F)
* special status? (activated?)

### Rooms
* name
* description
* room inventory
* locked? (T/F)
* valid directions to move
* special status (room has been blown up by game incident, etc)

### Player
* personal inventory
    - take item
    - drop item
* special status (affected by item temporarily, etc)

<hr>

## Objects
* Classes
    - Rooms
        - addItem
        - removeItem    
    - Items
        - takeable?
        - activated?
* Functions
* Methods
* States
* Dictionaries

### Actions
* to move
* to get
* to drop
* to look
* to take inventory
* to examine
* to unlock/lock
* generic "to use" on an item?

/* Parse 2-word commands into

* Parse input into
    - action
    - target