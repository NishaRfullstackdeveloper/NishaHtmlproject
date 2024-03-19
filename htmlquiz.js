let questionNumber = 0;
let positiveScore = 0;
let negativeScore = 0;

function questionOne() {
  //An - 3
  document.getElementById("text-display").innerHTML = "HTML stands for?";
  document.getElementById("answer-one").innerHTML =
    "A) Hyper Text Marking Language";
  document.getElementById("answer-two").innerHTML =
    "B) Hypen Text Markup Language";
  document.getElementById("answer-three").innerHTML =
    "C) Hyper Text Markup Language";
  document.getElementById("answer-four").innerHTML =
    "D) Hyperlinks and Text Markup Language";
}

function questionTwo() {
  //An - 3
  document.getElementById("text-display").innerHTML =
    "What is the correct HTML element for inserting a line break?";
  document.getElementById("answer-one").innerHTML = "A) lb";
  document.getElementById("answer-two").innerHTML = "B)  break";
  document.getElementById("answer-three").innerHTML = "C) br";
  document.getElementById("answer-four").innerHTML = "D) linebreak";
}

function questionThree() {
  //An - 1
  document.getElementById("text-display").innerHTML =
    "What is the correct HTML element for inserting a horizontal rule?";
  document.getElementById("answer-one").innerHTML = "A) hr";
  document.getElementById("answer-two").innerHTML = "B) line";
  document.getElementById("answer-three").innerHTML = "C) rule";
  document.getElementById("answer-four").innerHTML = "D) hline";
}

