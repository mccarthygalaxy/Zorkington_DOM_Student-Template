
# Zorkington Game Planning

## Variables
### Items
* name
* description
* takeable? (T/F)
* ~~special status? (activated?)~~ //TODO - !TBD later

### Rooms
* name
* description
* room inventory
*  ~~locked? (T/F)~~ //TODO - !TBD later
* ~~special status (room has been blown up by game incident, etc)~~ //TODO - !TBD later
* valid directions to move

### Player
* personal inventory
    - take item
    - drop item
* ~~special status (affected by item temporarily, etc)~~ //TODO - !TBD later

<hr>

## ~~Objects~~ //! Use ARRAYS for now.
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