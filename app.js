function textoEncriptado(textoUsuario) {
    textoUsuario = textoUsuario.replace(/[^\w\s]/gi, '');
    if (textoUsuario !== document.getElementById("usuario-texto").value) {
        let colorTex = document.getElementById("alertaMensaje");
        colorTex.style.color = "red";
        setTimeout(function () { colorTex.style.color = ""; }, 2000);
        return document.getElementById("usuario-texto").value = "";
    }
    else {
        let color = document.getElementById("usuario-texto");
        document.getElementById("usuario-texto").value = "El texto se ha encriptado.";
        color.style.color = "black";
        setTimeout(function () { document.getElementById("usuario-texto").value = "", color.style.color = ""; }, 2000);
        return textoUsuario.replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    }
}

function textoDesencriptado(textoEncriptado) {
    return textoEncriptado.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function encriptarTexto() {
    let textoUsuario = document.getElementById("usuario-texto").value;
    document.getElementById("resultadoTexto").innerHTML = textoEncriptado(textoUsuario);
}


function desencriptarTexto() {

    let textoEncriptado = document.getElementById("usuario-texto").value;
    document.getElementById("resultadoTexto").innerHTML = textoDesencriptado(textoEncriptado);
    document.getElementById("usuario-texto").value = "";
    //let textoUsuario = document.getElementById("usuario-texto");
    //document.getElementById("usuario-texto").innerHTML = textoEncriptado(textoUsuario);
}
function portapapeles() {
    let codigoACopiar = document.getElementById('resultadoTexto').value;
    navigator.clipboard.writeText(codigoACopiar).valueOf(Text);
    let color = document.getElementById("resultadoTexto");
    document.getElementById('resultadoTexto').textContent = "Texto copiado al portapapeles.";
    color.style.color = "black";
    setTimeout(function () { ; document.getElementById('resultadoTexto').textContent = "" }, 2000);
}

