<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="/style/main.css">
  </head>
  <body>

    <div id="my_canvas_travel"></div>

    <!-- JQuery lib -->
    <script src="/lib/jquery.min.js"></script>

    <!-- Phaser 3.15 lib -->
    <script src="/lib/phaser.min.js"></script>

    <!-- Sprites -->
    <script src="/sprites/Explore/Player.sprite.js"></script>

    <!-- Scenes -->
    <script src="/scenes/World1.scene.js"></script>

    <!-- travel phaser config file -->
    <script src="/cfg/travel.cfg.js"></script>

    <!-- centering the parent container -->
    <script src="/functions/centerVertical.function.js"></script>
    <script>
    centerVertical("my_canvas_travel");

    $(window).resize(function(){
      centerVertical("my_canvas_travel");
    });
    </script>
  </body>
</html>
