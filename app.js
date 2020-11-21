const gencode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const address = process.argv[2];

gencode(address, (error, data) => {

    if (error) {
        return console.log(error);
    }
    console.log(data)
    forecast(data.latitude,data.longitude,(error,forcastdata)=>{
        if(error){
           return console.log(error);
        }
        console.log('Place => ' + data.place_name);
        console.log(forcastdata)
    })
})

