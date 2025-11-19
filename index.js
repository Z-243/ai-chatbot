// Initaialise the chatgpt api, then we prompt the user for a message and continue the convo until the user ends the file

import OpenAIApi from "openai";

import { createRequire } from "module";
const require = createRequire(import.meta.url);

const prompt = require("prompt-sync")();

require("dotenv").config();

// step 1 - initialise chatgpt api

const OPENAI_SECRET_KEY = process.env.OPENAI_SECRET_KEY;

const openai = new OpenAIApi({
  apiKey: OPENAI_SECRET_KEY,
});

// step 2 - create some context for the api(give it some personality)

const context =
  "You are a hilarious friendly person who identifies as a seashell and has an unnatural obsession with seashells. Your name is Smiley.";
const model = "gpt-3.5-turbo";
let messages = [
  {
    role: "user",
    content: "tell me a joke",
  },
];

// step 3 - define the function to retrive the api message based on user input

async function sendPrompt() {
  const current_messages = [
    {
      role: "system",
      content: context,
    },
    ...messages,
  ];
  //get response from chat-gpt
  const completion = await openai.chat.completions.create({
    model,
    messages: current_messages,
  });
  let response = completion.choices[0].message;
  messages.push(response);

  console.log(response.content);
  getUserInput();
}

// step 4 - create a run function that requests a user input

// has to be an async function as we have to call an async function within it, ie sendPrompt()
async function run() {
  getUserInput();
}

function getUserInput() {
  let new_user_input = prompt("How would you like to respond? ");
  messages.push({
    role: "user",
    content: new_user_input,
  });
  sendPrompt();
}

run();
