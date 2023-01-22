/* 
Objetivo 1 - Quando usuario clicar no botão de ver trailer abrir modal com o trailer no youtube
    - passo 1 - dar um jeito de pegar o elemento que representa o botao na tela usando o js
    - passo 2 - dar um jeito de identificar quando o usuario clicar no botao
    - passo 3 - dar um jeito de pegar o elemento da modal do js
    - passo 4 - abrir a modal na tela

Objetivo 2 - Quando clicar no X fechar o modal
    - passo 1 - dar um pegar o elemento da modal do js
    - passo 2 - dar um jeito de identificar quando o usuario clicar no X
    - passo 3 - fechar a modal
*/

const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const fecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkVideo);
})

fecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src","");
})
