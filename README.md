<div align="center" style="position: relative; width: 100%; max-width: 900px; margin: auto;">
  <!-- Full-width background image -->
  <img src="https://github.com/AishwaryaCodes/Text-to-Image-Generator/blob/main/ImgGeneratorImg.webp" alt="Text-to-Image Generator" style="width: 100%; height: auto; border-radius: 10px; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); filter: brightness(0.7);">

  <!-- Overlay text -->
  <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; color: #fff; font-family: Arial, sans-serif;">
    <h1 style="font-size: 3.5rem; margin: 0; font-weight: bold;">Text-to-Image Generator</h1>
    <p style="font-size: 1.5rem; margin-top: 10px; max-width: 800px; line-height: 1.6;">
      Generate stunning images from text prompts using Hugging Face API.
    </p>
  </div>
</div>

---

# 🌟 **Overview**

The **Text-to-Image Generator** is a simple yet powerful web application that converts text descriptions into images. Powered by the Hugging Face API, it delivers an intuitive interface and a seamless user experience for creative image generation.

[**Live Demo**](https://text2imggen.netlify.app/)

---

## 💡 **Problem Statement**

Users often face limitations in visualizing or finding images that match specific textual descriptions. This app solves that challenge by dynamically generating images based on user-provided prompts, enabling a creative and personalized experience.

---

## 🧩 **Solution**

1. **Text-to-Image Conversion:** Generate unique images from textual descriptions using Hugging Face’s state-of-the-art models.
2. **Real-Time Feedback:** Provide visual feedback as the image is being generated.
3. **Ease of Use:** A clean and intuitive UI ensures accessibility for all users.

---

# 🚀 **Key Features**

- **Dynamic Image Generation:** Input text prompts to create custom images.
- **Clear Button:** Quickly reset input fields and output images for a fresh start.
- **User-Friendly Interface:** Designed for simplicity and efficiency.
- **Real-Time Updates:** Engages users with dynamic feedback while processing.

---

# 🛠️ **Tech Stack**

| Technology         | Description                                                     |
|--------------------|-----------------------------------------------------------------|
| **HTML**           | Structures the application's web interface.                    |
| **CSS**            | Adds styles and aesthetics to the interface.                   |
| **JavaScript**     | Handles logic and API integration for dynamic interactions.    |
| **Hugging Face API**| Uses advanced machine learning models for image generation.    |

---

# 📂 **Project Structure**

```plaintext
├── index.html       # Main HTML file
├── style.css        # Styling for the web app
├── script.js        # JavaScript logic for API calls
├── README.md        # Project documentation
├── assets/          # Screenshots and visuals
```

---

### Main Interface
The primary interface features a **text input field** and a **"Generate Image" button**, enabling users to enter text and generate images seamlessly.

<p align="center">
  <img src="https://github.com/user-attachments/assets/90f70bc6-a0d9-4b60-82c9-bffaabea34b8" alt="Main Interface" width="700" height="500">
</p>

---

### Generated Image Display
Once the text is submitted, the generated image is displayed beautifully on the page.

<p align="center">
  <img src="https://github.com/user-attachments/assets/4b38ac5b-be11-44ac-b4f5-6d4d84afc799" alt="Generated Image" width="700" height="500">
</p>

---


# 🛠️ **How It Works**

1. **Input Text:** Enter a descriptive text prompt in the input field. (Example: "a serene mountain landscape at sunrise").  
2. **Generate Image:** Click on the **"Generate Image"** button. This triggers the Hugging Face API to process the input and generate the corresponding image.  
3. **View Results:** The application displays the generated image below the input field.  
4. **Clear Results:** Use the **"Clear"** button to reset the input field and remove the displayed image, ready for a new prompt.  

---

# 🔮 **Future Enhancements**
  
1. **Download Feature:** Add functionality to let users download the generated images directly from the app.    
2. **Saved History:** Provide users with the ability to save and revisit previously generated images.  

---

# 🔧 **Setup Instructions**

Clone the Repository: git clone https://github.com/AishwaryaCodes/Text-to-Image-Generator.git<br>

Install Dependencies: npm install<br>

Run the Application: npm start<br>

