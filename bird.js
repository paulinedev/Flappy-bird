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
    $(".pipe").animate({marginRight: "500px"}, "slow");
  });
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  function animeSaut(){
  // $(".flappy").click(function()){
    $(".flappy").animate({marginBottom: "+=100px"});
  }
// }

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
//TOUT
  $(document).keydown(function(elem){ // on écoute l'évènement keyup()
      var appui = elem.which || elem.keyCode; // le code est compatible tous navigateurs grâce à ces deux propriétés
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
      }
  });

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//DEFILEMENT RANDOM
//tant que flappy n'a pas toucher un PIPE faire tourner la fonction
//pour i = infinie creer des pipe -> stocker dans un array et appelé par un id
//mettre des valeurs randoms pour la position
function genererObstacle(){
  for (var i=1; i<6; i++) {
    console.log(i);
}
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
