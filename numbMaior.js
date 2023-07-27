function encontrarMaiorNumero(num1, num2, num3) {
    const numeros = [num1, num2, num3];
    const maior = Math.max(...numeros);
    return maior;
  }
  
  function exibirMaiorNumero() {
    const numero1 = parseInt(document.getElementById('num1').value);
    const numero2 = parseInt(document.getElementById('num2').value);
    const numero3 = parseInt(document.getElementById('num3').value);
  
    const maiorNumero = encontrarMaiorNumero(numero1, numero2, numero3);
    document.getElementById('resultado').innerHTML = "O maior número é: " + maiorNumero;
  }
  
  document.getElementById('btnEncontrarMaior').addEventListener('click', exibirMaiorNumero);
  