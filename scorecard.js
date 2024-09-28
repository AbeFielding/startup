// scorecard.js

// Function to fetch weather data based on course selection
async function fetchWeather(course) {
    let location;
    
    // Set location based on selected course
    switch (course) {
        case 'hospital':
            location = 'Provo, Utah';
            break;
        case 'jolleys':
            location = 'Springville, Utah';
            break;
        case 'dragonfly':
            location = 'Lehi, Utah';
            break;
        case 'artdye':
            location = 'American Fork, Utah';
            break;
        default:
            location = 'Provo, Utah'; // Default location
    }

    const apiKey = '3837f7f4bd1f4e4bb7e02213242809'; // Your API key
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Update weather information on the page
        const tempElement = document.getElementById('current-temp');
        const windElement = document.getElementById('current-wind');
        
        if (data && data.current) {
            tempElement.textContent = `${data.current.temp_c}°C`;
            windElement.textContent = `${data.current.wind_mph} mph`;
        } else {
            tempElement.textContent = 'N/A';
            windElement.textContent = 'N/A';
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Function to handle course selection change
function handleCourseChange() {
    const courseSelect = document.getElementById('course-select');
    const selectedCourse = courseSelect.value;
    
    // Fetch weather for the selected course
    fetchWeather(selectedCourse);
}

// Event listener for course selection change
document.getElementById('course-select').addEventListener('change', handleCourseChange);

// Initial fetch for default course (e.g., Hospital)
fetchWeather('hospital');
