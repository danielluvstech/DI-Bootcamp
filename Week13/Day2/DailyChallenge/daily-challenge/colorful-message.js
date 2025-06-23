import chalk from 'chalk';

export function showColorfulMessage() {
    console.log(
        chalk.blue('Hello') + ' ' + chalk.green('from') + ' ' + chalk.red('Chalk!')
    );
}