let letters = [
    { char: " ", code: "0" },
    { char: "-", code: "1" },
    { char: "a", code: "2" },
    { char: "b", code: "22" },
    { char: "c", code: "222" },
    { char: "d", code: "3" },
    { char: "e", code: "33" },
    { char: "f", code: "333" },
    { char: "g", code: "4" },
    { char: "h", code: "44" },
    { char: "i", code: "444" },
    { char: "j", code: "5" },
    { char: "k", code: "55"},
    { char: "l", code: "555" },
    { char: "m", code: "6" },
    { char: "n", code: "66" },
    { char: "o", code: "666" },
    { char: "p", code: "7" },
    { char: "q", code: "77" },
    { char: "r", code: "777" },
    { char: "s", code: "7777" },
    { char: "t", code: "8" },
    { char: "u", code: "88" },
    { char: "v", code: "888" },
    { char: "w", code: "9" },
    { char: "x", code: "99" },
    { char: "y", code: "999" },
    { char: "z", code: "9999" },
]

    
function getMessageCode(messageCode){
    var message = messageCode.toString();
    
    if(validateCode(message) == false){
        console.log("Mensagem inválida, tente novamente")
        return "Mensagem inválida, tente novamente";
    }
        
    var messageArray = [];
    messageArray = transformStringIntoArray(message);
    messageArray = transformCodeIntoChar(messageArray);
    console.log(messageArray)
    if(messageArray.length > 0){
        messageArray[0] = messageArray[0].toUpperCase();
    }

    message = transformArrayIntoString(messageArray, ",");
    console.log(message)
    return message;
}

function validateCode(message){
    let codeValid = true;

    if(message != ""){
        letters.forEach(el => {
            if(message.indexOf(el.char) != -1){
                codeValid = false;
            }
        })    
    }

    if(codeValid == false){
       return false;
    } else return true;
}

function transformStringIntoArray(message){
    var arrayChar = message.split("");
    var newArray = [];

    arrayChar.forEach((el, i) => {
        if(newArray.length == 0){
            newArray.push(el);
        } else {
            if(newArray[newArray.length - 1].substr(0,1) == el){
                newArray[newArray.length - 1] = newArray[newArray.length - 1] + el;
            } else {
                if(el.length <= 4){
                    newArray.push(el);
                }
            } 
        }
    });

    return newArray;
}

function transformCodeIntoChar(messageArray){
    messageArray.forEach((char, i) => {
        letters.forEach(el => {
            if(char == el.code){
                messageArray[i] = el.char;
            }
        });
        i++;
    })

    return messageArray;
}

function transformArrayIntoString(messageArray, separete){
    return messageArray.toString().replaceAll(separete, "");
}

(function(){
    getMessageCode("6661444");
    getMessageCode("777777");
    getMessageCode("666144410161217771222166617777");
    getMessageCode(21);
    getMessageCode("");
    getMessageCode("a");
    getMessageCode("443355555566604466690277733099966688");
})();