function questionFour() {
  //An - 2
  document.getElementById("text-display").innerHTML =
    "What is the correct HTML element for inserting a large heading?";
  document.getElementById("answer-one").innerHTML = "A) head";
  document.getElementById("answer-two").innerHTML = "B) h1";
  document.getElementById("answer-three").innerHTML = "C) heading";
  document.getElementById("answer-four").innerHTML = "D) h6";
}
// five
function questionFive() {
  //An - 2
  document.getElementById("text-display").innerHTML =
    "What is the correct HTML attribute for specifying the destination of a hyperlink?";
  document.getElementById("answer-one").innerHTML = "A) link";
  document.getElementById("answer-two").innerHTML = "B) href";
  document.getElementById("answer-three").innerHTML = "C) url";
  document.getElementById("answer-four").innerHTML = "D) src";
}
// six
function questionSix() {
  //An - 1
  document.getElementById("text-display").innerHTML =
    "What is the correct HTML attribute for specifying the alternative text for an image?";
  document.getElementById("answer-one").innerHTML = "A) alt";
  document.getElementById("answer-two").innerHTML = "B) text";
  document.getElementById("answer-three").innerHTML = "C) src";
  document.getElementById("answer-four").innerHTML = "D) title";
}
// seven
function questionSeven() {
  //An - 4
  document.getElementById("text-display").innerHTML =
    "What are the differences between block-level and inline elements in HTML?";
  document.getElementById("answer-one").innerHTML =
    "A) Block-level elements start on a new line and take up the full width of the page, while inline elements do not start on a new line and only take up as much width as necessary.";
  document.getElementById("answer-two").innerHTML =
    "B) Block-level elements do not start on a new line and only take up as much width as necessary, while inline elements start on a new line and take up the full width of the page.";
  document.getElementById("answer-three").innerHTML =
    "C) Block-level elements can contain other block-level or inline elements, while inline elements can only contain text or other inline elements.";
  document.getElementById("answer-four").innerHTML =
    "D) Both A and C are correct.";
}
// eight
function questionEight() {
  //An - 4
  document.getElementById("text-display").innerHTML =
    "What are the differences between relative and absolute URLs in HTML?";
  document.getElementById("answer-one").innerHTML =
    "A) Relative URLs specify the location of a resource relative to the current document, while absolute URLs specify the full address of a resource";
  document.getElementById("answer-two").innerHTML =
    "B) Relative URLs specify the full address of a resource, while absolute URLs specify the location of a resource relative to the current document.";
  document.getElementById("answer-three").innerHTML =
    "C) Relative URLs are faster and more efficient, while absolute URLs are slower and more redundant.";
  document.getElementById("answer-four").innerHTML =
    "D) Both A and C are correct.";
}
// nine
function questionNine() {
  //An - 4
  document.getElementById("text-display").innerHTML =
    "What are the differences between iframe and embed tags in HTML?";
  document.getElementById("answer-one").innerHTML =
    "A) iframe tag is used to display a web page within a web page, while embed tag is used to display a media file within a web page.";
  document.getElementById("answer-two").innerHTML =
    "B) iframe tag is used to display a media file within a web page, while embed tag is used to display a web page within a web page.";
  document.getElementById("answer-three").innerHTML =
    "C) iframe tag is used to display a web page or a media file within a web page, while embed tag is used to display a media file within a web page or an object tag.";
  document.getElementById("answer-four").innerHTML =
    "D) Both A and C are correct.";
}
// ten
function questionTen() {
  //An - 1
  document.getElementById("text-display").innerHTML =
    "What are some of the HTML5 semantic elements and what are the benefits of using them?";
  document.getElementById("answer-one").innerHTML =
    "A) article, section, header, footer, nav, aside, main. They provide more meaningful and descriptive structure to the web page and improve the accessibility and SEO.";
  document.getElementById("answer-two").innerHTML =
    "B) div, span, p, h1, ul, li, a. They provide more flexible and customizable structure to the web page and improve the styling and interactivity.";
  document.getElementById("answer-three").innerHTML =
    "C) canvas, video, audio, svg, source, track. They provide more dynamic and multimedia content to the web page and improve the user experience and engagement.";
  document.getElementById("answer-four").innerHTML =
    "D) Both A and C are correct.";
}
// eleven
function questionEleven() {
  //An - 1
  document.getElementById("text-display").innerHTML =
    "What are some of the HTML5 input types and what are the benefits of using them?";
  document.getElementById("answer-one").innerHTML =
    "A) color, date, email, number, range, search, tel, url. They provide more specific and user-friendly input fields for forms and improve the validation and usability.";
  document.getElementById("answer-two").innerHTML =
    "B) text, password, checkbox, radio, button, submit, reset, file. They provide more generic and basic input fields for forms and improve the compatibility and simplicity.";
  document.getElementById("answer-three").innerHTML =
    "C) hidden, image, month, week, time, datetime, datetime-local. They provide more advanced and customized input fields for forms and improve the functionality and flexibility.";
  document.getElementById("answer-four").innerHTML =
    "D)  Both A and C are correct.";
}
// twelve
function questionTwelve() {
  //An - 4
  document.getElementById("text-display").innerHTML =
    "Who was the primary author of HTML?";
  document.getElementById("answer-one").innerHTML = "A) Brendan Eich";
  document.getElementById("answer-two").innerHTML = "B) Sabeer Bhatiya";
  document.getElementById("answer-three").innerHTML = "C) Google Inc.";
  document.getElementById("answer-four").innerHTML = "D) Tim Berners-Lee";
}
// thirteen
function questionThirteen() {
  //An - 2
  document.getElementById("text-display").innerHTML =
    "Which of the following attributes comes in handy when borders have to be put between groups of columns instead of every column?";
  document.getElementById("answer-one").innerHTML = "A) col";
  document.getElementById("answer-two").innerHTML = "B) colgroup";
  document.getElementById("answer-three").innerHTML = "C) rowspan";
  document.getElementById("answer-four").innerHTML = "D) row";
}
// fourteen
function questionFourteen() {
  //4
  document.getElementById("text-display").innerHTML =
    "Which of the following attributes is/are related to the img tag?";
  document.getElementById("answer-one").innerHTML = "A) height";
  document.getElementById("answer-two").innerHTML = "B) alt";
  document.getElementById("answer-three").innerHTML = "C) src";
  document.getElementById("answer-four").innerHTML = "D) all of the above";
}
// fifteen
function questionFifteen() {
  //2
  document.getElementById("text-display").innerHTML =
    " A few lines in an HTML paragraph are to be formatted differently from the rest of the lines. Which tag will assist in this?";
  document.getElementById("answer-one").innerHTML = "A) div";
  document.getElementById("answer-two").innerHTML = "B) p";
  document.getElementById("answer-three").innerHTML = "C) span";
  document.getElementById("answer-four").innerHTML = "D) format";
}
// question
function question(question) {
  document.getElementById("container").style.backgroundColor = "#1b4242";
  resetColor();
  activateButton();
  if (question == 1) {
    questionNumber = 1;
    questionOne();
  } else if (question == 2) {
    questionNumber = 2;
    questionTwo();
  } else if (question == 3) {
    questionNumber = 3;
    questionThree();
  } else if (question == 4) {
    questionNumber = 4;
    questionFour();
  } else if (question == 5) {
    questionNumber = 5;
    questionFive();
  } else if (question == 6) {
    questionNumber = 6;
    questionSix();
  } else if (question == 7) {
    questionNumber = 7;
    questionSeven();
  } else if (question == 8) {
    questionNumber = 8;
    questionEight();
  } else if (question == 9) {
    questionNumber = 9;
    questionNine();
  } else if (question == 10) {
    questionNumber = 10;
    questionTen();
  } else if (question == 11) {
    questionNumber = 11;
    questionEleven();
  } else if (question == 12) {
    questionNumber = 12;
    questionTwelve();
  } else if (question == 13) {
    questionNumber = 13;
    questionThirteen();
  } else if (question == 14) {
    questionNumber = 14;
    questionFourteen();
  } else if (question == 15) {
    questionNumber = 15;
    questionFifteen();
  } else {
    endScreen();
  }

  showQuestionNumber();
}

