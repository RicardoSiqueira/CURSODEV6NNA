function validacao(){
    
if(document.form.login.value==""){
alert("Preencha o campo Login");
document.form.login.focus();
return false;
}  
if(document.form.senha.value==""){
alert("Preencha o campo senha");
document.form.senha.focus();
return false;
}

if(document.form.senha.value.length >8){
    alert("Digite somente até 8 caracteres");
    ducument.form.senha.focus();
    return false;
}
   
   }



