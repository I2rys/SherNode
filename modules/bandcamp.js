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
            website: "https://bandcamp.com/",
            parsed_name: final_name,
            sfae: `#fan-bio-vm > div:nth-of-type(1) > div.fan-bio-inner > div.name > h1 > span`
        }

        callback(to_callback)
        return
    }else{
        var to_callback = {
            website: "https://bandcamp.com/",
            parsed_name: final_name,
            sfae: `#fan-bio-vm > div:nth-of-type(1) > div.fan-bio-inner > div.name > h1 > span`
        }

        callback(to_callback)
        return
    }
}

//Exporter
module.exports = {
    self: self
}
