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
            website: "https://www.tiktok.com/@",
            parsed_name: final_name,
            sfae: `#main > div.jsx-3159834389.main-body.page-with-header.middle.em-follow > div.jsx-2938571814.share-layout.compact.middle > div > header > div.share-info > div.share-title-container > div > div > button`
        }

        callback(to_callback)
        return
    }else{
        var to_callback = {
            website: "https://www.tiktok.com/@",
            parsed_name: final_name,
            sfae: `#main > div.jsx-3159834389.main-body.page-with-header.middle.em-follow > div.jsx-2938571814.share-layout.compact.middle > div > header > div.share-info > div.share-title-container > div > div > button`
        }

        callback(to_callback)
        return
    }
}

//Exporter
module.exports = {
    self: self
}
