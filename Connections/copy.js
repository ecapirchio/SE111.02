document.addEventListener("DOMContentLoaded", function () {
    // Select all item elements
    var items = document.querySelectorAll(".item");

    // Select the submit button
    var submitButton = document.getElementById("submit-button");

    // Add click event listeners to each item
    items.forEach(function (item) {
        item.addEventListener("click", function () {
            // Toggle the selected class on click
            this.classList.toggle("selected");
            this.classList.toggle("selected-item");

            // Check the number of selected items
            var selectedItems = document.querySelectorAll(".item.selected");

            // If exactly four items are selected, activate the submit button
            if (selectedItems.length === 4) {
                submitButton.classList.remove("inactive");
            } else {
                submitButton.classList.add("inactive");
            }
        });
    });

    // Select the shuffle button
    var shuffleButton = document.getElementById("shuffle-button");

    // Add click event listener to the shuffle button
    shuffleButton.addEventListener("click", function () {
        // Iterate through each row and shuffle the items
        var rows = document.querySelectorAll(".flex-grid > div");
        rows.forEach(function (row) {
            var itemsInRow = Array.from(row.children);
            itemsInRow.sort(function () {
                return 0.5 - Math.random();
            });
            row.innerHTML = "";
            itemsInRow.forEach(function (item) {
                row.appendChild(item);
            });
        });

        // Deselect all items
        items.forEach(function (item) {
            item.classList.remove("selected");
            item.classList.remove("selected-item");
        });

        // Deactivate the submit button
        submitButton.classList.add("inactive");
    });

    // Select the deselect all button
    var deselectAllButton = document.getElementById("deselect-all-button");

    // Add click event listener to the deselect all button
    deselectAllButton.addEventListener("click", function () {
        // Deselect all items
        items.forEach(function (item) {
            item.classList.remove("selected");
            item.classList.remove("selected-item");
        });

        // Deactivate the submit button
        submitButton.classList.add("inactive");
    });

    // Select the submit button
    var submitButton = document.getElementById("submit-button");

    // Add click event listener to the submit button
    submitButton.addEventListener("click", function () {
        // Call the function to check the selected items against the answer key
        checkAnswer();
    });

    // Function to check the selected items against the answer key
    function checkAnswer() {
        var selectedItems = document.querySelectorAll(".item.selected-item");

        // Extract text content of selected items
        var selectedValues = Array.from(selectedItems).map(function (item) {
            return item.textContent.trim().toUpperCase();
        });

        // Define the answer key
        var answerKey = {
            connection1: ['RED', 'YELLOW', 'GREEN', 'BLUE'],
            connection2: ['HOUR', 'DAY', 'MONTH', 'YEAR'],
            connection3: ['A', 'B', 'C', 'D'],
            connection4: ['ONE', 'TWO', 'THREE', 'FOUR']
        };

        // Check if the selected items match any of the connections in the answer key
        for (var connection in answerKey) {
            var correctConnection = answerKey[connection].every(function (item) {
                return selectedValues.includes(item);
            });

            if (correctConnection) {
                alert('You matched ' + connection + '!');

                // Deselect all items
                items.forEach(function (item) {
                    item.classList.remove("selected");
                    item.classList.remove("selected-item");
                });

                // Hide the correct connection items
                var boardItems = document.querySelectorAll('.item');
                boardItems.forEach(function (boardItem) {
                    var boardItemText = boardItem.textContent.trim().toUpperCase();
                    if (answerKey[connection].includes(boardItemText)) {
                        boardItem.style.display = 'none';
                    }
                });

                // Check if all board items are gone
                var remainingItems = document.querySelectorAll('.item:not([style*="display: none"])');
                if (remainingItems.length === 0) {
                    // If all items are gone, navigate to the win.php page
                    window.location.href = 'win.html';
                }

                // Deactivate the submit button
                submitButton.classList.add("inactive");

            }
        }
    }
});