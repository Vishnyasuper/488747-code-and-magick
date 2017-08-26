// Файл setup.js
'use strict';

var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var WIZARD_NAMES;

var WIZARD_COATCOLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var WIZARD_EYESCOLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var WIZARDS_COUNT = 4;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var getRandomObject = function (name, coatColor, eyesColor, count) {
  var wizardsArray = [];
  for (var i = 0; i < count; i++) {
    wizardsArray[i] = {
      name: getRandomize(WIZARD_FIRST_NAMES) + ' ' + getRandomize(WIZARD_SECOND_NAMES),
      coatColor: getRandomize(WIZARD_COATCOLOR),
      eyesColor: getRandomize(WIZARD_EYESCOLOR)
    };
  }
  return wizardsArray;
};


function getRandomize(array) {
  var randomArray = array[Math.floor(Math.random() * array.length)];
  return randomArray;
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var wizards = getRandomObject(WIZARD_NAMES, WIZARD_COATCOLOR, WIZARD_EYESCOLOR, WIZARDS_COUNT);

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
