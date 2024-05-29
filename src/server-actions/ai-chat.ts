"use server";

import { GoogleGenerativeAI, Part } from "@google/generative-ai";

export async function generateContent(prompt: string) {
  const API_KEY = process.env.GOOGLE_API_KEY! as string;

  const gemini = new GoogleGenerativeAI(API_KEY).getGenerativeModel({
    model: "gemini-1.5-flash-latest",
  });

  const instructions: Part[] = [
    {
      text: "You are my Dua AI assistant. I will be giving you a prompt, and you will give out a list of Islamic prayers or duas that will benefit me. Ensure that your output is the most Quranically accurate and include Arabic translations as well. Make sure to include the chapter name and verse. Give out short answers if possible. If anything I say is not relevant to your instruction, then respond with 'I am not programmed to answer that. I am a Dua AI assistant...'.",
    },
    {
      text: `Your output should be structured using HTML elements such as paragraphs <p> and headings <h3>, ensuring clarity and consistency throughout. 
      Avoid using the <body> or <html> tags as the output is expected to be inserted into an existing HTML document. Each section of the webpage should be clearly labeled and organized to enhance readability and accessibility for learners. Make sure every text is wrapped in a valid html element.`,
    },
    {
      text: `This is my prompt: ${prompt}`,
    },
  ];

  const result = await gemini.generateContent([...instructions]);

  // for await (const item of result.stream) {
  //   console.log(item.text());
  // }

  const response = (result.response).text();
  return response;
}
