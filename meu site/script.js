document.addEventListener("DOMContentLoaded", function () {
   const botao = document.querySelector("#botao");
   const mensagem = document.querySelector("#mensagem");

   const botao2 = document.querySelector("#botao2");
   const mensagem2 = document.querySelector("#mensagem2");

   // Botão que alterna curiosidade
   botao.addEventListener("click", function () {
       if (mensagem.style.display === "none") {
           mensagem.style.display = "block";
           botao.textContent = "Clique aqui novamente";
       } else {
           mensagem.style.display = "none";
           botao.textContent = "Curiosidades";
       }
   });

   // Botão que mostra a mensagem antiga
   botao2.addEventListener("click", function () {
       mensagem2.textContent = "Parabéns! O JavaScript está funcionando.";
       mensagem2.style.display = "block";
       mensagem2.style.color = "#1e3a5f";
       mensagem2.style.fontWeight = "600";
   });
});
