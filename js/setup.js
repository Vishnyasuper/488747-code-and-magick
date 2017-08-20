// Файл setup.js
'use strict';

var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

// var WIZARD__NAMES = [WIZARD_FIRST_NAMES[Math.floor(Math.random() * WIZARD_FIRST_NAMES.length)] + ' ' + WIZARD_SECOND_NAMES[Math.floor(Math.random() * WIZARD_SECOND_NAMES.length)]];

var WIZARD_COATCOLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var WIZARD_EYESCOLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;


var wizards = [
  {
    name: WIZARD_FIRST_NAMES[Math.floor(Math.random() * WIZARD_FIRST_NAMES.length)] + ' ' + WIZARD_SECOND_NAMES[Math.floor(Math.random() * WIZARD_SECOND_NAMES.length)],
    coatColor: WIZARD_COATCOLOR[Math.floor(Math.random() * WIZARD_COATCOLOR.length)],
    eyesColor: WIZARD_EYESCOLOR[Math.floor(Math.random() * WIZARD_EYESCOLOR.length)]
  },
  {
    name: WIZARD_FIRST_NAMES[Math.floor(Math.random() * WIZARD_FIRST_NAMES.length)] + ' ' + WIZARD_SECOND_NAMES[Math.floor(Math.random() * WIZARD_SECOND_NAMES.length)],
    coatColor: WIZARD_COATCOLOR[Math.floor(Math.random() * WIZARD_COATCOLOR.length)],
    eyesColor: WIZARD_EYESCOLOR[Math.floor(Math.random() * WIZARD_EYESCOLOR.length)]
  },
  {
    name: WIZARD_FIRST_NAMES[Math.floor(Math.random() * WIZARD_FIRST_NAMES.length)] + ' ' + WIZARD_SECOND_NAMES[Math.floor(Math.random() * WIZARD_SECOND_NAMES.length)],
    coatColor: WIZARD_COATCOLOR[Math.floor(Math.random() * WIZARD_COATCOLOR.length)],
    eyesColor: WIZARD_EYESCOLOR[Math.floor(Math.random() * WIZARD_EYESCOLOR.length)]
  },
  {
    name: WIZARD_FIRST_NAMES[Math.floor(Math.random() * WIZARD_FIRST_NAMES.length)] + ' ' + WIZARD_SECOND_NAMES[Math.floor(Math.random() * WIZARD_SECOND_NAMES.length)],
    coatColor: WIZARD_COATCOLOR[Math.floor(Math.random() * WIZARD_COATCOLOR.length)],
    eyesColor: WIZARD_EYESCOLOR[Math.floor(Math.random() * WIZARD_EYESCOLOR.length)]
  }
];


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
