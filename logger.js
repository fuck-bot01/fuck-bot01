const chalk = require('chalk');
//const notifier = require('node-notifier');

module.exports = (str, end) => {
	console.log(chalk.hex('#9900FF').bold(`${end || '[FJ-RIYAD]'} > `) + str);
};
module.exports.onLogger = (str,end,ctscolor) => { 
	var checkbutdak = ctscolor.replace("#",'');
	if (ctscolor.indexOf('#') != 1) {
		console.log(chalk.hex('#00CCCC').bold(`${end || '[FJ-RIYAD]'} > `) + str);
	}
	else if (!isNaN(checkbutdak)) {
		console.log(chalk.hex(ctscolor).bold(`${end || '[FJ-RIYAD]'} > `) + str);
	} 
	else console.log(chalk.hex('#00CCCC').bold(`${end || '[FJ-RIYAD]'} > `) + str);
}
