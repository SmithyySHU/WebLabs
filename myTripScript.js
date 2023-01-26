// Array to hold the itineraries
var itineraries = [
    {
        id: 1,
        itiName: "February Business Development trip 2023",
        destination: "Germany",
        purpose: "Work",
        startDate: new Date("2023-02-03"),
        endDate: new Date("2023-02-10")
    },
    {
        id: 2,
        itiName: "March Client-site visit 2023",
        destination: "America",
        purpose: "Work",
        startDate: new Date("2023-03-05"),
        endDate: new Date("2023-03-08")
    },
    {
        id: 3,
        itiName: "RnR",
        destination: "Belize",
        purpose: "Holiday",
        startDate: new Date("2023-07-15"),
        endDate: new Date("2023-08-15")
    },
    {
        id: 4,
        itiName: "January Scoping visit 2024",
        destination: "China",
        purpose: "Work",
        startDate: new Date("2024-01-15"),
        endDate: new Date("2024-01-23")
    },
]; 


// Function to load the page and display the table
function loadPage() {
    // Call the createTable function and pass the itineraries array
    var table = createTable(itineraries);
    // Assign the returned table to the "myTrips" div
    document.getElementById("myTrips").innerHTML = table;
    // populate the variable with the "showTrips" div element
    let showTrips = document.getElementById("showTrips");
    showTrips.style.display = "";
    // populate the variable with the "addTrip" div element
    let addTrip = document.getElementById("addTrip");
    addTrip.style.display = "none";
}

// Function to create the table
function createTable(data) {
    // Initialize a variable to hold the table
    var table = "<table border='1'><tr><th>Itinerary Name</th><th>Destination</th><th>Purpose</th><th>Start Date</th><th>End Date</th></tr>";
    // Iterate through the data array and add each item as a row in the table
    for (let oi of data) {
        table += "<tr>";
        table += "<td>" + oi.itiName + "</td>";
        table += "<td>" + oi.destination + "</td>";
        table += "<td>" + oi.purpose + "</td>";
        table += "<td>" + oi.startDate.toDateString() + "</td>";
        table += "<td>" + oi.endDate.toDateString() + "</td>";
        table += "</tr>";
    };
    // Close the table
    table += "</table>";
    // Return the table
    return table;
}

// Function to add new trip to the table
function addNewTrip() {
    // Get the value entered in the text input
    var itiName = document.getElementById("itiNameInput").value;
    var destination = document.getElementById("destinationInput").value;
    var purpose = document.getElementById("purposeInput").value;
    var startDate = document.getElementById("startDateInput").value;
    var endDate = document.getElementById("endDateInput").value;
    // Create a new object of trip
    var trip = {
        id: itineraries.length + 1,
        itiName: itiName,
        destination: destination,
        purpose: purpose,
        startDate: new Date(startDate),
        endDate: new Date(endDate)
        };
        // Push the new trip to the itineraries array
        itineraries.push(trip);
        // Call the createTable function and pass the updated itineraries array
        var table = createTable(itineraries);
        // Assign the returned table to the "myTrips" div
        document.getElementById("myTrips").innerHTML = table;
        // Clear the input fields
        document.getElementById("itiNameInput").value = "";
        document.getElementById("destinationInput").value = "";
        document.getElementById("purposeInput").value = "";
        document.getElementById("startDateInput").value = "";
        document.getElementById("endDateInput").value = "";
        // Show the trip list and hide the add trip form
        document.getElementById("showTrips").style.display = "block";
        document.getElementById("addTrip").style.display = "none";
        }

        // Function to show the add trip form
    function showAddForm(){
        document.getElementById("showTrips").style.display = "none";
        document.getElementById("addTrip").style.display = "block";
}

function cancelAdd() {
    // hide the add trip form
    document.getElementById("addTrip").style.display = "none";
    // show the showTrips div
    document.getElementById("showTrips").style.display = "block";
}