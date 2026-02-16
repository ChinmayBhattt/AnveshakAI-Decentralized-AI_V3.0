#!/usr/bin/env node

import { showWelcome } from '../src/ui/welcome.js';
import { getApiKey } from '../src/auth/apiKey.js';
import { GeminiService } from '../src/services/gemini.js';
import { selectModel, startChatLoop } from '../src/ui/chat.js';

async function main() {
    try {
        // 1. Welcome Screen
        showWelcome();

        // 2. Authentication
        const apiKey = await getApiKey();

        // 3. Initialize Service
        const geminiService = new GeminiService(apiKey);

        // 4. Model Selection
        await selectModel(geminiService);

        // 5. Start Chat
        await startChatLoop(geminiService);

    } catch (error) {
        console.error('An unexpected error occurred:', error);
        process.exit(1);
    }
}

main();
