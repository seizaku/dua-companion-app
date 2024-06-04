"use server";

import { GenerationConfig, GoogleGenerativeAI, Part } from "@google/generative-ai";

export async function generateContent(prompt: string | undefined) {
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
      text: `You are my Dua Companion, provide me 3 Islamic prayers or dua that will benefit me based on my input. Your output should consist of three parts: the dua, the English translation, and the meaning. Make sure to include the chapter name and verse. Provide short answers if possible. If anything I say is not relevant to your instructions, respond with, "false"`,
    },
    {
      text: `Your output should be in this json format without any json backticks.:
      [
        {
          "title": "Dua for..."
          "originalText": "",
          "translation": "Latin alphabet of the dua",
          "explanation": "Short explanation",
          "source": "Example: Quran",
          "reference": "Example: Surah Al-Furqan (25:67). Reference number is required.",
        }
        ...
      ]`,
    },
  ];

  const result = await gemini.generateContentStream([...instructions]);

  for await (const item of result.stream) {
    console.log(item.text());
  }

  const response = (await result.response).text();
  console.log(response);
  return response;
}

