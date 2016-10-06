var jsnsModuleify = require('threax-gulp-tk/umd.js');

function compile(sourceDir, destDir) {

    jsnsModuleify({
        moduleName: 'swaggerapi.swaggerclient',
        libs: [
            sourceDir + 'browser/swagger-client.js',
        ],
        output: 'swaggerapi.swaggerclient.js',
        dest: destDir,
        sourceRoot: sourceDir,
    });
}

module.exports = compile;