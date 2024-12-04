import chalk from 'chalk'

async function getPermittedCharacters() {
    let permitted = []
    if(process.env.UPPERCASE_LETTERS === "true") {
        permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ")
     }
     if(process.env.LOWERCASE_LETTERS === "true") {
        permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase())
     }
     if(process.env.NUMBERS === "true") {
        permitted.push(..."0123456789")
     }
     if(process.env.SPECIAL_CHARACTERS === "true") {
        permitted.push(..."!@#$%¨&*()-+=")
     }
     return permitted
 
}
async function handle() {
    let characters = []
    let password = ""
    const passwordLength = process.env.PASSWORD_LENGTH || 5
    characters = await getPermittedCharacters()
    //console.log(chalk.blue.bold("Gerando senha com caracteres permitidos: "))
    //console.log(characters)

    for (let i=0; i < passwordLength;i++) {
       const index = Math.floor(Math.random() * characters.length)
       //console.log(index)
       password += characters[index]
    }
    //console.log(password)
    return password

}

export default handle