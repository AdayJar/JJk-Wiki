# Jujutsu Kaisen Fan Website

This project is a fan-made website dedicated to the anime and manga series **Jujutsu Kaisen**. The site provides information about the story, main characters, and author, as well as details on the series' history, top characters, and release dates for future anime seasons.

# JJK page

## Features

### 1. Navigation Bar
- A responsive navigation bar allows users to switch between pages easily. The available pages include:
  - Main Page
  - Characters
  - Gege Akutami (Author)
  - History of Creation
  - Anime Season 3
  - Popularity Ranking
- **Logout Button**: Users can log out using a dedicated button.
- **Clock Display**: Shows the current time using an icon and updates automatically.

### 2. Welcome Popup
- On loading the page, a popup appears where users can enter their name.
- Upon submission, a personalized greeting appears, making the website feel interactive.

### 3. Image Carousel
- A slideshow of Jujutsu Kaisen images with captions such as "Trio," "Gojo vs Sukuna," and "Itadori Brothers."
- Users can navigate through the images using **Next** and **Previous** buttons.

### 4. Background Information
- The "History" section explains the world of Jujutsu Kaisen, introducing the main setting and plot points.
- Contains links to information about key characters like **Yuji Itadori**, **Sukuna**, and **Satoru Gojo**.

### 5. Characters Section
- Displays character cards for main characters: **Yuji Itadori**, **Megumi Fushiguro**, **Nobara Kugisaki**, and **Satoru Gojo**.
- Each card contains:
  - An image of the character
  - A short description
  - A "More Information" button that links to a detailed page for each character.

## File Structure

- **index.html**: The main page of the website, containing sections for navigation, character information, and a welcome popup.
- **styles.css**: Contains the styling for the website, ensuring a clean and visually appealing layout.
- **translate.js**: Manages language switching or translation functionalities.
- **time.js**: Displays the current time on the website.
- **greeting.js**: Handles the welcome popup, including the `welcomeStudent()` function to greet users by name.



# JJK2 page

## Features

### 1. Navigation Bar
- **Purpose**: Provides links to different sections of the site, including the main page, characters, series information, and upcoming content.
- **Key Functions**:
  - **Links**: Users can navigate to pages like "Characters" and "Anime Season 3."
  - **Collapsible Menu**: The menu collapses on smaller screens for a mobile-friendly design.
  - **Logout Button**: Allows users to log out.
  - **Clock Display**: Displays the current time using JavaScript.

### 2. Character Information Cards
- **Purpose**: Showcases the main characters from **Jujutsu Kaisen**, each with a brief description.
- **Key Functions**:
  - **Image and Description**: Each card includes an image, the character’s role, rank, and abilities.
  - **Links for More Information**: Users can click to view detailed character profiles.

### 3. YouTube Video Embeds
- **Purpose**: Enhances the user experience by embedding relevant **Jujutsu Kaisen** videos.
- **Key Functions**:
  - **Responsive Video**: Videos are embedded using iframes and adjust to different screen sizes.
  - **Directly Related Content**: Videos showcase scenes or content related to the series.

### 4. Image Carousel
- **Purpose**: Displays a slideshow of images related to **Jujutsu Kaisen**.
- **Key Functions**:
  - **Captions**: Each slide includes a caption describing the scene or characters.
  - **Navigation Buttons**: Users can navigate between slides using **Next** and **Previous** buttons.

### 5. Popup Modals for Social Media Registration
- **Purpose**: Allows users to "register" for Facebook, Twitter, and Instagram within modal popups.
- **Key Functions**:
  - **Registration Form**: Each modal includes a form to capture the user’s name and email.
  - **Success Message**: Displays a thank-you message upon submission.

### 6. Feedback Form
- **Purpose**: Collects user feedback on the site.
- **Key Functions**:
  - **Form Fields**: Users can enter their name, feedback, and a rating from 1 to 5.
  - **Form Validation**: JavaScript (in `validation.js`) ensures fields are completed before submission.

