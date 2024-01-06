function checkConnections(selectedItems) {
    var answerKey = {
        connection1: ['red', 'yellow', 'green', 'blue'],
        connection2: ['hour', 'day', 'month', 'year'],
        connection3: ['A', 'B', 'C', 'D'],
        connection4: ['one', 'two', 'three', 'four']
    };

    // Check each connection in the answer key
    for (var connection in answerKey) {
        // Get the array of items for the current connection
        var correctItems = answerKey[connection];

        // Check if the selected items match the correct items for this connection
        if (arraysEqual(selectedItems, correctItems)) {
            // Match found, you can return the connection name or take any other action
            return connection;
        }
    }

    // No matches found
    return null;
}

// Function to check if two arrays are equal
function arraysEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every(function (value, index) {
        return value === arr2[index];
    });
}

var selectedItems = ['red', 'yellow', 'green', 'blue'];
var result = checkConnections(selectedItems);

if (result) {
    console.log('Match found for connection: ' + result);
} else {
    console.log('No match found.');
}