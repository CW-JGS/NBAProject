import { createArrayCsvWriter } from "csv-writer";
import { Data } from "./data/data";
import { existsSync, mkdirSync } from "fs";
const data = new Data();
const dataArr = [data.year1, data.year2, data.year3];


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

    dataArr.forEach((item, idx)=> {
    const writer = createArrayCsvWriter({
        path: `./output/outputData_${idx}.csv`,
    })
        writer.writeRecords(item);
    })
}
