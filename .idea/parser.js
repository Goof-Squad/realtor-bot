const pdf_table_extractor = require("pdf-table-extractor");
const fs = require("fs");
 
function success(result)
{
   fs.writeFileSync("menu.json", JSON.stringify(result));
}

function error(err)
{
   console.error('Error: ' + err);
}

pdf_table_extractor("menu.pdf",success,error);