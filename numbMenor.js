function encontrarMenorNumero(num1, num2, num3) {
    const numeros = [num1, num2, num3];
    const menor = Math.min(...numeros);
    return menor;
  }
  
  function exibirMenorNumero() {
    const numero1 = parseInt(document.getElementById('num1').value);
    const numero2 = parseInt(document.getElementById('num2').value);
    const numero3 = parseInt(document.getElementById('num3').value);
  
    const menorNumero = encontrarMenorNumero(numero1, numero2, numero3);
    document.getElementById('resultado').innerHTML = "O menor número é: " + menorNumero;
  }
  
  document.getElementById('btnEncontrarMenor').addEventListener('click', exibirMenorNumero);
  