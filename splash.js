(function () {

  var splash = {
    changeBackground: function () {
      debugger
      var background = document.getElementById('container');
      background.style.backgroundImage = "url(\'./assets/" + splash.photoNum + ".jpeg\')";
      splash.updatePhotoNum();
    },

    updatePhotoNum: function () {
      debugger
      if (splash.photoNum === 7) {
        splash.photoNum = 1;
      } else {
        splash.photoNum += 1;
      }
    }
  };
  splash.photoNum = 1;
  setInterval(splash.changeBackground, 7000);

})();
