const fsPromise = require('fs').promises;
const path = require('path')

const fileOperations = async () => {
    try {
        const data = await fsPromise.readFile(path.join(__dirname, "files", "start.txt"), "utf8")
        console.log(data)
        await fsPromise.writeFile(path.join(__dirname, "files", "newWritefile.txt"), "New file created!!!!")
        console.log("Written Succesfully")
        await fsPromise.appendFile(path.join(__dirname, "files", "newWritefile.txt"),"\n\n New data appended!!!")
        console.log("Appended Successfully")
        await fsPromise.rename(path.join(__dirname, "files", "newWritefile.txt"), path.join(__dirname,'files', 'renamed.txt'))
        console.log("File Renamed")

    }catch (err) {
        console.error(err);
    }
}

fileOperations();

process.on('uncaughtException', err => {
    console.error(`There was an uncaughtError: ${err}`);
    process.exit(1);
})
