(function () {

  var splash = {
    changeBackground: function () {
      var background = document.getElementById('carousel');
      background.style.backgroundImage = "url(\'./assets/" + splash.photoNum + ".jpeg\')";
      splash.updatePhotoNum();
    },

    updatePhotoNum: function () {
      if (splash.photoNum === 7) {
        splash.photoNum = 1;
      } else {
        splash.photoNum += 1;
      }
    }
  };
  splash.photoNum = 2;
  setInterval(splash.changeBackground, 9000);
})();
