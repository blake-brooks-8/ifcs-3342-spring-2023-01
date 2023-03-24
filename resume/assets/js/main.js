window.onload = (event) => {

  let menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach(element => {
    element.addEventListener("click", function(){
      let allActive = document.querySelectorAll(".active");
      allActive.forEach(element => {
        element.classList.remove("active");
      });
      this.classList.add("active");
    });
  });

  console.log("boobs");

  console.log('The page has fully loaded');
};