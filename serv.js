const http = require("http")
const fs = require('fs')
const path = require('path')
const pathToIndex = path.join(__dirname,'static','html.html')
const indexHtmlFile= fs.readFileSync(pathToIndex)
const pathToCSS = path.join(__dirname,'static','css.css')
const indexCSSFile= fs.readFileSync(pathToCSS)
const pathToJS = path.join(__dirname,'static','js.js')
const indexJSFile= fs.readFileSync(pathToJS)
let serv = http.createServer((req,res)=>{
switch (req.url) {
    case '/':
        return res.end(indexHtmlFile)
        break;


        break;
        case '/css.css':
        return res.end(indexCSSFile)
        break;

        break;
        case '/js.js':
        return res.end(indexJSFile)
        break;

    default:
        break;
}
return res.end("error")
})

serv.listen(3000)