### 7. Footer Section
- **Purpose**: Provides contact information, credits, and links to social media.
- **Key Functions**:
  - **Developer Credits**: Lists the developers who contributed to the project.
  - **Contact Details**: Includes a contact email.
  - **Social Media Links**: Links to social media pages.

## File Structure

- **index.html**: Main page containing navigation, character info, and various sections.
- **JJK2.html**: Additional content page focusing on specific character information.
- **styles.css / styles2.css**: Custom styles for layout, colors, and typography.
- **modal.js**: JavaScript for handling social media registration popups.
- **time.js**: Displays the current time on the site.
- **greeting.js**: Controls the welcome popup when the page loads.
- **validation.js**: Validates the feedback form before submission.


# 3 Page
# Gege Akutami - Biography and Career

This page provides a dedicated biography and career overview of **Gege Akutami**, the creator of *Jujutsu Kaisen*. The page includes dynamic styling, interactive elements, and additional information sections to engage users.

## Features and Functions

### 1. Navigation Bar
- **Purpose**: Provides quick access to different sections of the site.
- **Key Functions**:
  - **Links**: Allows navigation to pages like "Main," "Characters," "History of Creation," "Popularity Ranking," and "Anime Season 3."
  - **Collapsible Menu**: Optimized for mobile devices, the menu collapses on smaller screens.

### 2. Biography Section
- **Purpose**: Displays the biography of Gege Akutami with an image and introductory text.
- **Key Functions**:
  - **Image**: Includes a picture of Akutami to visually introduce the artist.
  - **Dynamic Text**: The text in this section can change color when interacting with a button.

### 3. Dynamic Styling Buttons
- **Purpose**: Allows users to interactively change the background and text color for a personalized experience.
- **Key Functions**:
  - **Background Color Toggle**: The **Change Background Color** button switches the background between light and dark modes.
  - **Text Color Toggle**: The **Change Text Color** button changes the color of specific text in the biography from red to blue and vice versa.

### 4. FAQ Accordion
- **Purpose**: Provides additional information about Akutami’s inspirations, themes, and future projects in a collapsible format.
- **Key Functions**:
  - **Toggle Display**: Each FAQ item (e.g., "Inspirations and Style," "Philosophy and Themes") can be expanded or collapsed by clicking on the question.
  - **Expandable Sections**: The answers are initially hidden and appear only when the user clicks on the question.

### 5. Footer Section
- **Purpose**: Shows credits and date information at the bottom of the page.
- **Key Functions**:
  - **Developer Credits**: Lists contributors to the project.
  - **Date and Rights**: Displays the date and states that all rights are reserved.

## JavaScript Functionalities

1. **Background Color Toggle**:
   - Changes the background and text colors of the entire page between light and dark modes.
   - Code:
     ```javascript
     document.getElementById('colorChangeButton').addEventListener('click', function() {
         document.body.classList.toggle('bg-light');
         document.body.classList.toggle('bg-dark');
         document.body.classList.toggle('text-dark');
         document.body.classList.toggle('text-white');
     });
     ```

2. **Text Color Toggle**:
   - Changes the color of the biography text between red and blue.
   - Code:
     ```javascript
     document.getElementById('textChangeButton').addEventListener('click', function() {
         const dynamicText = document.getElementById('dynamicText');
         dynamicText.style.color = dynamicText.style.color === 'red' ? 'blue' : 'red';
     });
     ```

3. **FAQ Accordion**:
   - Toggles the display of each FAQ answer section when the question is clicked.
   - Code:
     ```javascript
     const faqItems = document.querySelectorAll('.faq-item');
     faqItems.forEach(item => {
         const question = item.querySelector('.faq-question');
         const answer = item.querySelector('.faq-answer');
         question.addEventListener('click', () => {
             answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
         });
     });
     ```

