import chalk from 'chalk'

const mainPrompt = [
  { 
    name: "select",
    description: chalk.yellow.bold("Escolha a ferramenta (1-QRcode ou 2-Password)"),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Por favor, insira uma opção válida (1-QRcode ou 2-Password)"),
    required: true
  }
]

export default mainPrompt