$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);

function Button() {
    const btn_question_1 = $$('.answer-item__icon');
    btn_question_1.forEach((item, index) => {
         btn_question_1[index].onclick = function(e) {
           const btn= e.target.closest('.answer-item');
           btn.classList.toggle('active')
        }
    });
}
Button();