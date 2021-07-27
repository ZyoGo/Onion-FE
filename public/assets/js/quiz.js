const checkAnswer = document.querySelector('#answer');
const buttonAnswer = document.querySelectorAll('#option-check');

buttonAnswer.forEach(function (ele) {
  ele.addEventListener('click', function (e) {
    for (let i = 0; i < ele.children.length; i++) {
      if (ele.children[i].checked != true) {
        ele.classList.add('answer-button-active');
        ele.classList.remove('hover:bg-gray-300');
        ele.children[i].checked = true;
      } else {
        ele.classList.add('hover:bg-gray-300');
        ele.classList.remove('answer-button-active');
        ele.children[i].checked = false;
      }
    }
  });
});
