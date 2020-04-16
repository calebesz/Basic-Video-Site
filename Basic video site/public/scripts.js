const modalOverlay = document.querySelector('.modalover')
const cards = document.querySelectorAll('.card')

for(let card of cards){
    card.addEventListener("click", function(){
        const videoid = card.getAttribute("id");
        window.location.href = `/video?id=${videoid}`
    })
}


