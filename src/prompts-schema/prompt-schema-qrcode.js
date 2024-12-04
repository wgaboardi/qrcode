import chalk from 'chalk'

const promptSchemaQRCode = [
  { 
    name: "link",
    description: chalk.yellow.bold("Digite o link para gerar o QRCode"),
    message: chalk.red.italic("Por favor, insira a URL"),
    required: true
  }
  , {
  name: "select",
  description: chalk.yellow.bold("Escolha o tipo do QRCode (1-Imagem ou 2-Terminal)"),
  pattern: /^[1-2]+$/,
  message: chalk.red.italic("Por favor, insira uma opção válida (1-Imagem ou 2-Terminal)"),
  required: true
  } 
]

export default promptSchemaQRCode