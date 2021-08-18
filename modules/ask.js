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
            website: "https://ask.fm/",
            parsed_name: final_name,
            sfae: `#contentArea > section > header > div > div.profileBox_label > span.nofollow > a`
        }

        callback(to_callback)
        return
    }else{
        var to_callback = {
            website: "https://ask.fm/",
            parsed_name: final_name,
            sfae: `#contentArea > section > header > div > div.profileBox_label > span.nofollow > a`
        }

        callback(to_callback)
        return
    }
}

//Exporter
module.exports = {
    self: self
}
