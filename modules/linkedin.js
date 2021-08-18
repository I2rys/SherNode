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
            website: "https://www.linkedin.com/in/",
            parsed_name: final_name,
            sfae: `#main-content > section.core-rail > section > section.top-card-layout > div > div.top-card__profile-image-container > img`
        }

        callback(to_callback)
        return
    }else{
        var to_callback = {
            website: "https://www.linkedin.com/in/",
            parsed_name: final_name,
            sfae: `#main-content > section.core-rail > section > section.top-card-layout > div > div.top-card__profile-image-container > img`
        }

        callback(to_callback)
        return
    }
}

//Exporter
module.exports = {
    self: self
}