// correct ans
function answer(givenAnswer) {
  if (questionNumber == 1) {
    if (givenAnswer == 3) {
      answerOne(true, 2, givenAnswer, 3);
    } else {
      answerOne(false, 2, givenAnswer, 3);
    }
  } else if (questionNumber == 2) {
    if (givenAnswer == 3) {
      answerOne(true, 3, givenAnswer, 3);
    } else {
      answerOne(false, 3, givenAnswer, 3);
    }
  } else if (questionNumber == 3) {
    if (givenAnswer == 1) {
      answerOne(true, 4, givenAnswer, 1);
    } else {
      answerOne(false, 4, givenAnswer, 1);
    }
  } else if (questionNumber == 4) {
    if (givenAnswer == 2) {
      answerOne(true, 5, givenAnswer, 2);
    } else {
      answerOne(false, 5, givenAnswer, 2);
    }
  } else if (questionNumber == 5) {
    if (givenAnswer == 2) {
      answerOne(true, 6, givenAnswer, 2);
    } else {
      answerOne(false, 6, givenAnswer, 2);
    }
  } else if (questionNumber == 6) {
    if (givenAnswer == 1) {
      answerOne(true, 7, givenAnswer, 1);
    } else {
      answerOne(false, 7, givenAnswer, 1);
    }
  } else if (questionNumber == 7) {
    if (givenAnswer == 4) {
      answerOne(true, 8, givenAnswer, 4);
    } else {
      answerOne(false, 8, givenAnswer, 4);
    }
  } else if (questionNumber == 8) {
    if (givenAnswer == 4) {
      answerOne(true, 9, givenAnswer, 4);
    } else {
      answerOne(false, 9, givenAnswer, 4);
    }
  } else if (questionNumber == 9) {
    if (givenAnswer == 4) {
      answerOne(true, 10, givenAnswer, 4);
    } else {
      answerOne(false, 10, givenAnswer, 4);
    }
  } else if (questionNumber == 10) {
    if (givenAnswer == 1) {
      answerOne(true, 11, givenAnswer, 1);
    } else {
      answerOne(false, 11, givenAnswer, 1);
    }
  } else if (questionNumber == 11) {
    if (givenAnswer == 1) {
      answerOne(true, 12, givenAnswer, 1);
    } else {
      answerOne(false, 12, givenAnswer, 1);
    }
  } else if (questionNumber == 12) {
    if (givenAnswer == 4) {
      answerOne(true, 13, givenAnswer, 4);
    } else {
      answerOne(false, 13, givenAnswer, 4);
    }
  } else if (questionNumber == 13) {
    if (givenAnswer == 2) {
      answerOne(true, 14, givenAnswer, 2);
    } else {
      answerOne(false, 144, givenAnswer, 2);
    }
  } else if (questionNumber == 14) {
    if (givenAnswer == 4) {
      answerOne(true, 15, givenAnswer, 4);
    } else {
      answerOne(false, 15, givenAnswer, 4);
    }
  } else if (questionNumber == 15) {
    if (givenAnswer == 2) {
      answerOne(true, 16, givenAnswer, 2);
    } else {
      answerOne(false, 16, givenAnswer, 2);
    }
  }
}
// correct or not
function answerOne(
  correctAnswer,
  nextQuestion,
  buttonClick,
  correctAnswerButton
) {
  disableButton();
  if (correctAnswer) {
    positiveScore = positiveScore + 1;
    document.getElementById("text-display").innerHTML = "Correct Answer. Good";
    document.getElementById("container").style.backgroundColor = "#65b741";
    coloringButtons(correctAnswerButton, buttonClick);
    setTimeout(() => {
      question(nextQuestion);
    }, 3000);
  } else {
    negativeScore = negativeScore + 1;
    document.getElementById("text-display").innerHTML =
      "Wrong Answer. Need More Practise";
    document.getElementById("container").style.backgroundColor = "#ef4040";
    coloringButtons(correctAnswerButton, buttonClick);
    setTimeout(() => {
      question(nextQuestion);
    }, 3000);
  }
  showScore();
}

