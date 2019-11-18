import yargs from 'yargs';

function setupCmdLineOptions() {
  return yargs
    .usage('Usage: $0 --file <filePath> --to <...recipient> --subject <subject>')
    .demandOption(['file', 'to', 'subject'])
    .string('file')
    .describe('file', 'path to file to send')
    .array('to')
    .describe('to', 'list of recipients')
    .string('subject')
    .describe('subject', 'email subject')
    .argv;
}

export const argv = setupCmdLineOptions();

export type CmdLineParams = ReturnType<typeof setupCmdLineOptions>;
