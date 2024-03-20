//your JS code here. If required.
document.getElementById('colorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let inputId = document.getElementById('block_id').value;
    let color = document.getElementById('colour_id').value;

    // Reset all grid items to transparent background
    let gridItems = document.getElementsByClassName('grid-item');
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].style.backgroundColor = 'transparent';
    }

    // Change the background color of the selected grid item
    let selectedGridItem = document.getElementById(inputId);
    if (selectedGridItem) {
        selectedGridItem.style.backgroundColor = color;
    } else {
        alert('Invalid block ID. Please enter a number between 1 and 9.');
    }
});

document.getElementById('reset_button').addEventListener('click', function() {
    // Reset all grid items to transparent background
    let gridItems = document.getElementsByClassName('grid-item');
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].style.backgroundColor = 'transparent';
    }
});



