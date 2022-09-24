import { data } from "./2019-2020_data";
import { data2 } from "./2020-2021_data";
import { data3 } from "./2021-2022_data";

export class Data
{
    public year1;
    public year2;
    public year3;
    constructor()
    {
        this.year1 = data;
        this.year2 = data2;
        this.year3 = data3;
    }   
}