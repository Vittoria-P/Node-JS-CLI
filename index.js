import * as search from "./Script/request.js";
console.log("Hello, Node.JS!");

let pays = "https://date.nager.at/api/v3/AvailableCountries";
let holiday = "https://date.nager.at/api/v3/PublicHolidays/2022/";

async function main(){
    holiday+=await search.requestCountry("get",pays,search.getCodeCountry);
    
    search.requestCountry("get",holiday,search.displayHolidays);
};

main();