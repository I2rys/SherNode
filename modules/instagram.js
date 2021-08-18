//Main
function self(name, callback){
    var final_name = ""

    for( i in name ){
        if(final_name.length == 0){
            final_name = name[i]
        }else{
            final_name += `.${name[i]}`
        }
    }

    if(name.length == 1){
        var to_callback = {
            website: "https://www.instagram.com/",
            parsed_name: final_name,
            sfae: `#react-root > section > main > div > header > section > div.nZSzR > div > div > div > a > button`
        }

        callback(to_callback)
        return
    }else{
        var to_callback = {
            website: "https://www.instagram.com/",
            parsed_name: final_name,
            sfae: `#react-root > section > main > div > header > section > div.nZSzR > div > div > div > a > button`
        }

        callback(to_callback)
        return
    }
}

//Exporter
module.exports = {
    self: self
}
