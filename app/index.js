#!/usr/bin/env node
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const commander = require('commander');
const http = require('http');

const headers = {
  "User-Agent" : "curl/7.26.0",
  "Accept" : "*/*",
  "Proxy-Connection" : "Keep-Alive",
  "Content-Type" : "application/json",
  "X-Redmine-API-Key" : "YOUR API KEY HERE",
};

const options = {
  host: "redmine.successive.in",
  port: 80,
  headers,
  method: "GET",
  path: "http://redmine.successive.in/issues.json",
}
commander
  .command('ls-issues')
  .alias('ls-i')
  .description('List Issues')
  .action(() => {
    clear();
    console.log(chalk.blue('------------'));
    console.log(chalk.blue('Hello world!'));
    console.log(chalk.blue('------------'));
    const req = http.request(options, function (res) {
      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
      });
      res.on('end', () => {
        console.log('No more data in response.');
      });
    });
    req.on('error', function(e) {
      console.log('Problem with request: ' + e.message);
    });
    req.end();
  });

commander
  .command('create-issue')
  .alias('ct-i')
  .description('Create Issue')
  .action(() => {
    clear();
    console.log(chalk.blue('------------'));
    console.log(chalk.blue('Create Issues Functionality'));
    console.log(chalk.blue('------------'));
  });

  commander
  .command('log-time')
  .alias('lg-t')
  .description('Log Time')
  .action(() => {
    clear();
    console.log(chalk.blue('------------'));
    console.log(chalk.blue('Log Time Functionality'));
    console.log(chalk.blue('------------'));
  });
commander.parse(process.argv);
