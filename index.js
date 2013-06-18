var exec = require('child_process').exec;

module.exports = function(options, callback) {

	// no options
	if (!callback) {
		callback = options;
		options = {};
	}

	// if options is a string, then we assume its the path 
	if (typeof options == 'string') {
		options = { cwd: options };
	}		

	// call it
	exec('svn info', options, function (err, stdout, stderr) {

		if (err) {
			callback(err);

	    } else {

	    	var info = {};

	    	stdout.split('\n').forEach( function(line) {

				lineParts =line.split(': ');

				if (lineParts.length == 2)
					info[lineParts[0]] = lineParts[1].trim();
			});

			if (info['svn'])
				return callback(info['svn']);

			var result = {
				rev: info['Revision'],
				url: info['URL'],
				last: { 
					rev: info['Last Changed Rev'],
					author: info['Last Changed Author'],
					date: new Date(info['Last Changed Date'])
				},
				repository: {
					root: info['Repository Root'],
					id: info['Repository UUID']
				}
			};

	        callback(null, result);
	    }
	});
}