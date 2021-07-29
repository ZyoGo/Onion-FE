const questions = [
  {
    question: 'Apa yang di maksud dengan routing',
    answers: [
      {
        text: 'A. mekanisme pengiriman paket data yang ditransmisikan dari satu network ke network yang lain.',
        correct: true,
      },
      { text: 'B. Menghubungkan router ke internet', correct: false },
      { text: 'C. Menghubungkan Komputer ke Internet', correct: false },
      { text: 'D. Menghubungkan satu komputer ke komputer lain', correct: false },
    ],
  },
  {
    question: 'Who is the best YouTuber?',
    answers: [
      { text: 'Web Dev Simplified', correct: true },
      { text: 'Traversy Media', correct: true },
      { text: 'Dev Ed', correct: true },
      { text: 'Fun Fun Function', correct: true },
    ],
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false },
    ],
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true },
      { text: '2', correct: false },
      { text: '10', correct: true },
    ],
  },
];

export default questions;
