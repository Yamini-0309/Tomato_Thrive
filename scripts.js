// Scripts for Tomato Thrive Application
function showSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected section
    var sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }
}

function logout() {
    // Dummy logout function, you can implement your actual logout logic here
    alert('Logging out...');
}

// Initially show the monitor section or any default section you prefer
showSection('monitor');






let loggedIn = false;

document.addEventListener('DOMContentLoaded', function() {
    showSection('auth');
});

function showSection(sectionId) {
    const sections = document.getElementsByClassName('section');
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    document.getElementById(sectionId).style.display = 'block';

    if (sectionId === 'monitor') {
        renderCharts();
        fetchSensorData();
    }
    if (sectionId === 'info') {
        fetchTomatoInfo();
    }
}

function fetchSensorData() {
    // Simulate fetching sensor data
    setTimeout(() => {
        document.getElementById('temperature').textContent = '13'; // Replace with actual data
        document.getElementById('humidity').textContent = '90'; // Replace with actual data
    }, 1000); // Simulate delay for fetching data
}

function fetchTomatoInfo() {
    // Simulate fetching tomato information
    const tomatoTypes = ['Cherry Tomato', 'Beefsteak Tomato', 'Roma Tomato']; // Replace with actual data
    const infoContent = document.querySelector('.info-content');
    infoContent.innerHTML = '';
    tomatoTypes.forEach(type => {
        const infoCard = document.createElement('div');
        infoCard.classList.add('info-card');
        infoCard.innerHTML = `
            <h3>${type}</h3>
            <img src="https://example.com/${type.replace(/\s+/g, '-').toLowerCase()}.jpg" alt="${type}">
            <p>Description of ${type}.</p>
        `;
        infoContent.appendChild(infoCard);
    });
}

function setTemperature() {
    const temperature = document.getElementById('set-temperature').value;
    if (temperature !== '') {
        showStatus(`Set temperature to ${temperature}°C.`);
    } else {
        showStatus('Please enter a valid temperature.', true);
    }
}

function setInterval() {
    const interval = document.getElementById('set-interval').value;
    if (interval !== '') {
        showStatus(`Set sprinkler interval to ${interval} seconds.`);
    } else {
        showStatus('Please enter a valid interval.', true);
    }
}

function subscribeToNotifications() {
    // Implement notification subscription logic
    showStatus('Subscribed to notifications.');
}

function login() {
    // Simulate login logic
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'user' && password === 'password') { // Replace with actual authentication logic
        loggedIn = true;
        showSection('monitor');
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

function logout() {
    loggedIn = false;
    showSection('auth');
}

function showStatus(message, isError = false) {
    const status = document.getElementById('status');
    status.textContent = `Status: ${message}`;
    status.style.backgroundColor = isError ? '#f8d7da' : '#e3f2fd';
    status.style.color = isError ? '#721c24' : '#0d47a1';
    status.style.borderColor = isError ? '#f5c6cb' : '#90caf9';
}
// Simulated data for demonstration
let simulatedData = {
    temperature: 25,
    humidity: 60
};

// Update monitor section with simulated data
function updateMonitor() {
    document.getElementById('temperature').textContent = simulatedData.temperature;
    document.getElementById('humidity').textContent = simulatedData.humidity;

    // Update Chart.js charts (example)
    updateTemperatureChart(simulatedData.temperature);
}

// Initialize charts (example using Chart.js)
function initCharts() {
    let tempCtx = document.getElementById('tempChart').getContext('2d');
    let tempChart = new Chart(tempCtx, {
        type: 'line',
        data: {
            labels: ['1', '2', '3', '4', '5'],
            datasets: [{
                label: 'Temperature',
                data: [25, 26, 24, 27, 26],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            }
        }
    });
}

// Function to update temperature chart data
function updateTemperatureChart(newData) {
    // Update chart data (example)
    let tempChart = Chart.getChart('tempChart');
    tempChart.data.datasets[0].data.push(newData);
    tempChart.update();
}

// Update data every few seconds (example)
setInterval(function() {
    // Simulate fetching new data
    simulatedData.temperature = Math.random() * 10 + 20;
    simulatedData.humidity = Math.random() * 10 + 50;

    // Update monitor section with new data
    updateMonitor();
}, 5000);

// Initial setup
document.addEventListener('DOMContentLoaded', function() {
    initCharts();
    updateMonitor();
});
// Simulated or placeholder data
let currentSettings = {
    temperature: null,
    humidity: null,
    sprinklerInterval: null,
    lightControl: 'auto',
    filterStatus: 'clean'
};

// Function to set temperature
function setTemperature() {
    let temperature = document.getElementById('set-temperature').value;
    currentSettings.temperature = temperature;
    updateStatus(`Setting temperature to ${temperature}°C`);
    updateDataDisplay();
}

// Function to set humidity
function setHumidity() {
    let humidity = document.getElementById('set-humidity').value;
    currentSettings.humidity = humidity;
    updateStatus(`Setting humidity to ${humidity}%`);
    updateDataDisplay();
}

// Function to set sprinkler interval
function setSprinklerInterval() {
    let interval = document.getElementById('set-sprinkler-interval').value;
    currentSettings.sprinklerInterval = interval;
    updateStatus(`Setting sprinkler interval to ${interval} minutes`);
    updateDataDisplay();
}

// Function to control light
function controlLight(value) {
    currentSettings.lightControl = value;
    updateStatus(`Setting light control to ${value}`);
    updateDataDisplay();
}

// Function to save selected profile
function saveProfile() {
    let selectedProfile = document.getElementById('profile-select').value;
    // Simulated action, replace with actual save logic
    updateStatus(`Saving profile: ${selectedProfile}`);
}

// Function to update data display
function updateDataDisplay() {
    document.getElementById('current-temperature').textContent = currentSettings.temperature !== null ? currentSettings.temperature : '-';
    document.getElementById('current-humidity').textContent = currentSettings.humidity !== null ? currentSettings.humidity : '-';
    document.getElementById('current-interval').textContent = currentSettings.sprinklerInterval !== null ? currentSettings.sprinklerInterval : '-';
    document.getElementById('current-light').textContent = currentSettings.lightControl;
    document.getElementById('current-filter-status').textContent = currentSettings.filterStatus;
}

// Function to update status message
function updateStatus(message) {
    document.getElementById('status').textContent = `Status: ${message}`;
    document.getElementById('update-status').textContent = message;
    setTimeout(() => {
        document.getElementById('status').textContent = 'Status: Ready';
        document.getElementById('update-status').textContent = '';
    }, 3000); // Reset status message after 3 seconds
}

// Initialize UI with current settings (simulated for demonstration)
document.addEventListener('DOMContentLoaded', function() {
    updateDataDisplay();
});

document.addEventListener('DOMContentLoaded', function() {
    const steps = document.querySelectorAll('.guide ol li');

    steps.forEach((step, index) => {
        step.addEventListener('click', () => {
            steps.forEach(s => s.classList.remove('active'));
            step.classList.add('active');
        });
    });
});

