// List of US cities for autocomplete
const usCities = [
    "New York, NY", "Los Angeles, CA", "Chicago, IL", "Houston, TX", "Phoenix, AZ",
    "Philadelphia, PA", "San Antonio, TX", "San Diego, CA", "Dallas, TX", "San Jose, CA",
    "Austin, TX", "Jacksonville, FL", "Fort Worth, TX", "Columbus, OH", "Charlotte, NC",
    "San Francisco, CA", "Indianapolis, IN", "Seattle, WA", "Denver, CO", "Washington, DC",
    "Boston, MA", "El Paso, TX", "Nashville, TN", "Detroit, MI", "Oklahoma City, OK",
    "Portland, OR", "Las Vegas, NV", "Memphis, TN", "Louisville, KY", "Baltimore, MD",
    "Milwaukee, WI", "Albuquerque, NM", "Tucson, AZ", "Fresno, CA", "Mesa, AZ",
    "Sacramento, CA", "Atlanta, GA", "Kansas City, MO", "Colorado Springs, CO", "Miami, FL",
    "Raleigh, NC", "Omaha, NE", "Long Beach, CA", "Virginia Beach, VA", "Oakland, CA",
    "Minneapolis, MN", "Tulsa, OK", "Arlington, TX", "Tampa, FL", "New Orleans, LA",
    "Wichita, KS", "Cleveland, OH", "Bakersfield, CA", "Aurora, CO", "Anaheim, CA",
    "Honolulu, HI", "Santa Ana, CA", "Riverside, CA", "Corpus Christi, TX", "Lexington, KY",
    "Henderson, NV", "Stockton, CA", "Saint Paul, MN", "Cincinnati, OH", "St. Louis, MO",
    "Pittsburgh, PA", "Greensboro, NC", "Anchorage, AK", "Plano, TX", "Lincoln, NE",
    "Orlando, FL", "Irvine, CA", "Newark, NJ", "Toledo, OH", "Durham, NC",
    "Chula Vista, CA", "Fort Wayne, IN", "Jersey City, NJ", "St. Petersburg, FL", "Laredo, TX",
    "Madison, WI", "Chandler, AZ", "Buffalo, NY", "Lubbock, TX", "Scottsdale, AZ",
    "Reno, NV", "Glendale, AZ", "Gilbert, AZ", "Winston-Salem, NC", "North Las Vegas, NV",
    "Norfolk, VA", "Chesapeake, VA", "Garland, TX", "Irving, TX", "Hialeah, FL",
    "Fremont, CA", "Boise, ID", "Richmond, VA", "Baton Rouge, LA", "Spokane, WA",
    "Des Moines, IA", "Tacoma, WA", "San Bernardino, CA", "Modesto, CA", "Fontana, CA",
    "Santa Clarita, CA", "Birmingham, AL", "Oxnard, CA", "Fayetteville, NC", "Moreno Valley, CA",
    "Rochester, NY", "Glendale, CA", "Huntington Beach, CA", "Salt Lake City, UT", "Grand Rapids, MI",
    "Amarillo, TX", "Yonkers, NY", "Aurora, IL", "Montgomery, AL", "Akron, OH",
    "Little Rock, AR", "Huntsville, AL", "Augusta, GA", "Port St. Lucie, FL", "Grand Prairie, TX",
    "Columbus, GA", "Tallahassee, FL", "Overland Park, KS", "Tempe, AZ", "McKinney, TX",
    "Mobile, AL", "Cape Coral, FL", "Shreveport, LA", "Frisco, TX", "Knoxville, TN",
    "Worcester, MA", "Brownsville, TX", "Vancouver, WA", "Fort Lauderdale, FL", "Sioux Falls, SD",
    "Ontario, CA", "Chattanooga, TN", "Providence, RI", "Newport News, VA", "Rancho Cucamonga, CA",
    "Santa Rosa, CA", "Peoria, AZ", "Oceanside, CA", "Elk Grove, CA", "Salem, OR",
    "Pembroke Pines, FL", "Eugene, OR", "Garden Grove, CA", "Cary, NC", "Fort Collins, CO",
    "Corona, CA", "Springfield, MO", "Jackson, MS", "Alexandria, VA", "Hayward, CA",
    "Clarksville, TN", "Lakewood, CO", "Lancaster, CA", "Salinas, CA", "Palmdale, CA",
    "Hollywood, FL", "Springfield, MA", "Macon, GA", "Kansas City, KS", "Sunnyvale, CA",
    "Pomona, CA", "Killeen, TX", "Escondido, CA", "Pasadena, TX", "Naperville, IL",
    "Bellevue, WA", "Joliet, IL", "Murfreesboro, TN", "Midland, TX", "Rockford, IL",
    "Paterson, NJ", "Savannah, GA", "Bridgeport, CT", "Torrance, CA", "McAllen, TX",
    "Syracuse, NY", "Surprise, AZ", "Denton, TX", "Roseville, CA", "Thornton, CO",
    "Miramar, FL", "Pasadena, CA", "Mesquite, TX", "Olathe, KS", "Dayton, OH",
    "Carrollton, TX", "Waco, TX", "Orange, CA", "Fullerton, CA", "Charleston, SC",
    "West Valley City, UT", "Visalia, CA", "Hampton, VA", "Gainesville, FL", "Warren, MI",
    "Coral Springs, FL", "Cedar Rapids, IA", "Round Rock, TX", "Sterling Heights, MI", "Kent, WA",
    "Columbia, MO", "Santa Clara, CA", "New Haven, CT", "Stamford, CT", "Concord, CA",
    "Elizabeth, NJ", "Athens, GA", "Thousand Oaks, CA", "Lafayette, LA", "Simi Valley, CA",
    "Topeka, KS", "Norman, OK", "Fargo, ND", "Wilmington, NC", "Abilene, TX",
    "Odessa, TX", "Columbia, SC", "Pearland, TX", "Victorville, CA", "Hartford, CT",
    "Vallejo, CA", "Allentown, PA", "Berkeley, CA", "Richardson, TX", "Arvada, CO",
    "Ann Arbor, MI", "Rochester, MN", "Cambridge, MA", "Sugar Land, TX", "Lansing, MI",
    "Evansville, IN", "College Station, TX", "Fairfield, CA", "Clearwater, FL", "Beaumont, TX",
    "Independence, MO", "Provo, UT", "West Jordan, UT", "Murrieta, CA", "Palm Bay, FL",
    "El Monte, CA", "Carlsbad, CA", "North Charleston, SC", "Temecula, CA", "Clovis, CA",
    "Springfield, IL", "Meridian, ID", "Westminster, CO", "Costa Mesa, CA", "High Point, NC",
    "Manchester, NH", "Pueblo, CO", "Lakeland, FL", "Pompano Beach, FL", "West Palm Beach, FL",
    "Antioch, CA", "Everett, WA", "Downey, CA", "Lowell, MA", "Centennial, CO",
    "Elgin, IL", "Richmond, CA", "Peoria, IL", "Broken Arrow, OK", "Miami Gardens, FL",
    "Billings, MT", "Jurupa Valley, CA", "Sandy Springs, GA", "Gresham, OR", "Lewisville, TX",
    "Hillsboro, OR", "Ventura, CA", "Greeley, CO", "Inglewood, CA", "Waterbury, CT",
    "League City, TX", "Santa Maria, CA", "Tyler, TX", "Davie, FL", "Lakewood, NJ",
    "Daly City, CA", "Boulder, CO", "Allen, TX", "West Covina, CA", "Sparks, NV",
    "Wichita Falls, TX", "Green Bay, WI", "San Mateo, CA", "Norwalk, CA", "Rialto, CA",
    "Las Cruces, NM", "Chico, CA", "El Cajon, CA", "Burbank, CA", "South Bend, IN",
    "Renton, WA", "Vista, CA", "Davenport, IA", "Edinburg, TX", "Tuscaloosa, AL",
    "Carmel, IN", "Spokane Valley, WA", "San Angelo, TX", "Vacaville, CA", "Clinton, MI",
    "Bend, OR", "Woodbridge, NJ", "San Marcos, CA", "Jackson, TN", "Hesperia, CA",
    "Malden, MA", "Missoula, MT", "Plymouth, MN", "Bolingbrook, IL", "Perris, CA",
    "Apple Valley, CA", "Medford, OR", "Folsom, CA", "Gulfport, MS", "Kirkland, WA",
    "Rock Hill, SC", "Pleasanton, CA", "Bristol, CT", "Upland, CA", "Bloomington, MN",
    "Tustin, CA", "Alhambra, CA", "Fishers, IN", "Kenosha, WI", "Nampa, ID",
    "Baldwin Park, CA", "Chino Hills, CA", "Alameda, CA", "Chino, CA", "Greenville, NC",
    "Parma, OH", "Dearborn, MI", "Monroe, MI", "Plantation, FL", "Burbank, IL",
    "Torrington, CT"
];

