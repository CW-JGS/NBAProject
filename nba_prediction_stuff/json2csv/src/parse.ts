import { createArrayCsvWriter } from "csv-writer";
import { data } from "./data/2020-2021_data";
import { existsSync, mkdirSync } from "fs";

const writer = createArrayCsvWriter({
    path: "./output/outputData_2020-2021.csv",
})

if(existsSync("./output"))
{
    runWriter();
} 
else 
{
    try
    {
        mkdirSync("./output");
        runWriter();
    }
    catch(err)
    {
        console.error(err)
    }
}


function runWriter() 
{
    writer.writeRecords(data);
}
