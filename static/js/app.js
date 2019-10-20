// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

var button = d3.select("#filter-btn")

    button.on("click", function() {

    var input = d3.select("#datetime");

    var inputValue = input.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    console.log(filteredData)

    filteredData.forEach((sightingReport) => {
        var row = tbody.append("tr");
        Object.entries(sightingReport).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });    
    });
});


