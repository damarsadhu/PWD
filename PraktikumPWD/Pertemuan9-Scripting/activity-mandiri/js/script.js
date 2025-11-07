function fn_ValForm(){
    var sMsg = "";
    var eRegex = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/ ; 
    if(document.getElementById("name").value == ""){
        sMsg += "\n* Anda belum mengisikan nama";
    }
    
    var emailValue = document.getElementById("email").value;
    if(emailValue == ""){
        sMsg += "\n* Anda belum mengisikan email";
    } 
    else if(!eRegex.test(emailValue)){
        sMsg += "\n* Format email tidak valid";
    }
    

    if(document.getElementById("message").value == ""){
        sMsg += "\n* Anda belum mengisikan pesan";
    }

    if(sMsg != ""){
        alert("Peringatan: \n"+sMsg);
        return false;
    }else{
        return true;
    }
            }