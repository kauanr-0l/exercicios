// --- Conversor de Moedas ---
//  O objetivo deste código é simular um conversor de moedas simples, onde o usuário pode converter um valor em dólares para reais usando uma taxa de câmbio fixa. Identifique os erros presentes no código e corrija-os para que o conversor funcione corretamente.

const taxaDolar = 5.50;

function converterParaReal(valorDolar) {
  let resultado = valorDolar * taxaDolar;
  return resultado;
}

const transacao = {
  usuario: "Carlos",
  valor: 100,
  concluida: true,
};

const valorFinal = converterParaReal(transacao.valor);

if (transacao.concluida) {
  console.log(
    "O valor convertido para " +
    transacao.usuario +
    " é: R$ " + valorFinal
  );
} else {
  console.log("Erro no processamento.");
}
