const core = require('@actions/core') 
const tc = require('@actions/tool-cache') 

try {
    console.log('Downloading Processing 3.5.4...')
    // const procPath = await tc.downloadTool('https://download.processing.org/processing-3.5.4-linux64.tgz') 

    console.log('Extracting...')
    // const procExtractedFolder = await tc.extractTar(procPath, '/usr/bin/processing') 
    
    console.log('Caching...')
    // const cachedPath = await tc.cacheDir(procExtractedFolder, 'processing', '3.5.4') 
    // core.addPath(cachedPath) 
} catch (error) {
    // core.setFailed(error.message) 
}

// const tc = require('@actions/tool-cache');
// const core = require('@actions/core');

const tc = require('@actions/tool-cache');
const core = require('@actions/core');

const node12Path = await tc.downloadTool('https://nodejs.org/dist/v12.7.0/node-v12.7.0-linux-x64.tar.gz');
const node12ExtractedFolder = await tc.extractTar(node12Path, 'path/to/extract/to');

const cachedPath = await tc.cacheDir(node12ExtractedFolder, 'node', '12.7.0');
core.addPath(cachedPath);