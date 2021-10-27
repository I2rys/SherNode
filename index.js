//Dependencies
const Puppeteer = require("puppeteer")
const Chalk = require("chalk")
const Fs = require("fs")

//Variables
const Self_Args = process.argv.slice(2)

//Functions
async function Initiate_A_Checker(website, parsed_name, selector_for_account_exist, browser){
    const page = await browser.newPage()

    try{
        await page.goto(`${website}${parsed_name}`, { waitUntil: "domcontentloaded" }).catch(()=>{
            console.log(`${Chalk.grey("[") + Chalk.redBright("WEBSITE DOWN") + Chalk.grey("]")} ${website}`)
            page.close()
            return
        })

        await page.waitForSelector(selector_for_account_exist).then(()=>{
            console.log(`${Chalk.grey("[") + Chalk.greenBright("USER EXIST") + Chalk.grey("]")} ${website}${parsed_name}`)
            page.close()
            return
        }).catch(()=>{
            console.log(`${Chalk.grey("[") + Chalk.redBright("USER DOES NOT EXIST") + Chalk.grey("]")} ${website}${parsed_name}`)
            return
        })
    }catch{
        console.log(`${Chalk.grey("[") + Chalk.redBright("USER DOES NOT EXIST/WEBSITE DOWN") + Chalk.grey("]")} ${website}${parsed_name}`)
    }
}

//Main
if(!Self_Args.length){
    console.log(`node index.js <first name> <last name> <and so on>

First name & Last name example:
node index.js denis daily

First name & Middle name & Last name example:
node index.js denis curtis daily

and so on.`)
    process.exit()
}

console.log(`${Chalk.grey("[") + Chalk.blueBright("INFO") + Chalk.grey("]")} Checking started, please wait.`)
Main()
async function Main(){
    const browser = await Puppeteer.launch({ headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"] })

    Fs.readdir("./modules", "utf8", function(err, modules){
        if(err){
            process.exit()
        }
        
        modules.forEach(module =>{
            require(`./modules/${module}`).self(Self_Args, function(callback){
                Initiate_A_Checker(callback.website, callback.parsed_name, callback.sfae, browser)
            })
        })
    })
}
