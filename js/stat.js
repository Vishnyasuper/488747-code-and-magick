'use strict';

window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'; // black;
  ctx.strokeRect(110, 20, 420, 270);
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)'; // white;
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000'; // black;
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 30);

  var max = -1;
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramHeight = 150; // px
  var step = histogramHeight / (max - 0); // px;

  ctx.fillText('Худшее время: ' + max.toFixed(2) + 'мс у игрока ' + names[maxIndex], 120, 50);
  var barWidth = 40; // px;
  var indent = 50; // px;
  var initialX = 150; // px;
  var initialY = 230; // px;
  var marginY = 20; // px;

  ctx.textBaseline = 'top'; // положение надписи от левого верхнего угла
  for (var j = 0; j < times.length; j++) {
    if (names [j] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, +' + Math.random() + ')';
      // ctx.fillStyle = '#020E86';
    }
    ctx.fillRect(initialX + indent * j + barWidth * j, initialY + (histogramHeight - times[j]) * step, barWidth, times[j] * step);
    ctx.fillStyle = '#000';
    ctx.fillText(names[j], initialX + indent * j + barWidth * j, initialY + marginY);
    ctx.fillText(Math.round(times[j]), initialX + indent * j + barWidth * j, initialY + (histogramHeight - times[j]) * step - marginY);
  }
};
