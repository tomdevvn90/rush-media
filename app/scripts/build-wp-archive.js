var fs = require('fs');
var archiver = require('archiver');

const OUTPUT_FILENAME = 'rush-media.zip';

var output  = fs.createWriteStream(`${__dirname}/../../${OUTPUT_FILENAME}`);
var archive = archiver('zip');

output.on('close', () => {
    console.log(`Plugin archive ${OUTPUT_FILENAME} created. Write ${archive.pointer()} total bytes`);
});

archive.on('warning', (err) => {
    if (err.code === 'ENOENT') {
        console.log("WARNING", err)
    } else {
        throw err;
    }
});
   
archive.on('error', (err) => {
    throw err;
});

archive.pipe(output);

// Add the main PHP files:
archive.append(fs.createReadStream(`${__dirname}/../../rush-media.php`), { name: 'rush-media/rush-media.php' });
archive.append(fs.createReadStream(`${__dirname}/../../pws-media.service.php`), { name: 'rush-media/pws-media.service.php' });

// Add the build output:
archive.directory(`${__dirname}/../build/`, 'rush-media/app/build');

archive.finalize();