//Main
function self(name, callback){
    var final_name = ""

    //This part is where the Arguments or Names or whatever is sorted, so what's this gonna do is
    //If the final_name variable is empty then it will put the name(via i) and If the final_name variable is not empty it will add the seconds name and so on
    for( i in name ){
        if(final_name.length == 0){
            final_name = name[i]
        }else{
            final_name += `${name[i]}`
        }
    }

    if(name.length == 1){
        var to_callback = {
            website: "https://about.me/", //Website url here, make sure there is a / on the last part
            parsed_name: final_name,
            sfae: `body > div.layers > div > div > main > div > div > div > div.head > div.image` //The selector to check if the account exist, if the selector exist the account exist.
        }

        callback(to_callback)
        return
    }else{
        var to_callback = {
            website: "", //Website url here, make sure there is a / on the last part
            parsed_name: final_name,
            sfae: `body > div.layers > div > div > main > div > div > div > div.head > div.image` //The selector to check if the account exist, if the selector exist the account exist.
        }

        callback(to_callback)
        return
    }
}

//Exporter
module.exports = {
    self: self //Don't touch this.
}
