# Recipe Image Magic

**Recipe Image Magic** is a generative AI-powered application that takes in user prompts and delivers a unique recipe along with an AI-generated image of the dish. This project leverages large language models for recipe creation and generative AI for image synthesis.

## Features
- **Custom Recipe Generation** – Input a dish idea, ingredients, or theme, and get a unique recipe.
- **AI-Generated Food Images** – Creates a realistic image of the dish based on the recipe.
- **User-Friendly API** – Simple interface to send prompts and receive results.
- **Scalable & Fast** – Optimized to generate results quickly with high-quality outputs.

## Technologies Used
- **Rust/Python (Backend)** – For handling user requests and processing recipes.
- **OpenAI/DALL·E API** – To generate recipes and food images.
- **FastAPI/Warp Framework** – API implementation for seamless interaction.
- **Docker** – Containerized for easy deployment.

## Installation

### Prerequisites
Ensure you have the following installed:
- Python 3.8+ (if using a Python backend) or Rust (if using a Rust backend)
- Docker (optional for containerized deployment)
- API key for generative AI (OpenAI or similar)

### Setup Instructions
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/yourusername/recipe-image-magic.git
   cd recipe-image-magic
   ```
2. **Install Dependencies (Python version):**
   ```sh
   pip install -r requirements.txt
   ```
   OR **Build Rust Project:**
   ```sh
   cargo build --release
   ```
3. **Set Up Environment Variables:**
   ```sh
   export OPENAI_API_KEY=your_api_key_here
   ```
4. **Run the Application:**
   ```sh
   python main.py  # For Python
   ```
   OR
   ```sh
   cargo run --release  # For Rust
   ```

## Usage

### API Endpoints
- **Generate Recipe & Image**
  - **POST** `/generate`
  - **Request Body:**
    ```json
    {
      "prompt": "spicy vegan ramen with tofu"
    }
    ```
  - **Response:**
    ```json
    {
      "recipe": "A delicious spicy vegan ramen with tofu, mushrooms, and miso broth...",
      "image_url": "https://generated-image-url.com"
    }
    ```

## Example Usage
1. **Run the server** and send a request using curl:
   ```sh
   curl -X POST http://127.0.0.1:8000/generate -H "Content-Type: application/json" -d '{"prompt": "chocolate lava cake"}'
   ```
2. The response will include a custom recipe and a URL to the generated image.

## Deployment
- **Using Docker:**
  ```sh
  docker build -t recipe-image-magic .
  docker run -p 8000:8000 recipe-image-magic
  ```
- **Deploy on AWS/GCP/Azure** – Configure environment variables and deploy as a containerized service.

## License
This project is licensed under the MIT License.

---

Contributions are welcome! Feel free to submit issues or pull requests. 🚀

