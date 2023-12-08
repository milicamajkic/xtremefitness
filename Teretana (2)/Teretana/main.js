  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let i;
    let utisci = document.getElementsByClassName("utisci");
    for (i = 0; i < utisci.length; i++) {
      utisci[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > utisci.length) {slideIndex = 1}
    utisci[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); 
  }
  $("#tezina").on("input", ()=>{
    let vrednost = $("#tezina").val();
    $("#vrednostTezine").text(vrednost);
  })
  $("#visina").on("input", ()=>{
    let vrednost = $("#visina").val();
    $("#vrednostVisine").text(vrednost);
  })
  document.getElementById("forma").addEventListener("submit", (e)=>{
    let emailVal = document.getElementsByName("Email")[0].value;
    let emailValidity = emailVal.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    alert(emailVal == "luka@l");
    if(emailVal == "luka@l"){
      let emailGreska = document.getElementById("emailGreska");
      emailGreska.innerHTML = "Email nije u korektnom formatu";

      e.preventDefault();

    }
    return true;
  })
