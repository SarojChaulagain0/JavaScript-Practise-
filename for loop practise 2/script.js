var lists = [
    "Something",
    "Somethin1",
    "Something2",
    "Something3",
    "Something4",
    "Something5"
];

for (var i = 0; i < lists.length; i++) {
    // lists.splice(i, 1); // Remove one element at the current index
    document.getElementById("a").innerHTML += "<li>"+ lists + "</li>" + "The element to be removed is: " + lists.splice(i, 1) + "<br><br>";
    console.log(lists);
}

// for (var i = 0; i < lists.length; i++) {
//     // Append the list item to the HTML
//     document.getElementById("a").innerHTML += "<ul>" + lists + "</ul>";

//     // Log the element to be removed
//     console.log("The element to be removed is:", lists[i]);

//     // Remove the element from the array
//     lists.splice(i, 1);

//     // Log the updated array
//     console.log("Updated array:", lists);

//     // Add line breaks for better readability
//     document.getElementById("a").innerHTML += "<br><br>";
// }



//For a beginner it appeared to be crazy but this is what I understand now. 
// Okay so lists contain 6 string objects. indexed 0, 1, 2 ,3, 4, 5.
// when the value of the i is 0 then something which is indexed 0 is removed (only one element is removed which is declared by splice method).
//then the new list length is 5 and  the value of the i is 1 i which case the new index of 
//Something2 is also 1 which is then removed. This goes on until the increamnet of i value matched the value of the 
//lists length and the loop stops.