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

  ctx.fillText('Ура вы победили!', 120, 40);

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

  ctx.fillText('Худшее время: ' + max.toFixed(2) + 'мс у игрока ' + names[maxIndex], 120, 60);
  var barWidth = 40; // px;
  var indent = 50; // px;
  var initialX = 150; // px;
  var initialY = 80; // px;

  ctx.textBaseline = 'top'; // положение надписи от левого верхнего угла
  for (var i = 0; i < times.length; i++) {

    ctx.fillRect(initialX + indent * i + barWidth * i, initialY, barWidth, times[i] * step);
    if (names[i] = 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = '#020E86';
    }
    // ctx.rotate(1.5 * Math.PI);
    // ctx.translate(-150, 25);
    ctx.fillText(names[i], initialX + indent * i + barWidth * i, initialY + histogramHeight);
  }
};
