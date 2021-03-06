      // Human Selection Choices 
      var playerSelection, computerPlay;

      document.getElementById("hselectrock").addEventListener("click", humanChoice1);
      document.getElementById("hselectpaper").addEventListener("click", humanChoice2);
      document.getElementById("hselectsissors").addEventListener("click", humanChoice3);


      function humanChoice1() {
          document.getElementById("h_choice").innerHTML = "Rock";
          document.getElementById("h_imgchoice").src = "images/rock.png";
          document.getElementById("h_imgchoice").style.display = "inline";
          playerSelection = "Rock";
          computerSelection = computerPlay();
          game();
      }

      function humanChoice2() {
          document.getElementById("h_choice").innerHTML = "Paper";
          document.getElementById("h_imgchoice").src = "images/paper.png";
          document.getElementById("h_imgchoice").style.display = "inline";
          playerSelection = "Paper";
          computerSelection = computerPlay();
          game();
      }

      function humanChoice3() {
          document.getElementById("h_choice").innerHTML = "Sissors";
          document.getElementById("h_imgchoice").src = "images/sissors.png";
          document.getElementById("h_imgchoice").style.display = "inline";
          playerSelection = "Sissors";
          computerSelection = computerPlay();
          game();
      }


      function computerPlay() {
          let x, y;

          function getRndInteger(min, max) {
              return Math.floor(Math.random() * (max - min + 1)) + min;
          }
          x = getRndInteger(1, 3);


          switch (x) {
              case 1:
                  y = "Rock";
                  document.getElementById("c_choice").innerHTML = "Rock";
                  document.getElementById("c_imgchoice").src = "images/rock.png";
                  document.getElementById("c_imgchoice").style.display = "inline";
                  break;


              case 2:
                  y = "Paper";
                  document.getElementById("c_choice").innerHTML = "Paper";
                  document.getElementById("c_imgchoice").src = "images/paper.png";
                  document.getElementById("c_imgchoice").style.display = "inline";
                  break;

              case 3:
                  y = "Sissors";
                  document.getElementById("c_choice").innerHTML = "Sissors";
                  document.getElementById("c_imgchoice").src = "images/sissors.png";
                  document.getElementById("c_imgchoice").style.display = "inline";
                  break;

              default:
                  y = "None";

          }

          return y;

      }

      function playRound(playerSelection, computerSelection) {
          let result;
          if (playerSelection == "Rock" && computerSelection == "Rock") {
              result = "Draw";

          } else if (playerSelection == "Rock" && computerSelection == "Paper") {
              result = "CPU Wins & Player Loses";
              addccounter();
          } else if (playerSelection == "Rock" && computerSelection == "Sissors") {
              result = "CPU Loses & Player Wins";

              addhcounter();
          } else if (playerSelection == "Paper" && computerSelection == "Rock") {
              result = "CPU Loses & Player Wins";
              addhcounter();
          } else if (playerSelection == "Paper" && computerSelection == "Paper") {
              result = "Draw";

          } else if (playerSelection == "Paper" && computerSelection == "Sissors") {
              result = "CPU Wins & Player Loses";
              addccounter();

          } else if (playerSelection == "Sissors" && computerSelection == "Rock") {
              result = "CPU Wins & Player Loses";
              addccounter();

          } else if (playerSelection == "Sissors" && computerSelection == "Paper") {
              result = "CPU Loses & Player Wins";

              addhcounter();
          } else if (playerSelection == "Sissors" && computerSelection == "Sissors") {
              result = "Draw";

          }

          document.getElementById("roundresult").innerHTML = result;
      }

      var addccounter = (function() {
          var ccounter = 0;
          return function() {
              ccounter += 1;
              document.getElementById("cscore").innerHTML = ccounter;
              if (ccounter == 5) {
                  window.alert("Game Over! CPU Won");
                  location.reload();
              }
          }
      })();

      var addhcounter = (function() {
          var hcounter = 0;
          return function() {
              hcounter += 1;
              document.getElementById("hscore").innerHTML = hcounter;
              if (hcounter == 5) {
                  window.alert("Game Over! Player Won");
                  location.reload();
              }

          }
      })();


      function game() {
          playRound(playerSelection, computerSelection);
      }