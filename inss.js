function calcularDescontoINSS() {
    let salarioBruto = parseInt(document.getElementById('num1').value)
    let salarioLiquido = 0;
    let descontoINSS = 0;
    let aliquota = 0;
    if (salarioBruto <= 1320.00) {
      aliquota = 7.5;
      descontoINSS = salarioBruto * (aliquota / 100);
      salarioLiquido = salarioBruto - descontoINSS;
      document.write("resultados: salário após o desconto: R$"+salarioLiquido+"<br>valor do desconto: R$"+descontoINSS+"<br>e qual o valor da alíquota que ele se enquadrou: "+aliquota);
    } else if (salarioBruto <= 2571.29) {
      aliquota = 9.0;
      descontoINSS = salarioBruto * (aliquota / 100);
      salarioLiquido = salarioBruto - descontoINSS;
      document.write("resultados: salário após o desconto: R$"+salarioLiquido+"<br>valor do desconto: R$"+descontoINSS+"<br>e qual o valor da alíquota que ele se enquadrou: "+aliquota);
    } else if (salarioBruto <= 3856.94) {
      aliquota = 12.0;
      descontoINSS = salarioBruto * (aliquota / 100);
      salarioLiquido = salarioBruto - descontoINSS;
      document.write("resultados: salário após o desconto: R$"+salarioLiquido+"<br>valor do desconto: R$"+descontoINSS+"<br>e qual o valor da alíquota que ele se enquadrou: "+aliquota);
    } else if (salarioBruto <= 7507.49) {
      aliquota = 14.0;
      descontoINSS = salarioBruto * (aliquota / 100);
      salarioLiquido = salarioBruto - descontoINSS;
      document.write("resultados: salário após o desconto: R$"+salarioLiquido+"<br>valor do desconto: R$"+descontoINSS+"<br>e qual o valor da alíquota que ele se enquadrou: "+aliquota);
    } else {
      aliquota = 14.0;
      descontoINSS = 7507.49 * (aliquota / 100);
      salarioLiquido = salarioBruto - descontoINSS;
      document.write("resultados: salário após o desconto: R$"+salarioLiquido+"<br>valor do desconto: R$"+descontoINSS+"<br>e qual o valor da alíquota que ele se enquadrou: "+aliquota);
    }
    return {
      salarioLiquido: salarioLiquido.toFixed(2),
      descontoINSS: descontoINSS.toFixed(2),
      aliquota: `${aliquota.toFixed(2)}%`
    };
  }