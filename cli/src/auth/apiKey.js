
import inquirer from 'inquirer';
import Conf from 'conf';
import chalk from 'chalk';
import ora from 'ora';
import { GoogleGenerativeAI } from '@google/generative-ai';

const config = new Conf({ projectName: 'anveshak-cli' });

export async function getApiKey() {
    let apiKey = config.get('GEMINI_API_KEY');

    if (apiKey) {
        // Validate existing key silently
        const result = await validateApiKey(apiKey);
        if (result === true) {
            return apiKey;
        } else {
            console.log(chalk.red('\nSaved API Key is invalid or expired.'));
            console.log(chalk.yellow(`Error Details: ${result}\n`));
            config.delete('GEMINI_API_KEY');
        }
    }

    // Ask for new key
    const answer = await inquirer.prompt([
        {
            type: 'password',
            name: 'apiKey',
            message: 'Enter your Gemini API Key:',
            mask: '*',
            validate: async (input) => {
                if (!input) return 'API Key is required';
                return true;
            }
        }
    ]);

    const spinner = ora('Validating API Key...').start();
    const result = await validateApiKey(answer.apiKey);

    if (result === true) {
        spinner.succeed(chalk.green('API Key verified successfully!'));
        config.set('GEMINI_API_KEY', answer.apiKey);
        return answer.apiKey;
    } else {
        spinner.fail(chalk.red('Invalid API Key or Connection Error.'));
        console.error(chalk.yellow(`\nError Details: ${result}\n`)); // Show the error
        return getApiKey(); // Retry recursively
    }
}

async function validateApiKey(key) {
    try {
        const cleanKey = key.trim();
        const genAI = new GoogleGenerativeAI(cleanKey);
        // Use gemini-1.5-flash for validation as it's lightweight and widely available
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        // Minimal test request
        await model.generateContent("Test");
        return true;
    } catch (error) {
        return error.message; // Return the specific error message
    }
}
