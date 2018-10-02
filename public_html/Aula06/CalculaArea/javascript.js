var nome = window.prompt("Login:");
var senha = window.prompt("Senha:");

if(nome == "Ricardo" && senha == "123"){
    window.location.assign("PaginaPrincipal.html");
    
}else {
    alert("Acesso negado");
   }
