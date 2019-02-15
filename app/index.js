#!/usr/bin/env node
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const commander = require('commander');

commander
  .command('list')
  .alias('ls')
  .description('List anything')
  .action(() => {
    clear();
    console.log(
      chalk.yellow(
          figlet.textSync("Welcome", {horizontalLayout: 'full'})
        )
      );
    console.log("App is under development")
  });

commander.parse(process.argv);
