//Main
function self(name, callback){
    var final_name = ""

    for( i in name ){
        if(final_name.length == 0){
            final_name = name[i]
        }else{
            final_name += `${name[i]}`
        }
    }

    if(name.length == 1){
        var to_callback = {
            website: "https://about.me/",
            parsed_name: final_name,
            sfae: `body > div.layers > div > div > main > div > div > div > div.head > div.image`
        }

        callback(to_callback)
        return
    }else{
        var to_callback = {
            website: "https://twitter.com/",
            parsed_name: final_name,
            sfae: `body > div.layers > div > div > main > div > div > div > div.head > div.image`
        }

        callback(to_callback)
        return
    }
}

//Exporter
module.exports = {
    self: self
}