## Setup and Usage

1. Open the HTML file in your browser.
2. Use the navigation bar to explore other sections of the site.
3. Click **Change Background Color** or **Change Text Color** to customize the page's appearance.
4. Expand and collapse the FAQ items to read more about Akutami's inspirations, themes, and projects.

## Dependencies

- **Bootstrap 4** for layout and styling.
- **jQuery** for potential additional interactions.
  
## License

This page is created for educational purposes and is not affiliated with or endorsed by Gege Akutami or the creators of *Jujutsu Kaisen*.


# 4 Page
# Creation History and Release Dates of Jujutsu Kaisen

This HTML document contains information about the creation and release dates of the manga "Jujutsu Kaisen." It includes dynamic functions to enhance user interaction.

## Functions

### 1. Background Color Change
- **Button:** "Change Background Color"
- **Description:** When this button is clicked, the background color of the page changes to one of the predefined colors. The colors cycle through a set array.

### 2. Toggle Hidden Content
- **Button:** "Toggle Hidden Content"
- **Description:** Clicking this button toggles the visibility of additional hidden text. This allows users to control the display of extra content.

### 3. Image and Caption
- **Image:** Image of the main characters of "Jujutsu Kaisen"
- **Description:** This image is presented at the top of the page with a caption containing information about the publication of the first volume of the manga.

### 4. Creation Sections
- **Sections:**
  - **Creation History:** History of the manga's creation.
  - **Development Process:** The development process.
  - **Release Dates and Milestones:** Important dates and achievements.
  - **Future Plans:** Future plans for the manga.

### 5. Footer
- **Information:** Contains information about the authors and copyright.
- **Date:** Indicates the date when the document was created or updated (September 2024).

## Technologies Used
- **HTML5:** The basic structure of the page.
- **Bootstrap 4:** For styling and responsiveness of the interface.
- **JavaScript:** For dynamic interaction with page elements.



# 5 Page
# Jujutsu Kaisen Wiki

Welcome to the Jujutsu Kaisen Wiki! This website serves as a comprehensive resource for fans of the series, providing information about characters, the story, the creator, and much more.

## Features

### Navigation Bar
- **Characters**: Explore detailed information about the various characters in the Jujutsu Kaisen series.
- **Main**: Read about the main storyline and plot points of the series.
- **Gege Akutami**: Learn about the creator of Jujutsu Kaisen and their background.
- **History of Creation**: Discover the history and timeline of how Jujutsu Kaisen was created.
- **Anime Season 3**: Get updates and details about the third season of the anime.
- **Popularity Ranking**: View the ranking of characters based on their popularity among fans.

### Sections
- **Info**: An overview of the Jujutsu Kaisen series, including its themes and main characters.
- **Ranking**: A feature that allows you to filter characters by their status (Alive/Dead) and view a list of popular characters along with images and descriptions.

### Character Cards
- Each character card includes:
  - **Image**: A picture of the character.
  - **Title**: The character's name and rank.
  - **Description**: A brief overview of the character's abilities and significance in the story.
  - **Rating**: A star rating system that allows users to rate their favorite characters.

### Subscription Popup
- Users can subscribe to updates by entering their name and email address through a simple popup form.

### Footer
- The footer contains credits to the authors of the wiki and the date of the last update.

## Usage
Simply navigate through the various sections to explore content related to Jujutsu Kaisen. You can filter the character rankings, view detailed information, and subscribe for updates.

Enjoy your time exploring the world of Jujutsu Kaisen!



# Page 5

## Overview
The Jujutsu Kaisen WIKI is a web application that provides information about the popular Japanese manga series "Jujutsu Kaisen." It features character rankings, a subscription form, and an interactive rating system.

## Features

### 1. Navigation Bar
- Purpose: Provides easy access to different sections of the wiki.
- Components:
  - Links to major sections: Characters, Main, Gege Akutami, History of Creation, Anime Season 3, Popularity Ranking.
  - Responsive design that collapses on smaller screens.

