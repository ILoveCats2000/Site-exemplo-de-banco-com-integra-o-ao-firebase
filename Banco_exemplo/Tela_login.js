import { auth } from  "./firebaseConfig.js"
import { signInWithEmailAndPassword, onAuthStateChanged }
    from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

//login
document.getElementById("btnLogin").addEventListener("click", () => {
    const email = document.getElementById("emailLogin").value;
    const senha = document.getElementById("passwordLogin").value;

    signInWithEmailAndPassword(auth, email, senha)
        .then(userCredential => {
            //redirecioona para a tela do cliente
            window.location.href = "Cliente.html";
        })
        .catch(error => {
            alert("Erro: " + error.message);
        });
});

//Redefinir senha

linkEsqueciSenha.addEventListener('click', async () => {
    const email = prompt("Digite o email para rdefinir a senha: ");
    if(!email) return;

    try{
        await sendPasswordResetEmail(auth, email);
        alert("Um link para redefinir sua senha foi enviado para: " + email);
    }catch(error){
        alert("Erro ao enviar e-mail de redefinição: " + error.message);
    }
});

//bloqueia acesso á tela de login se já estiver logado
onAuthStateChanged(auth, (user) => {
    if(user) {
        //se já estiver logado, manda direto para cliente
        window.location.href = "Cliente.html";
    }
})