import { auth } from "./firebaseConfig.js";
import { signOut, onAuthStateChanged } 
    from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

// Verifica se usuário está logado
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById("userEmail").innerText = user.email;
    } else {
        // Se não estiver logado, redireciona para login
        window.location.href = "Tela_login.html";
    }
});

// Logout
document.getElementById("btnLogout").addEventListener("click", () => {
    signOut(auth).then(() => {
        window.location.href = "Tela_login.html";
    });
});