**Text-to-Image-Generator**<br><br>
The Text-to-Image Generator is a simple web application that allows users to generate images from text prompts using a machine learning model hosted on the Hugging Face API. The app fetches images based on the user's input text and displays the generated image. This project demonstrates my ability to integrate APIs, create dynamic web pages, and provide an interactive user experience.

**Live Project Demo** https://text2imggen.netlify.app/

**Problem Statement**<br>
Users often face limitations in finding or visualizing images based on textual descriptions. Traditional image search methods may not always meet the user's creative needs. This application provides a solution to generate personalized images based on user input, enabling a richer visual experience.

**Challenge** Users wanted a quick, personalized way to generate images based on text descriptions with ease, allowing them to visualize creative ideas or scenarios from their own words.

**Solutions**<br>
     1) Text-to-Image Conversion: Generate images based on any given text description using Hugging Face’s model.<br>
     2) Real-Time Feedback: While the query is being processed, the app dynamically loads an image for an engaging user experience.<br>
     3) Ease of Use: The app has a simple and intuitive interface, making it easy for users of all technical backgrounds to use.

**Features**
  - Text Prompt: Input a text prompt and generate an image using Hugging Face's Text-to-Image model.
  - Clear Button: Clear both the input field and the generated image for a fresh start.
  - Real-Time Image Loading: Visual feedback as the image is being generated.
<br>

**Tech Stack**<br>
    1) HTML: Used for structuring the web page.<br>
    2) CSS: Used for styling the app's interface.<br>
    3) JavaScript: Used for dynamic functionality and API integration.<br>
    4) Hugging Face API: Used to generate images from the provided text.<br>

<br>

**How It Works**<br>
  - Input Text Description: The user enters a description of an image (e.g., "a cat playing with a ball") into the input field.<br>
  - Generate Image: The user clicks on the “Generate Image” button to send the description to Hugging Face's API.<br>
  - Display Image: The generated image is displayed on the page as soon as it is returned by the API.<br>
  - Clear Input/Output: The user can clear the input field and the displayed image by clicking the "Clear" button.<br><br>

**API Information**<br>
   - The app utilizes the Hugging Face Text-to-Image API to generate images based on user input.<br>
   - The API uses state-of-the-art machine learning models to generate images from descriptive text.<br><br>


**Screenshots** <br> 

Screenshot 1: <br>
Main page showing the text input field and the "Generate Image" button.
<img src="https://github.com/user-attachments/assets/90f70bc6-a0d9-4b60-82c9-bffaabea34b8" alt="image" width="700" height="500"><br>


Screenshot 2: <br>
The generated image displayed on the page.
<img src="https://github.com/user-attachments/assets/4b38ac5b-be11-44ac-b4f5-6d4d84afc799" alt="image" width="700" height="500"><br>


**Future Scope**<br>
  1) Advanced User Interface: Add options to customize the generated image (e.g., image size, styles).<br>
  2) Custom Models: Integrate additional text-to-image models for varied results.<br> <br>

**Setup Instructions** <br>

Clone the Repository: git clone https://github.com/AishwaryaCodes/Text-to-Image-Generator.git<br>

Install Dependencies: npm install<br>

Run the Application: npm start<br>

