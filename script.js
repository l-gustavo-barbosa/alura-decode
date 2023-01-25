const textArea = document.querySelector("#mensagem");
const mensagem = document.querySelector("#mensagem-criptografada");
    
function btnEncriptar(){   
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    document.querySelector("#mensagem-criptografada").innerHTML = textoEncriptado;
    textArea.value = "";
};

function encriptar(stringEncriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {

        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        };
    };
    return stringEncriptada;
};

function btnDesencriptar(){   
    const textoDesencriptado = descriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    console.log(mensagem.value);
    document.querySelector("#mensagem-criptografada").innerHTML = textoDesencriptado;
    textArea.value = "";
};


function descriptar(stringDescriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDescriptada = stringDescriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {

        if(stringDescriptada.includes(matrizCodigo[i][1])) {
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        };
    };
    return stringDescriptada;
};



function copiar() {
    var copiarTexto = document.querySelector('#mensagem-criptografada').value;
  

    navigator.clipboard.writeText(copiarTexto);
  }