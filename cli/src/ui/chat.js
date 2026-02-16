
import inquirer from 'inquirer';
import chalk from 'chalk';
import ora from 'ora';
import { marked } from 'marked';
import TerminalRenderer from 'marked-terminal';

marked.setOptions({
    renderer: new TerminalRenderer()
});

export async function selectModel(geminiService) {
    const models = await geminiService.listModels();

    const answer = await inquirer.prompt([
        {
            type: 'list',
            name: 'model',
            message: 'Select a Gemini Model:',
            choices: models
        }
    ]);

    geminiService.setModel(answer.model);
    console.log(chalk.green(`\nSelected Model: ${chalk.bold(answer.model)}\n`));
}

export async function startChatLoop(geminiService) {
    await geminiService.startChat();

    console.log(chalk.dim('--------------------------------------------------'));
    console.log(chalk.dim('Type "exit" or "quit" to end the session.'));
    console.log(chalk.dim('--------------------------------------------------\n'));

    while (true) {
        const answer = await inquirer.prompt([
            {
                type: 'input',
                name: 'message',
                message: chalk.cyan('You >'),
            }
        ]);

        const input = answer.message.trim();

        if (input.toLowerCase() === 'exit' || input.toLowerCase() === 'quit') {
            console.log(chalk.yellow('\nGoodbye! AnveshakAI shutting down...'));
            process.exit(0);
        }

        if (!input) continue;

        const spinner = ora('AnveshakAI is thinking...').start();

        try {
            const response = await geminiService.sendMessage(input);
            spinner.stop();

            console.log(chalk.magenta('AnveshakAI >'));
            console.log(marked(response));
            console.log(''); // New line
        } catch (error) {
            spinner.fail(chalk.red('Error generating response.'));
            console.error(chalk.red(error.message));
        }
    }
}
