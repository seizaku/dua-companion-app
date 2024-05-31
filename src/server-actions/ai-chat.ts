"use server";

import { GenerationConfig, GoogleGenerativeAI, Part } from "@google/generative-ai";

export async function generateContent(prompt: string) {
  const API_KEY = process.env.GOOGLE_API_KEY! as string;

  const generationConfig: GenerationConfig = {
    temperature: 1.0,
  };

  const gemini = new GoogleGenerativeAI(API_KEY).getGenerativeModel({
    model: "gemini-1.5-flash-latest",
    generationConfig
  });

  const instructions: Part[] = [
    {
      text: `${prompt}.`,
    },
    {
      text: `You are my Dua Companion, provide me an Islamic prayer or dua that will benefit me based on my input. Your output should consist of three parts: the dua, the English translation, and the meaning. Make sure to include the chapter name and verse. Provide short answers if possible. If anything I say is not relevant to your instructions, respond with, "I am not programmed to answer that. I am your Dua companion."`,
    },
    {
      text: `Your output should be structured using HTML elements such as paragraphs <p> and headings <h3>, ensuring clarity and consistency throughout. 
      Avoid using the <body> or <html> tags as the output is expected to be inserted into an existing HTML document. Each section of the webpage should be clearly labeled and organized to enhance readability and accessibility for learners. Make sure every text is wrapped in a valid html element.`,
    },
  ];

  const result = await gemini.generateContent([...instructions]);

  // for await (const item of result.stream) {
  //   console.log(item.text());
  // }

  const response = (result.response).text();
  return response;
}
