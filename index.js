const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const precentage = document.querySelector('span');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  //check Answers

  userAnswers.forEach((answer, i) => {
    if (answer === correctAnswers[i]) {
      score += 25;
    }
  });

  //show result
  result.setAttribute('style', 'display: inline !important');

  // result.querySelector('span').textContent = `${score}%`;
  // result.classList.remove('d-none');

  scrollTo(0, 0);

  let output = 0;
  const timer = setInterval(() => {
    precentage.textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 25);

});
