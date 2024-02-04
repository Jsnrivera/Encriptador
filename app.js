//variables globales
var alertMes = document.getElementById("alertaMensaje");
var textAreaEntrada = document.getElementById("usuario-texto");
var textAreaResultado = document.getElementById("resultadoTexto");
//encripta el texto ingresado por el usuario
function encrypt() {
    let textoUsuario = textAreaEntrada.value;
    let caracteresNo = textoUsuario.replace(/[^\w\s]/gi, '');
    if (caracteresNo !== textoUsuario) {
        alertMes.style.color = "red";
        setTimeout(function () { alertMes.style.color = ""; }, 900);
    } else {
        if (textAreaEntrada.value === "") {
            textAreaEntrada.value = "No hay texto para encriptar.";
            textAreaEntrada.style.color = "red";
            setTimeout(function () { textAreaEntrada.value = "", textAreaEntrada.style.color = ""; }, 900);
        }
        else {
            textAreaEntrada.value = "El texto se ha encriptado.";
            textAreaEntrada.style.color = "black";
            setTimeout(function () { textAreaEntrada.value = "", textAreaEntrada.style.color = ""; }, 900);
            textoUsuario = textoUsuario.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
            textAreaResultado.innerHTML = textoUsuario;
        }
    }
}
//desencripta el texto ingresado por el usuario
function decrypt() {
    if (textAreaEntrada.value === "") {
        let textoEncriptado = textAreaResultado.value;
        if (textoEncriptado === "") {
            textAreaEntrada.value = "No hay texto para desencriptar.";
            textAreaEntrada.style.color = "red";
            setTimeout(function () { textAreaEntrada.value = "", textAreaEntrada.style.color = ""; }, 900);
        }
        textoEncriptado = textoEncriptado.replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        textAreaResultado.innerHTML = textoEncriptado;
    } else {
        let textoUsuario = textAreaEntrada.value;
        textoUsuario = textoUsuario.replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        textAreaResultado.innerHTML = textoUsuario;
        textAreaEntrada.value = "El texto se ha desencriptado.";
        textAreaEntrada.style.color = "black";
        setTimeout(function () { textAreaEntrada.value = "", textAreaEntrada.style.color = ""; }, 900);
    }
}
//copia el texto al portapapeles
function copiarTexto() {
    let codigoACopiar = textAreaResultado.value;
    navigator.clipboard.writeText(codigoACopiar).valueOf(Text);
    document.getElementById('resultadoTexto').textContent = "Texto copiado al portapapeles.";
    textAreaResultado.style.color = "black";
    setTimeout(function () { ; textAreaResultado.textContent = "" }, 1000);
}