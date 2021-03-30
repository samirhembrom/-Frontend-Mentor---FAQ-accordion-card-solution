const questionsEl = document.getElementsByClassName("question");
const answerEl = document.getElementsByClassName("answer");
const arrowImgEl = document.getElementsByClassName("arrow");

for ( let i = 0; i < questionsEl.length; i++){
    questionsEl[i].addEventListener("click", ()=> {
        questionsEl[i].classList.toggle("text-bold");
        arrowImgEl[i].classList.toggle("rotateimg180");
        answerEl[i].classList.toggle("d-none");

    })
}

