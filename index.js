let encriptBtn = document.getElementById("encript");
let decriptBtn = document.getElementById("decript");
let copyBtn = document.getElementById('copy');

function encript() {
    let text = document.getElementById("userInput").value.toLowerCase();
    let resp = document.getElementById("res");
    let arrMsg = text.split("");
    let encriptMsgArr = [];

    if(text.length <= 1) {
        alert("Digite um texto!");
    } else {
        document.getElementById("empty").innerHTML = "Texto criptografado!";

        for(i = 0; i < arrMsg.length; i++){
            let letter;
            
            switch(arrMsg[i]){
                case "e":
                    letter = "enter";
                    break;
                case "i":
                    letter = "imes";
                    break;
                case "a":
                    letter = "ai";
                    break;
                case "o":
                    letter = "ober";
                    break;
                case "u":
                    letter = "ufat";
                    break; 
                default:
                    letter = arrMsg[i];
                    break;   
            }
    
            encriptMsgArr.push(letter);
            console.log("Encripted message array: ", encriptMsgArr);
        }
        
        resp.textContent = encriptMsgArr.join("");
    }  
}

function decript() {
    let text = document.getElementById("userInput").value;
    let resp = document.getElementById("res");
    document.getElementById("empty").innerHTML = "Texto descriptografado!";

    let code = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];

    for(var i = 0; i < code.length; i++) {
        if(text.includes(code[i][1])){
            text = text.replaceAll(code[i][1], code[i][0]);
        }
    }
    
    resp.textContent = text;
}

function copyToClipBoard() {
    let content = document.getElementById("res").textContent;
    navigator.clipboard.writeText(content);
    alert("Texto copiado!!");
    document.getElementById("res").innerHTML = "________";
}

encriptBtn.addEventListener('click', encript);
decriptBtn.addEventListener('click', decript);
copyBtn.addEventListener('click', copyToClipBoard);