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
  "X-Redmine-API-Key" : "a129dc214fa0997f64f606cc8c73f1b8ad755fe5",
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

commander.parse(process.argv);
