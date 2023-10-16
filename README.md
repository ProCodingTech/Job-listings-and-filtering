Job Listing Page
This is a web application that allows users to view, filter, and manage job listings. Users can view job listings, filter them by various criteria, click on a job to see its details, add new jobs, and delete existing jobs.

Table of Contents
Project Overview
Features
Implementation
Design
Getting Started
Usage
Contributing
License
Features
Responsive Design: The project provides an optimal layout for both mobile and desktop devices.
Hover States: Interactive elements on the page have hover states for enhanced user experience.
Filtering: Users can filter job listings based on categories such as role, level, languages, and tools.
Job Details Popup: Clicking on a job listing opens a popup that displays job details.
Add New Job: Users can add new jobs via a popup window. Input fields are validated.
Delete Job: Users can delete jobs from the front-end job listing.
Implementation
The project is implemented using HTML, CSS, and jQuery. It uses the data provided in the data.json file to dynamically load job listings.

Option 2 was chosen for data handling, where the data is loaded from the data.json file and filtered based on user selections.

Design
The project design is based on the provided design assets in the /design folder. It includes both mobile and desktop versions. While the designs are in JPG format, we've adapted them to create a responsive web application with best practices for font size, padding, and margin.

Colors
Primary: Desaturated Dark Cyan (hsl(180, 29%, 50%))
Neutral:
Light Grayish Cyan (Background): hsl(180, 52%, 96%)
Light Grayish Cyan (Filter Tablets): hsl(180, 31%, 95%)
Dark Grayish Cyan: hsl(180, 8%, 52%)
Very Dark Grayish Cyan: hsl(180, 14%, 20%)
Typography
Body Copy: Font size 15px
Headings:
Family: League Spartan
Weights: 500, 700
Getting Started
To run the project locally, follow these steps:

Clone the repository to your local machine.
Open the index.html file in your web browser.
Usage
View job listings and filter them using the filter tablets on the right side (desktop) or bottom (mobile).
Click on a job listing to see its details in a popup.
To add a new job, click the Add (+) button in the bottom right corner, and follow the on-screen instructions.
To delete a job, simply click on the job listing you want to remove.
Contributing
Contributions to this project are welcome. Please follow the standard GitHub workflow:

Fork the project.
Create a new branch for your feature or bug fix.
Make your changes.
Test thoroughly.
Submit a pull request.
