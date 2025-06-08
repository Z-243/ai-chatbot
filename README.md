# 🤖 AI Chatbot (Smiley the Seashell)

A friendly, hilarious AI chatbot built with Node.js using OpenAI's GPT-3.5-turbo model. This chatbot takes user input from the command line and responds as a seashell-obsessed personality named **Smiley**.

## 🌊 Features

- Powered by **OpenAI GPT-3.5-turbo**
- CLI interaction via `prompt-sync`
- A fixed context for consistent personality
- Engaging, shell-themed responses

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/ai-chatbot.git
   cd ai-chatbot
   ```

2. **Install dependencies**

   ```bash
   npm install openai prompt-sync dotenv
   ```

3. **Set up your environment variables**

   Create a `.env` file in the root directory and add your OpenAI API key:

   ```env
   OPENAI_API_KEY=your_api_key_here
   ```

## 🧠 How It Works

The chatbot uses OpenAI's Chat API (`gpt-3.5-turbo`) to process user prompts. It defines a fixed personality context and dynamically appends each user message to a message array (`messages[]`), which is sent to the API to generate responses.

### 🤓 Personality Context

```js
const context = "You are a hilarious friendly person who identifies as a seashell and has an unnatural obsession with seashells. Your name is Smiley.";
```

### 📬 Conversation Logic

User input is collected through `prompt-sync`:

```js
const prompt = require("prompt-sync")();
let new_user_input = prompt("How would you like to respond? ");
```

User messages are added to the `messages` array:

```js
let messages = [];
messages.push({ role: "user", content: new_user_input });
```

The chatbot sends these messages to the OpenAI API and prints the response.

## 🧪 Usage

Run the chatbot:

```bash
node index.js
```

Then follow the prompt to chat with Smiley!

## 🛠 Example Output

```
How would you like to respond? I love the ocean!
Smiley: Oh shell yes! The ocean is my happy place — salty, wavy, and full of my shiny relatives!
```

## 🔐 Environment Variables

Make sure your `.env` file contains:

```env
OPENAI_API_KEY=your_openai_api_key
```

## 🚀 Technologies Used

- [Node.js](https://nodejs.org/)
- [OpenAI API](https://platform.openai.com/)
- [prompt-sync](https://www.npmjs.com/package/prompt-sync)
- [dotenv](https://www.npmjs.com/package/dotenv)

## 📜 License

MIT License
