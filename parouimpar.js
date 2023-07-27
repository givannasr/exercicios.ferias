
function parouImpar(){
    let numero= parseInt(document.getElementById("numb").value);
    if (numero % 2 === 0) {
    document.write(numero + " é um número par.");
  } else {
    document.write(numero + " é um número ímpar.");
  }
}