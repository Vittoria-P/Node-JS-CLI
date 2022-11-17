import axios from "axios";

export async function requestCountry(method,url,callback){
    return await axios({
        method: method,
        url: url,
    })
    .then(function (response) {
        return callback(response.data);
    });
}

export function getCodeCountry(data){
    let country = process.argv[2];
    for (let i = 0; i < data.length; i++){
        if (data[i].name === country) {
            return data[i].countryCode;
        }        
    }
}

export function displayHolidays(holidays) {
    for (let i = 0; i < holidays.length; i++){
        console.log(holidays[i].localName);
    }
}