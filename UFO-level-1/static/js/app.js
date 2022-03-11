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

    // Step 3:  Use `Object.entries` to console.log each ufo_sighting value
    Object.entries(ufo_sighting).forEach(([key, value]) => {
        console.log(key, value);

        // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
        var cell = row.append("td");

        // Step 5: Use d3 to update each cell's text with weather report values
        cell.text(value);
    });
  });