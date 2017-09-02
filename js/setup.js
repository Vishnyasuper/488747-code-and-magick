// Файл setup.js
'use strict';

var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var WIZARD_COATCOLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var WIZARD_EYESCOLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var WIZARD_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var WIZARDS_COUNT = 4;

var userDialog = document.querySelector('.setup');
// userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var generateRandomWizardsArray = function (count) {
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

var wizards = generateRandomWizardsArray(WIZARDS_COUNT);

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

// module4-task1

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

// Нажатие на элемент .setup-open удаляет класс hidden
// у блока setup. Нажатие на элемент .setup-close, расположенный
// внутри блока setup возвращает ему класс hidden.
var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var setupPlayer = document.querySelector('.setup-player');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var userNameInput = setup.querySelector('.setup-user-name');

var closePopup = function () {
  // if (userNameInput.focused) {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  // }
};

var changeColor = function (elementChangeColor, array) {
  setupPlayer.querySelector(elementChangeColor).style.fill = getRandomize(array);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

setupPlayer.querySelector('.wizard-coat').addEventListener('click', function () {
  changeColor('.wizard-coat', WIZARD_COATCOLOR);
});

setupPlayer.querySelector('.wizard-eyes').addEventListener('click', function () {
  changeColor('.wizard-eyes', WIZARD_EYESCOLOR);
});

setupPlayer.querySelector('.setup-fireball-wrap').addEventListener('click', function () {
  changeColor('.setup-fireball-wrap', WIZARD_FIREBALL);
});

userNameInput.addEventListener('invalid', function () {
  if (!userNameInput.validity.valid) {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    }
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});
