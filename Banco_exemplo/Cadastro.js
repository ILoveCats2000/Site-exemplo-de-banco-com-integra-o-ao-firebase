import { auth } from "./firebaseConfig.js";
import { createUserWithEmailAndPassword } 
  from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

document.getElementById("btnCadastrar").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;

createUserWithEmailAndPassword(auth, email, senha)
    .then(userCredential => {
        alert("Usuário cadastrado: " + userCredential.user.email);
        })
    .catch(error => {
    alert("Erro: " + error.message);
        });
});