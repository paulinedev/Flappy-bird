     // function bougerHaut(){
     //   $('.flappy').css('marginBottom', '300px');
     // }
     // function bougerBas(){
     //    $('.flappy').css('marginTop', '300px');
     //  }
     //  function bougerDroite(){
     //    $('.flappy').css('marginLeft', '300px');
     //  }
     //  function bougerGauche(){
     //    $('.flappy').css('marginRight', '300px');
     //  }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//FENETRE ALERT
  $('.flappy').click(function() {
    alert('Bienvenue');
    $(".pipe").animate({marginRight: "+=500px"}, "slow");
  });
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  function animeSaut(){
  // $(".flappy").click(function()){
    $(".flappy").animate({marginBottom: "+=100px"});
  }
// }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//PIPE
  $(".pipe").animate({marginRight: "550px"}, speed=2000, "swing");
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//TOUT
  $(document).keydown(function(elem){ // on écoute l'évènement keyup()
      var appui = elem.keyCode; // le code est compatible tous navigateurs grâce à ces deux propriétés
      //BAS
      if(appui == 40){
      $(".flappy").animate({marginTop: "+=100px"});
      }
      //HAUT
      else if(appui == 38){
          animeSaut();
      }
      //DROITE
      else if(appui == 39){
      $(".flappy").animate({marginLeft: "+=100px"});
      }
      //GAUCHE
      else if(appui == 37){
        $(".flappy").animate({marginRight: "+=100px"});
      };
  });

  //boucle +300 a chaque fois que la fonction bouge, la faire bouger 2x
//HAUT
  // $(document).keyup(function(touche){ // on écoute l'évènement keyup()
  //     var appui = touche.which || touche.keyCode; // le code est compatible tous navigateurs grâce à ces deux propriétés
  //     if(appui == 38){
  //       animeSaut();
  //         //bougerHaut(300);
  //       //  $(".flappy").animate({marginBottom: "+=300px"});
  //     }
  // });
//BAS
  // $(document).keyup(function(touche){ // on écoute l'évènement keyup()
  //     var appui = touche.which || touche.keyCode; // le code est compatible tous navigateurs grâce à ces deux propriétés
  //     if(appui == 40){
  //       //bougerBas(300);
  //     $(".flappy").animate({marginTop: "+=100px"});
  //     }
  // });
//DROITE
//   $(document).keyup(function(touche){ // on écoute l'évènement keyup()
//       var appui = touche.which || touche.keyCode; // le code est compatible tous navigateurs grâce à ces deux propriétés
//       if(appui == 39){
//       //  bougerDroite(300);
//       $(".flappy").animate({marginLeft: "+=100px"});
//       }
//   });
// //GAUCHE
//   $(document).keyup(function(touche){ // on écoute l'évènement keyup()
//       var appui = touche.which || touche.keyCode; // le code est compatible tous navigateurs grâce à ces deux propriétés
//       if(appui == 37){
//         //  bougerGauche(300);
//         $(".flappy").animate({marginRight: "+=100px"});
//       }
//   });

  // var obj = {
  //   'type' : 'click',
  //   'KeyCode' : 'keydown()',
  // };
  //
  // $(document).keydown(function(elem){
  //   console.log(elem.keyCode);
  // });

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// DEFILEMENT RANDOM
// for (var i = 0; i < 100; i++) {
//   setInterval(genererObstacle, 1000);
//   // genererObstacle();
// };
var i = 0;
//créer un booleen à l'exterieur de la fonction

function genererObstacle(){

  //CREER UNE HAUTEUR ALEATOIRE
  var nbr = Math.random() * 1000;
  var arr = Math.round(nbr);
  if (arr < 600){
    arr = arr + 250;
  };
  console.log(arr);

  i++;
  // CREER UN NOUVEAU PIPE
  var nomID = 'pipe' + i;
  console.log(nomID);


  //PIPE
  if (i%2 == 0) {
    $("#cadre").append("<img class='pipe obstacleBas' id='" + nomID + "'src='pipe.png' />");
    $("#"+ nomID).css('padding-top', arr);
  } else {
    $("#cadre").append("<img class='pipe obstacleHaut' id='" + nomID + "'src='pipe.png' />");
    $("#"+ nomID).css('padding-bottom', arr);
  };
  $("#"+ nomID).animate({marginRight: "550px"}, speed=2000, "linear");

  // var tuyeau = document.getElementById('nomID');
  // tuyeau.addEventListener("click", modifieHauteur, false);
  // function modifieHauteur(){
  //   var elem = document.getElementById('nomID');
  //   elem.style.marginBottom = arr;
  // };
};

  setInterval(genererObstacle, 1000);


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
