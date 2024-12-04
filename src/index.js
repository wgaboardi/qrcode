import prompt from 'prompt'
import mainPrompt from './prompts/prompt-main.js'
import createQRCode from './services/qtcode/create.js'
import createPassword from './services/password/create.js'
async function main() {
    //console.log(mainPrompt)
    prompt.start()
    prompt.get(mainPrompt, async (err, choose) => {
      if (choose.select == 1) await createQRCode()
      if (choose.select == 2) await createPassword()
        if (err) {
          console.error('Error:', console.log(err.message))
          return
        }
        //console.log('You answered:', choose)
    })
}

main()
