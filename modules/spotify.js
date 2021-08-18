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
            website: "https://open.spotify.com/user/",
            parsed_name: final_name,
            sfae: `#main > div > div.Root__top-container > div.Root__main-view > main > div.os-host.os-host-foreign.os-theme-spotify.os-host-resize-disabled.os-host-scrollbar-horizontal-hidden.main-view-container__scroll-node.os-host-transition.os-host-overflow.os-host-overflow-y > div.os-padding > div > div > div.main-view-container__scroll-node-child > section > div > div._53WyqaJU3v_38h1w_M9.contentSpacing > div > button._2qGqWaiZbWlHPjjDGxS`
        }

        callback(to_callback)
        return
    }else{
        var to_callback = {
            website: "https://open.spotify.com/user/",
            parsed_name: final_name,
            sfae: `#main > div > div.Root__top-container > div.Root__main-view > main > div.os-host.os-host-foreign.os-theme-spotify.os-host-resize-disabled.os-host-scrollbar-horizontal-hidden.main-view-container__scroll-node.os-host-transition.os-host-overflow.os-host-overflow-y > div.os-padding > div > div > div.main-view-container__scroll-node-child > section > div > div._53WyqaJU3v_38h1w_M9.contentSpacing > div > button._2qGqWaiZbWlHPjjDGxS`
        }

        callback(to_callback)
        return
    }
}

//Exporter
module.exports = {
    self: self
}
