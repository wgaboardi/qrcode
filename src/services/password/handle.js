import chalk from 'chalk'
import getPermittedCharacters from './utils/permitted-characters.js'

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