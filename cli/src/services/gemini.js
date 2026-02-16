
import { GoogleGenerativeAI } from '@google/generative-ai';
import ora from 'ora';
import chalk from 'chalk';

export class GeminiService {
    constructor(apiKey) {
        this.genAI = new GoogleGenerativeAI(apiKey);
        this.chatSession = null;
        this.model = null;
    }

    setModel(modelName) {
        this.model = this.genAI.getGenerativeModel({ model: modelName });
    }

    async startChat() {
        if (!this.model) throw new Error("Model not selected");
        this.chatSession = this.model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: "Hello, you are AnveshakAI, a helpful AI assistant in a CLI environment." }],
                },
                {
                    role: "model",
                    parts: [{ text: "Hello! I am AnveshakAI. How can I assist you today in this terminal environment?" }],
                },
            ],
            generationConfig: {
                maxOutputTokens: 1000,
            },
        });
    }

    async sendMessage(message) {
        if (!this.chatSession) throw new Error("Chat session not started");

        const result = await this.chatSession.sendMessage(message);
        const response = await result.response;
        return response.text();
    }

    // Since listModels is not directly available in the client SDK easily for all keys without complex setup, 
    // we will hardcode the popular Gemini models for now or try to fetch if possible.
    // For this version, we'll return a static list which is safer and faster.
    async listModels() {
        return [
            { name: 'Gemini Pro', value: 'gemini-pro' },
            { name: 'Gemini Pro Vision', value: 'gemini-pro-vision' }
            // Add more as needed
        ];
    }
}
