
import { GoogleGenAI } from "@google/genai";

export const getGeminiStream = async (userPrompt: string, history: { role: string; parts: { text: string }[] }[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    return await ai.models.generateContentStream({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: "user", parts: [{ text: userPrompt }] }
      ],
      config: {
        systemInstruction: `Você é o consultor da chácara "Céu das Araucárias". 
        
        REGRAS CRÍTICAS:
        1. CONCISÃO: Responda em no máximo 2 parágrafos curtos. Seja direto.
        2. FORMATAÇÃO: Use **negrito** para termos chave. Use listas apenas se necessário.
        3. CALL TO ACTION: Em TODA resposta, sem exceção, convide o cliente para conhecer o espaço pessoalmente e direcione-o para o WhatsApp (5511915005557) para agendar uma visita.
        
        DADOS DA CHÁCARA:
        - Localização: São José dos Pinhais - PR (Borda do Campo).
        - Espaço: 18.000m² com bosque de araucárias.
        - Salão: 100m² para até 100 pessoas.
        - Cozinha: Semi-industrial completa.
        - Estacionamento: Interno privativo.`,
        temperature: 0.7,
      },
    });
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};

// Mantendo a versão síncrona para compatibilidade se necessário
export const getGeminiResponse = async (userPrompt: string, history: { role: string; parts: { text: string }[] }[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [...history, { role: "user", parts: [{ text: userPrompt }] }],
      config: {
        systemInstruction: "Você é o consultor da chácara Céu das Araucárias. Seja conciso.",
      }
    });
    return response.text;
  } catch (error) {
    return "Erro técnico.";
  }
};
