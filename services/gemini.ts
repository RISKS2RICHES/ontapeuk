import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY;

export const refineConcept = async (rawConcept: string, songName: string, artistName: string): Promise<string> => {
  if (!apiKey) {
    console.warn("API_KEY not found in environment variables");
    return "AI Enhancement unavailable (Missing API Key).";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    // Using a performant model for text generation
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a creative director for a high-end music video production company called ON-TAPE. 
      
      Task: Expand the following brief user concept into a professional, compelling music video treatment synopsis (max 150 words). 
      Keep it edgy, cinematic, and modern.
      
      Artist Name: ${artistName || "The Artist"}
      Song Name: ${songName || "Untitled"}
      User's Rough Concept: "${rawConcept}"
      
      Output only the refined treatment.`,
    });

    return response.text || "Could not generate enhancement.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error connecting to AI Assistant.";
  }
};