### 2. Character Ranking Section
- Purpose: Displays a list of characters with their details and status.
- Functionality:
  - Status Filter: Users can filter characters by status (Alive, Dead, All).
  - Cards: Each character is presented in a card format showing:
    - Name
    - Image
    - Description
    - Star rating system for user ratings.

### 3. Star Rating System
- Purpose: Allows users to rate characters.
- Functionality:
  - Clickable stars that change color based on selection.
  - Displays the selected rating visually on the character card.

### 4. Subscription Popup
- Purpose: Allows users to subscribe to updates.
- Functionality:
  - Popup form for name and email input.
  - Form validation to ensure that the name is entered and the email is properly formatted.
  - Popup can be opened and closed by clicking designated buttons or the overlay.

### 5. Dynamic Date and Time Display
- Purpose: Shows the current date and time at the top of the page.
- Functionality:
  - Updates every minute to reflect the current time.

### 6. Side Navigation
- Purpose: Provides quick links to different sections of the page.
- Functionality:
  - Visible on larger screens for easy navigation.
  - Supports keyboard navigation (up and down arrow keys).

### 7. Responsive Design
- Purpose: Ensures the website is accessible on various devices.
- Functionality:
  - Uses Bootstrap for layout and responsiveness.
  - Adjusts navigation and layout elements based on screen size.

## Technologies Used
- HTML5: Structure of the web page.
- CSS: Custom styles and responsive design via Bootstrap.
- JavaScript: Interactivity, including form validation, filtering, and dynamic updates.

## Installation
To run this application loca



# Page 6

## Overview
The Jujutsu Kaisen WIKI is a web application designed to provide detailed information about the popular Japanese manga series "Jujutsu Kaisen." It includes sections on the upcoming season, character information, trailers, and more, all with an engaging and visually appealing interface.

## Features

### 1. Navigation Bar
- Purpose: Allows users to easily navigate between different sections of the wiki.
- Components:
  - Links to essential pages: Characters, Main, Gege Akutami, History of Creation, Anime Season 3, Popularity Ranking.
  - Responsive behavior with a collapsible design on smaller screens.

### 2. Date and Time Display
- Purpose: Shows the current date and time at the top of the page.
- Functionality:
  - Updates every minute to reflect the current time, providing users with a live timestamp.

### 3. Side Navigation
- Purpose: Provides quick access to various sections of the page.
- Functionality:
  - Visible on larger screens, includes links to top, introduction, main info, and about sections.
  - Supports keyboard navigation (up and down arrow keys) for improved accessibility.

### 4. Main Information Sections
- Purpose: Offers in-depth information about "Jujutsu Kaisen" and its characters.
- Sections:
  - Introduction: Overview of the series and season 3 details.
  - Main Info: Highlights key elements of the upcoming season, including character arcs and important locations (e.g., the Prison Realm).

### 5. Image Carousel for Trailers
- Purpose: Displays a carousel of images related to the upcoming season.
- Functionality:
  - Allows users to cycle through teaser images from season 3.
  - Interactive controls for navigating between slides.

### 6. Responsive Design
- Purpose: Ensures the website is accessible across various devices.
- Functionality:
  - Utilizes Bootstrap for layout and responsiveness.
  - Adapts navigation and content layout based on screen size.

## Technologies Used
- HTML5: Structure of the web page.
- CSS: Custom styles and responsive design via Bootstrap.
- JavaScript: Handles dynamic functionalities such as the date and time display, keyboard navigation, and image carousel controls.

## Installation
To run this application locally, simply download the HTML file and open it in a web browser. Ensure an active internet connection for Bootstrap and Google Fonts to load properly.

## License
This project is licensed under the MIT License.

## Contributors
- Nurkassym Bolat
- Aday Jarzhanov
- Rakhat Tuknazarov