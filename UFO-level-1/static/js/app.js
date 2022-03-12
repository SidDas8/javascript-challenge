// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Arrow function to append the ufo sightings data to the table in index.html
data.forEach((ufo_sighting) => {

    // Step 1: Loop Through `data` and console.log each ufo_sighting object
    console.log(ufo_sighting)

    // Step 2:  Use d3 to append one table row `tr` for each ufo_sighting object
    var row = tbody.append("tr");

    // Step 3:  Use `Object.values` to console.log each ufo_sighting value
    Object.values(ufo_sighting).forEach((value) => {
        console.log(value);

        // Step 4: Use d3 to append 1 cell per ufo_sighting value
        var cell = row.append("td");

        // Step 5: Use d3 to update each cell's text with ufo_sighting values
        cell.text(value);
    });
});

// Select the button
var button = d3.select("#filter-btn");

// Create event handler
button.on("click", runEnter);

// Complete the event handler function
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Filter table according to user input date
    var filteredData = tableData.filter(ufo_sighting => ufo_sighting.datetime === inputValue);

    // Empty table data before rebuilding table
    tbody.html("");

    // Arrow function to append the filtered ufo sightings data to the table in index.html
    filteredData.forEach((ufo_sighting) => {

        // Step 1: Loop Through `data` and console.log each ufo_sighting object
        console.log(ufo_sighting)

        // Step 2:  Use d3 to append one table row `tr` for each ufo_sighting object
        var row = tbody.append("tr");

        // Step 3:  Use `Object.values` to console.log each ufo_sighting value
        Object.values(ufo_sighting).forEach((value) => {
            console.log(value);

            // Step 4: Use d3 to append 1 cell per ufo_sighting value
            var cell = row.append("td");

            // Step 5: Use d3 to update each cell's text with ufo_sighting values
            cell.text(value);
        });
    });
}