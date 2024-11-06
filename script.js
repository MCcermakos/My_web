let scrollButton = document.getElementById("scrollBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "flex";
  } else {
    scrollButton.style.display = "none";
  }

  var bottomDistance = document.body.scrollHeight - window.innerHeight;
  var scrollDistanceFromBottom = bottomDistance - window.scrollY;

  if (scrollDistanceFromBottom < 100 && scrollDistanceFromBottom >= 0&&window.innerWidth<500) {
    scrollButton.classList.add("odsazeniSrlBtn");
  } else {
    scrollButton.classList.remove("odsazeniSrlBtn"); 
  }
};

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}