'use strict';

(function () {

  //  Нажатие на элемент .setup-open удаляет класс hidden
  //  у блока setup. Нажатие на элемент .setup-close, расположенный
  //  внутри блока setup возвращает ему класс hidden.

  var WIZARD_COATCOLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

  var WIZARD_EYESCOLOR = ['black', 'red', 'blue', 'yellow', 'green'];

  var WIZARD_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var setupOpen = document.querySelector('.setup-open');
  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');
  var setupPlayer = document.querySelector('.setup-player');

  function getRandomize(array) {
    var randomArray = array[Math.floor(Math.random() * array.length)];
    return randomArray;
  }
  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var userNameInput = setup.querySelector('.setup-user-name');

  var closePopup = function () {
    if (userNameInput === document.activeElement) {
      return;
    } else {
      setup.classList.add('hidden');
      document.removeEventListener('keydown', onPopupEscPress);
    }
  };

  var changeColor = function (elementChangeColor, array) {
    setupPlayer.querySelector(elementChangeColor).style.fill = getRandomize(array);
  };

  var changeBackGroundColor = function (elementChangeColor, array) {
    setupPlayer.querySelector(elementChangeColor).style.backgroundColor = getRandomize(array);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  setupPlayer.querySelector('.wizard-coat').addEventListener('click', function () {
    changeColor('.wizard-coat', WIZARD_COATCOLOR);
  });

  setupPlayer.querySelector('.wizard-eyes').addEventListener('click', function () {
    changeColor('.wizard-eyes', WIZARD_EYESCOLOR);
  });

  setupPlayer.querySelector('.setup-fireball-wrap').addEventListener('click', function () {
    changeBackGroundColor('.setup-fireball-wrap', WIZARD_FIREBALL);
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

  //  перетаскивание окна диалога и добавление предметов из магазина в инвентарь

  var dialogHandle = setup.querySelector('.setup-user-pic');
  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();
