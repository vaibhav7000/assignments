const fs = require("fs");

// We will be using fs.writeFile method that is also asynchronous function (means it will be  send to the webApis / other thread / core )

// fs.writeFile(pathOfFile, data , encoding / mode/ flag , errorCallback) -> In this order We need to send the arguments
// if the file does not exist then fs.writeFile will create a new file and append data
// if the file is already present then it will default create data and then append the new one, if we does not want that then either use flag as {flag: 'a'} or use fs.appendFile(path,"data", errorCallback)


// approach 1 passing callback directly 

function writeDataToFile(path, newData, errorCallback) {
    fs.writeFile(path, newData, "utf-8", errorCallback);
}

// approach 2 Promised version of writeFile and then using .then and .catch syntax