function coloringButtons(greenButton, redbutton) {
  if (greenButton == redbutton) {
    redbutton = 5;
  }
  if (greenButton == 1) {
    document.getElementById("answer-one").style.backgroundColor = "#9BCF53";
  } else if (greenButton == 2) {
    document.getElementById("answer-two").style.backgroundColor = "#9BCF53";
  } else if (greenButton == 3) {
    document.getElementById("answer-three").style.backgroundColor = "#9BCF53";
  } else if (greenButton == 4) {
    document.getElementById("answer-four").style.backgroundColor = "#9BCF53";
  }

  if (redbutton == 1) {
    document.getElementById("answer-one").style.backgroundColor = "#EE4266";
  } else if (redbutton == 2) {
    document.getElementById("answer-two").style.backgroundColor = "#EE4266";
  } else if (redbutton == 3) {
    document.getElementById("answer-three").style.backgroundColor = "#EE4266";
  } else if (redbutton == 4) {
    document.getElementById("answer-four").style.backgroundColor = "#EE4266";
  }
}

window.onload = function () {
  dostart();
  showQuestionNumber();
};
// hidden
function dostart() {
  resetColor();
  question(1);
}

function endScreen() {
  document.getElementById("left-containerr").style.display = "none";
}

function resetColor() {
  document.getElementById("answer-one").style.backgroundColor = "#9ec8b9";
  document.getElementById("answer-two").style.backgroundColor = "#9ec8b9";
  document.getElementById("answer-three").style.backgroundColor = "#9ec8b9";
  document.getElementById("answer-four").style.backgroundColor = "#9ec8b9";
}
function disableButton() {
  document.getElementById("answer-one").disabled = true;
  document.getElementById("answer-two").disabled = true;
  document.getElementById("answer-three").disabled = true;
  document.getElementById("answer-four").disabled = true;
}

function activateButton() {
  document.getElementById("answer-one").disabled = false;
  document.getElementById("answer-two").disabled = false;
  document.getElementById("answer-three").disabled = false;
  document.getElementById("answer-four").disabled = false;
}

function showScore() {
  document.getElementById("score-one").innerHTML = positiveScore;
  document.getElementById("score-two").innerHTML = negativeScore;
}
function showQuestionNumber() {
  document.getElementById("question-number").innerHTML =
    "Question No. " + questionNumber;
}
