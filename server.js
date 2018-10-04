const express = require("express");
var request = require('request');
const https = require('https');
const http = require('http');
const app = express();
var extract = require('pdf-text-extract')
const fs = require('fs');
const exec = require('child_process').exec;  
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
})