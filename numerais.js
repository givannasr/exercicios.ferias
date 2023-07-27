function exibirNumerosNaturais() {

  let numero = parseInt(document.getElementById("numero").value);

    if (numero === 0) {
      document.write("Não existem números a serem exibidos.");
    } else {
      document.write("Números naturais entre 0 e " + numero + ": ");
      for (let i = 0; i <= numero; i++) {
      document.write(i+",");
      }
    }
  }