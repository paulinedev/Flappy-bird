     function bougerHaut(){
       $('.flappy').css('marginBottom', '300px');
     }
     function bougerBas(){
        $('.flappy').css('marginTop', '300px');
      }
      function bougerDroite(){
        $('.flappy').css('marginLeft', '300px');
      }
      function bougerGauche(){
        $('.flappy').css('marginRight', '300px');
      }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//FENETRE ALERT
  $('.flappy').on('click', 'img', function(){
    alert('Bienvenue sur le jeu !');
  });
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  $(document).keyup(function(touche){ // on écoute l'évènement keyup()
      var appui = touche.which || touche.keyCode; // le code est compatible tous navigateurs grâce à ces deux propriétés
      if(appui == 38){
          bougerHaut();
      }
  });
//BAS
  $(document).keyup(function(touche){ // on écoute l'évènement keyup()
      var appui = touche.which || touche.keyCode; // le code est compatible tous navigateurs grâce à ces deux propriétés
      if(appui == 40){
        bougerBas();
      }
  });
//DROITE
  $(document).keyup(function(touche){ // on écoute l'évènement keyup()
      var appui = touche.which || touche.keyCode; // le code est compatible tous navigateurs grâce à ces deux propriétés
      if(appui == 39){
        bougerDroite();
      }
  });
//GAUCHE
  $(document).keyup(function(touche){ // on écoute l'évènement keyup()
      var appui = touche.which || touche.keyCode; // le code est compatible tous navigateurs grâce à ces deux propriétés
      if(appui == 37){
        bougerGauche();
      }
  });
