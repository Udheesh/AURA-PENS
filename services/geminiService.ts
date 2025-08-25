
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateSlogans = async (brandName: string, industry: string): Promise<string[]> => {
  if (!brandName.trim() || !industry.trim()) {
    return [];
  }

  const prompt = `Generate 5 short, elegant, and professional slogans for a premium, luxury pen.
  The brand is named "${brandName}", which is in the "${industry}" industry.
  The slogans should evoke a sense of quality, craftsmanship, and success.
  Return the slogans as a numbered list. For example:
  1. Slogan one.
  2. Slogan two.
  3. Slogan three.
  4. Slogan four.
  5. Slogan five.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    const text = response.text;
    if (!text) {
        return ["Could not generate slogans. Please try again."];
    }

    // Split by newline and filter out any empty strings
    const slogans = text.split('\n').filter(slogan => slogan.trim() !== '').map(slogan => slogan.replace(/^\d+\.\s*/, '')); // Remove numbering
    
    return slogans;

  } catch (error) {
    console.error("Error generating slogans:", error);
    return ["An error occurred while generating slogans. Please check the console."];
  }
};
