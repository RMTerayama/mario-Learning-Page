const preLoad = document.querySelector('.box-load');
const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;


function loading(){
	preLoad.style.display='none';
	console.log("funcao preload");
  }
const pageLoad= setTimeout(()=>{
   loading();
},1500)



function alternarModal(){
	modal.classList.toggle("aberto");

}

botaoTrailer.addEventListener("click", () => {
	alternarModal();
	video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
	alternarModal();
	video.setAttribute("src", "");
});
