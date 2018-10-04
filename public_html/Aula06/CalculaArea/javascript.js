var nome = window.prompt("Login:");
var senha = window.prompt("Senha:");

if(nome == "admin" && senha == "web123"){
    window.location.assign("Principal.html");
    
}else {
    alert("Acesso negado");
   }
