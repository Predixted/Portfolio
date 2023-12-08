var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

function showHome() {
    document.getElementById("header").style.display = "block";
    document.getElementById("about").style.display = "none";
    document.getElementById("images").style.display = "none";
    document.getElementById("contacts").style.display = "none";
  }
  
  function showEducation() {
    document.getElementById("header").style.display = "none";
    document.getElementById("about").style.display = "block";
    document.getElementById("images").style.display = "none";
    document.getElementById("contacts").style.display = "none";
  }
      
  function showImages() {
    document.getElementById("header").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("images").style.display = "block";
    document.getElementById("contacts").style.display = "none";
  }
      
  function showContacts() {
    document.getElementById("header").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("images").style.display = "none";
    document.getElementById("contacts").style.display = "block";
  }
      
  showHome();