function initAutocomplete() {
    $(".location-input").autocomplete({
        source: usCities
    });
}

function addLocationField() {
    const locationDiv = document.createElement('div');
    locationDiv.className = 'location mb-3';

    // Get the current number of location fields to use as the index
    const locationIndex = document.querySelectorAll('.location-input').length;

    // Create the input field with a unique ID
    const locationInput = document.createElement('input');
    locationInput.type = 'text';
    locationInput.id = `location-${locationIndex}`; // Unique ID for each input field
    locationInput.name = 'location[]';
    locationInput.placeholder = 'Start typing location...';
    locationInput.className = 'form-control location-input mb-2';

    // Append the input field to the div
    locationDiv.appendChild(locationInput);

    // Append the location div to the locations container
    document.getElementById('locations').appendChild(locationDiv);

    // Initialize jQuery UI Autocomplete for the new location input
    initAutocomplete();
}


// Enhanced validation function for itinerary form
function validateItineraryForm() {
    const startDate = new Date(document.getElementById('start-date').value);
    const endDate = new Date(document.getElementById('end-date').value);
    if (endDate < startDate) {
        alert('End date must be after start date.');
        return false;
    }

    const budget = parseFloat(document.getElementById('budget').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
    if (expenses > budget) {
        alert('Estimated expenses should not exceed the total budget.');
        return false;
    }

    // Add more validation checks as needed
    return true;
}

// Function to save the itinerary to local storage
// Function to save the itinerary to local storage
function saveItinerary(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    console.log('Save Itinerary button clicked'); // Debugging

    if (!validateItineraryForm()) {
        console.log('Form validation failed'); // Debugging
        return; // Stop the form submission if validation fails
    }

    const itinerary = {
        tripName: document.getElementById('trip-name').value,
        startDate: document.getElementById('start-date').value,
        endDate: document.getElementById('end-date').value,
        numDays: document.getElementById('num-days').value,
        numPeople: document.getElementById('num-people').value,
        modeOfTravel: document.getElementById('mode-of-travel').value,
        travelDate: document.getElementById('travel-date').value,
        travelDetails: document.getElementById('travel-details').value,
        currency: document.getElementById('currency').value,
        budget: document.getElementById('budget').value,
        expenses: document.getElementById('expenses').value,
        locations: []
    };

    const locationInputs = document.querySelectorAll('.location-input');
    locationInputs.forEach(input => {
        console.log("Location input:", input.value); // Debugging
        itinerary.locations.push(input.value);
    });

    console.log('Itinerary data to save:', itinerary); // Debugging

    // Save the itinerary object to local storage
    localStorage.setItem('itinerary', JSON.stringify(itinerary));

    // Redirect to the view itinerary page
    window.location.href = 'view-itinerary.html';
}



// Event listener for adding a new location
document.getElementById('add-location').addEventListener('click', addLocationField);

// Event listener for form submission to save itinerary
document.getElementById('itinerary-form').addEventListener('submit', saveItinerary);

// Initialize jQuery UI Autocomplete on page load
document.addEventListener('DOMContentLoaded', initAutocomplete);
$(document).ready(function() {
    initAutocomplete();
});


// Function to save the itinerary to local storage
function saveItinerary(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    console.log('Save Itinerary button clicked'); // Debugging

    if (!validateItineraryForm()) {
        console.log('Form validation failed'); // Debugging
        return; // Stop the form submission if validation fails
    }

    const itinerary = {
        tripName: document.getElementById('trip-name').value,
        startDate: document.getElementById('start-date').value,
        endDate: document.getElementById('end-date').value,
        numDays: document.getElementById('num-days').value,
        numPeople: document.getElementById('num-people').value,
        modeOfTravel: document.getElementById('mode-of-travel').value,
        travelDate: document.getElementById('travel-date').value,
        travelDetails: document.getElementById('travel-details').value,
        currency: document.getElementById('currency').value,
        budget: document.getElementById('budget').value,
        expenses: document.getElementById('expenses').value,
        locations: []
    };

    const locationInputs = document.querySelectorAll('.location-input');
    locationInputs.forEach(input => {
        itinerary.locations.push(input.value);
    });

    console.log('Itinerary data to save:', itinerary); // Debugging

    // Save the itinerary object to local storage
    localStorage.setItem('itinerary', JSON.stringify(itinerary));

    // Redirect to the view itinerary page
    window.location.href = 'view-itinerary.html';
}

// Event listener for form submission to save itinerary
document.getElementById('itinerary-form').addEventListener('submit', saveItinerary);


/// Function to handle sharing the itinerary
function shareItinerary() {
    // Retrieve the itinerary data from local storage
    const itinerary = localStorage.getItem('itinerary');
    if (itinerary) {
        const itineraryData = JSON.parse(itinerary);

        // Prepare the data to be shared
        const shareData = {
            title: itineraryData.tripName,
            text: `Check out my trip itinerary for ${itineraryData.tripName}!\n
            Dates: ${itineraryData.startDate} to ${itineraryData.endDate}\n
            Number of Days: ${itineraryData.numDays}\n
            Number of People: ${itineraryData.numPeople}\n
            Mode of Travel: ${itineraryData.modeOfTravel}\n
            Total Budget: ${itineraryData.currency} ${itineraryData.budget}`,
            url: window.location.href // Optionally, you can include the current page URL
        };

        // Check if the Web Share API is supported by the browser
        if (navigator.share) {
            navigator.share(shareData)
                .then(() => console.log('Itinerary shared successfully!'))
                .catch((error) => console.log('Error sharing itinerary:', error));
        } else {
            alert('Web Share API is not supported in your browser. You can manually copy the itinerary details and share them.');
            console.log('Fallback: Web Share API is not supported');
            // Provide a fallback option here, like displaying a modal with shareable content
        }
    } else {
        alert('No itinerary found to share!');
    }
}

// Event listener for the share button
document.getElementById('share-itinerary').addEventListener('click', shareItinerary);
// Export the itinerary as a PDF using jsPDF
document.getElementById('export-pdf').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const itinerary = JSON.parse(localStorage.getItem('itinerary'));
    if (itinerary) {
        // Add main details
        doc.text(`Trip Name: ${itinerary.tripName}`, 10, 10);
        doc.text(`Start Date: ${itinerary.startDate}`, 10, 20);
        doc.text(`End Date: ${itinerary.endDate}`, 10, 30);
        doc.text(`Total Budget: $${itinerary.budget}`, 10, 40);
        doc.text(`Estimated Expenses: $${itinerary.expenses}`, 10, 50);
        doc.text('Locations & Activities:', 10, 60);

        // Add each location, spacing each entry by 10 units on the y-axis
        let yOffset = 70;  // Starting point for the locations
        itinerary.locations.forEach((location, index) => {
            if (yOffset > 280) {  // if yOffset exceeds page height, add a new page
                doc.addPage();
                yOffset = 10;  // Reset yOffset for the new page
            }
            doc.text(`${index + 1}. ${location}`, 10, yOffset);
            yOffset += 10;  // Increase yOffset for next item
        });

        // Save the PDF with the filename 'itinerary.pdf'
        doc.save('itinerary.pdf');
    } else {
        console.error('No itinerary found in localStorage');
        alert('No itinerary found to export.');
    }
});

