const draggable = document.getElementById('draggable');
const dropTarget = document.getElementById('dropTarget');

draggable.addEventListener('dragstart', (event) => {
  event.dataTransfer.setData('text/plain', event.target.id);
});

// Purpose: This event fires when the user starts dragging the element.
// Key Function: event.dataTransfer.setData(format, data)
// event.dataTransfer: This is an object associated with the drag event that holds the data being dragged.
// setData(format, data): This method sets the data that is to be dragged. The format specifies the format of the data (in this case, text/plain), and data is the actual data to be transferred (here, the id of the target element).

dropTarget.addEventListener('dragenter', (event) => {
  event.preventDefault();
  event.target.classList.add('drag-over');
});

// Purpose: This event fires when the dragged element enters the drop target area.
// Key Functions:
// event.preventDefault(): This prevents the default behavior of the element, which might be to block the drop.
// event.target.classList.add('drag-over'): Adds a CSS class to the drop target to give visual feedback (e.g., highlighting the drop target area).

dropTarget.addEventListener('dragover', (event) => {
  event.preventDefault();
});

// Purpose: This event fires continuously as the dragged element is over the drop target.
// Key Function:
// event.preventDefault(): Similar to dragenter, this prevents the default behavior, enabling the drop event to be triggered.

dropTarget.addEventListener('dragleave', (event) => {
  event.target.classList.remove('drag-over');
});

// Purpose: This event fires when the dragged element leaves the drop target area.
// Key Function:
// event.target.classList.remove('drag-over'): Removes the CSS class added during dragenter to indicate that the element is no longer a potential drop target.

dropTarget.addEventListener('drop', (event) => {
  event.preventDefault();
  event.target.classList.remove('drag-over');
  const data = event.dataTransfer.getData('text/plain');
  const droppedElement = document.getElementById(data);
  event.target.appendChild(droppedElement);
});


// Purpose: This event fires when the dragged element is dropped on the drop target.
// Key Functions:
// event.preventDefault(): Prevents the browser's default handling of the data (e.g., opening a link or file).
// event.target.classList.remove('drag-over'): Removes the visual feedback class.
// event.dataTransfer.getData(format): Retrieves the data that was set during the dragstart event. The format should match the format specified in setData (i.e., text/plain).
// document.getElementById(data): Gets the dragged element by its ID, which was stored in the dataTransfer object.
// event.target.appendChild(droppedElement): Appends the dragged element to the drop target, completing the drop operation.

// Summary
// These functions together handle the full lifecycle of a drag-and-drop operation:

// dragstart: Initiates the drag, setting the data to be transferred.
// dragenter and dragover: Provide feedback while the element is dragged over a valid drop target and ensure the drop event can fire.
// dragleave: Cleans up when the dragged element leaves the drop target.
// drop: Finalizes the drag-and-drop operation by transferring the element to the drop target and cleaning up.








