#!/usr/bin/env node 

const {program} = require('commander');
const chalk = require('chalk')
const clipboardy = require('clipboardy')
program.version('1.0.0').description('Crypto Password Generator')
const createPassword = require('./utils/createPassword')
const savePassword = require('./utils/savePassword')
const log = console.log;

program
    .option('-l, --length <number>', 'length of password', '8')
    .option('-c, --crypto', 'salt your password using crypto')
    .option('-s, --save', 'Save your password in the .txt file -none crypto')
    .option('-nn, --no-numbers', 'remove numbers from password creation')
    .option('-ns, --no-symbols', 'remove symbols from password creation')
    .parse()


const {length, save, cryptoSave, numbers, symbols} = program.opts()
const generatedPassword = createPassword(length, numbers, symbols)

if(save) {
    savePassword(generatedPassword)
}

if(cryptoSave){
    saveCryptoPassword(generatedPassword)
}

clipboardy.writeSync(generatedPassword);




//@dev get generated password


//@dev output generated password

log(chalk.bold('Generated Password: ') + chalk.red(generatedPassword) )
log(chalk.cyan('password has been copied to the clipboard'))