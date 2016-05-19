'use strict';

  const app = angular.module('quizApp', []);
  app.controller('quizCtrl', ['$scope', function($scope) {

    const quiz = [
      { name: 'The favorite pastime at NSS involves what?',  choices:[
        'Pulling John\'s ponytail then pointing at Steve',
        'Ping Pong Table',
        'Looking for aspirin for your spinning head',
        'Dart Board',
        'Pool Table'
      ]},
    { name: 'What are the minimum number of hours learning per week while at NSS?',  choices:[
        '1',
        '2',
        '30',
        'Any hour your eyes are open'
      ]},
    { name: 'How many developers have gone through NSS?',  choices:[
        "Tens",
        "Hundreds",
        "Thousands",
        "Millions",
        "Billions"
      ]},
    { name: 'What has NSS not taught so far?',  choices:[
        'MEAN stack',
        'Ruby',
        'AngularJS',
        'INTERCAL'
      ]},
    { name: 'Steve loves to wear what?',  choices:[
        "Capri pants",
        "Goth attire",
        "Sport coat",
        "T-shirt and shorts"
      ]}
    ];

    for (let i = 0; i < quiz.length; i++) {  // for each question
      quiz[i].choices = _.shuffle(quiz[i].choices);  // shuffle choices
    }

    const randomizedQuiz = _.shuffle(quiz);  // shuffle questions
    $scope.randomizedQuiz = randomizedQuiz;

  }]);
