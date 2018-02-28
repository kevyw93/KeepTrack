# KeepTrack
<img src="https://s3.amazonaws.com/ampafy-seeds/Screen+Shot+2018-02-28+at+6.29.38+PM.png" />
 An application used to help maintain or keep track of what you need to do. Created using a self built library, DOManipulator, specializing in manipulating DOM elements and also allows for event handling.

## Create a Todo
<img src="https://s3.amazonaws.com/ampafy-seeds/Screen+Shot+2018-02-28+at+5.29.45+PM.png" width="90%"/>
Creating a todo uses closures to append a new todo consisting of a title, an edit and delete button. The click events are processed/handled using DOManipulator's method (on).

## Updating/Editing a Todo
<img src="https://s3.amazonaws.com/ampafy-seeds/Screen+Shot+2018-02-28+at+5.50.56+PM.png" width="90%"/>

Editing a todo uses self-created method from DOManipulator to target the specific event and handle the change with the showEditInput callback.

## Deleting a Todo
<img src="https://s3.amazonaws.com/ampafy-seeds/Screen+Shot+2018-02-28+at+5.57.03+PM.png" width="90%"/>
Deleting a todo uses DOManipulator's remove method which removes all of the targeted event's children nodes.
