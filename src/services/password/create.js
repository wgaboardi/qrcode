import chalk from 'chalk'
import handle from './handle.js'
async function createPassword() {
  let password = await handle()
  console.log(chalk.green('Password gerada: ' + password))
}

export default createPassword