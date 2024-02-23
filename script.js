function criptografar(texto) {
  return texto.replaceAll("e", "enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat")
}
function descriptografar(texto) {
  return texto.replaceAll("enter", "e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u")
}

document.getElementById("buttonCripto").addEventListener("click", clickCripto);
document.getElementById("buttonDescripto").addEventListener("click", clickDescripto);

function clickCripto() {
  if(textarea.value == "") {
      alert("Digite o texto a ser criptografado") 
  } else {
      cripto() 
  }
}

function clickDescripto() {
  if(textarea.value == "") {
      alert("Digite o texto a ser descriptografado")
  } else {
      descripto()
  }
}

const container = document.getElementById('container');
container.style.display = 'none';

function cripto(){
  let textarea = document.getElementById('textarea')
  let value = textarea.value
  let textoCriptografado = criptografar(value)
  container.innerHTML = `${textoCriptografado}`
  textarea.value = ""
  document.querySelector('.section__imagem2').style.display = 'block';
}

function descripto(){
  let textarea = document.getElementById('textarea')
  let value = textarea.value
  let textoCriptografado = descriptografar(value)
  container.innerHTML = `${textoCriptografado}`
  textarea.value = ""
  document.querySelector('.section__imagem2').style.display = 'block';
}

document.getElementById('buttonCripto').addEventListener('click', function() {
  container.style.display = 'block';
  document.querySelector('.container__inner__').style.display = 'none'; 
  document.querySelector('.container__inner').style.display = 'block';
});

document.getElementById('buttonDescripto').addEventListener('click', function() {
  container.style.display = 'block';
    document.querySelector('.container__inner__').style.display = 'none'; 
    document.querySelector('.container__inner').style.display = 'block';
  });

function copiar(){
  navigator.clipboard.writeText(container.value).then(() => {
      alert('Texto copiado')
  })
}