function init () {
    
    //variable Initialization
    const noOx = document.getElementById("chooseNo");
    const yesOx = document.getElementById("chooseYes");
    const paragraphOx = document.getElementById("husbandChoice");

    const noRiel = document.getElementById("chooseNo2");
    const yesRiel= document.getElementById("chooseYes2");
    const paragraphRiel = document.getElementById("husbandChoice2");

    const noTyger = document.getElementById("chooseNo3");
    const yesTyger = document.getElementById("chooseYes3");
    const paragraphTyger = document.getElementById("husbandChoice3");

    const noAiden = document.getElementById("chooseNo4");
    const yesAiden = document.getElementById("chooseYes4");
    const paragraphAiden = document.getElementById("husbandChoice4");

    const noAzibo = document.getElementById("chooseNo5");
    const yesAzibo = document.getElementById("chooseYes5");
    const paragraphAzibo = document.getElementById("husbandChoice5");

    const noJer = document.getElementById("chooseNo6");
    const yesJer = document.getElementById("chooseYes6");
    const paragraphJer = document.getElementById("husbandChoice6");

    const noSergio = document.getElementById("chooseNo7");
    const yesSergio = document.getElementById("chooseYes7");
    const paragraphSergio = document.getElementById("husbandChoice7");

    const noCross = document.getElementById("chooseNo8");
    const yesCross = document.getElementById("chooseYes8");
    const paragraphCross = document.getElementById("husbandChoice8");

    //button 1
    function husbandDecisionOx() {
        document.getElementById("husbandChoice").innerHTML = 'He said "Yes" too!!';
          }
         yesOx.addEventListener("click", husbandDecisionOx);

    function yesButtonOx() {
        yesOx.style.background = "green";}
        yesOx.addEventListener("mouseover", yesButtonOx);

    function yesButtonDefaultOx() {
        yesOx.style.background = "";}
        yesOx.addEventListener("mouseout", yesButtonDefaultOx);
  
    function chooseNoButtonOx() {
        noOx.style.backgroundColor = "red";}
        noOx.addEventListener("mouseover", chooseNoButtonOx);

    function chooseNoDefaultOx() {
        noOx.style.backgroundColor = "";}
        noOx.addEventListener("mouseout", chooseNoDefaultOx);

    function confirmMarriageOx() {
        let response = window.confirm("Are you sure you don't want to marry him?");
        if (response) {
            paragraphOx.innerHTML = "No hard feelings! (Silently judging you)"
            }
          } 
        noOx.addEventListener("click", confirmMarriageOx);   

    //button 2
    function husbandDecisionRiel() {
        document.getElementById("husbandChoice2").innerHTML = 'You bet  he said "Yes"!';
          }
         yesRiel.addEventListener("click", husbandDecisionRiel);

    function yesButtonRiel() {
        yesRiel.style.background = "green";}
        yesRiel.addEventListener("mouseover", yesButtonRiel);

    function yesButtonDefaultRiel() {
        yesRiel.style.background = "";}
        yesRiel.addEventListener("mouseout", yesButtonDefaultRiel);
  
    function chooseNoButtonRiel() {
        noRiel.style.backgroundColor = "red";}
        noRiel.addEventListener("mouseover",chooseNoButtonRiel);

    function chooseNoDefaultRiel() {
        noRiel.style.backgroundColor = "";}
        noRiel.addEventListener("mouseout", chooseNoDefaultRiel);

    function confirmMarriageRiel() {
        let response = window.confirm("Are you sure you don't want to marry him?");
        if (response) {
            paragraphRiel.innerHTML = 'If he made you ramen would you say "Yes"?'
            }
          } 
        noRiel.addEventListener("click", confirmMarriageRiel);   

    //button 3
    function husbandDecisionTyger() {
        paragraphTyger.innerHTML = 'He said "Yes", Sugar Mama!';
          }
         yesTyger.addEventListener("click", husbandDecisionTyger);

    function yesButtonTyger() {
        yesTyger.style.background = "green";}
        yesTyger.addEventListener("mouseover", yesButtonTyger);

    function yesButtonDefaultTyger() {
        yesTyger.style.background = "";}
        yesTyger.addEventListener("mouseout", yesButtonDefaultTyger);
  
    function chooseNoButtonTyger() {
        noTyger.style.backgroundColor = "red";}
        noTyger.addEventListener("mouseover",chooseNoButtonTyger);

    function chooseNoDefaultTyger() {
        noTyger.style.backgroundColor = "";}
        noTyger.addEventListener("mouseout", chooseNoDefaultTyger);

    function confirmMarriageTyger() {
        let response = window.confirm("Are you sure you don't want to marry him?");
        if (response) {
            paragraphTyger.innerHTML = 'You will say "yes" when he makes you a custom cake.';            
          }
        } 
        noTyger.addEventListener("click", confirmMarriageTyger);  
        
     //button 4    
    function husbandDecisionAiden() {
        paragraphAiden.innerHTML = 'He said "Yes" for you!';
          }
         yesAiden.addEventListener("click", husbandDecisionAiden);

    function yesButtonAiden() {
        yesAiden.style.background = "green";}
        yesAiden.addEventListener("mouseover", yesButtonAiden);

    function yesButtonDefaultAiden  () {
        yesAiden.style.background = "";}
        yesAiden.addEventListener("mouseout", yesButtonDefaultAiden);
  
    function chooseNoButtonAiden() {
        noAiden.style.backgroundColor = "red";}
        noAiden.addEventListener("mouseover",chooseNoButtonAiden);

    function chooseNoDefaultAiden() {
        noAiden.style.backgroundColor = "";}
        noAiden.addEventListener("mouseout", chooseNoDefaultAiden);

    function confirmMarriageAiden() {
        let response = window.confirm("Are you sure you don't want to marry him?");
        if (response) {
            paragraphAiden.innerHTML = 'Bet he could talk you into it...';            
          }
        } 
        noAiden.addEventListener("click", confirmMarriageAiden);   

   //button 5  
    function husbandDecisionAzibo() {
        paragraphAzibo.innerHTML = 'He said "Yes, please!"';
          }
         yesAzibo.addEventListener("click", husbandDecisionAzibo);

    function yesButtonAzibo() {
        yesAzibo.style.background = "green";}
        yesAzibo.addEventListener("mouseover", yesButtonAzibo);

    function yesButtonDefaultAzibo() {
        yesAzibo.style.background = "";}
        yesAzibo.addEventListener("mouseout", yesButtonDefaultAzibo);
  
    function chooseNoButtonAzibo() {
        noAzibo.style.backgroundColor = "red";}
        noAzibo.addEventListener("mouseover",chooseNoButtonAzibo);

    function chooseNoDefaultAzibo() {
        noAzibo.style.backgroundColor = "";}
        noAzibo.addEventListener("mouseout", chooseNoDefaultAzibo);

    function confirmMarriageAzibo() {
        let response = window.confirm("Are you sure you don't want to marry him?");
        if (response) {
            paragraphAzibo.innerHTML = '*SNIFF* Okay, you just made him cry.  Rude.';            
          }
        } 
        noAzibo.addEventListener("click", confirmMarriageAzibo);   

    //button 6
    function husbandDecisionJer() {
        paragraphJer.innerHTML = 'He said "You are the X to my Y".  That means "YES"!';
          }
         yesJer.addEventListener("click", husbandDecisionJer);

    function yesButtonJer() {
        yesJer.style.background = "green";}
        yesJer.addEventListener("mouseover", yesButtonJer);

    function yesButtonDefaultJer() {
        yesJer.style.background = "";}
        yesJer.addEventListener("mouseout", yesButtonDefaultJer);
  
    function chooseNoButtonJer() {
        noJer.style.backgroundColor = "red";}
        noJer.addEventListener("mouseover",chooseNoButtonJer);

    function chooseNoDefaultJer() {
        noJer.style.backgroundColor = "";}
        noJer.addEventListener("mouseout", chooseNoDefaultJer);

    function confirmMarriageJer() {
        let response = window.confirm("Are you sure you don't want to marry him?");
        if (response) {
            paragraphJer.innerHTML = 'You are missing out on some serious Chemistry here.';            
          }
        } 
        noJer.addEventListener("click", confirmMarriageJer);  

    //button 7
    function husbandDecisionSergio() {
        paragraphSergio.innerHTML = 'He said "Yes, Lass"!';
          }
         yesSergio.addEventListener("click", husbandDecisionSergio);

    function yesButtonSergio() {
        yesSergio.style.background = "green";}
        yesSergio.addEventListener("mouseover", yesButtonSergio);

    function yesButtonDefaultSergio() {
        yesSergio.style.background = "";}
        yesSergio.addEventListener("mouseout", yesButtonDefaultSergio);
  
    function chooseNoButtonSergio() {
        noSergio.style.backgroundColor = "red";}
        noSergio.addEventListener("mouseover",chooseNoButtonSergio);

    function chooseNoDefaultSergio() {
        noSergio.style.backgroundColor = "";}
        noSergio.addEventListener("mouseout", chooseNoDefaultSergio);

    function confirmMarriageSergio() {
        let response = window.confirm("Are you sure you don't want to marry him?");
        if (response) {
            paragraphSergio.innerHTML = 'How DARE you break his heart!';            
          }
        } 
        noSergio.addEventListener("click", confirmMarriageSergio);

    //button 8
    function husbandDecisionCross() {
        paragraphCross.innerHTML = 'He said "Pick when and where, my pet."';
          }
         yesCross.addEventListener("click", husbandDecisionCross);

    function yesButtonCross() {
        yesCross.style.background = "green";}
        yesCross.addEventListener("mouseover", yesButtonCross);

    function yesButtonDefaultCross() {
        yesCross.style.background = "";}
        yesCross.addEventListener("mouseout", yesButtonDefaultCross);
  
    function chooseNoButtonCross() {
        noCross.style.backgroundColor = "red";}
        noCross.addEventListener("mouseover",chooseNoButtonCross);

    function chooseNoDefaultCross() {
        noCross.style.backgroundColor = "";}
        noCross.addEventListener("mouseout", chooseNoDefaultCross);

    function confirmMarriageCross() {
        let response = window.confirm("Are you sure you don't want to marry him?");
        if (response) {
            paragraphCross.innerHTML = "You'll be back.  He has an eternity to wait.";            
          }
        } 
        noCross.addEventListener("click", confirmMarriageCross);
}

window.addEventListener("load", init);