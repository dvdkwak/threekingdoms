<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">

    <!-- font-family Kuali -->
    <link href="https://fonts.googleapis.com/css?family=ZCOOL+KuaiLe" rel="stylesheet">

    <!-- main styling sheet -->
    <link rel="stylesheet" href="/style/main.css">

    <!-- UI styling sheet -->
    <link rel="stylesheet" href="/style/UI.css">
  </head>
  <body>

    <div id="my_canvas_battle">
      <!-- Container within all the UI options will be placed -->
      <div class="UI_container">
        <!-- a little box top left to show current battle fase (moving/attacking/etc) -->
        <div class="UI_game_fase"><p id="UI_game_fase_text">State Name</p></div>

        <!-- for every state new UI components (other actions) -->

        <!-- Select Fase (Here you select which character you want to select) -->
        <div class="UI_select_fase active">
          <!-- div which displays the selected character -->
          <div class="selected hidden">
            <p id="username"></p>
            <input type="text" id="id" class="hidden" value="0" />
          </div>

          <!-- 4(?) possible options 1 foreach(creature) -->
          <div id="option_1" class="option hidden">
            <p id="hiddenId" style="display: none;"></p>
            <p id="username"></p>
          </div>
          <div id="option_2" class="option hidden">
            <p id="hiddenId" style="display: none;"></p>
            <p id="username"></p>
          </div>
          <div id="option_3" class="option hidden">
            <p id="hiddenId" style="display: none;"></p>
            <p id="username"></p>
          </div>
          <div id="option_4" class="option hidden">
            <p id="hiddenId" style="display: none;"></p>
            <p id="username"></p>
          </div>
        </div>
        <!-- End of Select Fase -->

        <!-- Moving Fase (maybe for in the future) -->
        <div class="UI_move_fase">
          <p id="UI_move_fase_charName">Character Name</p>
        </div>
        <!-- End of moving fase -->

      </div> <!-- end of the container -->
    </div>

    <div class="hidden-data-div">
      <p id="hidden-data-text">hidden content</p>
    </div>

    <!-- JAVASCRIPT -->

    <!-- JQuery lib -->
    <script src="/lib/jquery.min.js"></script>

    <!-- Phaser 3.15 lib -->
    <script src="/lib/phaser.min.js"></script>

    <!-- Super classes -->
    <script src="/sprites/parent/Creature.sprite.js"></script>

    <!-- Sprites -->
    <script src="/sprites/Fight/Player.sprite.js"></script>

    <!-- Scenes -->
    <script src="/scenes/Battle.scene.js"></script>

    <!-- travel phaser config file -->
    <script src="/cfg/battle.cfg.js"></script>

    <!-- Script to set visible of the options and to fill in the names -->
    <script>
      function getData(){
        let i = $("#hidden-data-text").text();
        i = i.split(",");
        console.log(i);
        return i;
      }
      setTimeout(function(){
        let data = getData();
        let amount = data.length;
        for(i = 1; i <= amount; i++){
          let text = data[i-1];
          text = text.split(":");
          $("#option_"+i+" > p#username").text(text[1]);
          $("#option_"+i+" > p#hiddenId").text(text[0]);
          $("#option_"+i).removeClass("hidden");
        }
      }, 300);
      function selectCreature(name, id){
        console.log(name);
        $(".UI_select_fase > .selected > p#username").text(name);
        $(".UI_select_fase > .selected > #id:text").val(id);
        $(".UI_select_fase > .selected").removeClass("hidden");
      }
      $("#option_1").click(function(){
        let id = $("#option_1 > p#hiddenId").text();
        let name = $("#option_1 > p#username").text();
        selectCreature(name, id);
      });
      $("#option_2").click(function(){
        let id = $("#option_2 > p#hiddenId").text();
        let name = $("#option_2 > p#username").text();
        selectCreature(name, id);
      });
      $("#option_3").click(function(){
        let id = $("#option_3 > p#hiddenId").text();
        let name = $("#option_3 > p#username").text();
        selectCreature(name, id);
      });
      $("#option_4").click(function(){
        let id = $("#option_4 > p#hiddenId").text();
        let name = $("#option_4 > p#username").text();
        selectCreature(name, id);
      });
    </script>

    <!-- centering the parent container -->
    <script src="/functions/centerVertical.function.js"></script>
    <script>
    centerVertical("my_canvas_battle");

    $(window).resize(function(){
      centerVertical("my_canvas_battle");
    });
    </script>
  </body>
</html>
