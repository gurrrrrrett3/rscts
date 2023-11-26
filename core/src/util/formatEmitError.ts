import ts from "typescript";
import chalk from "chalk";

export function formatEmitError(diagnostic: ts.Diagnostic): string {
    const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");
    if (diagnostic.file) {
        const { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start!);
        return `\t${chalk.yellow(diagnostic.file.fileName.replace(`${process.cwd()}/`, ""))} ${chalk.green(`(${line + 1},${character + 1})`)}: ${message}`;
    } else {
        return `${message}`;
    }
}

export default function formatEmitErrors(diagnostics: readonly ts.Diagnostic[]): string[] {
    console.log(`\n${chalk.bold.redBright("Error")} | ${chalk.blueBright("Typescript transpiliation failed.")}`);
    
    let files = new Set<string>();
    diagnostics.forEach(diagnostic => {
        if (diagnostic.file) {
            files.add(diagnostic.file.fileName);
        }
    })

    let output: string[] = [];

    files.forEach(file => {
        let fileDiagnostics = diagnostics.filter(diagnostic => {
            return diagnostic.file?.fileName === file;
        })

        if (fileDiagnostics.length === 0) return;

        output.push(`\n${fileDiagnostics.length} ${chalk.bold.redBright(`Error${fileDiagnostics.length !== 1 ? 's' : ''}`)} in ${chalk.yellow(file.replace(`${process.cwd()}/`, ""))}`);

        fileDiagnostics.forEach(diagnostic => {
            output.push(formatEmitError(diagnostic));
        })

        output.push("");
    })

    return output;
}