
var lists = [
    "Something",
    "Somethin1",
    "Something2",
    "Something3",
    "Something4",
    "Something5"
];

for (var i = 0; i < lists.length; i++) {
    document.getElementById("a").innerHTML += "<li>" + lists[i] + "</li>";
    console.log(lists[i]);
}


// var lists = [
//     "Something",
//     "Somethin1",
//     "Something2",
//     "Something3",
//     "Something4",
//     "Something5"
// ];

// for (var i = 0; i < lists.length; i++) {
//     listItems += "<li>" + lists[i] + "</li>";
//     console.log(lists[i]);
// }
// document.getElementById("a").innerHTML = listItems;