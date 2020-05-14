const fs = require('fs')
const path = require('path')
const extract = require('extract-zip')
const getFilePaths = require('./getFilePaths.js')

async function recursiveUnzip(dir) {

    dir = path.resolve(dir);
    
    let filepaths = getFilePaths(dir, 'zip')
    
    for (let file of filepaths) {

        let parsedpath = path.parse(file);
        let targetdir = path.join(parsedpath.dir, parsedpath.name);

        try {
            await extract(file, { dir: targetdir})
            // Delete .zip file
            await fs.unlinkSync(file);
            console.log('Unzipped', parsedpath.base + ", deleted .zip file.")
        } catch (err) {
            console.log(err)
          }
    }

}


module.exports = recursiveUnzip;