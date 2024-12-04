import chalk from 'chalk'
import QRCode from 'qrcode-terminal'


async function handle(err, result) {
    if (err) {
        console.error('Error:', chalk.red(err.message))
        return
    }
    try {
        const isSmall = result.type == 2
        QRCode.generate(result.link, {small: isSmall} , (qrcode) => {
            console.log(chalk.green('QRCode gerado com sucesso!\n'))
            console.log(qrcode)
        })
    } catch (error) {
        console.error('Error:', chalk.red(error.message))
    }
}

export default handle