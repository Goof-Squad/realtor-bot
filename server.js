const express = require("express");
const app = express();
const fs = require('fs');
const pdf = require('pdf-parse');
var pdf_table_extractor = require("pdf-table-extractor");

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
})

app.get('/', function (req, res) {
    pdf_table_extractor("menu.pdf",success,error);
    //PDF parsed
    function success(result)
    {
        fs.writeFileSync("menu.json", JSON.stringify(result));
    }
    //Error
    function error(err)
    {
        console.error('Error: ' + err);
    }
    let dataBuffer = fs.readFileSync('./menu.pdf');

    pdf(dataBuffer).then(function(data) {
        res.send(data.text.split("   ").join("\n"))
        fs.writeFileSync("menu.txt", data.text.split("   ").join("\n"));
        // console.log(data.text.split("   ").join("\n"));
    });
})