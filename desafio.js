
// recebendo o preço do produto e transformando o valor para decimal
let precoProduto = parseFloat(prompt('Qual o preço do produto?')) // 700 Nan
while(isNaN(precoProduto) == true ) {
    alert('O preço digitado é inválido. Por favor, informe o preço apenas com números, sem carácteres especias (letras ou acentos)')
    precoProduto = parseFloat(prompt('Qual o preço do produto?')) // 700 Nan
}
const mensagem = 
`
Informe o método de pagamento:
Digite 1 para pagamento em dinheiro
Digite 2 para pagamento em cheque
Digite 3 para pagamento com cartão
`
const metodoDePagamento = prompt(mensagem) // 2

console.log(precoProduto)
console.log(metodoDePagamento)

/**
 * Se o valor da constante 'metodoDePagamento' for 1 ou 2, significa que a pessoa
 * possuirá um desconto de 10%
 */

 while (metodoDePagamento < 1 || metodoDePagamento > 3) {
    alert('Método de pagamento inválido. Selecione novamente')
    metodoDePagamento = parseInt(prompt(mensagem))
}



 if (metodoDePagamento == 1 || metodoDePagamento == 2) {
    const precoFinal = precoProduto * 0.9
    alert(`O preço final do pagamento é ${precoFinal} reais`)
  } else if (metodoDePagamento == 3) {
    /**
     * 1 parcela = 15% de desconto
     * 2 parcelas = preço do produto
     * 3 ou mais parcelas = acréscimo de 10%
     */
    
    const parcelas = parseInt(prompt('Informe a quantidade de parcelas'))
  
    if (parcelas == 1) {
      const precoFinal = precoProduto * 0.85
      alert(`O preço final do pagamento é ${precoFinal} reais`)
    } else if (parcelas == 2) {
      alert(`O preço final do pagamento é ${precoProduto} reais`)
    } else {
      const precoFinal = precoProduto * 1.1
      alert(`O preço final do pagamento é ${precoFinal} reais`)
    }
}