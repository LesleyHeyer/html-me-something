function init () {
    const noButton = document.getElementById("chooseNo");
    const button = document.getElementById("chooseYes");
    const paragraph = document.getElementById("husbandChoice");

    function husbandDecision() {
        document.getElementById("husbandChoice").innerHTML = 'He said "Yes" too!!';
          }
         button.addEventListener("click", husbandDecision);

    function yesButton() {
        button.style.background = "green";}
        button.addEventListener("mouseover", yesButton);

    function yesButtonDefault() {
        button.style.background = "";}
        button.addEventListener("mouseout", yesButtonDefault);
  
    function chooseNoButton() {
        noButton.style.backgroundColor = "red";}
        noButton.addEventListener("mouseover", chooseNoButton);

    function chooseNoDefault() {
        noButton.style.backgroundColor = "";}
        noButton.addEventListener("mouseout", chooseNoDefault);

    function confirmMarriage() {
        let response = window.confirm("Are you sure you don't want to marry him?");
        if (response) {
            paragraph.innerHTML = "No hard feelings! (Silently judging you)"
            }
          } 
        noButton.addEventListener("click", confirmMarriage);   

}

window.addEventListener("load", init);