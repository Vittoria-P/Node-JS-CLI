import * as search from "./Script/request.js";
console.log("Hello, Node.JS!");

let pays = "https://date.nager.at/api/v3/AvailableCountries";
let holiday = "https://date.nager.at/api/v3/PublicHolidays/";

async function main(){
    let country = process.argv;
    if (country.lenght == 4) {
        holiday+= process.argv[3] + "/";
    }
    else{
        holiday+= new Date ().getFullYear() + "/";
    }
    holiday+=await search.requestCountry("get",pays,search.getCodeCountry);
    
    
console.log(holiday);
    search.requestCountry("get",holiday,search.displayHolidays);
};

main();