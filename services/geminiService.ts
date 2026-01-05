import { GoogleGenAI } from "@google/genai";
import { LeadFormData, AssessmentResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generateInstantAssessment = async (data: LeadFormData): Promise<AssessmentResponse> => {
  try {
    const model = "gemini-3-flash-preview";
    
    const prompt = `
      You are a world-class Conversion Rate Optimization (CRO) expert and Web Design Consultant.
      A potential client has just submitted their website for a free assessment.
      
      Client Details:
      - Name: ${data.fullName}
      - Business Type: ${data.businessType}
      - Website URL: ${data.websiteUrl}

      Please provide a brief, high-level "Instant Preliminary Insight" to display to them immediately while they wait for the full manual report.
      
      Output strictly in JSON format with the following schema:
      {
        "summary": "A 2-sentence encouraging summary regarding the potential of digital presence for [Business Type].",
        "tips": [
          "Tip 1: A general best practice for [Business Type] websites regarding conversion.",
          "Tip 2: A general best practice regarding mobile performance.",
          "Tip 3: A general best practice regarding trust signals."
        ]
      }
      Do not include markdown formatting like \`\`\`json. Just the raw JSON string.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");

    return JSON.parse(text) as AssessmentResponse;

  } catch (error) {
    console.error("AI Service Error:", error);
    // Fallback if API fails or key is missing
    return {
      summary: "We have received your request. Our team is now manually reviewing your website to uncover hidden growth opportunities.",
      tips: [
        "Ensure your primary Call to Action is visible without scrolling.",
        "Check your page load speed on mobile devices.",
        "Add customer testimonials to build immediate trust."
      ]
    };
  }
};