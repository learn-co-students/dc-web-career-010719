# Event Listeners
- Review this morning's code

## Asynchronous vs Synchronous?
- JS itself is Synchronous

## .addEventListener on a DOM node
node.addEventListener(string, callback)
- takes in a string for the name of the event, and a callback function to be invoked when the event happens
- (optional) argument for the callback is the event itself

## Example of Events
- click
- mouseover
- submit
- DOMContentLoaded

## Practice
- When click of email -> send an email (console.log)
- When submit of form -> add new instructor (dynamically add <tr> to our table)
- When click of row -> view profile (console.log)

## When to add an event Listener
- on load of page, if that element exists when the DOM is loaded
- on creation of element, if that element DOES NOT exists when the DOM is loaded

## Some events have default behavior
- event.preventDefault()

## Event bubbling vs. capturing, and propagation
- event.target: the innermost node that triggers the event
- event.target vs. event.currentTarget?
- a few events only capture and don't bubble (focus, blur)
- by default, event are fired during the bubbling phase
- event.stopPropagation()




## Announcement
- The DOM Challenge Review is tomorrow afternoon. Do your best to get it done before hand.
- FSP check ins are tomorrow 
- TaskLister/Gravatar is a challenge/optional
