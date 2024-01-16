 // Function to move the animated element
 function myMove() {
    // Variable to store the interval ID
    let id = null;
    // Get the animated element by its ID
    const elem = document.getElementById("animate");
    // Initial position of the animated element
    let pos = 0;
    // Clear any existing interval to avoid conflicts
    clearInterval(id);
    // Set up the interval for the animation (calls the frame function every 5 milliseconds)
    id = setInterval(frame );

    // Function defining the animation frame
    function frame() {
      // Check if the element has reached the right and bottom boundaries of the container
      if (pos == 350) {
        // If reached, clear the interval to stop the animation
        clearInterval(id);
      } else {
        // If not reached, increment the position variables
        pos++;
        // Set the new position of the element (moving diagonally)
        elem.style.top = pos + "px";
        elem.style.left = pos + "px";
      }
    }
  }