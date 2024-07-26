# Vehi_Track

A web application that displays a vehicle moving on a map using Google Maps. The application shows the vehicle's current location and its path in real-time.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Developer Info](#developer-info)
- [License](#license)

## Description

This project is designed to simulate the movement of a vehicle on a map. It displays the vehicle's current location and updates its position in real-time, showing the route it has taken. Clicking on the vehicle icon provides details about the vehicle's configuration, including latitude, longitude, and timestamp of the last update.

## Features

- **Real-time Vehicle Tracking**: Displays a vehicle moving on a map in real-time.
- **Route Display**: Shows the path the vehicle has taken.
- **Vehicle Info Window**: Clicking on the vehicle icon displays its configuration details.
- **Customizable**: Easy to extend and modify for different use cases.

## Tech Stack

- **Frontend**: HTML, CSS, EJS, JavaScript, Google Maps API
- **Backend**: Node.js, Express
- **Deployment**: Vercel

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- A Google Maps API key.

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/aditya2131/Vehi_Track.git
   cd Vehi_Track

2. **Install Dependencies**
   ```bash
   npm install

3. **Add Google Maps API Key**
   Replace YOUR_GOOGLE_MAPS_API_KEY in views/index.ejs with your actual Google Maps API key.

4. **Run the Application Locally**
   ```bash
   node app.js

   Open your browser and navigate to http://localhost:3000 to see the application in action.



## Usage
- Viewing the Map: Open your browser and go to http://localhost:3000 (or the Vercel URL after deployment).
- Interacting with the Vehicle: Click on the vehicle icon to see its configuration details, including the latitude, longitude, and timestamp of the last update.

## Developer Info
- Name: [Aditya Mishra]
- Email: [adityamishra.me@gmail.com]
- GitHub: https://github.com/aditya2131
- LinkedIn: https://www.linkedin.com/in/aditya-mishra-6k/

## License
This project is licensed under the MIT License. See the LICENSE file for details.